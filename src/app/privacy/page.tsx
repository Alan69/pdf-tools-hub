import Layout from "@/components/ServerLayout";
import { Shield, Eye, Lock } from "lucide-react";

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy - PDF Tools Hub"
      description="Our privacy policy explains how PDF Tools Hub protects your data and privacy. Learn about our commitment to client-side processing and data security."
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-700 mb-4">
            Last updated: January 2025
          </p>
          <p className="text-lg text-gray-700">
            At PDF Tools Hub, we are committed to protecting your privacy and ensuring the security of your data. 
            This privacy policy explains how we handle information when you use our services.
          </p>
        </div>

        {/* Key Principles */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Privacy Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No File Uploads</h3>
              <p className="text-gray-700">
                Your PDF files never leave your device. All processing happens in your browser.
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Data Collection</h3>
              <p className="text-gray-700">
                We don&apos;t collect, store, or process any personal information or file data.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Lock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Privacy</h3>
              <p className="text-gray-700">
                Your documents remain completely private and secure throughout the process.
              </p>
            </div>
          </div>
        </div>

        {/* Information We Don't Collect */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Don&apos;t Collect</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              PDF Tools Hub is designed with privacy as a core principle. We intentionally do not collect:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>PDF Files:</strong> Your documents never leave your device</li>
              <li><strong>Personal Information:</strong> No names, emails, or contact details</li>
              <li><strong>File Metadata:</strong> No file names, sizes, or content information</li>
              <li><strong>Usage Data:</strong> No tracking of which tools you use or how often</li>
              <li><strong>IP Addresses:</strong> No logging of your IP address or location</li>
              <li><strong>Browser Information:</strong> No collection of browser details or fingerprints</li>
            </ul>
          </div>
        </div>

        {/* How Our Tools Work */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our Tools Work</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              All PDF processing happens entirely in your browser using client-side JavaScript libraries. 
              This means:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Client-Side Processing</h3>
                <p className="text-blue-800">
                  Your PDF files are processed locally in your browser using advanced JavaScript libraries. 
                  No server-side processing occurs.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">No Server Uploads</h3>
                <p className="text-green-800">
                  Files are never uploaded to our servers or any third-party services. 
                  Everything stays on your device.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cookies and Tracking */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Cookies Only</h3>
            <p className="mb-6">
              We use only essential cookies necessary for the basic functioning of our website. 
              These cookies do not track your personal information or browsing behavior.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Analytics Tracking</h3>
            <p className="mb-6">
              We do not use Google Analytics, Facebook Pixel, or any other tracking services. 
              Your browsing activity on our site is not monitored or recorded.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AdSense Privacy</h3>
            <p className="mb-6">
              We use Google AdSense to display advertisements. Google may use cookies to serve ads 
              based on your visits to this site and other sites on the Internet. You can opt out of 
              personalized advertising by visiting Google&apos;s Ad Settings.
            </p>
          </div>
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Google AdSense</h3>
            <p className="mb-6">
              We use Google AdSense to display advertisements on our website. Google&apos;s use of advertising 
              cookies enables it and its partners to serve ads to users based on their visit to our site 
              and/or other sites on the Internet. You can opt out of personalized advertising by visiting 
              <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer"> Google&apos;s Ad Settings</a>.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hosting Services</h3>
            <p className="mb-6">
              Our website is hosted on Vercel, which may collect basic server logs for security and 
              performance purposes. These logs do not contain personal information or file data.
            </p>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Since we don&apos;t collect or store your PDF files or personal information, there&apos;s no risk 
              of data breaches or unauthorized access to your documents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">No Data Storage</h3>
                <p className="text-green-800">
                  We don&apos;t store any user data, so there&apos;s nothing to secure or protect from breaches.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Client-Side Security</h3>
                <p className="text-blue-800">
                  All processing happens in your browser, keeping your data under your control.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Since we don&apos;t collect personal information, most traditional privacy rights don&apos;t apply. 
              However, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Use Our Tools Anonymously:</strong> No registration or personal information required</li>
              <li><strong>Control Your Data:</strong> Your files never leave your device</li>
              <li><strong>Opt Out of Ads:</strong> Use ad blockers or adjust your browser settings</li>
              <li><strong>Contact Us:</strong> Reach out with questions or concerns about our privacy practices</li>
            </ul>
          </div>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              We may update this privacy policy from time to time. Any changes will be posted on this page 
              with an updated revision date. We encourage you to review this privacy policy periodically.
            </p>
            <p className="mb-6">
              If we make significant changes to our privacy practices, we will provide notice on our website 
              or through other appropriate means.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              If you have any questions about this privacy policy or our privacy practices, please 
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline"> contact us</a>.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Questions or Concerns?</h3>
              <p className="text-blue-800">
                We&apos;re committed to transparency and are happy to answer any questions you may have 
                about our privacy practices or how our tools work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
