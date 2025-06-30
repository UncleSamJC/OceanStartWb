import { useState, useEffect } from 'react';
import SectionBadge from '../basic/SectionBadge';
import { supabase } from '../../lib/supabase';

function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);
  const itemsPerPage = 6;
  
  // Calculate pagination
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Fetch blogs from Supabase
  const fetchBlogsFromSupabase = async (page = 1, limit = 6) => {
    setLoading(true);
    setError(null);
    
    try {
      // Get total count first
      const { count } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'published');

      setTotalCount(count || 0);

      // Get paginated data
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('publish_date', { ascending: false })
        .range((page - 1) * limit, page * limit - 1);
      
      if (error) {
        throw error;
      }

      // Transform data to match the expected format
      const transformedBlogs = data?.map(blog => ({
        id: blog.id,
        title: blog.title,
        image: blog.image_url,
        imageSrcSet: blog.image_srcset,
        publishDate: formatDate(blog.publish_date),
        readTime: blog.read_time,
        slug: blog.slug,
        excerpt: blog.excerpt,
        author: blog.author
      })) || [];

      setBlogs(transformedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to load blog posts. Please try again later.');
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogsFromSupabase(currentPage, itemsPerPage);
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
    <section className="blog-section py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <SectionBadge className="mb-6">Real Estate Insights</SectionBadge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Explore the Market. Learn from Experts. Make Smarter Moves.
          </h2>
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
                onClick={() => fetchBlogsFromSupabase(currentPage, itemsPerPage)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-item bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <a href={`/blog/${blog.slug}`} className="block">
                  {/* Blog Image */}
                  <div className="blog-image-wrap overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      sizes="100vw"
                      srcSet={blog.imageSrcSet}
                    />
                  </div>

                  {/* Blog Info */}
                  <div className="blog-info-wrap p-6">
                    {/* Blog Title */}
                    <div className="blog-title mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                        {blog.title}
                      </h3>
                    </div>

                    {/* Blog Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {/* Publish Date */}
                      <div className="blog-publish flex items-center gap-2">
                        <div className="icon-size-normal-xs opacity-70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 256 256"
                            fill="currentColor"
                          >
                            <path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-400">{blog.publishDate}</span>
                      </div>

                      {/* Read Time */}
                      <div className="blog-read-time flex items-center gap-2">
                        <div className="icon-size-normal-xs opacity-70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 256 256"
                            fill="currentColor"
                          >
                            <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-gray-400">{blog.readTime}</span>
                          <span className="text-sm text-gray-400">min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
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
        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogSection;