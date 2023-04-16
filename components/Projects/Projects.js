import Card from "../UI/Card/Card";

function Projects({ projects }) {
  return (
    <section className="mt-24">
      <h2 className="text-slate-200">Projects</h2>
      <div className="flex gap-4 flex-col my-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
