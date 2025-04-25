import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-[#fdfcfc] text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-red-100 text-red-800 py-10 text-center shadow-sm border-b border-red-200">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-lg max-w-2xl mx-auto text-red-700">
            Learn how teenVOGUE collects, uses, and protects your personal information.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">
          {/* Introduction */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Your Privacy Matters</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              teenVOGUE is committed to protecting your privacy. This policy explains what information we collect, how we use it, and the choices you have. We are transparent about our practices and dedicated to safeguarding your data.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information Collection */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Information We Collect</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              We may collect personal information such as your name, email address, and IP address when you sign up for newsletters, comment on articles, or contact us. We also gather non-personal data through cookies and analytics tools.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
              This information helps us improve our content, monitor performance, and provide a better user experience.
            </p>
          </section>

          {/* How We Use It */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">How We Use Your Information</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <ul className="list-disc list-inside text-[17px] text-gray-700 space-y-3 mt-4">
              <li>To provide and maintain our website and services.</li>
              <li>To personalize content and deliver relevant updates.</li>
              <li>To respond to your comments or inquiries.</li>
              <li>To analyze trends and improve functionality.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Data Sharing & Third Parties</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              We do not sell or rent your personal information. We may share data with trusted third-party providers for services like analytics, email distribution, or hosting — all bound by confidentiality agreements.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
              These partners only access data necessary to perform their specific tasks and are obligated not to disclose or use it for other purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Your Privacy Rights</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also opt out of email communications at any time. To exercise these rights, please contact us directly.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Changes to This Policy</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              We may update our Privacy Policy occasionally. Changes will be reflected on this page with a revised effective date. Continued use of our services means you accept the updated terms.
            </p>
          </section>
        </main>
      </div>

      
    </>
  )
}

export default PrivacyPolicy;
