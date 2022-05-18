import Head from "next/head";

import FACEBOOK_PIXEL_1 from "./facebook/pixel-1";

const index = ({ name }) => {
  return <Head>{name === "FACEBOOK_PIXEL_1" && <FACEBOOK_PIXEL_1 />}</Head>;
};

export default index;
