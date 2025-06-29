import React from 'react';

function Services() {
  const services = [
    {
      title: "Consulting Services",
      description: "Expert guidance and strategic advice to help your business grow and succeed.",
      icon: "💼"
    },
    {
      title: "Technical Solutions",
      description: "Cutting-edge technology solutions tailored to your specific business needs.",
      icon: "⚙️"
    },
    {
      title: "Support & Maintenance",
      description: "Comprehensive support and maintenance services to keep your operations running smoothly.",
      icon: "🛠️"
    },
    {
      title: "Training & Development",
      description: "Professional training programs to enhance your team's skills and capabilities.",
      icon: "📚"
    },
    {
      title: "Custom Development",
      description: "Bespoke development services designed to meet your unique requirements.",
      icon: "🚀"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance to ensure excellence in every deliverable.",
      icon: "✅"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer comprehensive services designed to help your business thrive in today's competitive landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Contact us today to discuss how our services can help your business achieve its goals.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Services; 