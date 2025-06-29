import React, { useState } from 'react';
import SectionBadge from './basic/SectionBadge';

const faqs = [
  {
    question: 'What is the process for buying a property?',
    answer:
      'The process involves selecting the right property, negotiating terms with the agent, signing the contract, and completing the payment. Our professional agents will guide you through every step to ensure a smooth experience.',
  },
  {
    question: 'How do I determine how much I can afford?',
    answer:
      'We recommend consulting with a mortgage specialist who can evaluate your income, expenses, and credit score to provide tailored advice.',
  },
  {
    question: 'What documents are required for renting a property?',
    answer:
      'Typically, you will need to provide identification, proof of income (e.g., pay stubs or bank statements), and rental history. Some landlords may also require a security deposit.',
  },
  {
    question: 'Can I terminate a lease agreement early?',
    answer:
      'This depends on the terms of your lease agreement. We recommend reviewing the early termination clauses before signing and discussing options with your landlord or agent.',
  },
  {
    question: 'What are the risks of investing in real estate?',
    answer:
      'Real estate investment risks may include market fluctuations, maintenance costs, and inconsistent occupancy rates. We offer professional market analysis to help you minimize these risks.',
  },
  {
    question: 'How do I choose the right property to invest in?',
    answer:
      'Based on your budget, target returns, and the growth potential of the area, we provide tailored property recommendations and detailed analysis reports.',
  },
  {
    question: 'Do high-end properties support virtual tours?',
    answer:
      'Yes, most of our luxury listings include virtual tour options, allowing you to conveniently explore property details online.',
  },
  {
    question: 'How long does the property transfer process take?',
    answer:
      'Generally, it takes 30-60 days, depending on local regulations and loan approval timelines. We will assist you throughout the process to ensure everything goes smoothly.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq-section py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* 左侧 badge+标题 */}
          <div className="md:w-1/3 w-full flex flex-col items-start sticky top-24">
            <SectionBadge className="mb-4">Help Center</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 section-heading">Frequently asked questions</h2>
          </div>
          {/* 右侧 FAQ 手风琴 */}
          <div className="md:w-2/3 w-full flex flex-col gap-2">
            {faqs.map((faq, idx) => {
              const open = openIndex === idx;
              return (
                <div key={idx} className="border-b border-gray-200">
                  <button
                    className="w-full flex justify-between items-center py-5 text-left focus:outline-none select-none faq-top"
                    onClick={() => setOpenIndex(open ? null : idx)}
                    aria-expanded={open}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4 large-text">
                      {faq.question}
                    </h3>
                    <span
                      className={`faq-toggle flex items-center justify-center border border-gray-200 rounded-full w-8 h-8 transition-transform duration-1000 ${open ? 'rotate-45 text-red-400' : 'text-gray-400'}`}
                    >
                      {/* 加号SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M6 12h12M12 6v12" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`faq-bottom overflow-hidden transition-all duration-1000 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="text-gray-500 py-2 pr-6 mb-4 basic-text color-grey-400">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
