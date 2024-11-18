'use client';
import { useEffect } from 'react';
import React from 'react';
import BlogCard from '../components/blogCard';
import BlogData from '/src/data/blog.json';
import Newsletter from '../components/Newsletter';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function BlogTag() {
  useEffect(() => {
    Aos.init({});

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

      <div className='hero-area pb-96 pt-96'>
        <div className='container'>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='title'>
                  Tag:
                  <span>AI</span>
                </h1>
                <p className='mx-850 text-center'>
                  Discover articles tagged AI for the latest trends and insights
                  in artificial intelligence.
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
              {BlogData && BlogData.length >= 11 ? (
                [BlogData[9], BlogData[10]].map((blog) => (
                  <BlogCard
                    key={blog.id}
                    img={blog.img}
                    uName={blog.user}
                    date={blog.date}
                    title={blog.title}
                    details={blog.details}
                    btn={blog.btn}
                  />
                ))
              ) : (
                <p>No blog posts found</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
