export default function Projects({ projects }) {
  return (
    <>
      <h1 className="text-2xl">Projects</h1>
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
