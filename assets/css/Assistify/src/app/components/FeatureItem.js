import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeatureItem({ img, title, content, link }) {
  return (
    <div
      className="col-md-6 col-lg-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="feature-item">
        <Image src={`/img/icon/${img}.svg`} alt="icon" width={80} height={80} />
        <h3>{title}</h3>
        <p>{content}</p>
        {link && (
          <Link className="btn btn-secondary" href={`/${link}`}>
            View examples
          </Link>
        )}
      </div>
    </div>
  );
}
