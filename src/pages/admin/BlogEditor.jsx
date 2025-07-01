import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { supabase } from '../../lib/supabase';

function AdminBlogEditor() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const quillRef = useRef(null);
  const quillInstance = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      status: 'published',
      author: '',
      read_time: 5,
      content: ''
    }
  });

  // Initialize Quill editor
  useEffect(() => {
    if (quillRef.current && !quillInstance.current) {
      // Clear any existing content in the ref
      quillRef.current.innerHTML = '';
      
      quillInstance.current = new Quill(quillRef.current, {
        theme: 'snow',
        placeholder: 'Write your blog post content here...',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
          ]
        }
      });

      // Update form value when content changes
      quillInstance.current.on('text-change', () => {
        const content = quillInstance.current.root.innerHTML;
        setValue('content', content);
      });
    }

    return () => {
      if (quillInstance.current) {
        // Properly destroy the Quill instance
        const toolbar = quillInstance.current.getModule('toolbar');
        if (toolbar && toolbar.container) {
          toolbar.container.remove();
        }
        quillInstance.current = null;
      }
    };
  }, [setValue]);

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Estimate read time based on content
  const estimateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('');
    setErrorMessage('');

    try {
      // Get content from Quill editor
      const content = quillInstance.current ? quillInstance.current.root.innerHTML : data.content;
      
      // Generate slug automatically from title
      const slug = generateSlug(data.title);
      
      // Estimate read time if not provided
      const readTime = data.read_time || estimateReadTime(content);

      // Prepare blog post data
      const blogData = {
        title: data.title,
        slug: slug,
        excerpt: data.excerpt,
        content: content,
        image_url: data.image_url || null,
        image_srcset: data.image_srcset || null,
        publish_date: data.publish_date || new Date().toISOString(),
        read_time: parseInt(readTime),
        author: data.author,
        status: data.status
      };

      // Insert into Supabase
      const { data: result, error } = await supabase
        .from('blog_posts')
        .insert([blogData])
        .select();

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      reset();
      
      // Clear Quill editor
      if (quillInstance.current) {
        quillInstance.current.setContents([]);
      }
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 2000);

    } catch (error) {
      console.error('Error creating blog post:', error);
      setSubmitStatus('error');
      
      // Set detailed error message
      if (error.code === '23505') {
        setErrorMessage('A blog post with this title already exists. Please choose a different title.');
      } else if (error.code === '42501') {
        setErrorMessage('You do not have permission to create blog posts. Please contact the administrator.');
      } else if (error.message) {
        setErrorMessage(`Database error: ${error.message}`);
      } else {
        setErrorMessage('An unexpected error occurred. Please check your internet connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link 
                to="/admin/dashboard"
                className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Create New Blog Post</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="ml-3">
                  <p className="text-sm text-green-800">Blog post created successfully! Redirecting to dashboard...</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <div className="flex">
                <svg className="h-5 w-5 text-red-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error creating blog post</h3>
                  <p className="text-sm text-red-700 mt-1">{errorMessage || 'An unexpected error occurred. Please try again.'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Blog Editor Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  {...register('title', { required: 'Title is required' })}
                  type="text"
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.title ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter blog post title"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                )}
              </div>

              {/* Author */}
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                  Author *
                </label>
                <input
                  {...register('author', { required: 'Author is required' })}
                  type="text"
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.author ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Author name"
                />
                {errors.author && (
                  <p className="mt-1 text-sm text-red-600">{errors.author.message}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">URL slug will be auto-generated from title</p>
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  {...register('excerpt')}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                  placeholder="Brief description of the blog post"
                />
              </div>

              {/* Content */}
              <div className="mb-6">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <div className="border border-gray-300 rounded-md overflow-hidden">
                  <div 
                    ref={quillRef}
                    style={{ minHeight: '300px' }}
                    className="bg-white"
                  />
                </div>
                <input
                  {...register('content', { required: 'Content is required' })}
                  type="hidden"
                />
                {errors.content && (
                  <p className="mt-2 text-sm text-red-600">{errors.content.message}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">Use the toolbar above to format your content</p>
              </div>

              {/* Image URLs */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    {...register('image_url')}
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label htmlFor="image_srcset" className="block text-sm font-medium text-gray-700 mb-2">
                    Image Srcset (Responsive)
                  </label>
                  <input
                    {...register('image_srcset')}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="image-400.jpg 400w, image-800.jpg 800w"
                  />
                </div>
              </div>

              {/* Settings Row */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="publish_date" className="block text-sm font-medium text-gray-700 mb-2">
                    Publish Date
                  </label>
                  <input
                    {...register('publish_date')}
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="read_time" className="block text-sm font-medium text-gray-700 mb-2">
                    Read Time (minutes)
                  </label>
                  <input
                    {...register('read_time')}
                    type="number"
                    min="1"
                    max="60"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="5"
                  />
                  <p className="mt-1 text-xs text-gray-500">Auto-calculated if empty</p>
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    {...register('status')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end space-x-4">
                <Link
                  to="/admin/dashboard"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  } transition duration-150 ease-in-out`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </>
                  ) : (
                    'Create Blog Post'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminBlogEditor;