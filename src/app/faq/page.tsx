import Layout from "@/components/ServerLayout";
import { HelpCircle, Shield, Zap, Globe, FileText, Users } from "lucide-react";

export default function FAQ() {
  return (
    <Layout
      title="FAQ - Frequently Asked Questions - PDF Tools Hub"
      description="Find answers to common questions about PDF Tools Hub. Learn about our tools, privacy, security, and how to use our PDF editing features."
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-700 mb-4">
            Find answers to the most common questions about PDF Tools Hub. 
            If you don&apos;t see your question here, feel free to 
            <a href="/contact" className="text-blue-600 hover:text-blue-800 underline"> contact us</a>.
          </p>
        </div>

        {/* General Questions */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
            General Questions
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is PDF Tools Hub?</h3>
              <p className="text-gray-700">
                PDF Tools Hub is a free, secure, and user-friendly platform that provides essential PDF manipulation tools. 
                We offer tools to merge, split, compress, and rotate PDF files without requiring registration or compromising your privacy.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are your tools really free?</h3>
              <p className="text-gray-700">
                Yes, all our PDF tools are completely free to use with no hidden costs, premium tiers, or limitations. 
                We believe PDF editing should be accessible to everyone.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to create an account?</h3>
              <p className="text-gray-700">
                No account required! You can use all our tools immediately without registration or providing any personal information. 
                Just visit our website and start using the tools right away.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What browsers are supported?</h3>
              <p className="text-gray-700">
                Our tools work on all modern browsers including Chrome, Firefox, Safari, and Edge. 
                We recommend using the latest version of your browser for the best performance and compatibility.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="h-8 w-8 text-green-600 mr-3" />
            Privacy & Security
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you store my PDF files?</h3>
              <p className="text-gray-700">
                No, we never store your PDF files. All processing happens in your browser using client-side JavaScript, 
                so your files never leave your device. This ensures complete privacy and security.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data safe?</h3>
              <p className="text-gray-700">
                Yes, your data is completely safe. Since we don&apos;t collect, store, or process any personal information or file data, 
                there&apos;s no risk of data breaches or unauthorized access to your documents.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you track my usage?</h3>
              <p className="text-gray-700">
                We don&apos;t track your usage or collect analytics data. We use only essential cookies necessary for basic website functionality. 
                Your browsing activity on our site is not monitored or recorded.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What about the ads?</h3>
              <p className="text-gray-700">
                We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to this site 
                and other sites. You can opt out of personalized advertising by visiting Google&apos;s Ad Settings.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Questions */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="h-8 w-8 text-yellow-600 mr-3" />
            Technical Questions
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a file size limit?</h3>
              <p className="text-gray-700">
                File size limits depend on your browser&apos;s memory capacity. Generally, files up to 100MB work well, 
                but very large files may cause performance issues or browser crashes. We recommend testing with smaller files first.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How many files can I process at once?</h3>
              <p className="text-gray-700">
                For merging, you can upload up to 20 PDF files at once. For other tools like split, compress, and rotate, 
                you process one file at a time. This helps ensure optimal performance and prevents browser crashes.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if a tool doesn&apos;t work?</h3>
              <p className="text-gray-700">
                If a tool isn&apos;t working, try refreshing the page, clearing your browser cache, or using a different browser. 
                Make sure you&apos;re using a modern browser with JavaScript enabled. If problems persist, please contact us.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you support password-protected PDFs?</h3>
              <p className="text-gray-700">
                Currently, our tools don&apos;t support password-protected PDFs. You&apos;ll need to remove the password protection 
                using another tool before using our services. This is a limitation we&apos;re working to address.
              </p>
            </div>
          </div>
        </div>

        {/* Tool-Specific Questions */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="h-8 w-8 text-red-600 mr-3" />
            Tool-Specific Questions
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I merge PDF files?</h3>
              <p className="text-gray-700">
                Upload multiple PDF files (up to 20), arrange them in your preferred order using the up/down arrows, 
                then click &quot;Merge PDFs&quot;. Your merged file will be ready for download instantly.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I split PDFs by page ranges?</h3>
              <p className="text-gray-700">
                Yes! You can split PDFs by specific page ranges (e.g., pages 1-10, 15-20) or split into individual pages. 
                You can create multiple ranges and process them all at once.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What compression levels are available?</h3>
              <p className="text-gray-700">
                We offer three compression levels: Low (10-20% reduction, best quality), Medium (30-50% reduction, balanced), 
                and High (50-70% reduction, smallest file size). Choose based on your quality vs. size preferences.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I rotate individual pages?</h3>
              <p className="text-gray-700">
                Yes! You can rotate all pages at once or customize individual page rotations. Choose from 90° clockwise, 
                180°, 90° counter-clockwise, or no rotation for each page.
              </p>
            </div>
          </div>
        </div>

        {/* Performance & Quality */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="h-8 w-8 text-teal-600 mr-3" />
            Performance & Quality
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How fast are your tools?</h3>
              <p className="text-gray-700">
                Our tools are very fast since all processing happens in your browser. Processing time depends on file size and complexity, 
                but most operations complete in seconds. Large files may take longer.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you preserve PDF quality?</h3>
              <p className="text-gray-700">
                Yes, we preserve the original quality and formatting of your documents. Our tools maintain professional standards 
                and don&apos;t degrade the content unless you specifically choose compression.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if processing takes too long?</h3>
              <p className="text-gray-700">
                If processing seems stuck, try refreshing the page and processing again. Very large files or complex documents 
                may take several minutes. Keep your browser tab open during processing.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I process multiple files simultaneously?</h3>
              <p className="text-gray-700">
                For merging, you can process multiple files at once. For other operations, you process one file at a time 
                to ensure optimal performance and prevent browser crashes.
              </p>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="h-8 w-8 text-indigo-600 mr-3" />
            Troubleshooting
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The tool isn&apos;t working. What should I do?</h3>
              <p className="text-gray-700">
                Try these steps: 1) Refresh the page, 2) Clear your browser cache, 3) Disable browser extensions temporarily, 
                4) Try a different browser, 5) Check if JavaScript is enabled. If problems persist, contact us with details.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">I&apos;m getting an error message. What does it mean?</h3>
              <p className="text-gray-700">
                Error messages usually indicate file issues (corrupted PDF, password-protected, or unsupported format) 
                or browser limitations. Try with a different file or browser. Contact us if you need help interpreting the error.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">My browser crashes when processing large files.</h3>
              <p className="text-gray-700">
                Large files can cause browser crashes due to memory limitations. Try processing smaller files or use a browser 
                with more available memory. Close other tabs to free up resources.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The download doesn&apos;t start automatically.</h3>
              <p className="text-gray-700">
                Some browsers block automatic downloads. Check your browser&apos;s download settings and allow downloads from our site. 
                You can also try right-clicking the download button and selecting &quot;Save link as&quot;.
              </p>
            </div>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              If you didn&apos;t find the answer to your question in this FAQ, we&apos;re here to help! 
              Please don&apos;t hesitate to reach out to us.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Contact Us</h3>
              <p className="text-blue-800 mb-4">
                For additional support, questions, or feedback, please visit our 
                <a href="/contact" className="text-blue-600 hover:text-blue-800 underline"> contact page</a>.
              </p>
              <p className="text-blue-700 text-sm">
                We typically respond to inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
