import Link from "next/link";
import { isBrowser } from "react-device-detect";

function Footer() {
  return (
    <footer className="mob-footer">
      <section className="footer textwrapper">
        <div className="container">
          <div className="row py-3 px-2 footerwarp align-items-center">
            <div className="col-sm-6 col-12 text-left">
              &copy; Copyright, Bodhi Homes, All Rights Reserved.{" "}
              {new Date().getFullYear()}
            </div>
            <div
              className={
                isBrowser
                  ? "col-sm-6 col-12 text-right"
                  : "col-sm-6 col-12 text-center"
              }
            >
              <div className="buttonwrapper textwrapper mr-3">
                Designed By{" "}
                <Link href="https://techcaresoft.com">
                  <a
                    target="_blank"
                    className="btn btn_underlined btn_schedule tcp f14"
                  >
                    TechCare Sofwares
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
