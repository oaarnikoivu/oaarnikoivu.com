import Link from "next/link";

export default function Projects({ projects }) {
  return (
    <>
      <h1 className="text-2xl">Projects</h1>

      <section className="mt-4">
        <div className="divide-y divide-zinc-600">
          {projects.map((project) => (
            <div key={project.id} className="pt-4 pb-4">
              <Link
                href={project.html_url}
                className="text-lg text-zinc-200 hover:text-white font-bold"
              >
                {project.name}
              </Link>
              <p className="text-sm text-zinc-200 mt-2">
                {project.description}
              </p>
              <div className="flex items-center flex-wrap gap-2 mt-4">
                {project.topics.map((topic) => (
                  <div
                    key={topic}
                    className="bg-zinc-800 rounded-lg p-2 text-sm font-medium"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/oaarnikoivu/repos");
  let projects = await res.json();
  projects = projects
    .filter((project) => !!project.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  return {
    props: {
      projects,
    },
  };
}
