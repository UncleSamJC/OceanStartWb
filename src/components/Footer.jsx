import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

function Footer() {
  return (
    <footer id="footer" className="bg-white">
      

      {/* Footer Links Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-wrap justify-start gap-20">
            {/* Left Side: Logo, Info, Socials */}
            <div className="w-full md:w-1/3 space-y-6">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">OS</span>
                </div>
                <span className="text-2xl font-bold text-white">OceanStar</span>
              </Link>
              <div className="space-y-2 text-gray-400">
                <p><a href="tel:+1-800-555-1234" className="hover:text-white">+1-800-111-1234</a></p>
                <p><a href="mailto:info@oceanstar.com" className="hover:text-white">info@ocean-star.com</a></p>
                <p>Woodgrove Mall, Nanaimo 11222, BC </p>
              </div>
              <div className="flex space-x-4">
                {/* Placeholder Social Icons */}
                <SocialIcon href="https://facebook.com">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </SocialIcon>
                <SocialIcon href="https://linkedin.com">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </SocialIcon>
                <SocialIcon href="https://youtube.com">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.701V8.115l6.06 3.045-6.06 4.725z" clipRule="evenodd" /></svg>
                </SocialIcon>
              </div>
            </div>

            {/* Right Side: Navigation Links */}
            <div className="w-full md:w-auto flex flex-wrap gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Navigation</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/" className="hover:text-white">Home</Link></li>
                  <li><Link to="/about" className="hover:text-white">About</Link></li>
                  <li><Link to="/products" className="hover:text-white">Products</Link></li>
                  <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>© Copyright {new Date().getFullYear()}. All Rights Reserved by OceanStar</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;  