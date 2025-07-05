import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhatWeOfferSection from '../components/WhatWeOfferSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import BlogAbstractSection from '../components/BlogAbstractSection';
import ThirdButton from '../components/basic/ThirdButton';

function Home() {
  return (
    <div>
      <Hero />

      <WhatWeOfferSection />

      <CTASection />

      <FAQSection />

      <BlogAbstractSection />

      {/* CTA Section */}
      <section className="py-20 bg-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Partner with Us - Calling All Creative Designers</h2>
          <p className="text-xl  max-w-2xl mx-auto">
            Are you a talented designer with innovative ideas? 
          </p>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Let's collaborate to bring your creative vision to life.
          </p>
          <p className="text-xl mb-8 max-w-7xl mx-auto">
            Based in Nanaimo, we operate professional embroidery machines and printing equipment, actively seeking local designers interested in apparel, home textiles, and creative products. We offer flexible collaboration including small-batch sampling, production, and listing services with negotiable partnership terms - whether one-time payment or revenue sharing arrangements.
          </p>

          <ThirdButton to="/contact">Contact Us Now</ThirdButton>
        </div>
      </section>
    </div>
  );
}

export default Home; 