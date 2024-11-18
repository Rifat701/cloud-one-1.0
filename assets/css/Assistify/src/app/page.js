'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Brand from './components/Brand';
import Faq from './components/Faq';
import FeatureItem from './components/FeatureItem';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Solution from './components/Solution';
import Price from './components/Pricing';
import Link from 'next/link';
import blogData from '/src/data/blog.json';
import BlogCard from './components/blogCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
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
      <div className="percentage-bar"></div>
      <Hero />
      <Brand />
      <div className="feature-area mt-192">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-md-12">
              <h2 className="title-2">
                Elevate Your Productivity <span>to New Heights</span>
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <FeatureItem
              img="1"
              title="Skilled Companion"
              content="Save time with automated information retrieval, eliminating the need for manual searches or team inquiries."
            />
            <FeatureItem
              img="2"
              title="Service Bot"
              content="Link integrations, sync spreadsheets, or upload documents to instantly engage
              with the chatbot."
            />
            <FeatureItem
              img="3"
              title="Smart Helper"
              content="Your assistant learns from your responses and grows more intelligent, evolving into your ultimate know-it-all helper."
            />
          </div>
        </div>
      </div>
      <Solution />
      <Price />
      <Faq />

      <div className="insights-area">
        <div className="container">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-center insight-heading">
              Receive The Best <span>Insights</span>
            </h2>
            <div className="insight-cards">
              <div className="row">
                {[blogData[0], blogData[8]].map((blog) => (
                  <BlogCard
                    key={blog.id}
                    id={blog.id}
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
            <div className="load-btn">
              <Link href="/blog" className="btn btn-primary">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
