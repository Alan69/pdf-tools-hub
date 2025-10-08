"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Layout from "@/components/Layout";
import PDFUpload from "@/components/PDFUpload";
import PDFDownload from "@/components/PDFDownload";
import { Loader2, ArrowUpDown, FileText } from "lucide-react";

interface PDFFile {
  file: File;
  name: string;
  size: number;
  pdfDoc?: PDFDocument;
}

export default function MergePDF() {
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [processing, setProcessing] = useState(false);
  const [mergedPdf, setMergedPdf] = useState<Uint8Array | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesChange = (newFiles: PDFFile[]) => {
    setFiles(newFiles);
    setMergedPdf(null);
    setError(null);
  };

  const moveFile = (fromIndex: number, toIndex: number) => {
    const newFiles = [...files];
    const [movedFile] = newFiles.splice(fromIndex, 1);
    newFiles.splice(toIndex, 0, movedFile);
    setFiles(newFiles);
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      setError("Please upload at least 2 PDF files to merge");
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const mergedPdfDoc = await PDFDocument.create();

      for (const pdfFile of files) {
        if (pdfFile.pdfDoc) {
          const pages = await mergedPdfDoc.copyPages(pdfFile.pdfDoc, pdfFile.pdfDoc.getPageIndices());
          pages.forEach((page) => mergedPdfDoc.addPage(page));
        }
      }

      const pdfBytes = await mergedPdfDoc.save();
      setMergedPdf(pdfBytes);
    } catch (error) {
      console.error("Error merging PDFs:", error);
      setError("Error merging PDFs. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const generateFilename = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    return `merged-pdf-${timestamp}.pdf`;
  };

  return (
    <Layout
      title="Merge PDF Online Free"
      description="Combine multiple PDF files into one document instantly. No registration required. Secure and fast PDF merging tool."
    >
      <div className="space-y-8">
        {/* Introduction Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Merge PDF Files Online</h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              Combine multiple PDF documents into a single file quickly and securely. Our free PDF merger tool allows you to upload up to 20 PDF files and arrange them in your preferred order before merging.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Use Our PDF Merger?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>100% Secure:</strong> All processing happens in your browser - no files are uploaded to our servers</li>
              <li><strong>No Registration Required:</strong> Start merging PDFs immediately without creating an account</li>
              <li><strong>Drag & Drop Interface:</strong> Easy file upload with intuitive drag-and-drop functionality</li>
              <li><strong>Reorder Pages:</strong> Arrange your PDFs in any order before merging</li>
              <li><strong>High Quality Output:</strong> Preserves original quality and formatting of your documents</li>
              <li><strong>Fast Processing:</strong> Merge large PDF files in seconds</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Merge PDF Files</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Upload Files:</strong> Click &quot;Choose Files&quot; or drag and drop your PDF files onto the upload area</li>
              <li><strong>Arrange Order:</strong> Use the up/down arrows to reorder your files as needed</li>
              <li><strong>Merge:</strong> Click the &quot;Merge PDFs&quot; button to combine all files</li>
              <li><strong>Download:</strong> Your merged PDF will be ready for download instantly</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Business Documents</h3>
                <p className="text-blue-800 text-sm">Combine contracts, reports, and presentations into a single professional document.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Academic Papers</h3>
                <p className="text-green-800 text-sm">Merge research papers, essays, and reference materials for submission.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Legal Documents</h3>
                <p className="text-purple-800 text-sm">Combine court filings, contracts, and supporting documents.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Personal Files</h3>
                <p className="text-orange-800 text-sm">Merge scanned photos, receipts, and personal documents for organization.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Best Results</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Ensure all files are valid PDF documents before uploading</li>
              <li>Check the file order before merging to avoid reorganizing later</li>
              <li>Large files may take longer to process - please be patient</li>
              <li>For best quality, avoid merging heavily compressed PDFs</li>
              <li>Keep your browser tab open during the merging process</li>
            </ul>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Upload PDF Files to Merge
          </h2>
          <p className="text-gray-600 mb-6">
            Select multiple PDF files and arrange them in the order you want them merged.
          </p>
          
          <PDFUpload
            onFilesChange={handleFilesChange}
            maxFiles={20}
            acceptMultiple={true}
          />
        </div>

        {files.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Files to Merge ({files.length})
            </h3>
            <div className="space-y-3">
              {files.map((pdfFile, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <FileText className="h-6 w-6 text-red-500" />
                    <div>
                      <p className="font-medium text-gray-900">{pdfFile.name}</p>
                      <p className="text-sm text-gray-500">
                        {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {index > 0 && (
                      <button
                        onClick={() => moveFile(index, index - 1)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="Move up"
                      >
                        <ArrowUpDown className="h-4 w-4 rotate-180" />
                      </button>
                    )}
                    {index < files.length - 1 && (
                      <button
                        onClick={() => moveFile(index, index + 1)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="Move down"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {files.length >= 2 && !mergedPdf && (
          <div className="mb-8">
            <button
              onClick={mergePDFs}
              disabled={processing}
              className={`
                w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium text-lg transition-colors
                ${processing
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                }
              `}
            >
              {processing ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span>Merging PDFs...</span>
                </>
              ) : (
                <span>Merge PDFs</span>
              )}
            </button>
          </div>
        )}

        {mergedPdf && (
          <PDFDownload
            pdfBytes={mergedPdf}
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
