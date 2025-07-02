import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { trackBlogRead } from "../lib/analytics";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const fetchBlogBySlug = async (blogSlug) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", blogSlug)
        .eq("status", "published")
        .single();

      if (error) {
        throw error;
      }

      if (!data) {
        throw new Error("Blog post not found");
      }

      setBlog({
        id: data.id,
        title: data.title,
        content: data.content,
        image: data.image_url,
        publishDate: formatDate(data.publish_date),
        readTime: data.read_time,
        slug: data.slug,
        excerpt: data.excerpt,
        author: data.author,
        tags: data.tags || [],
      });

      trackBlogRead(data.title);

      fetchRelatedBlogs(data.id);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError(
        error.message === "Blog post not found"
          ? "Blog post not found"
          : "Failed to load blog post"
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedBlogs = async (currentBlogId) => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, image_url, publish_date, read_time, excerpt")
        .eq("status", "published")
        .neq("id", currentBlogId)
        .order("publish_date", { ascending: false })
        .limit(3);

      if (error) throw error;

      const transformedBlogs =
        data?.map((blog) => ({
          id: blog.id,
          title: blog.title,
          slug: blog.slug,
          image: blog.image_url,
          publishDate: formatDate(blog.publish_date),
          readTime: blog.read_time,
          excerpt: blog.excerpt,
        })) || [];

      setRelatedBlogs(transformedBlogs);
    } catch (error) {
      console.error("Error fetching related blogs:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlogBySlug(slug);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Oops!</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-20 bg-gradient-to-r from-gray-400 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">

          {/* Blog Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {blog.title}
          </h1>

          {/* Blog Meta */}
          <div className="flex items-center justify-center gap-6 mb-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160z" />
              </svg>
              <span>{blog.publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8" />
              </svg>
              <span>{blog.readTime} min read</span>
            </div>
            {blog.author && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z" />
                </svg>
                <span>{blog.author}</span>
              </div>
            )}
          </div>

          {/* Blog Excerpt */}
          {blog.excerpt && (
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {blog.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {blog.image && (
        <section className="px-4 md:px-20 mt-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div
              className="blog-content text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </section>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <section className="pb-16 px-4 md:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 px-4 md:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <article
                  key={relatedBlog.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <Link to={`/blog/${relatedBlog.slug}`} className="block">
                    {/* Related Blog Image */}
                    <div className="overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Related Blog Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                        {relatedBlog.title}
                      </h3>
                      {relatedBlog.excerpt && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {relatedBlog.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{relatedBlog.publishDate}</span>
                        <span>{relatedBlog.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Our expert team is here to guide you through every step of your
            property journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Today
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;
