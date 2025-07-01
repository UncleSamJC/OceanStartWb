import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../../lib/supabase';
import SectionBadge from '../basic/SectionBadge';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // File validation
  const validateFile = (file) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg'];
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes

    if (!allowedTypes.includes(file.type)) {
      return 'Only PDF and JPG files are allowed';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 10MB';
    }

    return null;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileError('');
    
    if (file) {
      const error = validateFile(file);
      if (error) {
        setFileError(error);
        setUploadedFile(null);
        event.target.value = '';
      } else {
        setUploadedFile(file);
      }
    } else {
      setUploadedFile(null);
    }
  };

  // Upload file to Supabase Storage
  const uploadFileToSupabase = async (file) => {
    try {
      const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      
      const { data, error } = await supabase.storage
        .from('contact-attachments')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });
      
      if (error) {
        console.error('Storage upload error:', error);
        throw new Error(`File upload failed: ${error.message}`);
      }
      
      return data.path;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };

  // Save contact data to Supabase
  const saveContactToSupabase = async (contactData) => {
    try {
      const { data, error } = await supabase
        .from('contact_list')
        .insert([contactData])
        .select();
      
      if (error) {
        console.error('Database insert error:', error);
        throw new Error(`Failed to save contact: ${error.message}`);
      }
      
      return data;
    } catch (error) {
      console.error('Error saving contact:', error);
      throw error;
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      let fileUrl = null;
      
      // Upload file if present
      if (uploadedFile) {
        fileUrl = await uploadFileToSupabase(uploadedFile);
      }
      
      // Prepare contact data for Supabase
      const contactData = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
        attachment_url: fileUrl
      };
      
      // Save contact to Supabase
      await saveContactToSupabase(contactData);
      
      setSubmitStatus('success');
      reset();
      setUploadedFile(null);
      // Clear file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Show specific error message if available
      if (error.message) {
        console.error('Specific error:', error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section relative py-20 px-4 md:px-20">
      {/* Background Image with Overlay */}
      <div className="contact-bg-wrap absolute inset-0 z-0">
        <div className="gradient-white-top absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-white/50 z-10"></div>
        <img
          src="https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789e453099e81e883a098fd_minimalist-architecture-space-(7).jpg"
          alt="Modern architecture background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <SectionBadge className="mb-6">Get in Touch</SectionBadge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Let's Make Your Property Journey Effortless
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to take the next step? Whether you're looking to buy, rent, or invest, 
            our team is here to guide you every step of the way. Let's turn your property goals into reality.
          </p>
        </div>

        {/* Contact Form */}
        <div className="form-wrap bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700">
              Thank you! Your submission has been received!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700">
              Oops! Something went wrong while submitting the form.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register('firstName', { required: 'First name is required' })}
                  type="text"
                  placeholder="First Name"
                  className={`w-full px-4 py-3 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.firstName ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>
              
              <div>
                <input
                  {...register('lastName', { required: 'Last name is required' })}
                  type="text"
                  placeholder="Last Name"
                  className={`w-full px-4 py-3 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.lastName ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Email and Phone Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="Email"
                  className={`w-full px-4 py-3 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <textarea
                {...register('message', { required: 'Message is required' })}
                placeholder="What Can We Help You ?"
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* File Upload Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attach File (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {uploadedFile && (
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {uploadedFile.name} ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </div>
                )}
                {fileError && (
                  <p className="mt-1 text-sm text-red-600">{fileError}</p>
                )}
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Supported formats: PDF, JPG. Maximum size: 10MB
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 text-white font-semibold rounded-lg transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              }`}
            >
              {isSubmitting ? 'Please wait...' : 'Book a Call'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;