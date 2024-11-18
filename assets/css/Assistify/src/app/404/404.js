import Link from 'next/link';
import React from 'react';

export default function Notfound() {
  return (
    <div className="error-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title-2">
              <span>404.</span>
            </h2>
            <h3>Page not found</h3>
            <p>
              Oops! It seems you&apos;ve ventured into uncharted territory.
              Let&apos;s guide you back on the right path.
            </p>
            <Link href="/" className="btn btn-primary">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
