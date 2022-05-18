import { useEffect, useState } from "react";
import { BrowserView } from "react-device-detect";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Fade from "react-reveal/Fade";

import Header from "../components/Header";
import { baseUrl } from "../config";

const ScheduleVisit = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState();

  const onSubmit = (data, e) => {
    setLoading(true);
    fetch(`${baseUrl}/scheduleavist/add`, {
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

  // useEffect(() => {
  //   fbq("trackCustom", "Schedule Page");
  // }, []);

  return (
    <div>
      <Header />
      <main>
        <section className="visitscedule mob-schedule py-5">
          <div className="container">
            <div className="row mob-schedule-topwrapper py-5">
              <div className="col-sm-8 offset-sm-2 px-5">
                <div className="titlewraper d-flex gap justify-content-between align-items-start">
                  <Fade left>
                    <div className="textwrapper flex7 pr-3">
                      <h3 className="title fwb">Schedule A Visit</h3>
                      {/* <p className="text-muted f14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p> */}
                    </div>
                  </Fade>

                  <BrowserView>
                    <Fade right>
                      <div className="buttonwrapper flex2 d-flex justify-content-end backLink textwrapper d-inline-block">
                        <Link href="/">
                          <a>
                            <div className="back btn_underlined d-inline-block f14 fwn py-2">
                              <img
                                src="../images/icons/undo.svg"
                                alt=""
                                className="mr-2"
                              />{" "}
                              Back to Home
                            </div>
                          </a>
                        </Link>
                      </div>
                    </Fade>
                  </BrowserView>
                </div>
                {!successMsg && (
                  <form onSubmit={handleSubmit(onSubmit)} className="form py-3">
                    <Fade bottom>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="input"
                              placeholder="Enter Your Name"
                              ref={register({ required: true })}
                            />
                            {errors.name && (
                              <span className="text_error">
                                Name is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="tel"
                              name="contact_no"
                              ref={register({
                                required: true,
                                minLength: 10,
                                maxLength: 10,
                              })}
                              className="input"
                              placeholder="Enter Your Contact"
                            />
                            {errors.contact_no && (
                              <span className="text_error">
                                Contact is required and must be 10 Digits
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade bottom>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input
                              name="email"
                              type="email"
                              className="input"
                              placeholder="Enter Your Email"
                              ref={register({
                                required: true,
                                pattern: /^\S+@\S+$/i,
                              })}
                            />
                            {errors.email && (
                              <span className="text_error">
                                Email is required
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade bottom>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="date"
                              name="submitted_date"
                              className="input"
                              placeholder="Schedule Date"
                              ref={register({ required: true })}
                            />
                            {errors.submitted_date && (
                              <span className="text_error">
                                Schedule Date is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="time"
                              className="input"
                              name="submitted_time"
                              ref={register({ required: true })}
                              placeholder="Enter Your Time"
                            />
                            {errors.submitted_time && (
                              <span className="text_error">
                                Time is required
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade bottom>
                      <div className="row pt-4">
                        <div className="col-sm-12">
                          <div className="buttonwrapper">
                            <button
                              onClick={() => {
                                fbq("trackCustom", "Schedule Submit Button");
                              }}
                              type="submit"
                              className="btn btn_p px-4 py-2"
                              disabled={loading}
                            >
                              {!loading && "Submit Details"}
                              {loading && "Submitting...."}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </form>
                )}
                {successMsg && (
                  <div className="textwrapper my-3 infowrapper">
                    <div
                      className="text_info f14 mb-0"
                      dangerouslySetInnerHTML={createMarkup(successMsg)}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ScheduleVisit;
