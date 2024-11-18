'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const searchBarRef = useRef(null);
  const searchIconRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchBar = (e) => {
    e.preventDefault();
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInside =
        searchBarRef.current?.contains(event.target) ||
        searchIconRef.current?.contains(event.target);

      if (!isClickInside) {
        setIsSearchBarVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="desktop-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-2">
              <Link href="/">
                <Image src="/img/logo.svg" alt="logo" width={139} height={32} />
              </Link>
            </div>
            <div className="col-md-8">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/examples">Examples</Link>
                  </li>
                  <li>
                    <Link href="/integrations">Integrations</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blogs</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-2 text-end">
              <div className="search-icon">
                <Link href="#" onClick={toggleSearchBar} ref={searchIconRef}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_60_3824)">
                      <path
                        d="M9.5 19C4.262 19 0 14.738 0 9.5C0 4.262 4.262 0 9.5 0C14.738 0 19 4.262 19 9.5C19 14.738 14.738 19 9.5 19ZM9.5 1.5C5.089 1.5 1.5 5.089 1.5 9.5C1.5 13.911 5.089 17.5 9.5 17.5C13.911 17.5 17.5 13.911 17.5 9.5C17.5 5.089 13.911 1.5 9.5 1.5Z"
                        fill="#B3B3D0"
                      />
                      <path
                        d="M23.25 24C23.1515 24.0003 23.0539 23.9809 22.9629 23.9432C22.8719 23.9054 22.7894 23.8499 22.72 23.78L15.16 16.22C15.0903 16.1503 15.0351 16.0676 14.9974 15.9766C14.9597 15.8856 14.9402 15.788 14.9402 15.6895C14.9402 15.591 14.9597 15.4934 14.9974 15.4024C15.0351 15.3114 15.0903 15.2287 15.16 15.159C15.2297 15.0893 15.3124 15.0341 15.4034 14.9964C15.4944 14.9587 15.592 14.9393 15.6905 14.9393C15.789 14.9393 15.8866 14.9587 15.9776 14.9964C16.0686 15.0341 16.1513 15.0893 16.221 15.159L23.781 22.719C23.8861 22.8239 23.9578 22.9577 23.9868 23.1033C24.0159 23.249 24.001 23.4 23.9442 23.5372C23.8873 23.6744 23.7909 23.7916 23.6674 23.874C23.5438 23.9564 23.3985 24.0003 23.25 24Z"
                        fill="#B3B3D0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_60_3824">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
              <Link href="/contact" className="btn btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-header">
        <Link href="/">
          <Image src="/img/logo.svg" alt="logo" width={139} height={32} />
        </Link>
        <span className="mobile-menu-open-icon" onClick={toggleMobileMenu}>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                id="Vector"
                d="M12 17H19M5 12H19M5 7H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </span>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
          <strong className="mobile-menu-close-icon" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </strong>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/examples">Examples</Link>
              </li>
              <li>
                <Link href="/integrations">Integrations</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
            </ul>
          </nav>
          <Link href="/contact" className="btn btn-secondary">
            Get Started
          </Link>
          <div className="">
            <input
              className="mobile-search"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div
        ref={searchBarRef}
        className={`search-bar ${!isSearchBarVisible ? 'hidden' : ''}`}
      >
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}
