'use client';
import { useEffect } from 'react';
import React from 'react';
import PageHero from '../components/PageHero';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Terms() {
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
        title='Terms of'
        subtitle='Service'
        content='Last Updated: August 22, 2023'
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
                >
                  Welcome to Assistify
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillTwo'
                >
                  Account Terms
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillThree'
                >
                  Company Terms
                </button>
                <button
                  className='nav-link'
                  data-bs-toggle='pill'
                  data-bs-target='#pillFour'
                >
                  Account Activation
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
                    Welcome to Assistify
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    This Assistify Services Agreement (“Agreement”) is a legal
                    agreement between Assistify Inc. (“Assistify”, “us”, or
                    “we”) and the entity or person (“you”, “your”, or “user”)
                    who registered on the Assistify signup page to utilize our
                    hiring services, assessment services, and other business
                    solutions that may be offered by Assistify and its
                    affiliated entities (each, a “Service”). This Agreement
                    outlines the terms of service that govern your usage of the
                    Services. If any aspect of this Agreement is unclear to you,
                    please reach out to us before commencing use of the
                    Services.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Access or use of any Services is contingent upon your
                    acceptance and adherence to all stipulated terms and
                    conditions in this Agreement.
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
                    Account Terms
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    In order to access and make use of the Services, you must
                    complete the registration process for an Assistify account
                    (“Account”). Successful completion of your Account
                    registration mandates the provision of your full legal name,
                    a valid email address, and any other information marked as
                    mandatory. Assistify reserves the right to decline your
                    Account application or terminate an existing Account at our
                    sole discretion, without the obligation to provide a reason.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You must be of legal age (18 years or older) or meet the age
                    of majority in your jurisdiction, whichever is higher, to
                    open an Account and utilize the Services. By accepting
                    Services provided by Assistify, you affirm that the purpose
                    is business-related and not intended for personal,
                    household, or familial use.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You acknowledge that the email address you provide upon
                    Account creation, or any subsequent updates, will serve as
                    the primary mode of communication between you and Assistify
                    (“Primary Email Address”). Maintenance of the Primary Email
                    Address is your responsibility, and it must be capable of
                    both sending and receiving messages. Email correspondence
                    from your Primary Email Address will serve as the valid
                    means of authentication.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    The security of your password lies with you. Assistify shall
                    not be held liable for any losses or damages arising from
                    your failure to maintain the security of your Account and
                    password.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Technical assistance related to the Services is exclusively
                    available to Assistify Users. Queries regarding the Terms of
                    Service should be directed to Assistify Support.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You agree not to reproduce, duplicate, copy, sell, resell,
                    or exploit any part of the Service, the Services&apos; use,
                    or access without explicit written permission from
                    Assistify. You also agree not to circumvent, work around, or
                    bypass technical limitations of the Services, nor to utilize
                    tools to activate disabled features or functionalities, or
                    engage in decompiling, disassembling, or reverse engineering
                    the Services. Accessing the Services or monitoring materials
                    or information using automated means like robots, spiders,
                    or scrapers is prohibited.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You understand that your Materials may be transmitted
                    without encryption and may involve (a) transmission across
                    diverse networks and (b) adjustments to comply with
                    technical requisites of connected networks or devices.
                    “Materials” refer to Your Trademarks, copyrighted content,
                    any products or services offered via the Services (including
                    descriptions and prices), as well as any photos, images,
                    videos, graphics, textual content, audio files, code,
                    information, or other data supplied by you or your
                    affiliates to Assistify or its affiliates.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Company Terms
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    To establish a new company through your Assistify account,
                    you must provide: organization location details, a valid
                    email address, and any other mandatory information.
                    Assistify retains the right to reject organization
                    applications or terminate existing organizations at our sole
                    discretion, without the need for explanation.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Account Activation
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    The individual signing up for the Service by creating an
                    Account will be considered the contracting party (“Company
                    Owner”) for the purpose of our Terms of Service and will be
                    authorized to utilize any corresponding Account provided to
                    the Company Owner in connection with the Service. Ensuring
                    the visibility of the Company Owner&apos;s name (including
                    the legal name of the owning company, if applicable) on the
                    company&apos;s website is your responsibility.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you are registering for the Services on behalf of your
                    employer, your employer shall be deemed the organization
                    Owner. If registering for the Services on behalf of your
                    employer, you must use your employer-issued email address,
                    and you confirm that you possess the authority to bind your
                    employer to our Terms of Service.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    An Assistify company can only be affiliated with a single
                    Company Owner. A Company Owner may have multiple Assistify
                    companies. “Company” refers to the online company (whether
                    hosted on Assistify&apos;s platform or a third-party
                    website) or physical retail location(s) linked to the
                    Account.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillTwo' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Welcome to Assistify
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    This Assistify Services Agreement (“Agreement”) is a legal
                    agreement between Assistify Inc. (“Assistify”, “us”, or
                    “we”) and the entity or person (“you”, “your”, or “user”)
                    who registered on the Assistify signup page to utilize our
                    hiring services, assessment services, and other business
                    solutions that may be offered by Assistify and its
                    affiliated entities (each, a “Service”). This Agreement
                    outlines the terms of service that govern your usage of the
                    Services. If any aspect of this Agreement is unclear to you,
                    please reach out to us before commencing use of the
                    Services.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Access or use of any Services is contingent upon your
                    acceptance and adherence to all stipulated terms and
                    conditions in this Agreement.
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
                    Account Terms
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    In order to access and make use of the Services, you must
                    complete the registration process for an Assistify account
                    (“Account”). Successful completion of your Account
                    registration mandates the provision of your full legal name,
                    a valid email address, and any other information marked as
                    mandatory. Assistify reserves the right to decline your
                    Account application or terminate an existing Account at our
                    sole discretion, without the obligation to provide a reason.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You must be of legal age (18 years or older) or meet the age
                    of majority in your jurisdiction, whichever is higher, to
                    open an Account and utilize the Services. By accepting
                    Services provided by Assistify, you affirm that the purpose
                    is business-related and not intended for personal,
                    household, or familial use.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You acknowledge that the email address you provide upon
                    Account creation, or any subsequent updates, will serve as
                    the primary mode of communication between you and Assistify
                    (“Primary Email Address”). Maintenance of the Primary Email
                    Address is your responsibility, and it must be capable of
                    both sending and receiving messages. Email correspondence
                    from your Primary Email Address will serve as the valid
                    means of authentication.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    The security of your password lies with you. Assistify shall
                    not be held liable for any losses or damages arising from
                    your failure to maintain the security of your Account and
                    password.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Technical assistance related to the Services is exclusively
                    available to Assistify Users. Queries regarding the Terms of
                    Service should be directed to Assistify Support.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You agree not to reproduce, duplicate, copy, sell, resell,
                    or exploit any part of the Service, the Services&apos; use,
                    or access without explicit written permission from
                    Assistify. You also agree not to circumvent, work around, or
                    bypass technical limitations of the Services, nor to utilize
                    tools to activate disabled features or functionalities, or
                    engage in decompiling, disassembling, or reverse engineering
                    the Services. Accessing the Services or monitoring materials
                    or information using automated means like robots, spiders,
                    or scrapers is prohibited.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You understand that your Materials may be transmitted
                    without encryption and may involve (a) transmission across
                    diverse networks and (b) adjustments to comply with
                    technical requisites of connected networks or devices.
                    “Materials” refer to Your Trademarks, copyrighted content,
                    any products or services offered via the Services (including
                    descriptions and prices), as well as any photos, images,
                    videos, graphics, textual content, audio files, code,
                    information, or other data supplied by you or your
                    affiliates to Assistify or its affiliates.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Company Terms
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    To establish a new company through your Assistify account,
                    you must provide: organization location details, a valid
                    email address, and any other mandatory information.
                    Assistify retains the right to reject organization
                    applications or terminate existing organizations at our sole
                    discretion, without the need for explanation.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Account Activation
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    The individual signing up for the Service by creating an
                    Account will be considered the contracting party (“Company
                    Owner”) for the purpose of our Terms of Service and will be
                    authorized to utilize any corresponding Account provided to
                    the Company Owner in connection with the Service. Ensuring
                    the visibility of the Company Owner&apos;s name (including
                    the legal name of the owning company, if applicable) on the
                    company&apos;s website is your responsibility.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you are registering for the Services on behalf of your
                    employer, your employer shall be deemed the organization
                    Owner. If registering for the Services on behalf of your
                    employer, you must use your employer-issued email address,
                    and you confirm that you possess the authority to bind your
                    employer to our Terms of Service.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    An Assistify company can only be affiliated with a single
                    Company Owner. A Company Owner may have multiple Assistify
                    companies. “Company” refers to the online company (whether
                    hosted on Assistify&apos;s platform or a third-party
                    website) or physical retail location(s) linked to the
                    Account.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillThree' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Welcome to Assistify
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    This Assistify Services Agreement (“Agreement”) is a legal
                    agreement between Assistify Inc. (“Assistify”, “us”, or
                    “we”) and the entity or person (“you”, “your”, or “user”)
                    who registered on the Assistify signup page to utilize our
                    hiring services, assessment services, and other business
                    solutions that may be offered by Assistify and its
                    affiliated entities (each, a “Service”). This Agreement
                    outlines the terms of service that govern your usage of the
                    Services. If any aspect of this Agreement is unclear to you,
                    please reach out to us before commencing use of the
                    Services.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Access or use of any Services is contingent upon your
                    acceptance and adherence to all stipulated terms and
                    conditions in this Agreement.
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
                    Account Terms
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    In order to access and make use of the Services, you must
                    complete the registration process for an Assistify account
                    (“Account”). Successful completion of your Account
                    registration mandates the provision of your full legal name,
                    a valid email address, and any other information marked as
                    mandatory. Assistify reserves the right to decline your
                    Account application or terminate an existing Account at our
                    sole discretion, without the obligation to provide a reason.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You must be of legal age (18 years or older) or meet the age
                    of majority in your jurisdiction, whichever is higher, to
                    open an Account and utilize the Services. By accepting
                    Services provided by Assistify, you affirm that the purpose
                    is business-related and not intended for personal,
                    household, or familial use.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You acknowledge that the email address you provide upon
                    Account creation, or any subsequent updates, will serve as
                    the primary mode of communication between you and Assistify
                    (“Primary Email Address”). Maintenance of the Primary Email
                    Address is your responsibility, and it must be capable of
                    both sending and receiving messages. Email correspondence
                    from your Primary Email Address will serve as the valid
                    means of authentication.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    The security of your password lies with you. Assistify shall
                    not be held liable for any losses or damages arising from
                    your failure to maintain the security of your Account and
                    password.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Technical assistance related to the Services is exclusively
                    available to Assistify Users. Queries regarding the Terms of
                    Service should be directed to Assistify Support.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You agree not to reproduce, duplicate, copy, sell, resell,
                    or exploit any part of the Service, the Services&apos; use,
                    or access without explicit written permission from
                    Assistify. You also agree not to circumvent, work around, or
                    bypass technical limitations of the Services, nor to utilize
                    tools to activate disabled features or functionalities, or
                    engage in decompiling, disassembling, or reverse engineering
                    the Services. Accessing the Services or monitoring materials
                    or information using automated means like robots, spiders,
                    or scrapers is prohibited.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You understand that your Materials may be transmitted
                    without encryption and may involve (a) transmission across
                    diverse networks and (b) adjustments to comply with
                    technical requisites of connected networks or devices.
                    “Materials” refer to Your Trademarks, copyrighted content,
                    any products or services offered via the Services (including
                    descriptions and prices), as well as any photos, images,
                    videos, graphics, textual content, audio files, code,
                    information, or other data supplied by you or your
                    affiliates to Assistify or its affiliates.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Company Terms
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    To establish a new company through your Assistify account,
                    you must provide: organization location details, a valid
                    email address, and any other mandatory information.
                    Assistify retains the right to reject organization
                    applications or terminate existing organizations at our sole
                    discretion, without the need for explanation.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Account Activation
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    The individual signing up for the Service by creating an
                    Account will be considered the contracting party (“Company
                    Owner”) for the purpose of our Terms of Service and will be
                    authorized to utilize any corresponding Account provided to
                    the Company Owner in connection with the Service. Ensuring
                    the visibility of the Company Owner&apos;s name (including
                    the legal name of the owning company, if applicable) on the
                    company&apos;s website is your responsibility.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you are registering for the Services on behalf of your
                    employer, your employer shall be deemed the organization
                    Owner. If registering for the Services on behalf of your
                    employer, you must use your employer-issued email address,
                    and you confirm that you possess the authority to bind your
                    employer to our Terms of Service.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    An Assistify company can only be affiliated with a single
                    Company Owner. A Company Owner may have multiple Assistify
                    companies. “Company” refers to the online company (whether
                    hosted on Assistify&apos;s platform or a third-party
                    website) or physical retail location(s) linked to the
                    Account.
                  </p>
                </div>
                <div className='tab-pane fade' id='pillFour' role='tabpanel'>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Welcome to Assistify
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    This Assistify Services Agreement (“Agreement”) is a legal
                    agreement between Assistify Inc. (“Assistify”, “us”, or
                    “we”) and the entity or person (“you”, “your”, or “user”)
                    who registered on the Assistify signup page to utilize our
                    hiring services, assessment services, and other business
                    solutions that may be offered by Assistify and its
                    affiliated entities (each, a “Service”). This Agreement
                    outlines the terms of service that govern your usage of the
                    Services. If any aspect of this Agreement is unclear to you,
                    please reach out to us before commencing use of the
                    Services.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Access or use of any Services is contingent upon your
                    acceptance and adherence to all stipulated terms and
                    conditions in this Agreement.
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
                    Account Terms
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    In order to access and make use of the Services, you must
                    complete the registration process for an Assistify account
                    (“Account”). Successful completion of your Account
                    registration mandates the provision of your full legal name,
                    a valid email address, and any other information marked as
                    mandatory. Assistify reserves the right to decline your
                    Account application or terminate an existing Account at our
                    sole discretion, without the obligation to provide a reason.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You must be of legal age (18 years or older) or meet the age
                    of majority in your jurisdiction, whichever is higher, to
                    open an Account and utilize the Services. By accepting
                    Services provided by Assistify, you affirm that the purpose
                    is business-related and not intended for personal,
                    household, or familial use.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You acknowledge that the email address you provide upon
                    Account creation, or any subsequent updates, will serve as
                    the primary mode of communication between you and Assistify
                    (“Primary Email Address”). Maintenance of the Primary Email
                    Address is your responsibility, and it must be capable of
                    both sending and receiving messages. Email correspondence
                    from your Primary Email Address will serve as the valid
                    means of authentication.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    The security of your password lies with you. Assistify shall
                    not be held liable for any losses or damages arising from
                    your failure to maintain the security of your Account and
                    password.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    Technical assistance related to the Services is exclusively
                    available to Assistify Users. Queries regarding the Terms of
                    Service should be directed to Assistify Support.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You agree not to reproduce, duplicate, copy, sell, resell,
                    or exploit any part of the Service, the Services&apos; use,
                    or access without explicit written permission from
                    Assistify. You also agree not to circumvent, work around, or
                    bypass technical limitations of the Services, nor to utilize
                    tools to activate disabled features or functionalities, or
                    engage in decompiling, disassembling, or reverse engineering
                    the Services. Accessing the Services or monitoring materials
                    or information using automated means like robots, spiders,
                    or scrapers is prohibited.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    You understand that your Materials may be transmitted
                    without encryption and may involve (a) transmission across
                    diverse networks and (b) adjustments to comply with
                    technical requisites of connected networks or devices.
                    “Materials” refer to Your Trademarks, copyrighted content,
                    any products or services offered via the Services (including
                    descriptions and prices), as well as any photos, images,
                    videos, graphics, textual content, audio files, code,
                    information, or other data supplied by you or your
                    affiliates to Assistify or its affiliates.
                  </p>

                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Company Terms
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    To establish a new company through your Assistify account,
                    you must provide: organization location details, a valid
                    email address, and any other mandatory information.
                    Assistify retains the right to reject organization
                    applications or terminate existing organizations at our sole
                    discretion, without the need for explanation.
                  </p>
                  <h3 data-aos='fade-up' data-aos-duration='1000'>
                    Account Activation
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>
                    The individual signing up for the Service by creating an
                    Account will be considered the contracting party (“Company
                    Owner”) for the purpose of our Terms of Service and will be
                    authorized to utilize any corresponding Account provided to
                    the Company Owner in connection with the Service. Ensuring
                    the visibility of the Company Owner&apos;s name (including
                    the legal name of the owning company, if applicable) on the
                    company&apos;s website is your responsibility.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    If you are registering for the Services on behalf of your
                    employer, your employer shall be deemed the organization
                    Owner. If registering for the Services on behalf of your
                    employer, you must use your employer-issued email address,
                    and you confirm that you possess the authority to bind your
                    employer to our Terms of Service.
                  </p>

                  <p data-aos='fade-up' data-aos-duration='1000'>
                    An Assistify company can only be affiliated with a single
                    Company Owner. A Company Owner may have multiple Assistify
                    companies. “Company” refers to the online company (whether
                    hosted on Assistify&apos;s platform or a third-party
                    website) or physical retail location(s) linked to the
                    Account.
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
