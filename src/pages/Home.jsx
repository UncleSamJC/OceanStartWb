import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect Solution Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We provide tailored solutions, guiding you through every step with personalized experiences that meet your unique needs and aspirations.
          </p>
          <div className="space-x-4">
            <Link 
              to="/products" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
            >
              Explore Products
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Complete</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">70+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$10M+</div>
              <div className="text-gray-600">Project Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our innovative solutions.
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