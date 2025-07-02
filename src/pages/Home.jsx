import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhatWeOfferSection from '../components/WhatWeOfferSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import BlogAbstractSection from '../components/BlogAbstractSection';
import ThirdButton from '../components/basic/ThirdButton';

function Home() {
  return (
    <div>
      <Hero />

      <WhatWeOfferSection />

      <CTASection />

      <FAQSection />

      <BlogAbstractSection />

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Look for talented designers</h2>
          <p className="text-xl mb-1 max-w-2xl mx-auto">
            You are a talented designer? 
          </p>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
           Let's discuss how we can help transform your idea to reality.
           我在Nanaimo拥有一台专业的绣花机和印花设备，正在寻找对服饰/家居布艺/文创产品有兴趣的本地设计师合作。

✨ 我可以提供小批量打样、制作与上架服务，合作方式灵活（一次性付费、分成都可协商）
          </p>

          <ThirdButton to="/contact">Contact Us Now</ThirdButton>
        </div>
      </section>
    </div>
  );
}

export default Home; 