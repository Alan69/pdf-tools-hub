import Layout from "@/components/ServerLayout";

export default function Terms() {
  return (
    <Layout
      title="Terms of Service - PDF Tools Hub"
      description="Read our terms of service for PDF Tools Hub. Learn about acceptable use, limitations, and user responsibilities when using our free PDF tools."
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-700 mb-4">
            Last updated: January 2025
          </p>
          <p className="text-lg text-gray-700">
            These Terms of Service (&quot;Terms&quot;) govern your use of PDF Tools Hub (&quot;Service&quot;) operated by us. 
            By using our Service, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              By accessing and using PDF Tools Hub, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Notice</h3>
              <p className="text-blue-800">
                These terms are designed to protect both you and us while ensuring the continued availability 
                of our free PDF tools for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Description of Service */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Description of Service</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              PDF Tools Hub provides free online tools for PDF manipulation including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Merging multiple PDF files into one document</li>
              <li>Splitting PDF files by page ranges or individual pages</li>
              <li>Compressing PDF files to reduce file size</li>
              <li>Rotating PDF pages in various directions</li>
            </ul>
            <p className="mb-6">
              All processing occurs in your browser using client-side JavaScript. No files are uploaded to our servers.
            </p>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Acceptable Use</h3>
              <p className="text-gray-700">
                You agree to use our Service only for lawful purposes and in accordance with these Terms. 
                You may not use the Service in any way that could damage, disable, overburden, or impair our Service.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">File Ownership</h3>
              <p className="text-gray-700">
                You must own the rights to any PDF files you process using our Service or have proper authorization 
                from the copyright holder. You are solely responsible for ensuring you have the right to modify the files.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prohibited Uses</h3>
              <p className="text-gray-700">
                You may not use our Service to process copyrighted material without permission, 
                distribute malware, or engage in any illegal activities. Commercial use is permitted but subject to these Terms.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy and Data */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy and Data</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We are committed to protecting your privacy. Our Service is designed with privacy as a core principle:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">No File Storage</h3>
                <p className="text-green-800">
                  Your PDF files are never uploaded to our servers. All processing happens in your browser.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">No Data Collection</h3>
                <p className="text-blue-800">
                  We don&apos;t collect personal information or track your usage of our tools.
                </p>
              </div>
            </div>
            <p className="mb-6">
              For more detailed information about our privacy practices, please review our 
              <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline"> Privacy Policy</a>.
            </p>
          </div>
        </div>

        {/* Service Availability */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We strive to maintain high availability of our Service, but we cannot guarantee uninterrupted access. 
              The Service may be temporarily unavailable due to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Scheduled maintenance</li>
              <li>Technical difficulties</li>
              <li>Server issues</li>
              <li>Force majeure events</li>
            </ul>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">No Guarantees</h3>
              <p className="text-yellow-800">
                While we work to provide reliable service, we cannot guarantee 100% uptime or that the Service 
                will always be available when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Limitations and Disclaimers */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitations and Disclaimers</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Warranties</h3>
              <p className="text-gray-700">
              The Service is provided &quot;as is&quot; without any warranties, express or implied. We do not warrant that 
              the Service will be error-free, uninterrupted, or meet your specific requirements.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
              <p className="text-gray-700">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of the Service.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">File Processing Risks</h3>
              <p className="text-gray-700">
                While we strive to preserve file quality, there is always a risk that processing may affect your files. 
                We recommend keeping backups of important documents before processing.
              </p>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The Service and its original content, features, and functionality are owned by PDF Tools Hub and are 
              protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="mb-6">
              You retain ownership of any PDF files you process using our Service. We do not claim any rights to your content.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Respect for Copyright</h3>
              <p className="text-blue-800">
                You are responsible for ensuring you have the right to process any files you use with our Service. 
                We respect intellectual property rights and expect our users to do the same.
              </p>
            </div>
          </div>
        </div>

        {/* Modifications */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Modifications</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We reserve the right to modify or discontinue the Service (or any part thereof) temporarily or permanently 
              with or without notice. We may also modify these Terms at any time.
            </p>
            <p className="mb-6">
              Changes to these Terms will be posted on this page with an updated revision date. Your continued use of the Service 
              after any such changes constitutes your acceptance of the new Terms.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We may terminate or suspend your access to our Service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-6">
              Since we don&apos;t collect personal information, termination primarily means restricting access to our Service 
              for users who violate these Terms.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which PDF Tools Hub operates, 
              without regard to its conflict of law provisions.
            </p>
            <p className="mb-6">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              If you have any questions about these Terms of Service, please 
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline"> contact us</a>.
            </p>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Questions or Concerns?</h3>
              <p className="text-green-800">
                We&apos;re committed to transparency and are happy to clarify any aspect of these Terms. 
                Your understanding and compliance help us maintain a safe and useful service for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
