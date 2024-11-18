'use client';
import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Price from '../components/Pricing';
import Faq from '../components/Faq';
import Brand from '../components/Brand';
import Newsletter from '../components/Newsletter';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Pricing() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      // Disable AOS on mobile for better performance
      disable: window.innerWidth < 768,
    });

    const percentageBar = document.querySelector('.percentage-bar');

    function updateScrollPercentage() {
      if (percentageBar) {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const percentage =
          Math.floor((scrollTop / (documentHeight - windowHeight)) * 100) + '%';

        percentageBar.style.width = percentage;
      }
    }

    window.addEventListener('scroll', updateScrollPercentage);
    window.addEventListener('load', updateScrollPercentage);

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
      window.removeEventListener('load', updateScrollPercentage);
    };
  }, []);
  return (
    <>
      <div className='percentage-bar'></div>
      <PageHero
        title='Pricing'
        subtitle='Plans'
        content='Join our exclusive beta program to experience Assistify for free.'
      />
      <div className='mt-192'>
        <Price />
      </div>
      <Faq />
      <div className='mb-192'>
        <Brand />
      </div>
      <Newsletter />
    </>
  );
}
