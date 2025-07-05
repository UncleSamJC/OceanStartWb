import React from "react";
import WhoWeAre from "../components/about/WhoWeAre";
import beachCoverUpImage from "../assets/images/beach-cover-up.jpg";

function About() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About OceanStar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing exceptional products and services that
            meet your unique needs and aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              OceanStar is a custom clothing brand inspired by the vastness of the ocean and stars, embracing the past, present, and future of personalized fashion. We specialize in women's beach and casual cover-ups, custom clothing, and unique embroidery and printing services that bring your vision to life.
            </p>
            <p className="text-gray-600 mb-4">
              Our diverse clientele spans from schools and airlines to social organizations, clubs, and corporations for group orders, while our retail customers include families, individuals, and small community groups. With our founder's 25 years of industry expertise and a comprehensive Asian supply chain network, we've established a solid foundation for excellence.
            </p>
            <p className="text-gray-600 mb-4">
              Based in Canada with a physical retail showroom and on-site processing capabilities, we offer end-to-end services from design and material sourcing to production, shipping, and after-sales support. Whether you're an individual seeking a unique piece or a large organization needing custom uniforms, we deliver personalized solutions that meet your specific requirements.
            </p>
          </div>

          <div>
            <img 
              src={beachCoverUpImage} 
              alt="Beach Cover-up Collection" 
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[450px]"
            />
          </div>

          
        </div>
      </div>
      <WhoWeAre />
    </>
  );
}

export default About;
