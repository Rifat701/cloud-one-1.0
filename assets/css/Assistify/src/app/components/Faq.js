import React from 'react';

export default function Faq() {
  return (
    <div className="mx-auto faq-area mx-850 mtb-192">
      <div className="container">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-2">
                Frequently Asked <span>Questions</span>
              </h2>
              <div className="accordion" id="accordionInner">
                <div data-aos="fade-up" data-aos-duration="200">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is the limit on creating assistants?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionInner"
                    >
                      <div className="accordion-body">
                        Create as many assistants as you need! Enjoy unlimited
                        flexibility by connecting each assistant to unique
                        integrations and data sources. This allows them to cater
                        to various teams, employees, or specific use cases
                        seamlessly, with no restrictions.
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="300">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Is it possible to control the data accessible to an
                        assistant?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionInner"
                    >
                      <div className="accordion-body">
                        Create as many assistants as you need! Enjoy unlimited
                        flexibility by connecting each assistant to unique
                        integrations and data sources. This allows them to cater
                        to various teams, employees, or specific use cases
                        seamlessly, with no restrictions.
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="400">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Is it possible to personalize my assistants chat page?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionInner"
                    >
                      <div className="accordion-body">
                        Create as many assistants as you need! Enjoy unlimited
                        flexibility by connecting each assistant to unique
                        integrations and data sources. This allows them to cater
                        to various teams, employees, or specific use cases
                        seamlessly, with no restrictions.
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="500">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Whats the time frame for setting up and launching the
                        assistant?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionInner"
                    >
                      <div className="accordion-body">
                        Create as many assistants as you need! Enjoy unlimited
                        flexibility by connecting each assistant to unique
                        integrations and data sources. This allows them to cater
                        to various teams, employees, or specific use cases
                        seamlessly, with no restrictions.
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="600">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How customizable is the AI assistants interface and
                        functionality?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionInner"
                    >
                      <div className="accordion-body">
                        Create as many assistants as you need! Enjoy unlimited
                        flexibility by connecting each assistant to unique
                        integrations and data sources. This allows them to cater
                        to various teams, employees, or specific use cases
                        seamlessly, with no restrictions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
