import Projects from "@/components/projects";
import { getGithub } from "@/lib/github";
import { Suspense } from "react";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const { projects, topics, languages } = await getGithub();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects projects={projects} topics={topics} languages={languages} />
    </Suspense>
  );
}
