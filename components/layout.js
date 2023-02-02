import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Header } from "./Header";



export default function Layout({ children, home, projects }) {
  return (
    <>
      
        <Header />
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            {projects ? <Link href="/projects">← back to projects</Link> : <Link href="/">← back to home</Link>}
          </div>
        )}
      </div>
    </>
  );
}
