import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhatWeOfferSection from '../components/WhatWeOfferSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';

function Home() {
  return (
    <div>
      <Hero />

      <WhatWeOfferSection />

      <CTASection />

      <FAQSection />



      

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            111Let's discuss how we can help transform your business with our innovative solutions.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 