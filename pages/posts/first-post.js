import Link from "next/link";
import Head from "next/head";
import Button from "../../components/Button";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>NextJs - First post</title>
      </Head>
      <div>
        <h2>First Post</h2>
      </div>
      <Button title="Clique aqui" />
    </Layout>
  );
}
