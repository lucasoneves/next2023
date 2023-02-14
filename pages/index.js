import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";



import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({allPostsData}) {
  const siteTitle = 'Lucas Neves - Front-end Developer'
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>hello, friend!</h2>
        <p>welcome to my personal website. my intention is to transform it in a lab where i can use technlogies that i've been learning.</p>
        <p>this is the first version of it.</p>
        <p>you can contact me on the footer links</p>
        <p>thank you!</p>
      </section>
    </Layout>
  );
}
