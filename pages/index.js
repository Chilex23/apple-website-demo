import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import Hero from "../components/hero";
import Ads from "../components/ads";
import Products from "../components/products";
import Footer from "../components/footer";
import { getCategories } from "../lib/categories";
import { getTopProducts } from "../lib/products";

export async function getStaticProps() {
  const allCategories = getCategories();
  const topProducts = getTopProducts();
  return {
    props: {
      allCategories,
      topProducts,
    },
  };
}

export default function Home({ allCategories, topProducts }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavBar />
      <section className="sm2:mx-5 mx-10 grid grid-cols-6 grid-rows-3 tablet:grid-rows-none gap-x-5">
        <SideBar categories={allCategories} />
        <Hero />
        <Ads />
      </section>
      <Products title="Top Products" products={topProducts} />
      <Footer />
    </Layout>
  );
}
