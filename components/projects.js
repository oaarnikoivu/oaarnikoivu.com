"use client";

import Dropdown from "@/components/dropdown";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

export default function Projects({ projects, topics, languages }) {
  const [displayProjects, setDisplayProjects] = useState(projects);
  const [filterText, setFilterText] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
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

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    if (language === "all") {
      setDisplayProjects(projects);
      setFilterText(null);
    } else {
      const newProjects = projects.filter((project) =>
        project.languages.includes(language)
      );
      setDisplayProjects(newProjects);
      setFilterText(
        `${newProjects.length} result(s) for projects with ${language}`
      );
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Projects</h1>
        <div className="flex items-center gap-2">
          <Dropdown
            title="Language"
            options={["all"].concat(languages)}
            onSelectOption={handleSelectLanguage}
            selectedOption={selectedLanguage}
          />
          <Dropdown
            title="Topic"
            options={["all"].concat(topics)}
            onSelectOption={handleSelectTopic}
            selectedOption={selectedTopic}
          />
        </div>
      </div>

      {filterText && (
        <>
          <div className="flex items-center justify-between mt-3 flex-wrap gap-4">
            <span className="text-md">{filterText}</span>
            <button
              className="flex items-center gap-2 text-zinc-200 hover:text-white"
              onClick={() => {
                setDisplayProjects(projects);
                setFilterText(null);
                setSelectedTopic("all");
                setSelectedLanguage("all");
              }}
            >
              <CrossCircledIcon width={20} height={20} />
              <span className="text-md">Clear filter</span>
            </button>
          </div>
        </>
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
  );
}
