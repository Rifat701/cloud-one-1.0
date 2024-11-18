'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Price() {
  const [planType, setPlanType] = useState('monthly');

  const togglePricing = (type, button) => {
    if (button && button.classList) {
      const buttons = document.querySelectorAll('.pricing-tab button');
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const pricingItems = document.querySelectorAll('.pricing-item');

      pricingItems.forEach((item) => {
        const monthlyPrice = item.getAttribute('data-monthly-price');
        const yearlyPrice = item.getAttribute('data-yearly-price');
        const spanElement = item.querySelector('h4 span');
        const subElement = item.querySelector('h4 sub');

        if (type === 'monthly') {
          spanElement.textContent = monthlyPrice;
          subElement.textContent = '/m';
        } else if (type === 'yearly') {
          spanElement.textContent = yearlyPrice;
          subElement.textContent = '/y';
        }
      });
    }
  };

  const handleButtonClick = (type, button) => {
    setPlanType(type);
    togglePricing(type, button);
  };
  return (
    <div className='pricing-area'>
      <div className='container'>
        <div data-aos='fade-up' data-aos-duration='1400'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='title-2'>
                Select a <span>Pricing Plan</span>
              </h2>
              <div className='pricing-tab'>
                <button
                  className='active'
                  onClick={() => handleButtonClick('monthly', event.target)}
                >
                  Monthly
                </button>
                <button
                  onClick={() => handleButtonClick('yearly', event.target)}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
          <div className='row gy-4'>
            <div className='col-md-4'>
              <div data-aos='fade-up' data-aos-duration='1200'>
                <div
                  className='pricing-item'
                  data-monthly-price='$9'
                  data-yearly-price='$99'
                >
                  <h3>Starter</h3>
                  <p>Perfect for individuals.</p>
                  <h4>
                    <span>$9</span>
                    <sub>/m</sub>
                  </h4>
                  <p>Pause or cancel anytime</p>
                  <div className='pricing-button'>
                    <button>Start Trial</button>
                    <button>Subscribe</button>
                  </div>
                  <ul>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Team members: 1
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Users: Unlimited
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Integrations: Unlimited
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Total message: 150
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Assistants: 2
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div data-aos='fade-up' data-aos-duration='1000'>
                <div
                  className='pricing-item'
                  data-monthly-price='$29'
                  data-yearly-price='$269'
                >
                  <h3>
                    Business{' '}
                    <Image
                      src='/img/pro-btn.svg'
                      alt='pro'
                      width={92}
                      height={26}
                    />
                  </h3>
                  <p>Perfect for small businesses.</p>
                  <h4>
                    <span>$9</span>
                    <sub>/m</sub>
                  </h4>
                  <p>Pause or cancel anytime</p>
                  <div className='pricing-button'>
                    <button>Start Trial</button>
                    <button>Subscribe</button>
                  </div>
                  <ul>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Team members: 3
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Users: Unlimited
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Integrations: Unlimited
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Total message: 650
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Assistants: 5
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div data-aos='fade-up' data-aos-duration='800'>
                <div
                  className='pricing-item'
                  data-monthly-price='$59'
                  data-yearly-price='$699'
                >
                  <h3>Professional</h3>
                  <p>Perfect for larger businesses.</p>
                  <h4>
                    <span>$9</span>
                    <sub>/m</sub>
                  </h4>
                  <p>Pause or cancel anytime</p>
                  <div className='pricing-button'>
                    <button>Start Trial</button>
                    <button>Subscribe</button>
                  </div>
                  <ul>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Team members: 1
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Users: Unlimited
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Integrations: Unlimited
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Total message: 1650
                    </li>
                    <li>
                      <Image
                        src='/img/check.svg'
                        alt='check'
                        width={24}
                        height={24}
                      />
                      Assistants: 12
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
