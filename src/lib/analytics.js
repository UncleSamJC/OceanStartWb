import ReactGA from 'react-ga4';

export const initGA = () => {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  } else {
    console.warn('Google Analytics Measurement ID not found');
  }
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (category, action, label = null) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

export const trackButtonClick = (buttonName, location) => {
  trackEvent('User Interaction', 'Button Click', `${buttonName} - ${location}`);
};

export const trackFormSubmission = (formName) => {
  trackEvent('Form', 'Submit', formName);
};

export const trackContactForm = (source) => {
  trackEvent('Contact', 'Form Submit', source);
};

export const trackProductView = (productName) => {
  trackEvent('Product', 'View', productName);
};

export const trackBlogRead = (blogTitle) => {
  trackEvent('Blog', 'Read', blogTitle);
};