import Link from "next/link";
import { Button } from "ui";
import { GitHub } from "ui/icons";
import { siteConfig } from "@/config/site";
import Roadmap from "./components/Roadmap";
import Welcome from "./components/Welcome";

const Homepage = () => (
  <div className="container flex flex-col md:flex-row gap-24 py-8 pt-6 md:py-12">
    <section className="md:basis-1/2">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl mb-3">
          I own a computer.
        </h1>
        <p className="text-lg text-muted-foreground">
         I hope you enjoy exploring my portfolio and getting a glimpse into my creative world
        </p>
      </div>

      <div className="my-16">
        <Welcome />
      </div>

      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Button>
          <GitHub className="mr-2 h-4 w-4" />
          Check on Github
        </Button>
      </Link>
    </section>
    <section className="md:basis-1/2">
      <Roadmap />
    </section>
  </div>
);

export default Homepage;
