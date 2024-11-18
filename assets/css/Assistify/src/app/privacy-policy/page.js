'use client';
import { useEffect } from 'react';
import React from 'react';
import PageHero from '../components/PageHero';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Privacy() {
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
      <PageHero
        title='Privacy'
        subtitle='Policy'
        content='Thanks for using Assistify! Our Privacy Policy details how we
              handle your info. By using Assistify, you agree to these
              practices.'
      />

      <div className='policy-area mt-192'>
        <div className='container' data-aos='fade-up' data-aos-duration='1000'>
          <div className='row'>
            <div className='col-md-4'>
              <div
                className='pills-tab'
                role='tablist'
                aria-orientation='vertical'
              >
                <button
                  className='nav-link active'
                  data-bs-toggle='pill'
                  data-bs-target='#pillOne'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Information We Collect
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillTwo'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  How We Use Your Information
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillThree'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Information Sharing
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillFour'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Data Security
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillFive'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Your Choices
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillSix'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Children&apos;s Privacy
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillSeven'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Changes to Privacy Policy
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillEight'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='tab-content'>
                <div
                  className='tab-pane fade show active'
                  id='pillOne'
                  role='tabpanel'
                >
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information We Collect
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    User-Provided Information: When you create an account on
                    Assistify, we collect details like your name, email, and
                    other info you provide during registration.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Chatbot Interactions: We store the conversations you have
                    with AI chatbots created using Assistify, including text,
                    images, and media files.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Usage Data: Information on how you use Assistify, like the
                    features you interact with, frequency, duration of
                    interactions, and any errors or crashes.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Device Information: Details about the device you use to
                    access Assistify, such as device type, operating system,
                    browser, and IP address.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    How We Use Your Information
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We utilize the data you provide to craft and personalize
                    your AI chatbot experience. Analyzing usage data helps
                    enhance the performance, features, and usability of
                    Assistify. Your email address may be used to send crucial
                    notifications, updates, and promotional materials related to
                    Assistify, with the option to opt-out. Aggregated and
                    anonymized data may be employed for research and analytical
                    purposes.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information Sharing
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes. Your information may
                    be shared with service providers and partners assisting us
                    in operating and maintaining Assistify. These parties are
                    obligated to protect your information and are prohibited
                    from using it for any other purpose. Disclosure of your
                    information may occur if required by law, legal process, or
                    governmental request, or if we believe in good faith that
                    disclosure is necessary to protect our rights, your safety,
                    or the safety of others.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Data Security
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We implement reasonable security measures to safeguard your
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, it&apos;s important to
                    note that no method of transmission over the internet or
                    electronic storage is 100% secure.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Your Choices
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You can review and update your account information by
                    logging into your Assistify account. To delete your account
                    and associated data, please contact us at
                    legal@assistify.com. If you wish to opt-out of promotional
                    communications, follow the unsubscribe instructions in the
                    email.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Children&apos;s Privacy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Assistify is not intended for use by individuals under the
                    age of 13. We do not knowingly collect personal information
                    from children under 13. If you believe a child has provided
                    us with their information, please contact us at
                    legal@assistify.com.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Changes to Privacy Policy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We may update this Privacy Policy from time to time. The
                    most current version will always be available on our
                    website.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Contact Us
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal information, please
                    contact us at legal@assistify.com.
                  </p>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    By using Assistify, you agree to the terms of this Privacy
                    Policy. If you do not agree with the terms, please do not
                    use Assistify.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillTwo' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information We Collect
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    User-Provided Information: When you create an account on
                    Assistify, we collect details like your name, email, and
                    other info you provide during registration.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Chatbot Interactions: We store the conversations you have
                    with AI chatbots created using Assistify, including text,
                    images, and media files.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Usage Data: Information on how you use Assistify, like the
                    features you interact with, frequency, duration of
                    interactions, and any errors or crashes.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Device Information: Details about the device you use to
                    access Assistify, such as device type, operating system,
                    browser, and IP address.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    How We Use Your Information
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We utilize the data you provide to craft and personalize
                    your AI chatbot experience. Analyzing usage data helps
                    enhance the performance, features, and usability of
                    Assistify. Your email address may be used to send crucial
                    notifications, updates, and promotional materials related to
                    Assistify, with the option to opt-out. Aggregated and
                    anonymized data may be employed for research and analytical
                    purposes.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information Sharing
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes. Your information may
                    be shared with service providers and partners assisting us
                    in operating and maintaining Assistify. These parties are
                    obligated to protect your information and are prohibited
                    from using it for any other purpose. Disclosure of your
                    information may occur if required by law, legal process, or
                    governmental request, or if we believe in good faith that
                    disclosure is necessary to protect our rights, your safety,
                    or the safety of others.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Data Security
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We implement reasonable security measures to safeguard your
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, it&apos;s important to
                    note that no method of transmission over the internet or
                    electronic storage is 100% secure.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Your Choices
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You can review and update your account information by
                    logging into your Assistify account. To delete your account
                    and associated data, please contact us at
                    legal@assistify.com. If you wish to opt-out of promotional
                    communications, follow the unsubscribe instructions in the
                    email.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Children&apos;s Privacy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Assistify is not intended for use by individuals under the
                    age of 13. We do not knowingly collect personal information
                    from children under 13. If you believe a child has provided
                    us with their information, please contact us at
                    legal@assistify.com.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Changes to Privacy Policy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We may update this Privacy Policy from time to time. The
                    most current version will always be available on our
                    website.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Contact Us
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal information, please
                    contact us at legal@assistify.com.
                  </p>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    By using Assistify, you agree to the terms of this Privacy
                    Policy. If you do not agree with the terms, please do not
                    use Assistify.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillThree' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information We Collect
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    User-Provided Information: When you create an account on
                    Assistify, we collect details like your name, email, and
                    other info you provide during registration.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Chatbot Interactions: We store the conversations you have
                    with AI chatbots created using Assistify, including text,
                    images, and media files.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Usage Data: Information on how you use Assistify, like the
                    features you interact with, frequency, duration of
                    interactions, and any errors or crashes.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Device Information: Details about the device you use to
                    access Assistify, such as device type, operating system,
                    browser, and IP address.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    How We Use Your Information
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We utilize the data you provide to craft and personalize
                    your AI chatbot experience. Analyzing usage data helps
                    enhance the performance, features, and usability of
                    Assistify. Your email address may be used to send crucial
                    notifications, updates, and promotional materials related to
                    Assistify, with the option to opt-out. Aggregated and
                    anonymized data may be employed for research and analytical
                    purposes.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information Sharing
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes. Your information may
                    be shared with service providers and partners assisting us
                    in operating and maintaining Assistify. These parties are
                    obligated to protect your information and are prohibited
                    from using it for any other purpose. Disclosure of your
                    information may occur if required by law, legal process, or
                    governmental request, or if we believe in good faith that
                    disclosure is necessary to protect our rights, your safety,
                    or the safety of others.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Data Security
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We implement reasonable security measures to safeguard your
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, it&apos;s important to
                    note that no method of transmission over the internet or
                    electronic storage is 100% secure.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Your Choices
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You can review and update your account information by
                    logging into your Assistify account. To delete your account
                    and associated data, please contact us at
                    legal@assistify.com. If you wish to opt-out of promotional
                    communications, follow the unsubscribe instructions in the
                    email.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Children&apos;s Privacy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Assistify is not intended for use by individuals under the
                    age of 13. We do not knowingly collect personal information
                    from children under 13. If you believe a child has provided
                    us with their information, please contact us at
                    legal@assistify.com.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Changes to Privacy Policy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We may update this Privacy Policy from time to time. The
                    most current version will always be available on our
                    website.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Contact Us
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal information, please
                    contact us at legal@assistify.com.
                  </p>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    By using Assistify, you agree to the terms of this Privacy
                    Policy. If you do not agree with the terms, please do not
                    use Assistify.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillFour' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information We Collect
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    User-Provided Information: When you create an account on
                    Assistify, we collect details like your name, email, and
                    other info you provide during registration.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Chatbot Interactions: We store the conversations you have
                    with AI chatbots created using Assistify, including text,
                    images, and media files.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Usage Data: Information on how you use Assistify, like the
                    features you interact with, frequency, duration of
                    interactions, and any errors or crashes.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Device Information: Details about the device you use to
                    access Assistify, such as device type, operating system,
                    browser, and IP address.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    How We Use Your Information
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We utilize the data you provide to craft and personalize
                    your AI chatbot experience. Analyzing usage data helps
                    enhance the performance, features, and usability of
                    Assistify. Your email address may be used to send crucial
                    notifications, updates, and promotional materials related to
                    Assistify, with the option to opt-out. Aggregated and
                    anonymized data may be employed for research and analytical
                    purposes.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information Sharing
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes. Your information may
                    be shared with service providers and partners assisting us
                    in operating and maintaining Assistify. These parties are
                    obligated to protect your information and are prohibited
                    from using it for any other purpose. Disclosure of your
                    information may occur if required by law, legal process, or
                    governmental request, or if we believe in good faith that
                    disclosure is necessary to protect our rights, your safety,
                    or the safety of others.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Data Security
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We implement reasonable security measures to safeguard your
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, it&apos;s important to
                    note that no method of transmission over the internet or
                    electronic storage is 100% secure.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Your Choices
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You can review and update your account information by
                    logging into your Assistify account. To delete your account
                    and associated data, please contact us at
                    legal@assistify.com. If you wish to opt-out of promotional
                    communications, follow the unsubscribe instructions in the
                    email.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Children&apos;s Privacy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Assistify is not intended for use by individuals under the
                    age of 13. We do not knowingly collect personal information
                    from children under 13. If you believe a child has provided
                    us with their information, please contact us at
                    legal@assistify.com.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Changes to Privacy Policy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We may update this Privacy Policy from time to time. The
                    most current version will always be available on our
                    website.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Contact Us
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal information, please
                    contact us at legal@assistify.com.
                  </p>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    By using Assistify, you agree to the terms of this Privacy
                    Policy. If you do not agree with the terms, please do not
                    use Assistify.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillFive' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information We Collect
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    User-Provided Information: When you create an account on
                    Assistify, we collect details like your name, email, and
                    other info you provide during registration.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Chatbot Interactions: We store the conversations you have
                    with AI chatbots created using Assistify, including text,
                    images, and media files.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Usage Data: Information on how you use Assistify, like the
                    features you interact with, frequency, duration of
                    interactions, and any errors or crashes.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Device Information: Details about the device you use to
                    access Assistify, such as device type, operating system,
                    browser, and IP address.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    How We Use Your Information
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We utilize the data you provide to craft and personalize
                    your AI chatbot experience. Analyzing usage data helps
                    enhance the performance, features, and usability of
                    Assistify. Your email address may be used to send crucial
                    notifications, updates, and promotional materials related to
                    Assistify, with the option to opt-out. Aggregated and
                    anonymized data may be employed for research and analytical
                    purposes.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information Sharing
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes. Your information may
                    be shared with service providers and partners assisting us
                    in operating and maintaining Assistify. These parties are
                    obligated to protect your information and are prohibited
                    from using it for any other purpose. Disclosure of your
                    information may occur if required by law, legal process, or
                    governmental request, or if we believe in good faith that
                    disclosure is necessary to protect our rights, your safety,
                    or the safety of others.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Data Security
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We implement reasonable security measures to safeguard your
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, it&apos;s important to
                    note that no method of transmission over the internet or
                    electronic storage is 100% secure.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Your Choices
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You can review and update your account information by
                    logging into your Assistify account. To delete your account
                    and associated data, please contact us at
                    legal@assistify.com. If you wish to opt-out of promotional
                    communications, follow the unsubscribe instructions in the
                    email.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Children&apos;s Privacy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Assistify is not intended for use by individuals under the
                    age of 13. We do not knowingly collect personal information
                    from children under 13. If you believe a child has provided
                    us with their information, please contact us at
                    legal@assistify.com.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Changes to Privacy Policy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We may update this Privacy Policy from time to time. The
                    most current version will always be available on our
                    website.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Contact Us
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal information, please
                    contact us at legal@assistify.com.
                  </p>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    By using Assistify, you agree to the terms of this Privacy
                    Policy. If you do not agree with the terms, please do not
                    use Assistify.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillSix' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information We Collect
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    User-Provided Information: When you create an account on
                    Assistify, we collect details like your name, email, and
                    other info you provide during registration.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Chatbot Interactions: We store the conversations you have
                    with AI chatbots created using Assistify, including text,
                    images, and media files.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Usage Data: Information on how you use Assistify, like the
                    features you interact with, frequency, duration of
                    interactions, and any errors or crashes.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Device Information: Details about the device you use to
                    access Assistify, such as device type, operating system,
                    browser, and IP address.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    How We Use Your Information
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We utilize the data you provide to craft and personalize
                    your AI chatbot experience. Analyzing usage data helps
                    enhance the performance, features, and usability of
                    Assistify. Your email address may be used to send crucial
                    notifications, updates, and promotional materials related to
                    Assistify, with the option to opt-out. Aggregated and
                    anonymized data may be employed for research and analytical
                    purposes.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information Sharing
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes. Your information may
                    be shared with service providers and partners assisting us
                    in operating and maintaining Assistify. These parties are
                    obligated to protect your information and are prohibited
                    from using it for any other purpose. Disclosure of your
                    information may occur if required by law, legal process, or
                    governmental request, or if we believe in good faith that
                    disclosure is necessary to protect our rights, your safety,
                    or the safety of others.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Data Security
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We implement reasonable security measures to safeguard your
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, it&apos;s important to
                    note that no method of transmission over the internet or
                    electronic storage is 100% secure.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Your Choices
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You can review and update your account information by
                    logging into your Assistify account. To delete your account
                    and associated data, please contact us at
                    legal@assistify.com. If you wish to opt-out of promotional
                    communications, follow the unsubscribe instructions in the
                    email.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Children&apos;s Privacy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Assistify is not intended for use by individuals under the
                    age of 13. We do not knowingly collect personal information
                    from children under 13. If you believe a child has provided
                    us with their information, please contact us at
                    legal@assistify.com.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Changes to Privacy Policy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We may update this Privacy Policy from time to time. The
                    most current version will always be available on our
                    website.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Contact Us
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal information, please
                    contact us at legal@assistify.com.
                  </p>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    By using Assistify, you agree to the terms of this Privacy
                    Policy. If you do not agree with the terms, please do not
                    use Assistify.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillSeven' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information We Collect
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    User-Provided Information: When you create an account on
                    Assistify, we collect details like your name, email, and
                    other info you provide during registration.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Chatbot Interactions: We store the conversations you have
                    with AI chatbots created using Assistify, including text,
                    images, and media files.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Usage Data: Information on how you use Assistify, like the
                    features you interact with, frequency, duration of
                    interactions, and any errors or crashes.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Device Information: Details about the device you use to
                    access Assistify, such as device type, operating system,
                    browser, and IP address.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    How We Use Your Information
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We utilize the data you provide to craft and personalize
                    your AI chatbot experience. Analyzing usage data helps
                    enhance the performance, features, and usability of
                    Assistify. Your email address may be used to send crucial
                    notifications, updates, and promotional materials related to
                    Assistify, with the option to opt-out. Aggregated and
                    anonymized data may be employed for research and analytical
                    purposes.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information Sharing
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes. Your information may
                    be shared with service providers and partners assisting us
                    in operating and maintaining Assistify. These parties are
                    obligated to protect your information and are prohibited
                    from using it for any other purpose. Disclosure of your
                    information may occur if required by law, legal process, or
                    governmental request, or if we believe in good faith that
                    disclosure is necessary to protect our rights, your safety,
                    or the safety of others.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Data Security
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We implement reasonable security measures to safeguard your
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, it&apos;s important to
                    note that no method of transmission over the internet or
                    electronic storage is 100% secure.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Your Choices
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You can review and update your account information by
                    logging into your Assistify account. To delete your account
                    and associated data, please contact us at
                    legal@assistify.com. If you wish to opt-out of promotional
                    communications, follow the unsubscribe instructions in the
                    email.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Children&apos;s Privacy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Assistify is not intended for use by individuals under the
                    age of 13. We do not knowingly collect personal information
                    from children under 13. If you believe a child has provided
                    us with their information, please contact us at
                    legal@assistify.com.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Changes to Privacy Policy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We may update this Privacy Policy from time to time. The
                    most current version will always be available on our
                    website.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Contact Us
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal information, please
                    contact us at legal@assistify.com.
                  </p>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    By using Assistify, you agree to the terms of this Privacy
                    Policy. If you do not agree with the terms, please do not
                    use Assistify.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillEight' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information We Collect
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    User-Provided Information: When you create an account on
                    Assistify, we collect details like your name, email, and
                    other info you provide during registration.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Chatbot Interactions: We store the conversations you have
                    with AI chatbots created using Assistify, including text,
                    images, and media files.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Usage Data: Information on how you use Assistify, like the
                    features you interact with, frequency, duration of
                    interactions, and any errors or crashes.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Device Information: Details about the device you use to
                    access Assistify, such as device type, operating system,
                    browser, and IP address.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    How We Use Your Information
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We utilize the data you provide to craft and personalize
                    your AI chatbot experience. Analyzing usage data helps
                    enhance the performance, features, and usability of
                    Assistify. Your email address may be used to send crucial
                    notifications, updates, and promotional materials related to
                    Assistify, with the option to opt-out. Aggregated and
                    anonymized data may be employed for research and analytical
                    purposes.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Information Sharing
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes. Your information may
                    be shared with service providers and partners assisting us
                    in operating and maintaining Assistify. These parties are
                    obligated to protect your information and are prohibited
                    from using it for any other purpose. Disclosure of your
                    information may occur if required by law, legal process, or
                    governmental request, or if we believe in good faith that
                    disclosure is necessary to protect our rights, your safety,
                    or the safety of others.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Data Security
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We implement reasonable security measures to safeguard your
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, it&apos;s important to
                    note that no method of transmission over the internet or
                    electronic storage is 100% secure.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Your Choices
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You can review and update your account information by
                    logging into your Assistify account. To delete your account
                    and associated data, please contact us at
                    legal@assistify.com. If you wish to opt-out of promotional
                    communications, follow the unsubscribe instructions in the
                    email.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Children&apos;s Privacy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Assistify is not intended for use by individuals under the
                    age of 13. We do not knowingly collect personal information
                    from children under 13. If you believe a child has provided
                    us with their information, please contact us at
                    legal@assistify.com.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Changes to Privacy Policy
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    We may update this Privacy Policy from time to time. The
                    most current version will always be available on our
                    website.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Contact Us
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal information, please
                    contact us at legal@assistify.com.
                  </p>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    By using Assistify, you agree to the terms of this Privacy
                    Policy. If you do not agree with the terms, please do not
                    use Assistify.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
