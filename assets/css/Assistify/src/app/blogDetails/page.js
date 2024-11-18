'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function BlogDetails() {
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

      <div className='blog-d-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='blog-d-hero'>
                <Image
                  src='/img/blog-details.png'
                  className='blog-details w-full h-full'
                  width={1290}
                  height={684}
                  alt=''
                  data-aos='fade-up'
                  data-aos-duration='1000'
                />
                <div data-aos='fade-up' data-aos-duration='1000'>
                  <Link href='integrations.html'>Artificial Intelligence</Link>
                </div>
                <h2 data-aos='fade-up' data-aos-duration='1000'>
                  Enhance Personalization with AI-Driven CRM Emails
                </h2>
                <div
                  className='card-date'
                  style={{ marginBottom: 0 }}
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <h6>Brooklyn Simmons</h6>
                  <svg
                    width='2'
                    height='2'
                    viewBox='0 0 2 2'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.374 1.862C1.194 1.862 1.04 1.802 0.912 1.682C0.784 1.558 0.72 1.404 0.72 1.22C0.72 1.036 0.784 0.884 0.912 0.764C1.04 0.64 1.194 0.578 1.374 0.578C1.546 0.578 1.692 0.64 1.812 0.764C1.936 0.884 1.998 1.036 1.998 1.22C1.998 1.404 1.936 1.558 1.812 1.682C1.692 1.802 1.546 1.862 1.374 1.862Z'
                      fill='#A6A6C9'
                    />
                  </svg>
                  <p style={{ margin: 0 }}>February 23, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='blog-area mb-96'>
        <div className='container'>
          <div className='blog-content'>
            <div className='blog-text'>
              <p data-aos='fade-up' data-aos-duration='1000'>
                In the world of business, finding potential customers, also
                known as leads, is crucial. These leads can turn into{' '}
                <br className='' />
                real customers and help your business grow. However, finding
                good leads can be challenging.
              </p>
              <p className='pt-16' data-aos='fade-up' data-aos-duration='1000'>
                This is where Assistify comes in. We provide a powerful tool to
                help you find millions of leads quickly and easily,
                <br className='' />
                making your job much simpler and more effective.
              </p>
              <h3 data-aos='fade-up' data-aos-duration='1000'>
                Comprehending Lead Generation
              </h3>
              <p className='pt-16' data-aos='fade-up' data-aos-duration='1000'>
                Lead generation is the process of attracting and converting
                strangers into potential customers. Its a crucial step
                <br className='' />
                in the sales funnel, helping businesses find new opportunities
                for growth.
              </p>
              <p data-aos='fade-up' data-aos-duration='1000'>
                Assistify helps you understand lead generation so you can create
                effective strategies to reach and engage your{' '}
                <br className='' />
                target audience, ultimately increasing your chances of making a
                sale.
              </p>
              <Image
                src='/img/blog1.png'
                className='blog-details w-full h-full'
                alt=''
                width={822}
                height={412}
                data-aos='fade-up'
                data-aos-duration='1000'
              />
              <h3 data-aos='fade-up' data-aos-duration='1000'>
                Understanding Lead Generation
              </h3>
              <p className='pt-16' data-aos='fade-up' data-aos-duration='1000'>
                Lead generation is the process of attracting and capturing the
                interest of potential customers. This involves{' '}
                <br className='' />
                identifying individuals who might be interested in your product
                or service and obtaining their contact <br className='' />
                information to reach out to them. Effective lead generation
                helps you find people who are more likely to make a{' '}
                <br className='' />
                purchase, boosting your sales potential.
              </p>
              <h3 data-aos='fade-up' data-aos-duration='1000'>
                The Importance of Lead Generation
              </h3>
              <p className='pt-16' data-aos='fade-up' data-aos-duration='1000'>
                Lead generation is crucial for business growth. A steady stream
                of new leads provides more opportunities to
                <br className='' />
                make sales, increasing your revenue and contributing to your
                overall success. Without effective lead generation,
                <br className='' />
                your business may struggle to find new customers and experience
                limited growth.
              </p>
              <Image
                src='/img/blog1.png'
                className='blog-details w-full h-full'
                alt=''
                width={822}
                height={412}
                data-aos='fade-up'
                data-aos-duration='1000'
              />
              <h3 data-aos='fade-up' data-aos-duration='1000'>
                Popular Lead Generation Strategies
              </h3>
              <p className='pt-16' data-aos='fade-up' data-aos-duration='1000'>
                There are many ways to generate leads. Some common strategies
                include using social media, creating engaging
                <br className='' />
                content, running online ads, and attending events where
                potential customers might be. Each strategy has its
                <br className='' />
                strengths and can help you reach different types of people
                effectively.
              </p>
              <h3 data-aos='fade-up' data-aos-duration='1000'>
                The Impact of the Assistify Lead Generation Tool
              </h3>
              <p className='pt-16' data-aos='fade-up' data-aos-duration='1000'>
                Our innovative tool simplifies the process of finding potential
                customers, making it easier than ever to connect{' '}
                <br className='' />
                with leads interested in your products or services. With
                advanced algorithms and a user-friendly interface,{' '}
                <br className='' />
                Assistify streamlines your lead generation efforts, enabling
                greater success in your sales endeavors.
              </p>
              <h3 data-aos='fade-up' data-aos-duration='1000'>
                Analyzing Your Results
              </h3>
              <p className='pt-16' data-aos='fade-up' data-aos-duration='1000'>
                Analyzing your results involves examining the data collected
                from your leads and sales to identify patterns and{' '}
                <br className='' />
                trends in your lead generation efforts
              </p>
              <p
                style={{
                  padding: '16px 0 48px 0',
                  margin: '0',
                  borderBottom: '1px solid rgb(31, 31, 50)',
                }}
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                For instance, you may discover which types of leads are more
                likely to convert into customers. This analysis{' '}
                <br className='' />
                enables you to make informed decisions to enhance your lead
                generation and sales strategies effectively.
              </p>
              <div
                className='social'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='social-btn'>
                  <Link href='blog-tag.html'>AI</Link>
                  <Link href='blog-cetegory.html'>CRM</Link>
                  <Link href='blog-author.html'>Emails</Link>
                </div>
                <div
                  className='social-icon'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <span>Share on Social</span>
                  <div className='icon'>
                    <Link href='https://www.facebook.com/DiverseKit'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H12.615V14.04H10.277V11.315H12.615V9.315C12.615 6.99 14.035 5.723 16.115 5.723C16.814 5.721 17.514 5.757 18.21 5.83V8.25H16.775C15.647 8.25 15.427 8.788 15.427 9.575V11.31H18.124L17.774 14.035H15.426V21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3Z'
                          fill='#A6A6C9'
                        />
                      </svg>
                    </Link>
                    <Link href='https://x.com/DiverseKit'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M19.633 7.99656C19.646 8.17156 19.646 8.34556 19.646 8.51956C19.646 13.8446 15.593 19.9806 8.186 19.9806C5.904 19.9806 3.784 19.3196 2 18.1716C2.324 18.2086 2.636 18.2216 2.973 18.2216C4.78599 18.2259 6.54765 17.6197 7.974 16.5006C7.13342 16.4853 6.31858 16.208 5.64324 15.7073C4.9679 15.2066 4.46578 14.5075 4.207 13.7076C4.456 13.7446 4.706 13.7696 4.968 13.7696C5.329 13.7696 5.692 13.7196 6.029 13.6326C5.11676 13.4484 4.29647 12.9539 3.70762 12.2332C3.11876 11.5126 2.79769 10.6102 2.799 9.67956V9.62956C3.336 9.92856 3.959 10.1156 4.619 10.1406C4.06609 9.77314 3.61272 9.27458 3.29934 8.68935C2.98596 8.10411 2.82231 7.45041 2.823 6.78656C2.823 6.03856 3.022 5.35256 3.371 4.75456C4.38314 5.99958 5.6455 7.01812 7.07634 7.74421C8.50717 8.47031 10.0746 8.88777 11.677 8.96956C11.615 8.66956 11.577 8.35855 11.577 8.04656C11.5767 7.51752 11.6807 6.99361 11.8831 6.5048C12.0854 6.01598 12.3821 5.57183 12.7562 5.19774C13.1303 4.82366 13.5744 4.52697 14.0632 4.32463C14.5521 4.1223 15.076 4.01829 15.605 4.01856C16.765 4.01856 17.812 4.50455 18.548 5.29056C19.4498 5.11617 20.3145 4.78698 21.104 4.31755C20.8034 5.24837 20.1738 6.03766 19.333 6.53756C20.1328 6.44633 20.9144 6.23601 21.652 5.91356C21.1011 6.71665 20.4185 7.4209 19.633 7.99656Z'
                          fill='#A6A6C9'
                        />
                      </svg>
                    </Link>
                    <Link href='https://www.linkedin.com/company/diversekitofficial/'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.98292 7.19729C6.19132 7.19729 7.17092 6.21769 7.17092 5.00929C7.17092 3.80089 6.19132 2.82129 4.98292 2.82129C3.77452 2.82129 2.79492 3.80089 2.79492 5.00929C2.79492 6.21769 3.77452 7.19729 4.98292 7.19729Z'
                          fill='#A6A6C9'
                        />
                        <path
                          d='M9.23575 8.85469V20.9937H13.0047V14.9907C13.0047 13.4067 13.3027 11.8727 15.2667 11.8727C17.2037 11.8727 17.2277 13.6837 17.2277 15.0907V20.9947H20.9988V14.3377C20.9988 11.0677 20.2948 8.55469 16.4728 8.55469C14.6378 8.55469 13.4078 9.56169 12.9047 10.5147H12.8537V8.85469H9.23575ZM3.09375 8.85469H6.86875V20.9937H3.09375V8.85469Z'
                          fill='#A6A6C9'
                        />
                      </svg>
                    </Link>
                    <Link href='mailto:hello@diversekit.com'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4ZM20 8.7L12 14.034L4 8.7V6.297L12 11.63L20 6.297V8.7Z'
                          fill='#A6A6C9'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='blog-tags'>
              <h4
                style={{
                  borderBottom: '1px solid rgb(31, 31, 50)',
                }}
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Recent Posts
              </h4>
              <Link
                href='blog-details.html'
                className='pt-16'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Automating AI-Powered Unit Test Generation...
              </Link>
              <Link
                href='blog-details.html'
                className='pt-8'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Getting Started with AI-Powered Unit Testing...
              </Link>
              <Link
                href='blog-details.html'
                className='pt-8'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Maximizing Outreach through Events, Webinar...
              </Link>
              <h4
                style={{
                  margin: '60px 0 36px 0',
                  borderBottom: '1px solid rgb(31, 31, 50)',
                }}
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Categories
              </h4>
              <div
                className='categories'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <Link href='/blog'>Artificial Intelligence</Link>
                <Link href='/blogAuthor'>Email Marketing</Link>
                <Link href='/blogCategory'>Technology</Link>
                <Link href='/blog'>Compliance</Link>
                <Link href='/blogArchive'>Developer</Link>
                <Link href='/blogAuthor'>Webinar</Link>
                <Link style={{ padding: 0 }} href='/contact'>
                  Security
                </Link>
              </div>
              <h4
                style={{
                  margin: '60px 0 36px 0',
                  borderBottom: '1px solid rgb(31, 31, 50)',
                }}
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Archives
              </h4>
              <div
                className='categories'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <Link href='/blogArchive'>June</Link>
                <Link href='/blogArchive'>May</Link>
                <Link href='/blogArchive'>April</Link>
                <Link href='/blogArchive'>March</Link>
                <Link href='/blogArchive'>February</Link>
                <Link style={{ padding: 0 }} href='blog-archive.html'>
                  January
                </Link>
              </div>
              <h4
                style={{
                  margin: '60px 0 36px 0',
                  borderBottom: '1px solid rgb(31, 31, 50)',
                }}
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Tags
              </h4>
              <div
                className='tag-btn'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='row-one'>
                  <Link href='blog-tag.html'>AI</Link>
                  <Link href='blog.html'>Chat GPT</Link>
                  <Link href='blog-cetegory.html'>CRM</Link>
                  <Link href='blog-author.html'>Sales</Link>
                </div>
                <div
                  className='row-two'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <Link href='blog.html'>Programing</Link>
                  <Link href='blog.html'>Emails</Link>
                  <Link href='contact.html'>Content</Link>
                </div>
                <div
                  className='row-three'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <Link href='blog-details.html'>Coding</Link>
                  <Link href='blog-tag.html'>Automation</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
