export const getGithubRepos = async () => {
  const res = await fetch("https://api.github.com/users/oaarnikoivu/repos", {
    revalidate: 60 * 60 * 24,
  });

  let projects = [];
  let topics = [];

  if (res.ok) {
    projects = await res.json();
    projects = projects
      .filter((project) => !!project.description)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
    topics = projects.map((project) => project.topics).flat();
    topics = [...new Set(topics)];
  }

  return {
    projects,
    topics,
  };
};
