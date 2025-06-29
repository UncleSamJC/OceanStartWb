import React from 'react';
import { Link } from 'react-router-dom';

function FeaturesSection() {
  return (
    <div>
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge solutions that drive your business forward with the latest technology and innovative approaches.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision</h3>
              <p className="text-gray-600">
                Tailored solutions designed specifically for your unique requirements and business objectives.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                Long-term partnerships built on trust, reliability, and mutual success in achieving your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesSection;  