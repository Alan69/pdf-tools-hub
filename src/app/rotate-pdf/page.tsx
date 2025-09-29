"use client";

import { useState } from "react";
import { PDFDocument, degrees } from "pdf-lib";
import Layout from "@/components/Layout";
import PDFUpload from "@/components/PDFUpload";
import PDFDownload from "@/components/PDFDownload";
import { Loader2, RotateCcw, FileText, RotateCw } from "lucide-react";

interface PDFFile {
  file: File;
  name: string;
  size: number;
  pdfDoc?: PDFDocument;
}

interface PageRotation {
  pageIndex: number;
  rotation: number;
}

export default function RotatePDF() {
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [processing, setProcessing] = useState(false);
  const [rotatedPdf, setRotatedPdf] = useState<Uint8Array | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pageRotations, setPageRotations] = useState<PageRotation[]>([]);
  const [rotationMode, setRotationMode] = useState<"all" | "individual">("all");
  const [globalRotation, setGlobalRotation] = useState(0);

  const handleFilesChange = (newFiles: PDFFile[]) => {
    setFiles(newFiles);
    setRotatedPdf(null);
    setError(null);
    setPageRotations([]);
    
    // Initialize page rotations
    if (newFiles.length > 0 && newFiles[0].pdfDoc) {
      const totalPages = newFiles[0].pdfDoc.getPageCount();
      const rotations: PageRotation[] = [];
      for (let i = 0; i < totalPages; i++) {
        rotations.push({ pageIndex: i, rotation: 0 });
      }
      setPageRotations(rotations);
    }
  };

  const updatePageRotation = (pageIndex: number, rotation: number) => {
    setPageRotations(
      pageRotations.map((pr) =>
        pr.pageIndex === pageIndex ? { ...pr, rotation } : pr
      )
    );
  };

  const rotatePDF = async () => {
    if (files.length === 0) {
      setError("Please upload a PDF file to rotate");
      return;
    }

    const pdfFile = files[0];
    if (!pdfFile.pdfDoc) {
      setError("PDF file not loaded properly");
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const newPdf = await PDFDocument.create();
      const pages = await newPdf.copyPages(pdfFile.pdfDoc, pdfFile.pdfDoc.getPageIndices());

      pages.forEach((page, index) => {
        newPdf.addPage(page);
        const currentPage = newPdf.getPage(index);
        
        if (rotationMode === "all") {
          currentPage.setRotation(degrees(globalRotation));
        } else {
          const pageRotation = pageRotations.find(pr => pr.pageIndex === index);
          if (pageRotation) {
            currentPage.setRotation(degrees(pageRotation.rotation));
          }
        }
      });

      const pdfBytes = await newPdf.save();
      setRotatedPdf(pdfBytes);
    } catch (error) {
      console.error("Error rotating PDF:", error);
      setError("Error rotating PDF. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const generateFilename = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    return `rotated-pdf-${timestamp}.pdf`;
  };

  const totalPages = files.length > 0 && files[0].pdfDoc ? files[0].pdfDoc.getPageCount() : 0;


  return (
    <Layout
      title="Rotate PDF Online Free"
      description="Rotate PDF pages in any direction. Rotate all pages or individual pages. No registration required. Secure PDF rotation tool."
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Upload PDF to Rotate
          </h2>
          <p className="text-gray-600 mb-6">
            Upload a PDF file and choose how you want to rotate the pages.
          </p>
          
          <PDFUpload
            onFilesChange={handleFilesChange}
            maxFiles={1}
            acceptMultiple={false}
          />
        </div>

        {files.length > 0 && totalPages > 0 && (
          <div className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-900">
                  {files[0].name} ({totalPages} pages)
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rotation Options
              </h3>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="rotationMode"
                      value="all"
                      checked={rotationMode === "all"}
                      onChange={(e) => setRotationMode(e.target.value as "all" | "individual")}
                      className="mr-3 h-4 w-4 text-blue-600"
                    />
                    <span className="text-gray-900 font-medium">Rotate all pages</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="rotationMode"
                      value="individual"
                      checked={rotationMode === "individual"}
                      onChange={(e) => setRotationMode(e.target.value as "all" | "individual")}
                      className="mr-3 h-4 w-4 text-blue-600"
                    />
                    <span className="text-gray-900 font-medium">Rotate individual pages</span>
                  </label>
                </div>
              </div>
            </div>

            {rotationMode === "all" && (
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-4">Rotate All Pages</h4>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setGlobalRotation(90)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors font-medium ${
                      globalRotation === 90
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <RotateCw className="h-4 w-4" />
                    <span>90° Clockwise</span>
                  </button>
                  <button
                    onClick={() => setGlobalRotation(180)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors font-medium ${
                      globalRotation === 180
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>180°</span>
                  </button>
                  <button
                    onClick={() => setGlobalRotation(270)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors font-medium ${
                      globalRotation === 270
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>90° Counter-clockwise</span>
                  </button>
                  <button
                    onClick={() => setGlobalRotation(0)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors font-medium ${
                      globalRotation === 0
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span>No rotation</span>
                  </button>
                </div>
              </div>
            )}

            {rotationMode === "individual" && (
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-4">Rotate Individual Pages</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pageRotations.map((pageRotation) => (
                    <div key={pageRotation.pageIndex} className="p-4 bg-gray-50 rounded-lg border">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-gray-900">
                          Page {pageRotation.pageIndex + 1}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => updatePageRotation(pageRotation.pageIndex, 90)}
                          className={`flex-1 px-3 py-2 text-xs rounded border transition-colors font-medium ${
                            pageRotation.rotation === 90
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          90°
                        </button>
                        <button
                          onClick={() => updatePageRotation(pageRotation.pageIndex, 180)}
                          className={`flex-1 px-3 py-2 text-xs rounded border transition-colors font-medium ${
                            pageRotation.rotation === 180
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          180°
                        </button>
                        <button
                          onClick={() => updatePageRotation(pageRotation.pageIndex, 270)}
                          className={`flex-1 px-3 py-2 text-xs rounded border transition-colors font-medium ${
                            pageRotation.rotation === 270
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          270°
                        </button>
                        <button
                          onClick={() => updatePageRotation(pageRotation.pageIndex, 0)}
                          className={`flex-1 px-3 py-2 text-xs rounded border transition-colors font-medium ${
                            pageRotation.rotation === 0
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          0°
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {files.length > 0 && !rotatedPdf && (
          <div className="mb-8">
            <button
              onClick={rotatePDF}
              disabled={processing}
              className={`
                w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium text-lg transition-colors
                ${processing
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
                }
              `}
            >
              {processing ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span>Rotating PDF...</span>
                </>
              ) : (
                <>
                  <RotateCcw className="h-6 w-6" />
                  <span>Rotate PDF</span>
                </>
              )}
            </button>
          </div>
        )}

        {rotatedPdf && (
          <PDFDownload
            pdfBytes={rotatedPdf}
            filename={generateFilename()}
          />
        )}

        {/* AdSense Slot */}
        <div className="mt-8 text-center">
          <div className="mx-auto max-w-2xl">
            <ins className="adsbygoogle"
                 style={{display: 'block'}}
                 data-ad-client="ca-pub-6354681495028216"
                 data-ad-slot="3909950379"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>
        </div>
      </div>
    </Layout>
  );
}
