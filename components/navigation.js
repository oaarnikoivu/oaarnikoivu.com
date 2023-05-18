"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export default function Navigation() {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-4 pb-8">
      {navigationItems.map((item) => (
        <Link
          key={item.title}
          href={item.path}
          className={`p-2 rounded-md  ${
            currentPath === item.path
              ? "bg-zinc-800 text-white"
              : "bg-zinc-900 text-zinc-300"
          } font-bold transition-all ease-in duration-300 hover:text-white`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
