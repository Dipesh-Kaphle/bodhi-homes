import Link from "next/link";
import { useEffect } from "react";
import Header from "../components/Header";
import { gsap } from "gsap";

const Error = () => {
  useEffect(() => {
    gsap.to(".num-one", {
      rotate: -10,
      delay: 0.5,
      duration: 0.5,
    });
    gsap.to(".num-two", {
      rotate: 10,
      delay: 0.5,
      duration: 0.5,
    });
    gsap.to(".broken-house", {
      scale: 0.9,
      delay: 0.6,
      duration: 1,
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="errorpage">
        <div className="houseerrorpage">
          <div className="number-4 num-one">4</div>
          <img className="broken-house" src="../images/house.png" alt="" />
          <div className="number-4 num-two">4</div>
        </div>
        <div className="errorpage-desc">
          <div className="errorpage-desc-title">Page Not Found !</div>
          <div className="errorpage-desc-somedesc">
            The page you're trying to reach is not found
          </div>
        </div>
        <div className="errorpage-footer">
          <div className="buttonwrapper">
            <Link href="/">
              <a>
                <button className="btn btn_p px-4 py-2">Go Back Home</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
