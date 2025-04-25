import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms And Condition",
};

const TermsAndConditions = () => {
  return (
    <>
      <div className="bg-[#fdfcfc] text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-red-100 text-red-800 py-10 text-center shadow-sm border-b border-red-200">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Terms & Conditions</h1>
          <p className="text-lg max-w-2xl mx-auto text-red-700">
            Please read these terms and conditions carefully before using teenVOGUE.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">

          {/* Section */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Introduction</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              By accessing or using teenVOGUE, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of the terms, you should not use our website.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              These terms apply to all visitors, users, and others who access or use the service.
            </p>
          </section>

          {/* Use of Content */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Use of Content</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              The content provided on teenVOGUE is for informational purposes only. It is not intended as financial, investment, or legal advice.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              You may not reproduce, distribute, or modify any content without express written permission from teenVOGUE.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">User Responsibilities</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <ul className="list-disc list-inside text-[17px] text-gray-700 space-y-3">
              <li><strong>Accountability:</strong> You are responsible for any activity that occurs under your account.</li>
              <li><strong>Accuracy:</strong> You agree not to post misleading, false, or deceptive content on the site.</li>
              <li><strong>Compliance:</strong> You must comply with all applicable laws and regulations when using our services.</li>
              <li><strong>Security:</strong> Do not attempt to access data or systems you are not authorized to use.</li>
              <li><strong>Respect:</strong> Engage respectfully with other users and our team. Abuse or harassment will not be tolerated.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Intellectual Property</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              All content, including articles, graphics, logos, and design elements, is the property of teenVOGUE and protected by copyright and trademark laws.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Unauthorized use of our content is strictly prohibited and may result in legal action.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Limitation of Liability</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              teenVOGUE will not be liable for any losses or damages arising from the use or inability to use the website, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Changes to These Terms</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              We reserve the right to update or modify these Terms and Conditions at any time without prior notice.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Continued use of the site after changes constitutes your acceptance of the new terms.
            </p>
          </section>

        </main>
      </div>

    </>
  )
}

export default TermsAndConditions;
