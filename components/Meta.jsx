import Head from "next/head";

const Meta = ({ site_title, keywords, description, logo }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon16x16.png" />

      <meta name="title" property="og:title" content={site_title} />
      <meta property="og:type" content="website" />
      <meta
        name="image"
        property="og:image:secure_url"
        content="https://thebodhihomes.com/img.png"
        key="ogimage"
      />
      <meta
        name="description"
        property="og:description"
        content={description}
        key="ogdesc"
      />
      <meta property="og:site_name" content={site_title} key="ogsitename" />
      <meta property="og:url" content="https://thebodhihomes.com" key="ogurl" />

      <title>{site_title}</title>

      <meta name="application-name" content={site_title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={site_title} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="msapplication-config"
        content="/static/icons/browserconfig.xml"
      />
      <meta name="msapplication-TileColor" content="#800000" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#800000" />

      <link rel="apple-touch-icon" sizes="180x180" href="/Icon-512x512.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon16x16.png"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://thebodhihomes.com/" />
      <meta name="twitter:title" content={site_title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:creator" content="@TechCareSoft" />

      <link rel="manifest" href="/manifest.json" />
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '511010206971742');fbq('track', 'PageView');`,
        }}
      ></script>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=511010206971742&ev=PageView&noscript=1"/>`,
        }}
      ></noscript>
      <meta
        name="facebook-domain-verification"
        content="g3djhd7os624jm9jmpfro1q36x1cw3"
      />
      {/* google tags  */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PN9GKSJ');`,
        }}
      ></script>
    </Head>
  );
};

Meta.defaultProps = {
  site_title: "Bodhi Homes",
  keywords: "Bodhi Homes Keywords",
  description: "Bodhi Homes Details",
};

export default Meta;
