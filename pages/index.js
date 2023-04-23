import Social from "@/components/Social";
import UnderlineLink from "@/components/UnderlineLink";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="flex justify-start gap-8 items-start">
        <Image
          className="rounded-full grayscale"
          alt="profile"
          src="https://avatars.githubusercontent.com/u/22493428?s=400&u=da52e73af477adecb6fd39efdeda0e4b85860fc2&v=4"
          width={100}
          height={100}
        />
        <div>
          <h1 className="text-2xl">Oliver Aarnikoivu</h1>
          <p className="mt-4">
            Hey, I&apos;m Oliver. Born in Finland, raised in Luxembourg. Full
            Stack Software Engineer at{" "}
            <UnderlineLink
              href="https://www.nextgatetech.com/"
              text="Next Gate Tech"
            />
            {""}.
          </p>
          <Social />
        </div>
      </div>
    </section>
  );
}
