import { useState, useEffect } from 'react';
import SectionBadge from '../components/basic/SectionBadge';
import { supabase } from '../lib/supabase';

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);
  const itemsPerPage = 6;
  
  // Calculate pagination
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  // Format price for display
  const formatPrice = (price, currency = 'CAD') => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(price);
  };

  // Fetch products from Supabase
  const fetchProductsFromSupabase = async (page = 1, limit = 6) => {
    setLoading(true);
    setError(null);
    
    try {
      // Get total count first
      const { count } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true })
        .gt('stock', 0); // Only show products in stock

      setTotalCount(count || 0);

      // Get paginated data
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .gt('stock', 0) // Only show products in stock
        .order('created_at', { ascending: false })
        .range((page - 1) * limit, page * limit - 1);
      
      if (error) {
        throw error;
      }

      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again later.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsFromSupabase(currentPage, itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <section className="products-section py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <SectionBadge className="mb-6">Our Products</SectionBadge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Discover Quality Products for Your Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Browse our carefully curated selection of premium products, each designed to meet the highest standards of quality and value.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600">{error}</p>
              <button
                onClick={() => fetchProductsFromSupabase(currentPage, itemsPerPage)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <article key={product.id} className="product-item bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="block">
                  {/* Product Image */}
                  <div className="product-image-wrap overflow-hidden">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="product-info-wrap p-6">
                    {/* Product Title */}
                    <div className="product-title mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                        {product.name}
                      </h3>
                    </div>

                    {/* Product Description */}
                    {product.description && (
                      <div className="product-description mb-4">
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {product.description}
                        </p>
                      </div>
                    )}

                    {/* Product Meta */}
                    <div className="flex items-center justify-between">
                      {/* Price */}
                      <div className="product-price">
                        <span className="text-2xl font-bold text-gray-900">
                          {formatPrice(product.price, product.currency)}
                        </span>
                      </div>

                      {/* Stock Status */}
                      <div className="product-stock">
                        <span className="text-sm text-gray-500">
                          {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
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
                  onClick={() => handlePageChange(page)}
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

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <p className="text-gray-500 text-lg mb-2">No products available</p>
              <p className="text-gray-400 text-sm">Check back later for new products!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products; 