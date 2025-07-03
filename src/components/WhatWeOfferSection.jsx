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
              Comprehensive clothing solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Uniform Customization</h3>
              <p className="text-gray-600">
                We specialize in creating customized uniforms that reflect your team's identity and meet your specific needs. From selecting the right fabrics and colors to choosing styles that match your needs — whether it's hospitality, healthcare, retail, or corporate — we work closely with you to bring your vision to life; Besides uniform, we also accpet accessories customization, like ties and scarvies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Logo Embroidery</h3>
              <p className="text-gray-600">
   Add a professional and lasting touch to your uniforms with high-quality logo embroidery. Using advanced embroidery machines and durable threads, we stitch your logo, name, or slogan directly onto garments with precision and care. Whether it's for polos, jackets, shoes and socks, caps, or hoodies our embroidery service provides a clean, polished finish that elevates your brand and withstands regular wear and washing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garment Printing</h3>
              <p className="text-gray-600">
Bring your brand to life with vibrant and detailed garment printing. We offer multiple printing techniques — including heat transfer, and direct-to-film(DTF)— to suit different fabric types and design complexities. Whether you need bold graphics, full-color images, or minimal text, our printing process ensures high-quality results with excellent color retention and comfort. Ideal for t-shirts, hoodies, and promotional wear.              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesSection;  