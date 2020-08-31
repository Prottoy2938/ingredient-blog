import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content="Ingredient Application Blog" />
      <meta
        property="og:image"
        content="https://i.ibb.co/yB9BHWv/Ingredient-Blog-Social-Preview.jpg"
      />
    </Head>
  );
};

export default Meta;
