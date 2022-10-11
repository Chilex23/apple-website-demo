import Head from "next/head";
import ProductDetails from "../../components/product-details";
import Layout from "../../components/layout";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { getProduct, getAllProductsIds } from "../../lib/products";

export default function Product({ productData }) {
  
  return (
    <Layout>
      <Head>
        <title>{productData.name}</title>
      </Head>
      <NavBar />
      <ProductDetails productData={productData} />
      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible values for id
  const paths = getAllProductsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the product using params.id
  const productData = await getProduct(params.id);
  return {
    props: {
      productData,
    },
  };
}
