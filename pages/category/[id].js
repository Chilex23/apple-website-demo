import Head from "next/head";
import Layout from "../../components/layout";
import NavBar from "../../components/navbar";
import Products from "../../components/products";
import Footer from "../../components/footer";
import { getAllCategoriesIds, getCategoryData } from "../../lib/categories";

export default function Category({ categoryData }) {
  return (
    <Layout>
      <Head>
        <title>{categoryData.name}</title>
      </Head>
      <NavBar />
      <Products title={categoryData.name} products={categoryData.products} /> 
      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible values for id
  const paths = getAllCategoriesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the category using params.id
  const categoryData = await getCategoryData(params.id);
  return {
    props: {
      categoryData,
    },
  };
}
