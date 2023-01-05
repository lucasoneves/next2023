import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>NextJs - First post</title>
      </Head>
      <div>
        <Link href="/">Back to home</Link>
        <h2>First Post</h2>
      </div>
    </>
  );
}
