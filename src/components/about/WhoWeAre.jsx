function WhoWeAre() {
  return (
    <section className="about-section py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="about-column-wrap overflow-hidden rounded-2xl shadow-lg">
              <img
                className="w-full h-full object-cover aspect-[4/3]"
                src="https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788a87b1d5db7654ca7e7cd_group-confident-businesspeople-office.jpg"
                alt="Confident businesspeople in office"
                loading="lazy"
                sizes="(max-width: 800px) 100vw, 800px"
                srcSet="https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788a87b1d5db7654ca7e7cd_group-confident-businesspeople-office-p-500.jpg 500w, https://cdn.prod.website-files.com/6784794885cc7b8dbfb185e2/6788a87b1d5db7654ca7e7cd_group-confident-businesspeople-office.jpg 800w"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Our Vision */}
            <div className="text-wrap">
              <div className="flex items-center gap-4 mb-4">
                <div className="icon-size-medium text-gray-400 w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a leader in the real estate market, offering unparalleled services in luxury, 
                sustainability, and vacation properties. We aim to set new standards in excellence 
                and client satisfaction.
              </p>
            </div>

            {/* Expert Team */}
            <div className="text-wrap">
              <div className="flex items-center gap-4 mb-4">
                <div className="icon-size-medium text-gray-400 w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h3c.55 0 1-.45 1-1v-2c0-2.18-3.57-3.47-6.33-3.87" />
                    <circle cx="9" cy="8" r="4" fillRule="evenodd" />
                    <path fillRule="evenodd" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Expert Team</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our team comprises seasoned professionals with extensive experience in luxury real estate, 
                sustainable housing, and vacation rentals.
              </p>
            </div>

            {/* Tailored Solutions */}
            <div className="text-wrap">
              <div className="flex items-center gap-4 mb-4">
                <div className="icon-size-medium text-gray-400 w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 16c0 4.42-3.58 8-8 8c-3.26 0-6.19-1.99-7.4-5.02l-3.03-7.61a1 1 0 0 1 1.24-1.32l.79.26c.56.18 1.02.61 1.24 1.16l1.28 3.21c.08.2.26.32.46.32H8V3.25a1.25 1.25 0 0 1 2.5 0v8.25c0 .28.22.5.5.5s.5-.22.5-.5V1.25a1.25 1.25 0 0 1 2.5 0V11.5c0 .28.22.5.5.5s.5-.22.5-.5V2.75a1.25 1.25 0 0 1 2.5 0v8.75c0 .28.22.5.5.5s.5-.22.5-.5V5.75a1.25 1.25 0 0 1 2.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tailored Solutions</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We offer customized real estate services that align with your specific lifestyle 
                and investment goals, ensuring a seamless and personalized experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;