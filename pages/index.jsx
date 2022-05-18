import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { isBrowser } from "react-device-detect";

// import components
import Header from "../components/Header";
import SingleHome from "../components/SingleHome";
import HomeCaraousel from "../components/HomeCaraousel";
import { baseUrl } from "../config";

export default function Home({ gethouse }) {
  const [openHome, setOpenHome] = useState(false);
  const [activeHome, setActiveHome] = useState(0);
  const [housesList, setHousesList] = useState([]);
  const [currentHouse, setCurrentHouse] = useState();
  const [houseDetails, setHouseDetails] = useState();
  // const [isFav, setIsFav] = useState(false);

  // fetching single house
  const fetchSingleHouse = (slug) => {
    fetch(`${baseUrl}/singleHouse/${slug}`)
      .then((res) => res.json())
      .then((res) => {
        setHouseDetails(res.result);
      });
  };

  const clickHome = () => {
    if (!openHome) {
      if (isBrowser) {
        // main house image animation
        gsap.to(".mainImageHouse", {
          xPercent: -18,
          yPercent: 25,
          scale: 1.4,
        });

        // house name animation
        gsap.to(".homename", {
          top: "-20%",
          left: "30%",
        });

        // controls content
        gsap.to(".homescontrol", {
          y: 50,
          opacity: 0,
          display: "none",
          duration: 0.4,
        });

        // other fade down animation
        gsap.to(".fadeanimateDown", {
          y: 50,
          opacity: 0,
          duration: 0.5,
        });

        // download brochure animation
        gsap.to(".buttonAnimations", {
          opacity: 0,
          delay: 0.1,
          duration: 0.5,
          display: "none",
        });

        // button  animation
        gsap.to(".backtohomeAnimation", {
          x: 30,
          opacity: 1,
          duration: 0.5,
        });

        // love and compare button  animation
        gsap.to(".loveandcompare", {
          opacity: 1,
          duration: 0.5,
        });

        // single page content  animation
        gsap.to(".singleHomePageContent", {
          opacity: 1,
          duration: 0.5,
        });

        // scroll down
        gsap.to(".scrollDown", {
          opacity: 1,
          duration: 0.5,
        });

        // right side location
        gsap.to(".mainlocation", {
          right: "-120px",
          opacity: 0,
          duration: 0.5,
        });
      } else {
        // main house and text animation
        gsap.to(".mainBigAnimation", {
          yPercent: -80,
          duration: 1,
        });

        gsap.from(".singleHomePageContent", {
          opacity: 0,
          delay: 1,
        });

        gsap.to(".singleHomePageContent", {
          delay: 1,
          yPercent: -7,
          opacity: 1,
          duration: 1,
        });

        // house details
        gsap.to(".otherDetailsAnimation", {
          xPercent: -100,
          opacity: 0,
          // display: "none",
          duration: 1,
        });

        // location move
        gsap.to(".mainlocation", {
          right: "-120px",
          duration: 1,
          display: "none",
          opacity: 0,
        });

        // homepage other controls
        gsap.to(".homescontrol", {
          y: 50,
          opacity: 0,
          display: "none",
          duration: 0.4,
        });
      }
    } else {
      if (isBrowser) {
        // main house image animation
        gsap.to(".mainImageHouse", {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
        });
        // house name animation
        gsap.to(".homename", {
          top: "-15%",
          left: "50%",
          duration: 0.5,
        });

        // controls content animation
        gsap.to(".homescontrol", {
          y: 0,
          opacity: 1,
          display: "block",
          duration: 0.8,
        });

        // other fade down animation
        gsap.to(".fadeanimateDown", {
          y: 0,
          opacity: 1,
          duration: 0.5,
        });

        // download brochure animation
        gsap.to(".buttonAnimations", {
          opacity: 1,
          duration: 0.5,
          display: "block",
        });

        // button  animation
        gsap.to(".backtohomeAnimation", {
          x: 0,
          opacity: 0,
          duration: 0.5,
        });

        // love and compare button  animation
        gsap.to(".loveandcompare", {
          opacity: 0,
          duration: 0.5,
        });

        // single page content  animation
        gsap.to(".singleHomePageContent", {
          opacity: 0,
          duration: 0.5,
        });

        // scroll down
        gsap.to(".scrollDown", {
          opacity: 0,
          duration: 0.5,
        });

        // right side location
        gsap.to(".mainlocation", {
          right: "-70px",
          opacity: 1,
          duration: 0.5,
        });
      } else {
        // main house and text animation
        gsap.to(".mainBigAnimation", {
          yPercent: 0,
          duration: 1,
        });

        gsap.to(".singleHomePageContent", {
          yPercent: -7,
          duration: 1,
        });

        // house details
        gsap.to(".otherDetailsAnimation", {
          xPercent: 0,
          opacity: 1,
          // display: "block",
          duration: 1,
        });

        // location move
        gsap.to(".mainlocation", {
          right: "-70",
          display: "flex",
          opacity: 1,
          duration: 1,
        });

        // homepage other controls
        gsap.to(".homescontrol", {
          y: 0,
          opacity: 1,
          display: "block",
          duration: 0.4,
        });
      }
    }
    setOpenHome(!openHome);
  };

  const houseCheck = (id, slug) => {
    gsap.from(".mainImageHouse", {
      y: 0,
      opacity: 1,
    });
    gsap.to(".mainImageHouse", {
      y: 20,
      opacity: 0,
      duration: 1,
    });
    setTimeout(() => {
      setActiveHome(id);
      fetchSingleHouse(slug);
      gsap.from(".mainImageHouse", {
        y: 20,
        opacity: 0,
      });
      gsap.to(".mainImageHouse", {
        y: 0,
        opacity: 1,
        duration: 1,
      });

      gsap.from(".houseChangeAnime", {
        y: 20,
        opacity: 0,
      });
      gsap.to(".houseChangeAnime", {
        y: 0,
        opacity: 1,
        duration: 1,
      });
    }, 300);
  };

  useEffect(() => {
    setOpenHome(false);
  }, [setOpenHome]);

  useEffect(() => {
    if (openHome) {
      gsap.from(".moveDownAnimation", {
        y: -20,
        repeat: -1,
      });
      gsap.to(".moveDownAnimation", {
        y: 0,
        repeat: -1,
        duration: 1.4,
      });
    }
  }, [openHome]);

  useEffect(() => {
    if (gethouse.result) {
      // setting the list of house
      setHousesList(gethouse.result);
      // set current house as first index of the list
      setCurrentHouse(gethouse.result[0]);
      // set the description of the house as the first index of the house list
    }
  }, []);

  useEffect(() => {
    const slug = gethouse.result[0].slug;
    fetchSingleHouse(slug);
  }, []);

  return (
    <>
      <div
        className={
          !openHome ? "home mob-homepage overflow-hidden" : "home mob-homepage"
        }
      >
        <Header />
        <main className="homewrapper mob-homepage-houseColumn">
          <section className="hero mob-hero py-5">
            <div
              className="buttonwrapper backLink textwrapper d-inline-block backtohomeAnimation"
              onClick={() => clickHome()}
            >
              <Link href="/">
                <a>
                  <div className="back btn_underlined f14 fwn py-2">
                    <img
                      src="../images/icons/undo.svg"
                      alt=""
                      className="mr-2"
                      loading="lazy"
                    />
                    Back to Home
                  </div>
                </a>
              </Link>
            </div>
            {housesList && (
              <div className="container position-relative">
                <div className="mainlocation mob-mainlocation">
                  <img src="/images/icons/Location.svg" alt="" />
                  Bhairawaha, Butwal
                </div>
                <div className="loveandcompare">
                  <div className="buttons mt-3 buttonwrapper d-flex flex-column align-items-center">
                    {/* <button
                        onClick={() => setIsFav(!isFav)}
                        type="button"
                        className="btn btn_circle mb-2 d-flex align-items-center justify-content-center"
                      >
                        <span className="material-icons">
                          {!isFav ? "favorite_border" : "favorite"}
                        </span>
                      </button> */}
                    <Link href="/compare">
                      <a>
                        <button
                          type="button"
                          className="btn btn_circle mb-2"
                          title="Compare Houses"
                        >
                          <div className="d-flex justify-content-center align-items-center">
                            <img src="/images/icons/Compare.svg" alt="" />
                          </div>
                        </button>
                      </a>
                    </Link>
                    <Link href="/brochuredownload">
                      <a>
                        <button
                          type="button"
                          className="btn btn_circle downloadButton"
                          title="Download Brochure"
                          onClick={() => {
                            fbq("trackCustom", "Download Brochure Button HP 2");
                          }}
                        >
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src="/images/icons/Download.svg"
                              alt="Download Icons"
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
                          className="btn btn_circle downloadButton mt-2"
                          title="Request a Call Back"
                          onClick={() => {
                            fbq("trackCustom", "Request A Callback 1");
                          }}
                        >
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src="/images/icons/Call.svg"
                              alt=""
                              style={{ filter: "invert(1)" }}
                            />
                          </div>
                        </button>
                      </a>
                    </Link>

                    <Link href="/joinviber">
                      <a title="Join Viber">
                        <img
                          className="img-fluid joinvibercircle"
                          src="/images/viber.png"
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                {housesList.map((houseItem, index) => (
                  <div key={index}>
                    {index === activeHome && (
                      <div className="row">
                        <div className="col-sm-4 d-flex align-items-center">
                          <div className="textwrapper homedetails otherDetailsAnimation">
                            <h3 className="title fwb f40 fadeanimateDown houseChangeAnime mob-hometitle">
                              {houseItem.title}
                            </h3>
                            <p className="text-muted text-uppercase f14 fadeanimateDown houseChangeAnime mob-homeface">
                              {houseItem.face}
                            </p>
                            <div className="buttons buttonwrapper d-flex gap align-items-center buttonAnimations">
                              <Link href="/brochuredownload">
                                <a>
                                  <div
                                    className="btn btn_p px-4 py-2 mob-buttonP"
                                    onClick={() => {
                                      fbq(
                                        "trackCustom",
                                        "Download Brochure Button HP 1"
                                      );
                                    }}
                                  >
                                    <img
                                      src="/images/icons/Download.svg"
                                      alt="Download Icons"
                                      style={{ filter: "invert(1)" }}
                                    />{" "}
                                    Download Brochure
                                  </div>
                                </a>
                              </Link>
                              <button
                                type="button"
                                onClick={() => clickHome()}
                                className="btn btn_underlined mob-viewdetails"
                                title="Click Here to view details"
                              >
                                View Details
                              </button>
                            </div>
                            <div className="buttons mt-3 buttonwrapper d-flex align-items-center fadeanimateDown">
                              {/* <button
                        onClick={() => setIsFav(!isFav)}
                        type="button"
                        className="btn btn_circle mr-2 d-flex align-items-center justify-content-center"
                      >
                        <span className="material-icons">
                          {!isFav ? "favorite_border" : "favorite"}
                        </span>
                      </button> */}
                              <Link href="/compare">
                                <a>
                                  <button
                                    className="btn btn_circle"
                                    title="Compare houses"
                                  >
                                    <div className="d-flex justify-content-center align-items-center">
                                      <img
                                        src="/images/icons/Compare.svg"
                                        alt=""
                                      />
                                    </div>
                                  </button>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8 d-flex align-items-center">
                          <div className="imagewrapper bigimagewrapper mainBigAnimation">
                            <div className="textwrapper">
                              <h3 className="homename title houseChangeAnime mob-housetitle text-uppercase">
                                {houseItem.title}
                              </h3>
                            </div>
                            <div className="mainImageHouse">
                              <img
                                onClick={() => clickHome()}
                                src={houseItem.image}
                                alt=""
                                className="img-fluid bigimage mob-mainhouseimage"
                                loading="lazy"
                                title="Click Here to view details"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
          <section className="homescontrol">
            <div className="container">
              <div className="row">
                <div className="col-sm-3 col-5 d-flex align-items-end">
                  <div className="homecounter textwrapper">
                    <div className="counterlabel">
                      <span className="fwb f17">0{activeHome + 1}</span>/04
                    </div>
                    <div className="counterprogress mt-3">
                      <div
                        className="progressstatus"
                        style={{
                          width:
                            activeHome === 0
                              ? "25%"
                              : activeHome === 1
                              ? "50%"
                              : activeHome === 2
                              ? "75%"
                              : activeHome === 3
                              ? "100%"
                              : "25%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9">
                  <HomeCaraousel
                    housesList={housesList}
                    houseCheck={houseCheck}
                    activeHome={activeHome}
                    setCurrentHouse={setCurrentHouse}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="scrollDown">
          <div className="d-flex">
            <b>Scroll Down</b>
            <div className="moveDownAnimation">
              <i className="fas fa-arrow-down"></i>
            </div>
          </div>
        </div>
        <div className="singleHomePageContent">
          {openHome && (
            <SingleHome
              currentHouse={currentHouse}
              houseDetails={houseDetails}
            />
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const houseResponse = await fetch(`${baseUrl}/house`);
  const gethouse = await houseResponse.json();
  return {
    props: {
      gethouse,
    },
  };
};
