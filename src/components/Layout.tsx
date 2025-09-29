"use client";

import Link from "next/link";
import { FileText } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">PDF Tools Hub</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/merge-pdf" className="text-gray-600 hover:text-gray-900 font-medium">
                Merge PDF
              </Link>
              <Link href="/split-pdf" className="text-gray-600 hover:text-gray-900 font-medium">
                Split PDF
              </Link>
              <Link href="/rotate-pdf" className="text-gray-600 hover:text-gray-900 font-medium">
                Rotate PDF
              </Link>
              <Link href="/compress-pdf" className="text-gray-600 hover:text-gray-900 font-medium">
                Compress PDF
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* AdSense Banner */}
        <div className="mb-8 text-center">
          <div className="mx-auto max-w-2xl">
            <ins className="adsbygoogle"
                 style={{display: 'block'}}
                 data-ad-client="ca-pub-6354681495028216"
                 data-ad-slot="3909950379"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>
        </div>

        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-400" />
                <h3 className="ml-2 text-xl font-bold">PDF Tools Hub</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Free online PDF tools to merge, split, rotate, and compress PDF files. 
                No registration required. All processing happens securely in your browser.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/merge-pdf" className="hover:text-white transition-colors">Merge PDF</Link></li>
                <li><Link href="/split-pdf" className="hover:text-white transition-colors">Split PDF</Link></li>
                <li><Link href="/rotate-pdf" className="hover:text-white transition-colors">Rotate PDF</Link></li>
                <li><Link href="/compress-pdf" className="hover:text-white transition-colors">Compress PDF</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PDF Tools Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
