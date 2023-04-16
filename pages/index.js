import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import fs from "fs";
import matter from "gray-matter";
import { Inter } from "next/font/google";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ projects }) {
  return (
    <div className="container mx-auto px-80">
      <Hero />
      <section className="grid grid-cols-2 gap-4">
        <Projects projects={projects} />
        <Projects projects={projects} />
      </section>
    </div>
  );
}

function readProjects() {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  const projectFiles = fs.readdirSync(projectsDirectory);

  const projects = projectFiles.map((projectFile) => {
    const fullPath = path.join(projectsDirectory, projectFile);
    const projectFileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(projectFileContents);

    return {
      id: projectFile.replace(/\.md$/, ""),
      ...matterResult.data,
    };
  });

  return projects;
}

export async function getStaticProps() {
  const projects = readProjects();

  return {
    props: {
      projects,
    },
  };
}
