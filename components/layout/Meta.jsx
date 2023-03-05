import Head from "next/head";

const Meta = ({ siteTitle = "Abroad Assist", siteDescription = "Abroad Assist welcomes you!" }) => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
