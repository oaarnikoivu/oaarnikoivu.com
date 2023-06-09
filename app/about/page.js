import UnderlineLink from "@/components/underlineLink";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-2xl">About Me</h1>
      <p className="mt-8">
        My name is Oliver Aarnikoivu. I was born in Finland, and raised in
        Luxembourg. I completed my Bachelors of Computer Science at The Robert
        Gordon University in Aberdeen, Scotland, followed by a Masters in
        Artificial Intelligence at The University of Edinburgh. Currently, I
        work as a Full Stack Software Engineer for{" "}
        <UnderlineLink
          href="https://www.nextgatetech.com"
          text="Next Gate Tech"
        />
        , where I am actively involved in enhancing the design, experience, and
        performance of the product.
      </p>
      <p className="mt-6">
        I am interested in a wide range of topics, including Software
        Engineering, Design, Human Computer Interaction, and Artificial
        Intelligence.
      </p>
      <p className="mt-6">
        This website is primarily used to showcase my experiments with new tools
        & technologies. From time to time, I may write about something random
        related to my interests, which you can find under the{" "}
        <UnderlineLink href="/blog" text="Blog" /> page.
      </p>

      <p className="mt-6">
        Thanks for stopping by, and I hope you find something that piques your
        interest.
      </p>
    </section>
  );
}
