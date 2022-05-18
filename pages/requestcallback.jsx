import { useEffect, useState } from "react";
import { BrowserView } from "react-device-detect";
import { useForm } from "react-hook-form";
import Link from "next/link";

import Header from "../components/Header";
import { baseUrl } from "../config";

const RequestCallBack = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState();

  const onSubmit = (data, e) => {
    setLoading(true);
    fetch(`${baseUrl}/callback/add`, {
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

  return (
    <div>
      <Header />
      <main className="mob-requestcallback">
        <section className="visitscedule mob-requestcallback-topwrapper py-5">
          <div className="container">
            <div className="row mob-requestcallback-fixgap py-5">
              <div className="col-sm-8 offset-sm-2 px-5">
                <div className="titlewraper d-flex gap justify-content-between align-items-start">
                  <div className="textwrapper flex7 pr-3">
                    <h3 className="title fwb">Request A Call Back</h3>
                    <p className="text-muted f14">Request callback</p>
                  </div>
                  <BrowserView>
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
                  </BrowserView>
                </div>
                {!successMsg && (
                  <form onSubmit={handleSubmit(onSubmit)} className="form py-3">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="input"
                            ref={register({ required: true })}
                            name="name"
                            placeholder="Enter Your Name"
                          />
                          {errors.name && (
                            <span className="text_error">Name is required</span>
                          )}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="input"
                            ref={register({
                              required: true,
                              minLength: 10,
                              maxLength: 10,
                            })}
                            name="mobile_no"
                            placeholder="Enter Your Contact"
                          />
                          {errors.contact && (
                            <span className="text_error">
                              Contact Number is required and must be 10 Digits
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="email"
                            ref={register({
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                            name="email"
                            className="input"
                            placeholder="Enter Your Email"
                          />
                          {errors.email && (
                            <span className="text_error">
                              Email is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row pt-4">
                      <div className="col-sm-12">
                        <div className="buttonwrapper">
                          <button
                            type="submit"
                            className="btn btn_p px-4 py-2"
                            onClick={() => {
                              fbq(
                                "trackCustom",
                                "Request A Back Submit Button"
                              );
                            }}
                            disabled={loading}
                          >
                            {loading && "Submitting..."}
                            {!loading && "Submit Details"}
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

export default RequestCallBack;
