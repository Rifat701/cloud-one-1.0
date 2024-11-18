import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Brand() {
  return (
    <div className='hero-brand '>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='col-md-12' data-aos-duration='1000'>
              <p className='text-center'>Preferred by Teams at</p>
              <ul>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/1.png'
                      alt='brand'
                      width={190}
                      height={74}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/2.png'
                      alt='brand'
                      width={190}
                      height={74}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/3.png'
                      alt='brand'
                      width={190}
                      height={74}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/4.png'
                      alt='brand'
                      width={190}
                      height={74}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/5.png'
                      alt='brand'
                      width={190}
                      height={74}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/img/brand/6.png'
                      alt='brand'
                      width={190}
                      height={74}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
