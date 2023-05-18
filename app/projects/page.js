import Projects from "@/components/projects";
import { getGithubRepos } from "@/lib/github";
import { Suspense } from "react";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const { projects, topics } = await getGithubRepos();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects projects={projects} topics={topics} />
    </Suspense>
  );
}
