// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// main layout
import Layout from "../components/Layout";
// import sass styles
import "../styles/globals.scss";

// import progressbar
import ProgressBar from "@badrap/bar-of-progress";
// next router
import Router from "next/router";

// progress bar
const progress = new ProgressBar({
  size: 4,
  color: "#800000",
  className: "bar-of-progress",
  delay: 100,
});

// on route change get progress bar
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
