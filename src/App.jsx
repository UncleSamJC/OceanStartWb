import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';
import Footer from './components/Footer';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/DashBoard';
import AdminBlogEditor from './pages/admin/BlogEditor';
import AdminProductEditor from './pages/admin/ProductEditor';
import AdminReviewMessages from './pages/admin/ReviewMessages';
import { initGA, trackPageView } from './lib/analytics';


function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/blogeditor" element={<AdminBlogEditor />} />
          <Route path="/admin/producteditor" element={<AdminProductEditor />} />
          <Route path="/admin/reviewmessages" element={<AdminReviewMessages />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
