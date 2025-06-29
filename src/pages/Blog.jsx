import React from 'react';

function Blog() {
  const blogPosts = [
    {
      title: "The Future of Technology in Business",
      excerpt: "Exploring how emerging technologies are reshaping the business landscape and what it means for companies.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      title: "Building Sustainable Business Practices",
      excerpt: "A comprehensive guide to implementing sustainable practices that benefit both your business and the environment.",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Sustainability"
    },
    {
      title: "Customer Experience: The Key to Success",
      excerpt: "Understanding how exceptional customer experience drives business growth and customer loyalty.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Business"
    },
    {
      title: "Innovation Strategies for Modern Companies",
      excerpt: "Practical approaches to fostering innovation and staying competitive in today's fast-paced market.",
      date: "November 28, 2024",
      readTime: "8 min read",
      category: "Innovation"
    },
    {
      title: "Digital Transformation Best Practices",
      excerpt: "Essential strategies for successfully navigating digital transformation in your organization.",
      date: "November 20, 2024",
      readTime: "6 min read",
      category: "Digital"
    },
    {
      title: "Leadership in the Modern Workplace",
      excerpt: "Exploring effective leadership strategies for managing teams in today's dynamic work environment.",
      date: "November 15, 2024",
      readTime: "5 min read",
      category: "Leadership"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest insights, trends, and expert opinions from our team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
          Load More Articles
        </button>
      </div>
    </div>
  );
}

export default Blog; 