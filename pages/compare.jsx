import { useEffect, useState } from "react";
import { Spinner, Toast } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { baseUrl } from "../config";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ComparePage from "../components/ComparePage";

const CompareHomes = ({ houses }) => {
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [showerror, setShowerror] = useState(false);

  const submitSelected = (data) => {
    // set loading upto 1 seconds and then false
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // check if user selected at least 2 homes to compare list
    if (data.checkhome.length < 2) {
      // show error if not selected
      setShowerror(true);
    } else {
      // show comparision list if selected
      setShowCompare(true);
      let list = [];
      data.checkhome.forEach((element) => {
        let value = compareList.find(
          (compare) => compare.id === parseInt(element)
        );
        list.push(value);
      });
      setSelectedList(list);
    }
  };

  useEffect(() => {
    if (houses) {
      setCompareList(houses.result);
    }
  }, []);

  return (
    <div>
      <Header />

      {loading && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            minHeight: "80vh",
            textAlign: "center",
          }}
        >
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {!loading && (
        <>
          {!showCompare && (
            <>
              <main className="compare mob-compare">
                <section className="visitscedule mob-compare-topwrapper py-5">
                  <div className="container">
                    <div className="row mob-compare-topwrapper py-5">
                      <div className="col-sm-12 col-md-8 offset-sm-2 mob-compare-fixgap  px-sm-0 px-md-5">
                        <div className="titlewraper d-flex gap justify-content-between align-items-start">
                          <Fade bottom>
                            <div className="textwrapper flex7 pr-3">
                              <h3 className="title fwb">Compare Homes</h3>
                              <p className="text-muted f14">
                                Choose your house
                              </p>
                            </div>
                          </Fade>
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
                        </div>
                        <form
                          onSubmit={handleSubmit(submitSelected)}
                          className="form py-3"
                        >
                          {compareList && (
                            <Fade bottom>
                              <div className="row">
                                {compareList.map((house) => (
                                  <div
                                    className="col-sm-6 col-12"
                                    key={house.id}
                                  >
                                    <label class="checkboxOne">
                                      <div className="homewrapperparent ">
                                        <div className="homewrapper text-center">
                                          <div className="imagewrapper">
                                            <img
                                              src={house.image}
                                              className="img-fluid"
                                              alt=""
                                            />
                                          </div>
                                          <div className="textwrapper mt-3">
                                            <h3 className="f20 fwb title">
                                              {house.title}
                                            </h3>
                                          </div>
                                        </div>
                                        <input
                                          type="checkbox"
                                          name="checkhome"
                                          value={house.id}
                                          ref={register}
                                        />
                                        <span class="checkmark"></span>
                                      </div>
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Fade>
                          )}
                          {compareList && (
                            <div className="row">
                              <div className="col-sm-12 d-flex justify-content-center buttonwrapper text-center">
                                <button
                                  type="submit"
                                  className="btn btn_p px-4"
                                >
                                  <img
                                    src="/images/icons/compare.svg"
                                    className="mr-2"
                                    alt=""
                                  />{" "}
                                  Compare
                                </button>
                              </div>
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
              <div
                className="position-fixed"
                style={{ bottom: "10px", right: "10px", zIndex: "10" }}
              >
                <Toast
                  onClose={() => setShowerror(false)}
                  show={showerror}
                  delay={3000}
                  autohide
                  className="bg-danger text-white"
                >
                  <Toast.Body>Please Select Atleast Two House</Toast.Body>
                </Toast>
              </div>
            </>
          )}

          {showCompare && (
            <ComparePage
              setShowCompare={setShowCompare}
              selectedList={selectedList}
            />
          )}
        </>
      )}

      <Footer />
    </div>
  );
};

export default CompareHomes;

export const getStaticProps = async () => {
  const compareHouse = await fetch(`${baseUrl}/compare`);
  const houses = await compareHouse.json();

  return {
    props: {
      houses,
    },
  };
};
