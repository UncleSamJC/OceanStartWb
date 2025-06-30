import { useState } from 'react';
import SectionBadge from '../basic/SectionBadge';

const productManagers = [
  {
    id: 1,
    name: "Emma Harrison",
    position: "Exclusive Property Advisor",
    image: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cef838bc357c11134830_feature-agent-11.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cef838bc357c11134830_feature-agent-11-p-500.jpg 500w, https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cef838bc357c11134830_feature-agent-11.jpg 600w",
    social: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/"
    }
  },
  {
    id: 2,
    name: "Isabella Wright",
    position: "Short-Term Rental Expert",
    image: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cee23d0f1a38274d4c9c_feature-agent-10.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cee23d0f1a38274d4c9c_feature-agent-10-p-500.jpg 500w, https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788cee23d0f1a38274d4c9c_feature-agent-10.jpg 600w",
    social: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      instagram: null
    }
  },
  {
    id: 3,
    name: "Noah Clarke",
    position: "Eco-Friendly Property Specialist",
    image: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6789cc25e6119c429e721456_feature-agent-13.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6789cc25e6119c429e721456_feature-agent-13-p-500.jpg 500w, https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6789cc25e6119c429e721456_feature-agent-13.jpg 600w",
    social: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/"
    }
  },
  {
    id: 4,
    name: "Benjamin Foster",
    position: "Urban Development Advisor",
    image: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6789cbc872061cb2483d232a_feature-agent-12.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6789cbc872061cb2483d232a_feature-agent-12-p-500.jpg 500w, https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6789cbc872061cb2483d232a_feature-agent-12.jpg 600w",
    social: {
      facebook: null,
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/"
    }
  },
  {
    id: 5,
    name: "Emily Chen",
    position: "Investment Property Consultant",
    image: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce9db6fe202c947e5156_feature-agent-9.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce9db6fe202c947e5156_feature-agent-9-p-500.jpg 500w, https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce9db6fe202c947e5156_feature-agent-9.jpg 600w",
    social: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/"
    }
  },
  {
    id: 6,
    name: "Michael Anderson",
    position: "Vacation Rental Specialist",
    image: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce7ba463c16f5207ef87_feature-agent-3.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce7ba463c16f5207ef87_feature-agent-3-p-500.jpg 500w, https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce7ba463c16f5207ef87_feature-agent-3.jpg 600w",
    social: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/"
    }
  },
  {
    id: 7,
    name: "Charlotte Morgan",
    position: "High-End Property Consultant",
    image: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce62d3368885a9082c63_feature-agent-8.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce62d3368885a9082c63_feature-agent-8-p-500.jpg 500w, https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce62d3368885a9082c63_feature-agent-8.jpg 600w",
    social: {
      facebook: null,
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/"
    }
  },
  {
    id: 8,
    name: "Ethan Hughes",
    position: "Green Building Advisor",
    image: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce32e3551bff56eb29ae_feature-agent-2.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce32e3551bff56eb29ae_feature-agent-2-p-500.jpg 500w, https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce32e3551bff56eb29ae_feature-agent-2.jpg 600w",
    social: {
      facebook: null,
      linkedin: "https://www.linkedin.com/",
      instagram: null
    }
  },
  {
    id: 9,
    name: "Olivia Bennett",
    position: "Sustainable Housing Consultant",
    image: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce1ad5f602450d733f7c_feature-agent-7.jpg",
    imageSrcSet: "https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce1ad5f602450d733f7c_feature-agent-7-p-500.jpg 500w, https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/6788ce1ad5f602450d733f7c_feature-agent-7.jpg 600w",
    social: {
      facebook: null,
      linkedin: null,
      instagram: "https://www.instagram.com/"
    }
  }
];

function ProductM() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(productManagers.length / itemsPerPage);
  
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return productManagers.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const SocialIcon = ({ platform, url }) => {
    if (!url) return null;

    const icons = {
      facebook: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      linkedin: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      instagram: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    };

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
      >
        {icons[platform]}
      </a>
    );
  };

  return (
    <section className="agents-page-section py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <SectionBadge className="mb-6">View Our Product Managers</SectionBadge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Personalized Guidance, Proven Expertise
          </h2>
        </div>

        {/* Product Managers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getCurrentPageItems().map((manager) => (
            <div key={manager.id} className="agent-item bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="agent-image relative overflow-hidden">
                <img
                  src={manager.image}
                  alt={manager.name}
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  sizes="100vw"
                  srcSet={manager.imageSrcSet}
                />
              </div>

              {/* Agent Info */}
              <div className="agent-info p-6">
                <div className="agent-info-grid flex justify-between items-start">
                  <div className="text-wrap flex-1 min-h-[70px]">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {manager.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {manager.position}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="social-wrap flex gap-2 ml-4">
                    <SocialIcon platform="facebook" url={manager.social.facebook} />
                    <SocialIcon platform="linkedin" url={manager.social.linkedin} />
                    <SocialIcon platform="instagram" url={manager.social.instagram} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 12 12">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 2l4 4-4 4" />
              </svg>
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full transition-colors duration-200 ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>Next</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 12 12">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 2l4 4-4 4" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductM;