import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { baseUrl } from "../config";

const About = () => {
  const [aboutContent, setAboutContent] = useState([]);
  const [amentities, setAmentities] = useState([]);

  // useEffect(() => {
  //   if (about) {
  //     setAboutContent(about.result[0]);
  //     setAmentities(about.result[0].amentites);
  //   }
  // }, [about]);

  useEffect(() => {
    fetch(`${baseUrl}/aboutus`)
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          setAboutContent(res.result[0]);
          setAmentities(res.result[0].amentites);
        },
        (error) => {}
      );
  }, []);

  return (
    <div>
      <Header />
      <main className="about mob-about">
        <section className="aboutcontent mob-about-topwrapper py-5">
          {aboutContent && (
            <div className="container">
              <div className="row">
                <div className="col-sm-12 pr-4">
                  <div className="textwrapper">
                    <Fade bottom>
                      <p className="text-muted text-uppercase">
                        {aboutContent.title}
                      </p>
                    </Fade>
                    <Fade bottom>
                      <h3 className="title mb-4 f26 lhb fwb mob-about-main">
                        {aboutContent.sub_title}
                      </h3>
                    </Fade>
                    <Fade bottom>
                      <p className="text-muted mob-about-paragraph">
                        {aboutContent.description}
                      </p>
                    </Fade>
                  </div>
                </div>
                {/* <div className="col-sm-4 pl-4 d-flex align-items-center">
                  <Fade right>
                    <div className="constructionwrapper mob-about-construction">
                      {aboutContent.timelines?.map((item) => (
                        <div
                          className="construction mob-about-innerconstruction"
                          key={item.id}
                        >
                          <div className="dot"></div>
                          <div className="textwrapper">
                            <p className="text-muted f14 mb-0">{item.title}</p>
                            <h3 className="title fwb f20">{item.date}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Fade>
                </div> */}
              </div>
              <div className="row imageswrapper py-3">
                <div className="col-sm-12 col-12">
                  <Fade left>
                    <div className="imagewrapper mob-about-mainimg">
                      {/* <div className="overlay">
                        <div className="playicon">
                          <img src="../images/icons/playicon.svg" alt="" />
                        </div>
                      </div> */}
                      <div className="bigimage">
                        <img
                          src={aboutContent.image}
                          alt=""
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className="col-sm-4 col-12">
                  <Fade right>
                    <div className="verticalImages d-flex flex-column gap">
                      <div className="imagewrapper">
                        <img
                          src="../images/banner.png"
                          alt=""
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="imagewrapper">
                        <img
                          src="../images/banner.png"
                          alt=""
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="row featureswrapper py-5 ">
                {amentities && (
                  <div className="col-sm-12">
                    <div className="featureswrap">
                      <div className="features">
                        <div className="titlewrap">
                          <Fade right>
                            <div className="featureTitle textwrapper flex4 px-5">
                              <div className="px-3">
                                <h3 className="f20 fwb">
                                  Bodhi Provides Quality Amenties
                                </h3>
                                <p className="text-muted m-0 text-uppercase">
                                  AMENITIES
                                </p>
                              </div>
                            </div>
                          </Fade>
                        </div>
                        {amentities.map((item) => (
                          <div className="feature textwrapper" key={item.id}>
                            <Fade bottom>
                              <div className="d-flex flex-column justify-content-between h-100">
                                <div className="icon">
                                  <img src={item.image} alt="" />
                                </div>
                                <h3 className="title mt-3 f16 fwn">
                                  {item.title}
                                </h3>
                              </div>
                            </Fade>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

// export const getStaticProps = async () => {
//   const aboutResponse = await fetch(`${baseUrl}/aboutus`);
//   const about = await aboutResponse.json();
//   return {
//     props: {
//       about,
//     },
//   };
// };
