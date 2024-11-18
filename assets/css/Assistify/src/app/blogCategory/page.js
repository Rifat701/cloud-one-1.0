'use client';
import { useEffect, useCallback } from 'react';
import React from 'react';
import BlogData from '/src/data/blog.json';
import BlogCard from '../components/blogCard';
import Newsletter from '../components/Newsletter';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function BlogCategory() {
  const updateScrollPercentage = useCallback(() => {
    const percentageBar = document.querySelector('.percentage-bar');
    if (percentageBar) {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const percentage =
        Math.floor((scrollTop / (documentHeight - windowHeight)) * 100) + '%';

      percentageBar.style.width = percentage;
    }
  }, []);

  useEffect(() => {
    try {
      Aos.init({});
    } catch (error) {
      console.error('Error initializing AOS:', error);
    }

    window.addEventListener('scroll', updateScrollPercentage);
    window.addEventListener('load', updateScrollPercentage);

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
      window.removeEventListener('load', updateScrollPercentage);
    };
  }, [updateScrollPercentage]);

  return (
    <>
      <div
        className='percentage-bar'
        role='progressbar'
        aria-label='Reading progress'
      ></div>

      <div className='hero-area p-96'>
        <div className='container'>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='title'>
                  Category:
                  <span>Technology</span>
                </h1>
                <p className='mx-850 text-center'>
                  Explore the Technology category for updates on the latest tech
                  trends and innovations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='insights-area'>
        <div className='container'>
          <div className='insight-cards pt-96'>
            <div className='row'>
              {[BlogData[2], BlogData[11]].map((blog) => (
                <BlogCard
                  key={blog.id}
                  img={blog.img}
                  uName={blog.user}
                  date={blog.date}
                  title={blog.title}
                  details={blog.details}
                  btn={blog.btn}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
