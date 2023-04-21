import Link from "next/link";
import { useRouter } from "next/router";

function NavigationItem({ title, path, currentPath }) {
  return (
    <Link
      href={path}
      className={`p-2 rounded-md  ${
        currentPath === path
          ? "bg-zinc-800 text-white"
          : "bg-zinc-900 text-zinc-300"
      } font-bold transition-all ease-in duration-300 hover:text-white`}
    >
      {title}
    </Link>
  );
}

export default function Navigation() {
  const page = useRouter();
  const pathname = page.pathname;

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

  return (
    <div className="flex items-center gap-4 pb-8">
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.title}
          title={item.title}
          path={item.path}
          currentPath={pathname}
        />
      ))}
    </div>
  );
}
