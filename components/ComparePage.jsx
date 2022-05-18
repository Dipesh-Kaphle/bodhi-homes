const ComparePage = ({ setShowCompare, selectedList }) => {
  return (
    <div>
      <main className="compare mob-comparepage">
        <section className="visitscedule mob-comparepage-topcontainer  py-5">
          <div className="container">
            <div className="row  mob-comparepage-topcontainer py-5">
              <div className="col-sm-8 offset-sm-2 px-5">
                <div className="titlewraper d-flex gap justify-content-between align-items-start">
                  <div className="textwrapper flex7 pr-3">
                    <h3 className="title fwb">Home Comparison</h3>
                  </div>
                  <div className="buttonwrapper flex2 d-flex justify-content-end backLink textwrapper d-inline-block">
                    <div
                      className="back btn_underlined d-inline-block f12 fwn py-2"
                      onClick={() => setShowCompare(false)}
                    >
                      <img
                        src="../images/icons/undo.svg"
                        alt=""
                        className="mr-2"
                      />{" "}
                      Compare Again
                    </div>
                  </div>
                </div>
                {selectedList && (
                  <div className="row justify-content-center">
                    {selectedList.map((house) => (
                      <div className="col-sm-6 col-12" key={house.id}>
                        <div className="homedetails mt-5 textwrapper text-center">
                          <div className="imagewrapper">
                            <img
                              src={house.image}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="textwrapper my-3">
                            <h3 className="title f20 fwb">{house.title}</h3>
                          </div>
                          <div className="details f14">
                            <div className="item d-flex justify-content-between">
                              <div className="left fwb">
                                <img
                                  src="../../images/icons/home.svg"
                                  className="mr-2"
                                  alt=""
                                />
                                House Face
                              </div>
                              <div className="data">{house.face}</div>
                            </div>
                            <div className="item d-flex justify-content-between">
                              <div className="left fwb">
                                <img
                                  src="../../images/icons/bedroom.svg"
                                  className="mr-2"
                                  alt=""
                                />
                                Bedrooms
                              </div>
                              <div className="data">{house.beds}</div>
                            </div>
                            <div className="item d-flex justify-content-between">
                              <div className="left fwb">
                                <img
                                  src="../../images/icons/toilet.svg"
                                  className="mr-2"
                                  alt=""
                                />
                                Bath
                              </div>
                              <div className="data">{house.bathroom}</div>
                            </div>
                            <div className="item d-flex justify-content-between">
                              <div className="left fwb">
                                <img
                                  src="../../images/icons/space.svg"
                                  className="mr-2"
                                  alt=""
                                />
                                Area
                              </div>
                              <div className="data">
                                {house.living_rooms} Sq. Ft.
                              </div>
                            </div>
                            <div className="item d-flex justify-content-between">
                              <div className="left fwb">
                                <img
                                  src="../../images/icons/kitchen.svg"
                                  className="mr-2"
                                  alt=""
                                />
                                Kitchen{" "}
                              </div>
                              <div className="data">{house.living_rooms}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default ComparePage;
