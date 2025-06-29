import React from "react";
import { Link } from "react-router-dom";

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

function CTASection() {
  return (
    <div className="bg-gray-100">
      {/* CTASection Section */}
      <section
        id="contact"
        className="relative py-20 bg-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789e453099e81e883a098fd_minimalist-architecture-space-(7).jpg"
            alt="Minimalist architecture background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Make Your Property Journey Effortless
            </h2>
            <p className="text-lg text-gray-600">
              Have questions or ready to take the next step? Whether you're
              looking to buy, rent, or invest, our team is here to guide you
              every step of the way. Let's turn your property goals into
              reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTASection;
