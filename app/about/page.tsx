import React from 'react'


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about teenVOGUE and what we do.",
  keywords: ["Stock Market", "About", "Trading", "ETFS", "Finance"],
};

const About = () => {
  return (
    <>
      <div className="bg-[#fdfcfc] text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-red-100 text-red-800 py-10 text-center shadow-sm border-b border-red-200">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">About teenVOGUE</h1>
          <p className="text-lg max-w-2xl mx-auto text-red-700">
            Your trusted source for ETF insights, stock trading strategies, and financial news.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">
          {/* Who We Are */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Who We Are</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
              teenVOGUE is a digital publication focused on delivering accurate, timely, and insightful content about the financial markets. Founded by a team of analysts, traders, and financial writers, we are committed to simplifying the complexities of finance for everyday investors and enthusiasts.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
              We believe in the power of informed investing. Our goal is to equip our readers with the knowledge they need to navigate a constantly evolving economic landscape with confidence and clarity.
            </p>
          </section>

          {/* Our Mission */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Our Mission</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              At teenVOGUE, our mission is to democratize access to quality financial information. We strive to bridge the gap between Wall Street and the everyday investor by delivering well-researched, data-driven articles and analysis that help our readers make smarter financial decisions.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
              We maintain editorial independence, uphold journalistic integrity, and focus on clarity, transparency, and real-world value in everything we publish.
            </p>
          </section>

          {/* What We Cover */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">What We Cover</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <ul className="list-disc list-inside text-[17px] text-gray-700 space-y-3 mt-4">
              <li><strong>ETFs:</strong> In-depth analysis of exchange-traded funds, including sector-specific trends, fund performance, and risk assessment.</li>
              <li><strong>Stock Trading:</strong> Daily market recaps, technical analysis, breakout watchlists, and strategy breakdowns for both beginners and active traders.</li>
              <li><strong>Finance News:</strong> Breaking stories and macroeconomic developments that shape market sentiment and impact investment decisions.</li>
              <li><strong>Education:</strong> Step-by-step guides, terminology explainers, and portfolio-building basics for retail investors.</li>
              <li><strong>Opinion & Commentary:</strong> Insights from industry professionals, economic outlooks, and thoughtful commentary on current events.</li>
            </ul>
          </section>

          {/* Editorial Approach */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Our Editorial Approach</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Every piece of content published on teenVOGUE goes through a rigorous editorial process to ensure accuracy, clarity, and fairness. Our writers adhere to strict standards and verify information using reputable sources.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
              We avoid hype and sensationalism — our focus is on delivering value. Whether its an ETF breakdown or a market opinion,
               we back our work with data, charts, and historical context.
            </p>
          </section>

          {/* Our Readers */}
          <section className="bg-white border border-red-100 shadow-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Who Reads teenVOGUE?</h2>
            <div className="w-14 h-1 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Our audience includes individual investors, active traders, financial advisors, and anyone seeking to better understand how the markets work. Whether you are just getting started with ETFs or optimizing your trading strategy, teenVOGUE delivers insights tailored to your level.
            </p>
          </section>
        </main>
      </div>

      
    </>
  )
}

export default About;
