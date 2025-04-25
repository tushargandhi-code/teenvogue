import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

const CookiesPolicy = () => {
  return (
    <>
      <div className="bg-[#fdfcfc] text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-red-100 text-red-800 py-10 text-center shadow-sm border-b border-red-200">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Cookies Policy</h1>
          <p className="text-lg max-w-2xl mx-auto text-red-700">
            Learn how teenVOGUE uses cookies and similar technologies to enhance your browsing experience.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">
          {/* What Are Cookies? */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">What Are Cookies?</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              Cookies are small data files stored on your device when you visit websites. They help improve functionality, analyze usage, and deliver personalized content. teenVOGUE uses cookies to enhance performance and tailor your experience.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Some cookies are essential for the operation of our website, while others help us understand user behavior and improve our content.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">How We Use Cookies</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              At teenVOGUE, we use cookies for a variety of purposes, including:
            </p>
            <ul className="list-disc list-inside text-[17px] text-gray-700 space-y-3 mt-4">
              <li><strong>Essential Cookies:</strong> Enable core functionality like security, network management, and accessibility.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site so we can improve user experience.</li>
              <li><strong>Performance Cookies:</strong> Monitor site performance and gather data on technical issues.</li>
              <li><strong>Advertising Cookies:</strong> Deliver relevant advertisements and track campaign effectiveness across platforms.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a more personalized experience.</li>
            </ul>
          </section>

          {/* Your Choices */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Managing Cookies</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              You can control and manage cookies through your browser settings. Most browsers allow you to reject or delete cookies at any time. However, please note that disabling cookies may impact the functionality of some parts of our site.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
              You can also opt out of certain third-party cookies used for advertising through industry opt-out tools.
            </p>
          </section>

          {/* Third-Party Cookies */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Third-Party Cookies</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Some cookies may be placed by third-party services we use, such as analytics platforms or advertising networks. We do not control these cookies and encourage you to review their privacy policies.
            </p>
          </section>

          {/* Updates to This Policy */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Changes to This Policy</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              teenVOGUE may update this Cookies Policy from time to time. We encourage you to review this page periodically for any changes. Your continued use of our site signifies your agreement to the updated terms.
            </p>
          </section>
        </main>
      </div>

   
    </>
  )
}

export default CookiesPolicy;
