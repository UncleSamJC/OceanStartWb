import React, { useState } from 'react';
import SectionBadge from './basic/SectionBadge';

const faqs = [
  {
    question: 'Why choose custom clothing services?',
    answer:
      'Custom clothing offers personalization that perfectly aligns with your individual style or company branding. It meets specific promotional needs, serves as memorable gifts for special occasions or holidays, and ensures your team looks unified and professional.',
  },
  {
    question: 'What specific customization services do you offer?',
    answer:
      'We provide comprehensive customization services including team uniforms, corporate attire, custom suits, T-shirts, hoodies, ties, scarves, and various textile products. All items can be enhanced with professional embroidery or printing services.',
  },
  {
    question: 'What is the customization process?',
    answer:
      'Our streamlined process includes: 1) Providing your original materials and requirements, 2) Consulting with our sales team or submitting details online, 3) Receiving a customization proposal with cost estimates and delivery timeline, 4) Signing the purchase contract or making payment, 5) Delivery and comprehensive after-sales service.',
  },
  {
    question: 'Can you show examples of your customization work?',
    answer:
      'We showcase a wide range of samples including custom suit collections, corporate ties and scarves, team T-shirts and hoodies, embroidered shoes and bags, and various cover-up designs. Our portfolio demonstrates our versatility across different product categories and customization techniques.',
  },
  {
    question: 'What are your after-sales service policies and care instructions?',
    answer:
      'Please follow care label instructions for washing and maintenance. For printed products, avoid bleach and high-temperature drying. Please note that custom products are final sales - returns or exchanges are not accepted for non-quality issues, as each item is made specifically to your specifications.',
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
