import Head from 'next/head';

const SEO = ({ pageTitle, font }) => {
  const fullTitle = pageTitle 
    ? `${pageTitle} || Professional IT Skills College Education Platform For Innovative Learning` 
    : "Professional IT Skills College || Education Platform For Innovative Learning";

  return (
    <Head>
      <title>{fullTitle}</title>

      {/* 1. Basic Standard SEO */}
      <meta name="description" content="At Professional IT Skills College, Shadbagh Lahore, we provide practical, career-focused IT courses. Join us to build in-demand digital and professional skills for a successful tech career." />
      <meta name="keywords" content="IT Skills College, Professional IT Courses, IT Training Lahore, Shadbagh Lahore, Computer Education, Tech Career, Innovative Learning, Web Development, Programming, Pakistan" />
      <meta name="author" content="Professional IT Skills College" />
      <meta name="publisher" content="Professional IT Skills College" />
      <meta name="copyright" content="Professional IT Skills College" />
      <meta name="designer" content="Cadresol" />
      <meta name="reply-to" content="info@pisc.edu.pk" />
      <meta name="owner" content="Professional IT Skills College" />
      <meta name="url" content="https://pisc.edu.pk" />
      <meta name="identifier-URL" content="https://pisc.edu.pk" />
      <meta name="directory" content="submission" />
      <meta name="category" content="Education" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />

      {/* 2. Crawlers and Robots / Search Engines */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="yandex" content="index, follow" />
      <meta name="baiduspider" content="index, follow" />
      <meta name="duckduckbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />

      {/* 3. Open Graph (Facebook, LinkedIn, AEO) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content="Practical, career-focused IT courses in Shadbagh Lahore to prepare you for a successful tech career." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Professional IT Skills College" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://pisc.edu.pk" />
      <meta property="og:image" content="https://pisc.edu.pk/assets/images/logo/logo-dark.svg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Professional IT Skills College Logo" />
      <meta property="article:publisher" content="https://www.facebook.com/PISC" />
      <meta property="article:modified_time" content={new Date().toISOString()} />

      {/* 4. Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content="Practical, career-focused IT courses in Shadbagh Lahore to prepare you for a successful tech career." />
      <meta name="twitter:image" content="https://pisc.edu.pk/assets/images/logo/logo-dark.svg" />
      <meta name="twitter:image:alt" content="Professional IT Skills College Logo" />
      <meta name="twitter:site" content="@PISC" />
      <meta name="twitter:creator" content="@PISC" />
      <meta name="twitter:domain" content="pisc.edu.pk" />

      {/* 5. Geographic Search Optimization (GEO) */}
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Lahore" />
      <meta name="geo.position" content="31.5820;74.3294" />
      <meta name="ICBM" content="31.5820, 74.3294" />

      {/* 6. Apple / iOS & Mobile App Specific */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="PISC" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="theme-color" content="#ffffff" />

      {/* 7. Microsoft Windows Tiles */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/logo-white.svg" />
      <meta name="msapplication-tooltip" content="Professional IT Skills College" />
      <meta name="msapplication-navbutton-color" content="#ffffff" />

      {/* 8. Verification Tags (Webmasters) */}
      <meta name="google-site-verification" content="T7BWEO1iZVWv6u9HvDhNTuHMuyCl0wx4B3oAq7Onals" />
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
      <meta name="p:domain_verify" content="YOUR_PINTEREST_VERIFICATION_CODE" />
      <meta name="norton-safeweb-site-verification" content="YOUR_NORTON_VERIFICATION_CODE" />

      {/* 9. Default Application Meta & Links */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5.0"
      />
      <link rel="canonical" href="https://pisc.edu.pk" />
      
      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/logo-white.svg" />
      <link rel="apple-touch-icon" href="/logo-white.svg" />
    </Head>
  );
};

export default SEO;
