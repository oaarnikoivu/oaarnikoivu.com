import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <Image
        alt=""
        src="https://avatars.githubusercontent.com/u/22493428?s=400&u=da52e73af477adecb6fd39efdeda0e4b85860fc2&v=4"
        width={140}
        height={140}
        className="rounded-full grayscale"
      />
      <div>
        <h1 className="text-2xl">Oliver Aarnikoivu</h1>
        <p className="mt-4 text-zinc-200 text-sm">
          Hey, I'm Oliver. Born in Finland, raised in Luxembourg. Full Stack
          Software Engineer @{" "}
          <Link
            href="https://nextgatetech.com/"
            target="_blank"
            className="text-purple-300 hover:text-purple-400"
          >
            Next Gate Tech
          </Link>
          {""}.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <GitHubLogoIcon width={20} height={20} />
          <LinkedInLogoIcon width={20} height={20} />
          <TwitterLogoIcon width={20} height={20} />
          <EnvelopeClosedIcon width={20} height={20} />
        </div>
      </div>
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
