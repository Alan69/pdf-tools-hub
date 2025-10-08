"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Layout from "@/components/Layout";
import PDFUpload from "@/components/PDFUpload";
import PDFDownload from "@/components/PDFDownload";
import { Loader2, Scissors, FileText, Plus, X } from "lucide-react";

interface PDFFile {
  file: File;
  name: string;
  size: number;
  pdfDoc?: PDFDocument;
}

interface PageRange {
  start: number;
  end: number;
  id: string;
}

export default function SplitPDF() {
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [processing, setProcessing] = useState(false);
  const [splitPdfs, setSplitPdfs] = useState<{ name: string; bytes: Uint8Array }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [pageRanges, setPageRanges] = useState<PageRange[]>([]);
  const [splitMode, setSplitMode] = useState<"range" | "individual">("range");

  const handleFilesChange = (newFiles: PDFFile[]) => {
    setFiles(newFiles);
    setSplitPdfs([]);
    setError(null);
    setPageRanges([]);
  };

  const addPageRange = () => {
    const newRange: PageRange = {
      start: 1,
      end: 1,
      id: Date.now().toString(),
    };
    setPageRanges([...pageRanges, newRange]);
  };

  const removePageRange = (id: string) => {
    setPageRanges(pageRanges.filter((range) => range.id !== id));
  };

  const updatePageRange = (id: string, field: "start" | "end", value: number) => {
    setPageRanges(
      pageRanges.map((range) => {
        if (range.id !== id) return range;
        
        let newValue = value;

        // Ensure value is at least 1
        if (newValue < 1) {
          newValue = 1;
        }

        // Ensure value does not exceed totalPages
        if (totalPages > 0 && newValue > totalPages) {
          newValue = totalPages;
        }

        // If updating 'start', ensure it doesn't exceed 'end'
        if (field === "start" && newValue > range.end) {
          newValue = range.end;
        }
        // If updating 'end', ensure it's not less than 'start'
        if (field === "end" && newValue < range.start) {
          newValue = range.start;
        }

        return { ...range, [field]: newValue };
      })
    );
  };

  const splitPDF = async () => {
    if (files.length === 0) {
      setError("Please upload a PDF file to split");
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
      const totalPages = pdfFile.pdfDoc.getPageCount();
      const results: { name: string; bytes: Uint8Array }[] = [];

      if (splitMode === "individual") {
        // Split into individual pages
        for (let i = 0; i < totalPages; i++) {
          const newPdf = await PDFDocument.create();
          const [page] = await newPdf.copyPages(pdfFile.pdfDoc, [i]);
          newPdf.addPage(page);
          const pdfBytes = await newPdf.save();
          results.push({
            name: `${pdfFile.name.replace('.pdf', '')}_page_${i + 1}.pdf`,
            bytes: pdfBytes,
          });
        }
      } else {
        // Split by page ranges
        if (pageRanges.length === 0) {
          setError("Please add at least one page range");
          setProcessing(false);
          return;
        }

        for (const range of pageRanges) {
          if (range.start < 1 || range.end > totalPages || range.start > range.end) {
            setError(`Invalid page range: ${range.start}-${range.end}. PDF has ${totalPages} pages.`);
            setProcessing(false);
            return;
          }

          const newPdf = await PDFDocument.create();
          const pageIndices = Array.from(
            { length: range.end - range.start + 1 },
            (_, i) => range.start - 1 + i
          );
          const pages = await newPdf.copyPages(pdfFile.pdfDoc, pageIndices);
          pages.forEach((page) => newPdf.addPage(page));
          const pdfBytes = await newPdf.save();
          results.push({
            name: `${pdfFile.name.replace('.pdf', '')}_pages_${range.start}-${range.end}.pdf`,
            bytes: pdfBytes,
          });
        }
      }

      setSplitPdfs(results);
    } catch (error) {
      console.error("Error splitting PDF:", error);
      setError("Error splitting PDF. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const downloadAll = async () => {
    for (const splitPdf of splitPdfs) {
      const blob = new Blob([splitPdf.bytes as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = splitPdf.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const totalPages = files.length > 0 && files[0].pdfDoc ? files[0].pdfDoc.getPageCount() : 0;

  return (
    <Layout
      title="Split PDF Online Free"
      description="Extract pages or split PDF into multiple files. Choose specific page ranges or split into individual pages. No registration required."
    >
      <div className="space-y-8">
        {/* Introduction Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Split PDF Files Online</h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              Extract specific pages or split your PDF document into multiple files. Our free PDF splitter tool offers flexible options to separate pages by ranges or split into individual pages.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Use Our PDF Splitter?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Precise Control:</strong> Choose exact page ranges or split into individual pages</li>
              <li><strong>Batch Processing:</strong> Split multiple page ranges simultaneously</li>
              <li><strong>Secure Processing:</strong> All operations happen in your browser - no server uploads</li>
              <li><strong>No Registration:</strong> Start splitting PDFs immediately without creating an account</li>
              <li><strong>High Quality:</strong> Preserves original formatting and quality</li>
              <li><strong>Fast Results:</strong> Process large PDFs in seconds</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Split PDF Files</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Upload PDF:</strong> Select your PDF file using the upload area</li>
              <li><strong>Choose Split Method:</strong> Select &quot;Split by page ranges&quot; or &quot;Split into individual pages&quot;</li>
              <li><strong>Set Ranges:</strong> For ranges, add specific page ranges (e.g., 1-5, 10-15)</li>
              <li><strong>Split:</strong> Click &quot;Split PDF&quot; to process your document</li>
              <li><strong>Download:</strong> Download individual files or all at once</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Split Options Explained</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Split by Page Ranges</h3>
                <p className="text-blue-800 mb-3">Perfect for extracting specific sections or chapters from a document.</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Extract pages 1-10 for introduction</li>
                  <li>• Get pages 50-75 for specific chapter</li>
                  <li>• Create multiple ranges in one operation</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">Split into Individual Pages</h3>
                <p className="text-green-800 mb-3">Ideal for creating separate files for each page.</p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Extract single pages for presentations</li>
                  <li>• Create individual image files</li>
                  <li>• Separate pages for different purposes</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Academic Research</h3>
                <p className="text-purple-800 text-sm">Extract specific chapters or sections from research papers and textbooks.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Business Documents</h3>
                <p className="text-orange-800 text-sm">Separate contracts, invoices, and reports from combined documents.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">Legal Files</h3>
                <p className="text-red-800 text-sm">Extract specific pages from court documents and legal briefs.</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-900 mb-2">Personal Organization</h3>
                <p className="text-teal-800 text-sm">Split scanned documents, receipts, and personal papers for better organization.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Best Results</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Check the total page count before setting ranges</li>
              <li>Use individual page splitting for maximum flexibility</li>
              <li>Verify page ranges don&apos;t exceed the total page count</li>
              <li>Large files may take longer to process - please be patient</li>
              <li>Keep your browser tab open during the splitting process</li>
            </ul>
          </div>
        </div>

        {/* Tool Interface */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Upload PDF to Split
          </h2>
          <p className="text-gray-600 mb-6">
            Upload a PDF file and choose how you want to split it.
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
                Split Options
              </h3>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="splitMode"
                      value="range"
                      checked={splitMode === "range"}
                      onChange={(e) => setSplitMode(e.target.value as "range" | "individual")}
                      className="mr-3 h-4 w-4 text-green-600"
                    />
                    <span className="text-gray-900 font-medium">Split by page ranges</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="splitMode"
                      value="individual"
                      checked={splitMode === "individual"}
                      onChange={(e) => setSplitMode(e.target.value as "range" | "individual")}
                      className="mr-3 h-4 w-4 text-green-600"
                    />
                    <span className="text-gray-900 font-medium">Split into individual pages</span>
                  </label>
                </div>
              </div>
            </div>

            {splitMode === "range" && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">Page Ranges</h4>
                  <button
                    onClick={addPageRange}
                    className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Range</span>
                  </button>
                </div>
                <div className="space-y-3">
                  {pageRanges.map((range) => (
                    <div key={range.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-900">Pages</span>
                      <input
                        type="number"
                        min="1"
                        max={totalPages}
                        value={range.start}
                        onChange={(e) => updatePageRange(range.id, "start", parseInt(e.target.value) || 1)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm text-gray-900 font-medium"
                      />
                      <span className="text-sm text-gray-700">to</span>
                      <input
                        type="number"
                        min="1"
                        max={totalPages}
                        value={range.end}
                        onChange={(e) => updatePageRange(range.id, "end", parseInt(e.target.value) || 1)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm text-gray-900 font-medium"
                      />
                      <span className="text-sm text-gray-700">of {totalPages}</span>
                      <button
                        onClick={() => removePageRange(range.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
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

        {files.length > 0 && !splitPdfs.length && (
          <div className="mb-8">
            <button
              onClick={splitPDF}
              disabled={processing}
              className={`
                w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium text-lg transition-colors
                ${processing
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700"
                }
              `}
            >
              {processing ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span>Splitting PDF...</span>
                </>
              ) : (
                <>
                  <Scissors className="h-6 w-6" />
                  <span>Split PDF</span>
                </>
              )}
            </button>
          </div>
        )}

        {splitPdfs.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Split Files ({splitPdfs.length})
              </h3>
              <button
                onClick={downloadAll}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Scissors className="h-4 w-4" />
                <span>Download All</span>
              </button>
            </div>
            <div className="space-y-3">
              {splitPdfs.map((splitPdf, index) => (
                <PDFDownload
                  key={index}
                  pdfBytes={splitPdf.bytes}
                  filename={splitPdf.name}
                />
              ))}
            </div>
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
