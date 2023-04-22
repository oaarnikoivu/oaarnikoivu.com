import Social from "@/components/Social";
import Image from "next/image";
import Link from "next/link";

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
        <Social />
      </div>
    </div>
  );
}
