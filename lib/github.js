const getRepoLanguages = async (project) => {
  const res = await fetch(project.languages_url);

  let languages = [];

  if (res.ok) {
    languages = await res.json();
    languages = Object.keys(languages);
  }

  return languages;
};

const getGithubRepos = async () => {
  const res = await fetch("https://api.github.com/users/oaarnikoivu/repos");

  let projects = [];
  let topics = [];
  let languages = [];

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
    languages,
  };
};

export const getGithub = async () => {
  const { projects, topics } = await getGithubRepos();

  let languages = [];

  await Promise.all(
    projects.map(async (project) => {
      const projectLanguages = await getRepoLanguages(project);
      project.languages = projectLanguages;
    })
  );

  languages = [...new Set(projects.map((project) => project.languages).flat())];

  return {
    projects,
    topics,
    languages,
  };
};
