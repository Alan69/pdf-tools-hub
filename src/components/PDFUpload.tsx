"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileText, X, Loader2 } from "lucide-react";
import { PDFDocument } from "pdf-lib";

interface PDFFile {
  file: File;
  name: string;
  size: number;
  pdfDoc?: PDFDocument;
}

interface PDFUploadProps {
  onFilesChange: (files: PDFFile[]) => void;
  maxFiles?: number;
  acceptMultiple?: boolean;
  className?: string;
}

export default function PDFUpload({
  onFilesChange,
  maxFiles = 10,
  acceptMultiple = true,
  className = "",
}: PDFUploadProps) {
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!acceptMultiple && acceptedFiles.length > 1) {
        alert("Please select only one file");
        return;
      }

      if (files.length + acceptedFiles.length > maxFiles) {
        alert(`Maximum ${maxFiles} files allowed`);
        return;
      }

      setLoading(true);
      const newFiles: PDFFile[] = [];

      for (const file of acceptedFiles) {
        if (file.type !== "application/pdf") {
          alert(`${file.name} is not a PDF file`);
          continue;
        }

        try {
          const arrayBuffer = await file.arrayBuffer();
          const pdfDoc = await PDFDocument.load(arrayBuffer);
          
          newFiles.push({
            file,
            name: file.name,
            size: file.size,
            pdfDoc,
          });
        } catch (error) {
          console.error(`Error loading PDF ${file.name}:`, error);
          alert(`Error loading PDF ${file.name}. Please make sure it's a valid PDF file.`);
        }
      }

      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onFilesChange(updatedFiles);
      setLoading(false);
    },
    [files, maxFiles, acceptMultiple, onFilesChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: acceptMultiple,
  });

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className={className}>
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400"
          }
          ${loading ? "pointer-events-none opacity-50" : ""}
        `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center">
          {loading ? (
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
          ) : (
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
          )}
          <p className="text-lg font-medium text-gray-700 mb-2">
            {loading
              ? "Processing PDFs..."
              : isDragActive
              ? "Drop PDF files here"
              : "Drag & drop PDF files here, or click to select"}
          </p>
          <p className="text-sm text-gray-500">
            {acceptMultiple
              ? `Up to ${maxFiles} PDF files (max 50MB each)`
              : "Single PDF file (max 50MB)"}
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="text-lg font-medium text-gray-900">
            Uploaded Files ({files.length})
          </h3>
          {files.map((pdfFile, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border"
            >
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-red-500" />
                <div>
                  <p className="font-medium text-gray-900">{pdfFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {formatFileSize(pdfFile.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                title="Remove file"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
