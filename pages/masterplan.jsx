import Link from "next/link";
import Fade from "react-reveal/Fade";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { baseUrl } from "../config";
import { useEffect, useState } from "react";

const MasterPlan = ({ master, neighbour }) => {
  const [setting, setSetting] = useState([]);
  // useEffect(() => {
  //   fbq("trackCustom", "Master Plan Page");
  // }, []);

  const createMarkup = (html) => {
    return { __html: html };
  };

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

  return (
    <div>
      <Header />
      <Fade right>
        <div className="calltoaction-btn">
          <div className="buttons mt-3 buttonwrapper d-flex flex-column align-items-center">
            <Link href="/brochuredownload">
              <a>
                <button
                  type="button"
                  className="btn btn_circle downloadButton btn_p"
                  title="Download Brochure"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="/images/icons/Download.svg"
                      alt="Download Button"
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                </button>
              </a>
            </Link>
            <Link href="/requestcallback">
              <a>
                <button
                  type="button"
                  className="btn btn_circle downloadButton mt-2 btn_p"
                  title="Request a Call Back"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="/images/icons/Call.svg"
                      alt="Call"
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </Fade>
      <main className="masterplan mob-masterplan">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contentwrapper py-5">
                  <Fade left>
                    <div className="content">
                      <div className="textwrapper">
                        <h3 className="title fwb">Master Plan</h3>
                      </div>
                    </div>
                  </Fade>
                  {master[0] && (
                    <Fade right>
                      <div className="content">
                        <div className="textwrapper">
                          <div
                            className="text-muted"
                            dangerouslySetInnerHTML={createMarkup(
                              setting.master_plan_txt
                            )}
                          ></div>
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[0] && (
                    <Fade bottom>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[0].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[0].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[0] && (
                    <Fade left>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[1].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[1].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  <div className="content">
                    {master[2] && (
                      <Fade right>
                        <div className="textwrapper mb-5">
                          <h3 className="title f30 fwb">{master[1].title}</h3>
                          <p className="text-muted f16">
                            {master[1].description}
                          </p>
                        </div>
                      </Fade>
                    )}
                    {master[2] && (
                      <Fade right>
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[2].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[2].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </Fade>
                    )}
                  </div>
                  {master[3] && (
                    <Fade left>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[3].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[3].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[4] && (
                    <Fade bottom>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[4].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[4].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[5] && (
                    <Fade right>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[5].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[5].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  <Fade left>
                    <div className="content">
                      <div className="textwrapper">
                        <h3 className="title fwb f20">
                          {master[5].description}
                        </h3>
                        <p className="text-muted mb-0">
                          {master[6].description}
                        </p>
                      </div>
                    </div>
                  </Fade>
                  {master[6] && (
                    <Fade bottom>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[6].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[6].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[7] && (
                    <Fade left>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[7].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[7].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[8] && (
                    <Fade bottom>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[8].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[8].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[9] && (
                    <Fade right>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[9].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[9].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[10] && (
                    <Fade left>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[10].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[10].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[11] && (
                    <Fade right>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[11].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[11].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[12] && (
                    <Fade bottom>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[12].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[12].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[13] && (
                    <Fade left>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[13].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[13].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[14] && (
                    <Fade bottom>
                      <div className="content">
                        <div className="textwrapper">
                          <h3 className="title fwb f20">{master[14].title}</h3>
                          <p className="text-muted mb-0">
                            {master[14].description}
                          </p>
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[14] && (
                    <Fade right>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[14].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[14].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[15] && (
                    <Fade right>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[15].title}
                              </h3>
                            </div>
                          </div>

                          <img
                            src={master[15].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[15] && (
                    <Fade left>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[15].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[15].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                  {master[16] && (
                    <Fade right>
                      <div className="content">
                        <div className="imagewrapper">
                          <div className="caption rounded">
                            <div className="textwrapper">
                              <h3 className="title f18 text_w">
                                {master[16].title}
                              </h3>
                            </div>
                          </div>
                          <img
                            src={master[16].image}
                            className="img-fluid rounded border-radius-15"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Fade>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="contentwrapper py-4">
                  <Fade left>
                    <div className="content">
                      <div className="textwrapper mt-3">
                        <h3 className="title fwb f30">
                          Explore Our <br />
                          Neighborhood
                        </h3>
                      </div>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="content">
                      <div className="textwrapper">
                        <div
                          className="text-muted mb-0"
                          dangerouslySetInnerHTML={createMarkup(
                            setting.neighborhood_text
                          )}
                        ></div>
                      </div>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="content imageoverlay">
                      {neighbour && (
                        <div className="row">
                          {neighbour.map((item) => (
                            <div
                              className="col-md-6 col-12 innercontent"
                              key={item.id}
                            >
                              <div className="imagewrapper mb-4">
                                <div className="overlay  rounded d-flex align-items-end">
                                  <div className="overlaycontent">
                                    <div className="icon">
                                      <img
                                        src={item.icon_image}
                                        alt=""
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="title">
                                      <div className="textwrapper">
                                        <h3 className="f18 my-3 text_w fwb">
                                          {item.title}
                                        </h3>
                                      </div>
                                    </div>
                                    <Link href={`/neighbours/${item.slug}`}>
                                      <a className="buttonwrapper">
                                        <div className="btn btn_p px-4">
                                          Explore
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                                <img
                                  src={item.image}
                                  className="rounded img-fluid rounded border-radius-15"
                                  alt=""
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Fade>
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

export default MasterPlan;

export const getStaticProps = async () => {
  const masterplanResponse = await fetch(`${baseUrl}/master-plan`);
  const master = await masterplanResponse.json();

  const neighbourRes = await fetch(`${baseUrl}/neighbourhoodList`);
  const neighbour = await neighbourRes.json();

  return {
    props: {
      master,
      neighbour,
    },
  };
};
