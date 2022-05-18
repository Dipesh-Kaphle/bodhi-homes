import { useState, useEffect } from "react";
import { gsap } from "gsap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { baseUrl } from "../config";

const Gallery = ({ gallerylist }) => {
  // const [activeGallery, setActiveGallery] = useState(0);

  useEffect(() => {
    console.table(gallerylist);
  }, []);

  // useEffect(() => {
  //   if (gallery) {
  //     console.log(ga)
  //     setgallerylist(gallery.result);
  //   }
  // }, [gallery]);

  return (
    <div>
      <Header />
      <main className="gallery mob-gallery">
        <section className="titlearea mob-gallery-topwrapper my-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="textwrapper">
                  <h3 className="title f30 fwb">Our Gallery</h3>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="textwrapper ">
                  <p className="text-muted f16">View our gallery</p>
                </div>
              </div>
            </div>
            {gallerylist && (
              <div className="row galleryImagesExterior mt-2">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-7">
                      {gallerylist[0] && (
                        <div className="imagewrapper">
                          <img
                            src={gallerylist[0].image}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      )}
                      {gallerylist.slice(4, 8) && (
                        <div className="row">
                          {gallerylist.slice(4, 8).map((img) => (
                            <div className="col-sm-6" key={img.id}>
                              <div className="imagewrapper">
                                <img
                                  src={img.image}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="col-sm-5">
                      {gallerylist.slice(1, 4).map((img) => (
                        <div className="imagewrapper" key={img.id}>
                          <img src={img.image} className="img-fluid" alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {gallerylist[8] && (
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="imagewrapper">
                          <img
                            src={gallerylist[8].image}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    {gallerylist.slice(9, 12).map((img) => (
                      <div className="col-sm-4" key={img.id}>
                        <div className="imagewrapper">
                          <img src={img.image} className="img-fluid" alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    {gallerylist.slice(12, 14).map((img) => (
                      <div className="col-sm-6" key={img.id}>
                        <div className="imagewrapper">
                          <img src={img.image} className="img-fluid" alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                  {gallerylist[15] && (
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="imagewrapper">
                          <img
                            src={gallerylist[15].image}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    {gallerylist.slice(15, 18).map((img) => (
                      <div className="col-sm-4" key={img.id}>
                        <div className="imagewrapper">
                          <img src={img.image} className="img-fluid" alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    {gallerylist.slice(18, 21).map((img) => (
                      <div className="col-sm-4" key={img.id}>
                        <div className="imagewrapper">
                          <img src={img.image} className="img-fluid" alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    {gallerylist.slice(21, 23).map((img) => (
                      <div className="col-sm-4" key={img.id}>
                        <div className="imagewrapper">
                          <img src={img.image} className="img-fluid" alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;

export const getStaticProps = async () => {
  const galleryResponse = await fetch(`${baseUrl}/gallery`);
  const gallerylist = await galleryResponse.json();
  return {
    props: {
      gallerylist,
    },
  };
};
