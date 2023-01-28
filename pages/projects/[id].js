import { promises as fs } from 'fs';
import path from "path";

export default function DetailProject(props) {
  const { loadedProject } = props;
  return <h2>Nome do projeto: {loadedProject.id}</h2>;
}

async function getData() {
  const dir = path.join(process.cwd(), "data", "dummy-backend.json");
  const data = await fs.readFile(dir);
  const jsonData = JSON.parse(data);
  return jsonData;
}

export async function getStaticPaths(context) {
  const data = await getData();
 
  const paths = data.map((project) => ({
    params: { id: project.path },
  }));

  console.log("PATHS", paths)
 
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const { params } = context;
  const projectId = params.id;

  if (!data) {
    return false
  }


  const project = data.projects.find((project) => project.id === projectId);

  return {
    props: {
      loadedProject: project,
    },
  };
}

