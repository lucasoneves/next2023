import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";
import Layout from "../../components/layout";

export default function DetailProject(props) {
  const { loadedProject } = props;
  return (
    <Layout projects>
      <h2>{loadedProject.title}</h2>
      <p>{loadedProject.description}</p>
    </Layout>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const projectPath = params.pathName;

  const data = await getData();

  if (!data) {
    return false;
  }

  const project = data.projects.find(
    (project) => project.pathName === projectPath
  );

  return {
    props: {
      loadedProject: project,
    },
  };
}

export async function getStaticPaths(context) {
  const data = await getData();
  const ids = data.projects.map((project) => project.pathName);
  const pathsWithParams = ids.map((pathName) => ({
    params: { pathName: pathName },
  }));
  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}
