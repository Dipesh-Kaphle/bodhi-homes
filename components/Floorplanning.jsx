import Link from "next/link";

const Floorplanning = ({ floorDetails }) => {
  return (
    <div>
      <section className="homedetails py-5 mob-floorplan">
        <div className="container">
          <div className="row py-3">
            <div className="col-sm-6 d-flex align-items-center">
              <div className="content">
                <div className="textwrapper">
                  <h3 className="title f30 fwb mob-floortitle">
                    Floor Planning
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-sm-6 d-flex align-items-center">
              <div className="textwrapper">
                {/* <p className="f13 lhn mob-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p> */}
              </div>
            </div>
          </div>
          {floorDetails && (
            <div className="row">
              {floorDetails.map((floor) => (
                <div className="col-sm-4 col-12" key={floor.id}>
                  <div className="plan">
                    <div className="imagewrapper text-center">
                      <img
                        src={floor.floor_image}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="textwrapper mob-floorplan-subtitle">
                      <h3 className="title my-4 f20 text-center fwb">
                        {floor.floor_name}
                      </h3>
                      <div className="homefeatures d-flex align-items-center justify-content-center gap mob-floorplan-details">
                        <div className="feature">
                          <img
                            src="../images/icons/bedroom.svg"
                            alt=""
                            className="mr-2"
                          />{" "}
                          {floor.floor_bed}
                        </div>
                        <div className="feature">
                          <img
                            src="../images/icons/toilet.svg"
                            alt=""
                            className="mr-2"
                          />{" "}
                          {floor.floor_bathroom}
                        </div>
                        {/* <div className="feature">
                          <img
                            src="../images/icons/kitchen.svg"
                            alt=""
                            className="mr-2"
                          />{" "}
                          {floor.floor_bathroom}
                        </div> */}
                        <div className="feature">
                          <img
                            src="../images/icons/space.svg"
                            alt=""
                            className="mr-2"
                          />{" "}
                          {floor.floor_area} Sq. Ft.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="row py-5 mob-request">
            <div className="col-sm-12 pt-5 d-flex justify-content-center text-center">
              <div className="textwrapper buttonwrapper">
                <h3 className="f25 fwb mb-4">Request a Call Back From Us</h3>
                <Link href="/requestcallback">
                  <a>
                    <div
                      className="btn btn_p px-4"
                      onClick={() => {
                        fbq("trackCustom", "Request A Callback 2 Foot");
                      }}
                    >
                      <img
                        src="../images/icons/call.svg"
                        className="mr-2"
                        alt=""
                      />{" "}
                      Request a Call Back
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Floorplanning;
