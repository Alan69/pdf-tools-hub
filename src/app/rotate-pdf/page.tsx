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
      <div className="space-y-8">
        {/* Introduction Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Rotate PDF Pages Online</h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              Rotate PDF pages in any direction quickly and securely. Our free PDF rotation tool allows you to rotate all pages at once or customize individual page rotations.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Rotate PDF Pages?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Fix Scanned Documents:</strong> Correct pages that were scanned upside down or sideways</li>
              <li><strong>Improve Readability:</strong> Rotate pages to the correct orientation for better viewing</li>
              <li><strong>Professional Presentation:</strong> Ensure all pages are properly oriented before sharing</li>
              <li><strong>Print Preparation:</strong> Rotate pages for proper printing orientation</li>
              <li><strong>Mobile Viewing:</strong> Optimize PDF orientation for mobile device viewing</li>
              <li><strong>Document Organization:</strong> Standardize page orientations across multiple documents</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rotation Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Rotate All Pages</h3>
                <p className="text-blue-800 mb-3">Apply the same rotation to every page in the document.</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• 90° Clockwise rotation</li>
                  <li>• 180° rotation (upside down)</li>
                  <li>• 90° Counter-clockwise rotation</li>
                  <li>• Perfect for uniform corrections</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">Rotate Individual Pages</h3>
                <p className="text-green-800 mb-3">Customize rotation for each page separately.</p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Different rotation per page</li>
                  <li>• Mix of orientations</li>
                  <li>• Selective page correction</li>
                  <li>• Maximum flexibility</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Rotate PDF Pages</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Upload PDF:</strong> Select your PDF file using the upload area</li>
              <li><strong>Choose Rotation Mode:</strong> Select &quot;Rotate all pages&quot; or &quot;Rotate individual pages&quot;</li>
              <li><strong>Set Rotation:</strong> Choose the rotation angle (90°, 180°, 270°, or 0°)</li>
              <li><strong>Apply Rotation:</strong> Click &quot;Rotate PDF&quot; to process your document</li>
              <li><strong>Download:</strong> Download your rotated PDF file</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Scanned Documents</h3>
                <p className="text-purple-800 text-sm">Fix pages that were scanned in the wrong orientation.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Mobile Scans</h3>
                <p className="text-orange-800 text-sm">Correct documents scanned with mobile devices.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">Presentation Prep</h3>
                <p className="text-red-800 text-sm">Ensure all pages are properly oriented for presentations.</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-900 mb-2">Print Optimization</h3>
                <p className="text-teal-800 text-sm">Rotate pages for proper printing orientation.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Best Results</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use &quot;Rotate all pages&quot; for documents with consistent orientation issues</li>
              <li>Use &quot;Rotate individual pages&quot; for mixed orientation documents</li>
              <li>90° clockwise rotation is most common for scanned documents</li>
              <li>180° rotation flips pages upside down</li>
              <li>270° rotation is equivalent to 90° counter-clockwise</li>
              <li>Preview the results before downloading to ensure correct orientation</li>
            </ul>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="bg-white rounded-xl shadow-lg p-8">
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
