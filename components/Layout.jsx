import { useEffect, useState } from "react";
import Meta from "./Meta";
import Loading from "./Loading";
import { baseUrl } from "../config";
// import Pixel from "./pixels";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [metaData, setMetaData] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/setting`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setMetaData(res[0]);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {metaData && (
        <>
          <Meta
            logo={metaData.logo}
            site_title={metaData.site_title}
            description={metaData.meta_descriptions}
            keywords={metaData.meta_keywords}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PN9GKSJ"height="0"width="0"style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>

          {/* <Pixel name="FACEBOOK_PIXEL_1" /> */}
        </>
      )}
      {loading ? (
        <Loading />
      ) : (
        <>
          <img hidden src="/img.png" alt="" />
          <div className="childrenAnimation">{children}</div>
        </>
      )}
    </>
  );
};

export default Layout;
