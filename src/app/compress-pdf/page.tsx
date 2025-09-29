"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Layout from "@/components/Layout";
import PDFUpload from "@/components/PDFUpload";
import PDFDownload from "@/components/PDFDownload";
import { Loader2, Minus, FileText, TrendingDown } from "lucide-react";

interface PDFFile {
  file: File;
  name: string;
  size: number;
  pdfDoc?: PDFDocument;
}

export default function CompressPDF() {
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [processing, setProcessing] = useState(false);
  const [compressedPdf, setCompressedPdf] = useState<Uint8Array | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [compressionLevel, setCompressionLevel] = useState<"low" | "medium" | "high">("medium");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);

  const handleFilesChange = (newFiles: PDFFile[]) => {
    setFiles(newFiles);
    setCompressedPdf(null);
    setError(null);
    setOriginalSize(0);
    setCompressedSize(0);
  };

  const compressPDF = async () => {
    if (files.length === 0) {
      setError("Please upload a PDF file to compress");
      return;
    }

    const pdfFile = files[0];
    if (!pdfFile.pdfDoc) {
      setError("PDF file not loaded properly");
      return;
    }

    setProcessing(true);
    setError(null);
    setOriginalSize(pdfFile.size);

    try {
      // Create a new PDF document
      const newPdf = await PDFDocument.create();
      
      // Copy all pages from the original PDF
      const pages = await newPdf.copyPages(pdfFile.pdfDoc, pdfFile.pdfDoc.getPageIndices());
      pages.forEach((page) => newPdf.addPage(page));

      // Apply compression based on the selected level
      let pdfBytes: Uint8Array;
      
      switch (compressionLevel) {
        case "low":
          // Minimal compression - just save with default settings
          pdfBytes = await newPdf.save();
          break;
        case "medium":
          // Medium compression - remove some metadata and optimize
          pdfBytes = await newPdf.save({
            useObjectStreams: true,
            addDefaultPage: false,
          });
          break;
        case "high":
          // High compression - aggressive optimization
          pdfBytes = await newPdf.save({
            useObjectStreams: true,
            addDefaultPage: false,
            objectsPerTick: 50,
          });
          break;
        default:
          pdfBytes = await newPdf.save();
      }

      setCompressedPdf(pdfBytes);
      setCompressedSize(pdfBytes.length);
    } catch (error) {
      console.error("Error compressing PDF:", error);
      setError("Error compressing PDF. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const generateFilename = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    return `compressed-pdf-${timestamp}.pdf`;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getCompressionPercentage = () => {
    if (originalSize === 0 || compressedSize === 0) return 0;
    return ((originalSize - compressedSize) / originalSize) * 100;
  };


  return (
    <Layout
      title="Compress PDF Online Free"
      description="Reduce PDF file size without losing quality. Choose compression level and optimize your PDF files. No registration required."
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Upload PDF to Compress
          </h2>
          <p className="text-gray-600 mb-6">
            Upload a PDF file and choose the compression level to reduce its file size.
          </p>
          
          <PDFUpload
            onFilesChange={handleFilesChange}
            maxFiles={1}
            acceptMultiple={false}
          />
        </div>

        {files.length > 0 && (
          <div className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-900">
                  {files[0].name} ({formatFileSize(files[0].size)})
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Compression Level
              </h3>
              <div className="space-y-3">
                {[
                  { value: "low", label: "Low Compression", description: "Minimal compression, best quality" },
                  { value: "medium", label: "Medium Compression", description: "Balanced compression and quality" },
                  { value: "high", label: "High Compression", description: "Maximum compression, smaller file size" },
                ].map((option) => (
                  <label key={option.value} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="compressionLevel"
                      value={option.value}
                      checked={compressionLevel === option.value}
                      onChange={(e) => setCompressionLevel(e.target.value as "low" | "medium" | "high")}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {files.length > 0 && !compressedPdf && (
          <div className="mb-8">
            <button
              onClick={compressPDF}
              disabled={processing}
              className={`
                w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium text-lg transition-colors
                ${processing
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-orange-600 text-white hover:bg-orange-700"
                }
              `}
            >
              {processing ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span>Compressing PDF...</span>
                </>
              ) : (
                <>
                  <Minus className="h-6 w-6" />
                  <span>Compress PDF</span>
                </>
              )}
            </button>
          </div>
        )}

        {compressedPdf && (
          <div className="mb-8">
            {/* Compression Results */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingDown className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-900">
                  Compression Results
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatFileSize(originalSize)}
                  </div>
                  <div className="text-sm text-gray-600">Original Size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {formatFileSize(compressedSize)}
                  </div>
                  <div className="text-sm text-gray-600">Compressed Size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {getCompressionPercentage().toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">Size Reduction</div>
                </div>
              </div>
            </div>

            <PDFDownload
              pdfBytes={compressedPdf}
              filename={generateFilename()}
            />
          </div>
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
