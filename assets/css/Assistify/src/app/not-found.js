'use client';
import Link from 'next/link';
export const metadata = {
  title: '404 - Page Not Found',
};

export default function NotFound() {
  return (
    <div className='error-area'>
      <div className='container'>
        <div data-aos='fade-up' data-aos-duration='1000'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='title-2'>
                <span>404.</span>
              </h2>
              <h3>Page not found</h3>
              <p>
                Oops! It seems you&apos;ve ventured into uncharted territory.
                Let&apos;s guide you back on the right path.
              </p>
              <Link href='/' className='btn btn-primary'>
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
