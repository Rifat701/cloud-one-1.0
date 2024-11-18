'use client';
import { useEffect } from 'react';
import React from 'react';
import BlogData from '/src/data/blog.json';
import BlogCard from '../components/blogCard';
import Newsletter from '../components/Newsletter';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function BlogArchive() {
  useEffect(() => {
    Aos.init();

    const updateScrollPercentage = () => {
      const percentageBar = document.querySelector('.percentage-bar');
      if (percentageBar) {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const percentage =
          Math.floor((scrollTop / (documentHeight - windowHeight)) * 100) + '%';
        percentageBar.style.width = percentage;
      }
    };

    window.addEventListener('scroll', updateScrollPercentage);
    updateScrollPercentage();

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);
  return (
    <>
      <div className='percentage-bar'></div>
      <div className='hero-area p-96'>
        <div className='container'>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='title'>
                  Month:
                  <span>February</span>
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
        <div className='container' data-aos='fade-up' data-aos-duration='1000'>
          <div className='insight-cards pt-96'>
            <div className='row'>
              {[BlogData[0], BlogData[4]].map((blog) => (
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
