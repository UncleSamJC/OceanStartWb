import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About OceanStar</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are dedicated to providing exceptional products and services that meet your unique needs and aspirations.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded with a passion for excellence, OceanStar has been at the forefront of innovation in our industry. 
            Our journey is defined by a commitment to quality, innovation, and client satisfaction.
          </p>
          <p className="text-gray-600 mb-4">
            We believe in building lasting relationships with our clients by delivering tailored solutions that 
            exceed expectations and drive success.
          </p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
              <span className="text-gray-600">Excellence in everything we do</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
              <span className="text-gray-600">Innovation-driven solutions</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
              <span className="text-gray-600">Customer-centric approach</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
              <span className="text-gray-600">Sustainable business practices</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About; 