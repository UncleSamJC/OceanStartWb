import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SecondaryButton from './basic/SecondaryButton';

const AchieveItem = ({ value, label }) => (
  <div className="flex flex-col gap-1 achieve-list">
    <div className="flex items-baseline achieve-number-wrap">
      <div className="text-4xl md:text-5xl font-light text-white large-text-xl">{value}</div>
      <div className="text-2xl md:text-3xl font-light text-white leading-none upper-text linehigh-small ml-1">+</div>
    </div>
    <div className="text-white text-base font-light small-text">{label}</div>
  </div>
);

const Avatar = ({ src, alt }) => (
  <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden client-avator -ml-3 first:ml-0">
    <img src={src} alt={alt} className="w-full h-full object-cover full" />
  </div>
);

const Star = () => (
  <span className="w-5 h-5 text-yellow-400 icon-size-normal-xs color-yellow inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
      <path d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" />
    </svg>
  </span>
);

function Hero() {
  const achieves = [
    { value: '200', label: 'Projects Complete' },
    { value: '70', label: 'Happy Clients' },
    { value: '$10M', label: 'Project Value' },
  ];
  const avatars = [
    { src: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784d05b514f5847cc5a7a7b_agent-1.jpg', alt: 'Agent 1' },
    { src: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784d05b154b9286f2e0dc64_agent-0.jpg', alt: 'Agent 0' },
    { src: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6789cbfc73863d34426b4fd6_agent-3.jpg', alt: 'Agent 3' },
    { src: 'https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784d0161095b45687aba4fe_agent-2.jpg', alt: 'Agent 2' },
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero-section max-w-7xl w-full min-h-screen mb-20 mx-auto pt-24 pb-10 relative">
      {/* 背景层 */}
      <div className="hero-bg-wrap absolute inset-0 w-full h-full rounded-3xl flex items-center bg-cover bg-center" style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),radial-gradient(circle,transparent,#0006),url('https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6784958c2c4ad0bc028ac10a_hero-bg-v4.jpg')",
        backgroundPosition: '0 0, 0 0, 50% 100%',
        backgroundSize: 'auto, auto, cover',
      }}>
        {/* 内容层 */}
        <div className="hero-content relative z-10 flex flex-col gap-8 items-start max-w-3xl w-4/5 px-10">
          <h1
            className={
              `hero-heading uppercase text-white text-5xl md:text-7xl font-bold leading-none
              transition-all duration-1000
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[30px]'}`
            }
          >
            Find Your Perfect Home Today
          </h1>
          <div className="hero-description w-4/5 text-white text-lg font-light">
            We provide tailored real estate solutions, guiding you through every step with personalized experiences that meet your unique needs and aspirations.
          </div>
          <SecondaryButton
            to="/products"
            text="Explore Properties"
            className="button primary w-inline-block mt-2"
          />
          <div className="achieves-wrap flex gap-10 mt-10">
            {achieves.map((item, i) => (
              <AchieveItem key={i} value={item.value} label={item.label} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
