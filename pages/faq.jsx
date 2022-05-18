import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { gsap } from "gsap";
import { isBrowser } from "react-device-detect";
import Fade from "react-reveal/Fade";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { baseUrl } from "../config";
import Link from "next/link";

const Faq = ({ faq }) => {
  const [faqcontent, setFaqContent] = useState([]);
  const [activeContent, setActiveContent] = useState(0);
  useEffect(() => {
    gsap.from(".faqcontentwrapper", {
      opacity: 0,
    });
    gsap.to(".faqcontentwrapper", {
      opacity: 1,
      duration: 0.8,
    });
  }, []);

  useEffect(() => {
    if (faq) {
      setFaqContent(faq.result);
    }
  }, [faq]);
  return (
    <div>
      <Header />
      <main className="faqcontentwrapper mob-faq">
        <section className="visitscedule mob-faq-topwrapper py-5">
          <div className="container">
            <div className="row mob-faq-topwrapper py-5">
              <div className="col-sm-12">
                <div className="titlewraper d-flex gap justify-content-between align-items-start">
                  <Fade left>
                    <div className="textwrapper flex7 pr-3">
                      <h3 className="title fwb"> Frequently Asked Questions</h3>
                      <p className="text-muted f14">Faq</p>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="buttonwrapper d-flex textwrapper gap">
                      <Link href="/brochuredownload">
                        <a>
                          <div
                            className="btn rounded fwb px-3 py-2 btn_white"
                            onClick={() => {
                              fbq("trackCustom", "Download Brochure FAQ");
                            }}
                          >
                            <img
                              src="../images/icons/document.svg"
                              alt=""
                              className="mr-2"
                            />
                            Download Brochure
                          </div>
                        </a>
                      </Link>
                      <Link href="/requestcallback">
                        <a>
                          <div
                            className="btn btn_p fwb rounded px-3 py-2 btn_white"
                            onClick={() => {
                              fbq("trackCustom", "Request A Callback FAQ");
                            }}
                          >
                            <img
                              src="../images/icons/call.svg"
                              alt=""
                              className="mr-2"
                            />
                            Request A Call Back
                          </div>
                        </a>
                      </Link>
                    </div>
                  </Fade>
                </div>

                {faqcontent && (
                  <div className="collapseFaq buttonwrapper">
                    <Fade bottom>
                      <Accordion defaultActiveKey="1">
                        {faqcontent.map((item, index) => (
                          <div key={item.id} className={`${index + 1} faqitem`}>
                            <Accordion.Toggle
                              eventKey={index + 1}
                              className="faqtitle"
                              onClick={() => setActiveContent(index + 1)}
                            >
                              <div className="titlewrapper d-flex align-items-center justify-content-between">
                                <div className="title"> {item.title}</div>
                                {isBrowser && (
                                  <div className="icon">
                                    {activeContent === index + 1 ? (
                                      <img
                                        src="../../images/icons/minus.svg"
                                        alt=""
                                      />
                                    ) : (
                                      <img
                                        src="../../images/icons/plus.svg"
                                        alt=""
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index + 1}>
                              <div className="faqcontent">
                                {item.description}
                              </div>
                            </Accordion.Collapse>
                          </div>
                        ))}
                      </Accordion>
                    </Fade>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;

export const getStaticProps = async () => {
  const faqResponse = await fetch(`${baseUrl}/faq`);
  const faq = await faqResponse.json();

  return {
    props: {
      faq,
    },
  };
};
