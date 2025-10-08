import Layout from "@/components/ServerLayout";
import { Mail, MessageCircle, HelpCircle, Bug, Lightbulb, Heart } from "lucide-react";

export default function Contact() {
  return (
    <Layout
      title="Contact Us - PDF Tools Hub"
      description="Get in touch with PDF Tools Hub. We're here to help with questions, feedback, bug reports, and feature requests."
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 mb-4">
            We&apos;d love to hear from you! Whether you have questions, feedback, or suggestions, 
            we&apos;re here to help improve your PDF editing experience.
          </p>
          <p className="text-lg text-gray-700">
            Your input helps us make PDF Tools Hub better for everyone.
          </p>
        </div>

        {/* Contact Reasons */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">General Questions</h3>
              <p className="text-gray-700">
                Have questions about how our tools work or need help getting started? 
                We&apos;re here to provide clear answers.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Bug className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bug Reports</h3>
              <p className="text-gray-700">
                Found a bug or experiencing issues with our tools? 
                Please report it so we can fix it quickly.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature Requests</h3>
              <p className="text-gray-700">
                Have ideas for new tools or improvements? 
                We&apos;d love to hear your suggestions.
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <MessageCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feedback</h3>
              <p className="text-gray-700">
                Share your experience using our tools. 
                Your feedback helps us improve the user experience.
              </p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Success Stories</h3>
              <p className="text-gray-700">
                Tell us how PDF Tools Hub helped you! 
                We love hearing about your success stories.
              </p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <Mail className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-700">
                Interested in partnering with us or have business inquiries? 
                We&apos;d be happy to discuss opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              While we don&apos;t have a traditional contact form (to maintain our privacy-first approach), 
              there are several ways you can reach us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Email Contact</h3>
                <p className="text-blue-800 mb-3">
                  For general inquiries, bug reports, and feature requests, you can reach us at:
                </p>
                <p className="text-blue-900 font-mono bg-blue-100 p-3 rounded">
                  contact@pdf-tools-hub.com
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Response Time</h3>
                <p className="text-green-800 mb-3">
                  We typically respond to emails within 24-48 hours during business days.
                </p>
                <p className="text-green-700 text-sm">
                  Please include relevant details about your question or issue for faster assistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What to Include */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Include in Your Message</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">For Bug Reports</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Description of the issue you encountered</li>
              <li>Steps to reproduce the problem</li>
              <li>Browser and operating system information</li>
              <li>File size and type (if relevant)</li>
              <li>Any error messages you received</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">For Feature Requests</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Description of the feature you&apos;d like to see</li>
              <li>How it would help you or other users</li>
              <li>Any specific requirements or preferences</li>
              <li>Examples of similar features from other tools</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">For General Questions</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Specific question or concern</li>
              <li>Context about how you&apos;re using our tools</li>
              <li>Any relevant file information (size, type, etc.)</li>
              <li>What you&apos;ve already tried</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you store my PDF files?</h3>
              <p className="text-gray-700">
                No, we never store your PDF files. All processing happens in your browser, 
                so your files never leave your device.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a file size limit?</h3>
              <p className="text-gray-700">
                File size limits depend on your browser&apos;s memory capacity. Generally, 
                files up to 100MB work well, but very large files may cause performance issues.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to create an account?</h3>
              <p className="text-gray-700">
                No account required! You can use all our tools immediately without 
                registration or providing any personal information.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are your tools really free?</h3>
              <p className="text-gray-700">
                Yes, all our PDF tools are completely free to use with no hidden costs, 
                premium tiers, or limitations.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What browsers are supported?</h3>
              <p className="text-gray-700">
                Our tools work on all modern browsers including Chrome, Firefox, Safari, 
                and Edge. We recommend using the latest version for best performance.
              </p>
            </div>
          </div>
        </div>

        {/* Community */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              PDF Tools Hub is more than just a collection of tools – it&apos;s a community of users 
              who value privacy, simplicity, and efficiency in document management.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Share Your Experience</h3>
              <p className="text-gray-700 mb-4">
                Help others discover the benefits of our tools by sharing your experience. 
                Whether it&apos;s a success story, a creative use case, or helpful tips, 
                your insights can help fellow users.
              </p>
              <p className="text-gray-700">
                Together, we can make PDF editing more accessible and efficient for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Thank You */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Thank You</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Thank you for using PDF Tools Hub and for taking the time to reach out. 
              Your feedback, questions, and suggestions help us continuously improve our platform 
              and provide better tools for everyone.
            </p>
            <p className="mb-6">
              We&apos;re committed to maintaining the highest standards of privacy, security, and user experience. 
              Your trust in our platform is what drives us to keep improving.
            </p>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-900 mb-2">We Appreciate You</h3>
              <p className="text-green-800">
                Every user matters to us. Thank you for being part of the PDF Tools Hub community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
