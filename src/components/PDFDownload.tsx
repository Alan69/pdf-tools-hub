"use client";

import { useState } from "react";
import { Download, Loader2, CheckCircle } from "lucide-react";

interface PDFDownloadProps {
  pdfBytes: Uint8Array;
  filename: string;
  className?: string;
}

export default function PDFDownload({
  pdfBytes,
  filename,
  className = "",
}: PDFDownloadProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    
    try {
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);
      setDownloaded(true);
      
      // Reset the downloaded state after 3 seconds
      setTimeout(() => setDownloaded(false), 3000);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Error downloading PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-green-900">
              PDF Ready for Download
            </h3>
            <p className="text-sm text-green-700">
              File size: {formatFileSize(pdfBytes.length)}
            </p>
          </div>
        </div>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className={`
            flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors
            ${downloading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : downloaded
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
            }
          `}
        >
          {downloading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Downloading...</span>
            </>
          ) : downloaded ? (
            <>
              <CheckCircle className="h-5 w-5" />
              <span>Downloaded!</span>
            </>
          ) : (
            <>
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
