import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const name = "lucas neves";
export const siteTitle = `${name} - i write about technology, web development and carreer.`;
export function Header({ home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles["main-header"]}>
        <h1>lucas neves</h1>
        <Link href="/blog">blog</Link>
        <Link href="/projects">projects</Link>
      </header>
    </>
  );
}
