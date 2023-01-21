import path from "path";

export default function DetailProject(props) {
  const { loadedProject } = props;
  return <h2>Nome do projeto: {loadedProject.title}</h2>;
}

export async function getStaticProps(context) {
  const { params } = context;
  const projectId = params.id;
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const project = data.projects.find((project) => project.id === projectId);

  return {
    props: {
        loadedProject: project
    }
  }
}
