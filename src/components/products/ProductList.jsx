import { useState } from 'react';
import SectionBadge from '../basic/SectionBadge';


const products = //Data get from Supabase

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(productproducts.length / itemsPerPage);
  
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return productproducts.slice(startIndex, endIndex);
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


  return (
    <section className="products-page-section py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <SectionBadge className="mb-6">View Our Products</SectionBadge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Personalized Cover-ups, Proven Quality
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getCurrentPageItems().map((product) => (
            <div key={product.id} className="product-item bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="product-image relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  sizes="100vw"
                  srcSet={product.imageSrcSet}
                />
              </div>

              {/* Product Info */}
              <div className="product-info p-6">
                <div className="product-info-grid flex justify-between items-start">
                  <div className="text-wrap flex-1 min-h-[70px]">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.position}
                    </p>
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

