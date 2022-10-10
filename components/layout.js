import Head from "next/head";

export const siteTitle = "Apple Website Demo";

export default function Layout({ children }) {
  return (
    <div className="mt-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Apple website provides a great shopping experience"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
