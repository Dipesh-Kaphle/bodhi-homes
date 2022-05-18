import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import Fade from "react-reveal/Fade";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { baseUrl } from "../config";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [setting, setSetting] = useState([]);
  const [successMsg, setSuccessMsg] = useState();

  const onSubmit = (data, e) => {
    setLoading(true);
    fetch(`${baseUrl}/contact/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        setSuccessMsg(res.message);
        setLoading(false);
        e.target.reset();
      });
  };

  const createMarkup = (html) => {
    return { __html: html };
  };

  useEffect(() => {
    setSuccessMsg();
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/setting`)
      .then((res) => res.json())
      .then(
        (result) => {
          setSetting(result[0]);
        },
        (error) => {}
      );
  }, []);

  useEffect(() => {
    gsap.from(".mob-contact", {
      opacity: 0,
    });
    gsap.to(".mob-contact", {
      opacity: 1,
      duration: 0.8,
    });
  }, []);

  return (
    <div>
      <Header />
      <main className="mob-contact">
        <section className="visitscedule mob-contact-topwrapper py-5">
          <div className="container">
            <div className="row mob-contact-topwrapper py-5">
              <div className="col-sm-12">
                <div className="titlewraper d-flex gap justify-content-between align-items-start">
                  <div className="textwrapper flex7 pr-3">
                    <Fade left>
                      <h3 className="title fwb">Contact Us</h3>
                    </Fade>
                    <Fade left>
                      <div
                        className="text-muted f14"
                        dangerouslySetInnerHTML={createMarkup(
                          setting.contact_us_txt
                        )}
                      ></div>
                    </Fade>
                    <Fade left>
                      <div className="contacts textwrapper  mob-contact-contacts d-flex gap py-3">
                        <div className="contact fwb">
                          <img
                            src="../images/icons/phone.svg"
                            className="mr-2"
                            alt=""
                          />
                          {setting.mobile_no}
                        </div>
                        <div className="contact fwb">
                          <img
                            src="../images/icons/email.svg"
                            className="mr-2"
                            alt=""
                          />
                          {setting.email}
                        </div>
                        <div className="contact fwb">
                          <img
                            src="../images/icons/pin.svg"
                            className="mr-2"
                            alt=""
                          />
                          {setting.address}
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="buttonwrapper flex2 d-flex justify-content-end backLink textwrapper d-inline-block">
                    <div className="back btn_underlined d-inline-block f14 fwn py-2">
                      <img
                        src="../images/icons/undo.svg"
                        alt=""
                        className="mr-2"
                      />{" "}
                      Back to Home
                    </div>
                  </div>
                </div>
                <div className="contactwrapper py-3">
                  <div className="row">
                    <div className="col-sm-6">
                      <Fade left>
                        <div className="mapwrapper">
                          <iframe
                            title="googlemaps"
                            src={setting.map_detail}
                            className="mapdesign"
                            allowFullScreen=""
                            loading="lazy"
                          ></iframe>
                        </div>
                      </Fade>
                    </div>
                    <div className="col-sm-6">
                      <Fade right>
                        <div className="textwrapper">
                          <h3 className="title f24 fwb">Let's Talk</h3>
                        </div>
                      </Fade>
                      <Fade right>
                        <>
                          {!successMsg && (
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="form py-3"
                            >
                              <div className="row mb-2">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="input"
                                      name="name"
                                      placeholder="Enter Your Name"
                                      ref={register({ required: true })}
                                    />
                                    {errors.name && (
                                      <span className="text_error">
                                        This field is required
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <input
                                      type="number"
                                      className="input"
                                      name="mobile"
                                      placeholder="Enter Your Contact"
                                      ref={register({
                                        required: true,
                                        minLength: 10,
                                        maxLength: 10,
                                      })}
                                    />
                                    {errors.mobile && (
                                      <span className="text_error">
                                        Conact Number is required and must be 10
                                        Digits.
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="form-group">
                                    <textarea
                                      name="message"
                                      id=""
                                      ref={register({ required: true })}
                                      cols=""
                                      rows="5"
                                      className="input"
                                      placeholder="Your Message"
                                    ></textarea>
                                    {errors.message && (
                                      <span className="text_error">
                                        Message is required
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row pt-4">
                                <div className="col-sm-12">
                                  <div className="buttonwrapper">
                                    <button
                                      className="btn btn_p px-4 py-2"
                                      disabled={loading}
                                    >
                                      {!loading && "Submit Details"}
                                      {loading && "Submitting...."}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          )}
                          {successMsg && (
                            <div className="textwrapper my-3 infowrapper">
                              <div
                                className="text_info f14 mb-0"
                                dangerouslySetInnerHTML={createMarkup(
                                  successMsg
                                )}
                              ></div>
                            </div>
                          )}
                        </>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
