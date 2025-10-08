import Link from "next/link";
import { FileText, Scissors, RotateCcw, Minus, Shield, Zap, Globe } from "lucide-react";

const tools = [
  {
    title: "Merge PDF",
    description: "Combine multiple PDF files into one document",
    icon: FileText,
    href: "/merge-pdf",
    color: "bg-blue-500",
  },
  {
    title: "Split PDF",
    description: "Extract pages or split PDF into multiple files",
    icon: Scissors,
    href: "/split-pdf",
    color: "bg-green-500",
  },
  {
    title: "Rotate PDF",
    description: "Rotate PDF pages in any direction",
    icon: RotateCcw,
    href: "/rotate-pdf",
    color: "bg-purple-500",
  },
  {
    title: "Compress PDF",
    description: "Reduce PDF file size without losing quality",
    icon: Minus,
    href: "/compress-pdf",
    color: "bg-orange-500",
  },
];

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "All processing happens in your browser. No files are uploaded to our servers.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process your PDFs instantly with our optimized tools.",
  },
  {
    icon: Globe,
    title: "No Registration",
    description: "Use all tools for free without creating an account.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">PDF Tools Hub</h1>
            </div>
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
              <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900 font-medium">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Free Online PDF Tools
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Merge, split, rotate, and compress PDF files instantly. No registration required. 
            All processing happens securely in your browser.
          </p>
        </div>

        {/* AdSense Banner - Top */}
        <div className="mb-12 text-center">
          <div className="mx-auto max-w-4xl">
            <ins className="adsbygoogle"
                 style={{display: 'block'}}
                 data-ad-client="ca-pub-6354681495028216"
                 data-ad-slot="3909950379"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200"
              >
                <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose PDF Tools Hub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PDF Tools Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Essential PDF Tools for Everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Merge PDF Files</h3>
                  <p className="text-gray-600 text-sm">
                    Combine multiple PDF documents into one file. Perfect for creating comprehensive reports, 
                    merging contracts, or organizing related documents. Upload up to 20 files and arrange them in your preferred order.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Split PDF Documents</h3>
                  <p className="text-gray-600 text-sm">
                    Extract specific pages or split PDFs into multiple files. Choose page ranges or split into individual pages. 
                    Ideal for extracting chapters, separating invoices, or creating individual documents from large files.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Compress PDF Files</h3>
                  <p className="text-gray-600 text-sm">
                    Reduce file size without losing quality. Choose from three compression levels to optimize your documents 
                    for email attachments, web uploads, or storage. See exact size reduction percentages.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rotate PDF Pages</h3>
                  <p className="text-gray-600 text-sm">
                    Fix scanned documents or adjust page orientation. Rotate all pages at once or customize individual page rotations. 
                    Perfect for correcting documents scanned upside down or sideways.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect for:</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Business Professionals</h4>
                  <p className="text-blue-800 text-sm">Merge contracts, compress reports for email, split large documents for easier sharing.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Students & Academics</h4>
                  <p className="text-green-800 text-sm">Combine research papers, extract specific chapters, optimize files for submission.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Legal Professionals</h4>
                  <p className="text-purple-800 text-sm">Merge court documents, split case files, compress briefs for filing.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Personal Use</h4>
                  <p className="text-orange-800 text-sm">Organize scanned documents, compress photos, rotate pages for better viewing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AdSense Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Choose Your Tool</h3>
                    <p className="text-gray-600">Select from merge, split, rotate, or compress PDF tools.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Upload Your PDF</h3>
                    <p className="text-gray-600">Drag and drop or select your PDF files securely in your browser.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Process & Download</h3>
                    <p className="text-gray-600">Your PDF is processed instantly and ready for download.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ins className="adsbygoogle"
                   style={{display: 'block'}}
                   data-ad-client="ca-pub-6354681495028216"
                   data-ad-slot="3909950379"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>
          </div>
        </div>
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
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
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
