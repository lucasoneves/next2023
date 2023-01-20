import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import fs from 'fs/promises';
import path from "path";

export default function Projects(props) {
  const { projects } = props;
  return (
    <Layout>
      <Head>
        <title>lucas neves - my projects</title>
      </Head>
      <div>
        <h2>my projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Link href={`/projects/${project.path}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json') 
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
    props: {
      projects: data.projects
    },
  };
}
