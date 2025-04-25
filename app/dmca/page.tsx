import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA",
};

const DMCA = () => {
  return (
    <>
      <div className="bg-[#fdfcfc] text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-red-100 text-red-800 py-10 text-center shadow-sm border-b border-red-200">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">DMCA Policy</h1>
          <p className="text-lg max-w-2xl mx-auto text-red-700">
            Learn how teenVOGUE handles copyright infringement claims under the DMCA.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">

          {/* What is the DMCA? */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">What is the DMCA?</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              The Digital Millennium Copyright Act (DMCA) is a U.S. law that protects the rights of copyright holders by enabling them to report infringing content. teenVOGUE complies fully with the DMCA and respects the intellectual property of others.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
              This policy outlines our procedures for handling DMCA takedown notices and how affected parties may respond.
            </p>
          </section>

          {/* Reporting Infringement */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Reporting Copyright Infringement</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              If you believe that content on teenVOGUE infringes on your copyright, please send a written DMCA notice to our designated agent including the following:
            </p>
            <ul className="list-disc list-inside text-[17px] text-gray-700 space-y-3 mt-4">
              <li>A description of the copyrighted work you claim has been infringed.</li>
              <li>The exact URL or location of the infringing material on our site.</li>
              <li>Your contact information, including name, address, phone number, and email.</li>
              <li>A statement that you have a good faith belief the use is unauthorized.</li>
              <li>A statement, under penalty of perjury, that the information is accurate and you are the copyright owner or authorized to act on their behalf.</li>
              <li>Your physical or electronic signature.</li>
            </ul>
          </section>

          {/* Counter-Notification */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Counter-Notification</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              If your content was removed due to a DMCA notice and you believe this was done in error or that you have the right to use the material, you may file a counter-notification.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
              Your counter-notification must include your contact details, identification of the removed content, a statement under penalty of perjury that you believe the content was removed by mistake, consent to jurisdiction in a U.S. federal court, and your signature.
            </p>
          </section>

          {/* Repeat Infringers */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Repeat Infringers</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              teenVOGUE has a zero-tolerance policy for repeat copyright infringers. We may terminate user accounts or access for repeat offenders at our sole discretion.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Contact Information</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              DMCA notices and counter-notices should be sent to our designated agent:
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
              <strong>Email:</strong> legal@teenVOGUE.com  
              <br />
              <strong>Address:</strong> teenVOGUE, Attn: DMCA Agent, 436 Finance St, Market City, NY 10211
            </p>
          </section>

        </main>
      </div>

 
    </>
  )
}

export default DMCA;
