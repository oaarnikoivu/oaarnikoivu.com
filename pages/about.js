import UnderlineLink from "@/components/UnderlineLink";

export default function About() {
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
        In my spare time I enjoy tinkering with new technologies, flaneuring,
        going on long walks, spending time with friends, reading up on random
        topics that I find interesting, and occasionally, lifting weights.
      </p>
      <p className="mt-6">
        This website is primarily used to showcase my experiments with new tools
        & technologies. From time to time, I may express my thoughts and write
        about something random related to my interests, which you can find under
        the <UnderlineLink href="/blog" text="Blog" /> page.
      </p>

      <p className="mt-6">
        Thanks for stopping by, and I hope you find something that piques your
        interest.
      </p>
    </section>
  );
}
