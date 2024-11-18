'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Newsletter from '../components/Newsletter';
import dataBlog from '/src/data/blog.json';
import BlogCard from '../components/blogCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Blog() {
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

      <div className='hero-area pt-96 pb-96'>
        <div className='container'>
          <div data-aos='fade-up' data-aos-duration='1000'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='title'>
                  Transformative {}
                  <span>Insights</span>
                </h1>
                <p className='mx-850 text-center'>
                  Explore a wealth of transformative stories, valuable insights,
                  and expert advice designed <br className='' />
                  to revolutionize your business strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='featured-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2
                className='title-2'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Explore Our Top <span>Featured Posts</span>
              </h2>
            </div>
            <div className='col-md-12'>
              <div className='row gy-4'>
                {dataBlog.slice(0, 8).map((blog) => (
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
            <div className='col-md-12 mt-5'>
              <div
                className='slide-btn mb-48'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <Link href='#' className='slider'>
                  Previous
                </Link>
                <div className='slide-num'>
                  <Link href='#'>1</Link>
                  <Link href='#'>2</Link>
                  <Link href='#'>3</Link>
                  <Link href='#'>4</Link>
                  <Link href='#'>5</Link>
                  <Link href='#'>6</Link>
                </div>
                <Link href='#' className='slider'>
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
