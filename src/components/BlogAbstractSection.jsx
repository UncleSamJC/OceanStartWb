import React from 'react';
import { Link } from 'react-router-dom';
import SectionBadge from './basic/SectionBadge';
import Arrow45deg from './basic/Arrow45deg';
import ThirdButton from './basic/ThirdButton';

const blogs = [
  {
    title: 'The Ultimate Checklist for Selling Your Home Faster',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/67f8a459b2ae875dd0ed8124_post-1-1.jpg',
    date: 'April 11, 2025',
    readTime: '6 min read',
    url: '/blogs/the-ultimate-checklist-for-selling-your-home-faster',
  },
  {
    title: "Short-Term Rentals vs. Long-Term Leases: Which One's Right for You?",
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/67f8a48fa0f7447c4d191a8b_post-2-1.jpg',
    date: 'April 11, 2025',
    readTime: '6 min read',
    url: '/blogs/short-term-rentals-vs-long-term-leases-which-ones-right-for-you',
  },
  {
    title: 'Luxury Living Trends in 2025: What Buyers Really Want',
    image: 'https://cdn.prod.website-files.com/67875eb8de2529a75075fafd/67f8a4e95ff9a2bcfbfc668e_post-3-1.jpg',
    date: 'April 11, 2025',
    readTime: '7 min read',
    url: '/blogs/luxury-living-trends-in-2025-what-buyers-really-want',
  },
];

function BlogAbstractSection() {
  return (
    <section id="Blog" className="blog-section py-10 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SectionBadge className="mb-4">Share Our Insights</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 section-heading">
            Explore the Market. Learn from Experts. Make Smarter Moves.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 blogs-list">
          {blogs.map((blog, idx) => (
            <Link
              to={blog.url}
              key={idx}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col blog-item"
            >
              <div className="blog-image-wrap w-full h-56 md:h-64 lg:h-72 overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="blog-info-wrap flex-1 flex flex-col p-6">
                <div className="blog-title mb-2">
                  <div className="text-gray-700 font-bold text-lg md:text-xl leading-snug line-clamp-2">
                    {blog.title}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1 blog-publish">
                    <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 256 256"><path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160z"></path></svg>
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1 blog-read-time">
                    <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 256 256"><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"></path></svg>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <ThirdButton to="/blog">View All Articles</ThirdButton>
        </div>
      </div>
    </section>
  );
}

export default BlogAbstractSection; 