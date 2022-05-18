import Footer from "./Footer";
import SingleHomeCarousel from "./SingleHomeCarousel";
import Floorplanning from "./Floorplanning";

const SingleHome = ({ currentHouse, houseDetails }) => {
  return (
    <div className="singleHome">
      {currentHouse && (
        <div className="mob-singleHome">
          <section className="homedetails py-5">
            <div className="container">
              <div className="row py-3">
                <div className="col-sm-6 d-flex align-items-center">
                  <div className="content">
                    <div className="textwrapper">
                      <h3 className="title f30 fwb mob-homedetails-title">
                        {currentHouse.title}
                      </h3>
                      <p className="text-muted text-uppercase mob-homedetails-face">
                        {currentHouse.face}
                      </p>
                    </div>
                    {houseDetails && (
                      <div className="homefeatures d-flex align-items-center gap mob-homefeatures">
                        <div className="feature">
                          <img
                            src="../images/icons/bedroom.svg"
                            alt=""
                            className="mr-2"
                          />{" "}
                          {houseDetails.bed} Bedrooms
                        </div>
                        <div className="feature">
                          <img
                            src="../images/icons/toilet.svg"
                            alt=""
                            className="mr-2"
                          />{" "}
                          {houseDetails.bathroom} Bath
                        </div>
                        <div className="feature">
                          <img
                            src="../images/icons/space.svg"
                            alt=""
                            className="mr-2"
                          />{" "}
                          {houseDetails.area} Sq. Ft.
                        </div>
                        {/* <div className="feature">
                        <img
                          src="../images/icons/kitchen.svg"
                          alt=""
                          className="mr-2"
                        />{" "}
                        1 Kitchen
                      </div> */}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                  <div className="textwrapper">
                    {!!houseDetails.description && (
                      <p className="f13 lhn mob-description">
                        {houseDetails.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SingleHomeCarousel images={houseDetails.images} />
          {!!houseDetails.floors && (
            <Floorplanning floorDetails={houseDetails.floors} />
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SingleHome;
