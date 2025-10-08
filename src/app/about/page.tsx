import Layout from "@/components/ServerLayout";
import { FileText, Shield, Zap, Globe, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <Layout
      title="About PDF Tools Hub - Free Online PDF Tools"
      description="Learn about PDF Tools Hub, our mission to provide free, secure, and easy-to-use PDF tools. No registration required, all processing happens in your browser."
    >
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About PDF Tools Hub</h1>
          <p className="text-xl text-gray-700 mb-8">
            PDF Tools Hub is a free, secure, and user-friendly platform that provides essential PDF manipulation tools 
            without requiring registration or compromising your privacy. Our mission is to make PDF editing accessible 
            to everyone, everywhere.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We believe that PDF manipulation should be simple, secure, and accessible to everyone. In a world where 
              document management is increasingly important, we provide the tools you need without the complexity, 
              costs, or privacy concerns of traditional software.
            </p>
            <p className="mb-6">
              Our platform is built on the principles of privacy-first design, where your documents never leave 
              your device. Every PDF operation happens entirely in your browser, ensuring complete security and 
              peace of mind.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose PDF Tools Hub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Secure</h3>
              <p className="text-gray-700">
                All PDF processing happens in your browser. No files are uploaded to our servers, 
                ensuring complete privacy and security.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-700">
                Process your PDFs instantly with our optimized tools. No waiting times, 
                no server queues, just immediate results.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Registration</h3>
              <p className="text-gray-700">
                Use all our tools immediately without creating an account. 
                No personal information required, no strings attached.
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Quality</h3>
              <p className="text-gray-700">
                Preserve the original quality and formatting of your documents. 
                Our tools maintain professional standards.
              </p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Friendly</h3>
              <p className="text-gray-700">
                Intuitive interface designed for users of all technical levels. 
                Drag, drop, and process with ease.
              </p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Always Free</h3>
              <p className="text-gray-700">
                All our tools are completely free to use. No hidden costs, 
                no premium tiers, no limitations.
              </p>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our PDF Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Merge PDF</h3>
              <p className="text-gray-700 mb-4">
                Combine multiple PDF files into a single document. Upload up to 20 files and arrange them 
                in your preferred order before merging.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Support for up to 20 PDF files</li>
                <li>• Drag and drop reordering</li>
                <li>• Preserves original quality</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Split PDF</h3>
              <p className="text-gray-700 mb-4">
                Extract specific pages or split your PDF into multiple files. Choose page ranges 
                or split into individual pages.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Split by page ranges</li>
                <li>• Split into individual pages</li>
                <li>• Batch processing support</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compress PDF</h3>
              <p className="text-gray-700 mb-4">
                Reduce PDF file size without losing quality. Choose from three compression levels 
                to optimize your documents.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Three compression levels</li>
                <li>• Size reduction statistics</li>
                <li>• Quality preservation</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rotate PDF</h3>
              <p className="text-gray-700 mb-4">
                Rotate PDF pages in any direction. Rotate all pages at once or customize 
                individual page rotations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rotate all pages</li>
                <li>• Individual page rotation</li>
                <li>• Multiple rotation angles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology & Privacy</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              PDF Tools Hub is built using modern web technologies to ensure the best possible user experience 
              while maintaining the highest standards of privacy and security.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Side Processing</h3>
            <p className="mb-6">
              All PDF operations are performed entirely in your browser using advanced JavaScript libraries. 
              This means your files never leave your device, ensuring complete privacy and security.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Data Collection</h3>
            <p className="mb-6">
              We don&apos;t collect, store, or process any personal information or file data. Your documents 
              remain completely private and secure throughout the entire process.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Web Standards</h3>
            <p className="mb-6">
              Our platform is built using the latest web technologies, ensuring compatibility across 
              all modern browsers and devices while providing optimal performance.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We&apos;re always looking to improve our tools and add new features. If you have suggestions, 
              feedback, or questions, we&apos;d love to hear from you.
            </p>
            <p className="mb-6">
              Whether you&apos;re experiencing issues with our tools, have ideas for new features, or simply 
              want to share your success stories, we&apos;re here to help.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Contact Information</h3>
              <p className="text-blue-800">
                For support, feedback, or general inquiries, please visit our 
                <a href="/contact" className="text-blue-600 hover:text-blue-800 underline"> contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
