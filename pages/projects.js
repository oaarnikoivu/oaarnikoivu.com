import Dropdown from "@/components/Dropdown";
import { Cross2Icon } from "@radix-ui/react-icons";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Projects({ projects, topics }) {
  const [displayProjects, setDisplayProjects] = useState(projects);
  const [filterText, setFilterText] = useState(null);

  const handleSelectTopic = (topic) => {
    if (topic === "all") {
      setDisplayProjects(projects);
      setFilterText(null);
    } else {
      const newProjects = projects.filter((project) =>
        project.topics.includes(topic)
      );
      setDisplayProjects(newProjects);
      setFilterText(
        `${newProjects.length} result(s) for projects with ${topic}`
      );
    }
  };

  return (
    <>
      <Head>
        <title>Oliver Aarnikoivu - Projects</title>
      </Head>

      <section>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Projects</h1>
          <Dropdown
            options={["all"].concat(topics)}
            onSelectOption={handleSelectTopic}
          />
        </div>

        {filterText && (
          <div className="flex items-center justify-between mt-3">
            <p>{filterText}</p>
            <button
              className="flex items-center gap-2 text-zinc-200 hover:text-white"
              onClick={() => {
                setDisplayProjects(projects);
                setFilterText(null);
              }}
            >
              <Cross2Icon width={18} height={18} />
              <span>Clear filter</span>
            </button>
          </div>
        )}

        <div className="mt-4">
          <div className="divide-y divide-zinc-600">
            {displayProjects.map((project) => (
              <div key={project.id} className="pt-4 pb-4">
                <Link
                  href={project.html_url}
                  target="_blank"
                  className="text-lg text-zinc-200 hover:text-white font-bold"
                >
                  {project.name}
                </Link>
                <p className="mt-2">{project.description}</p>
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
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/oaarnikoivu/repos");

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
    props: {
      projects,
      topics,
    },
  };
}
