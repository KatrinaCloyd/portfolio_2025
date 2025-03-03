import type { Metadata } from "next";
import Navigation from "@comp/Navigation/Navigation";
import Link from "@comp/Link/Link";
import CardGrid from "@comp/CardGrid/CardGrid";
import { TOOLS } from "@/data/ToolBelt";
import styles from "../../styles/page.module.scss";

export const metadata: Metadata = {
  title: "Katrina Cloyd | About",
  description: `A little more of my backstory if you are into that sort of thing.
    Bottom line, I like creative technical work.`,
};

export default function About() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main>
        <div className={styles.aboutWrapper}>
          <div>
            <h1>About Me</h1>
            <p>In high school I thought I would grow up to be an art teacher or a poet, or ideally both.</p>
            <p>In college, for a short while, I thought I would be an artist, but I went back to the art
              teacher plan. After college, with my Ohio teaching license in hand, I thought I would never
              become an art teacher…
            </p>
            <p>Then I became an Oregonian. I began painting, baking, jewelry making, street fair vending,
              gardening, freelancing, and pretty much trying it all. I needed a creative outlet and a combination
              avenues led me to design.
            </p>
            <p>So I became a Graphic Designer. Years of that corporate life taught me so much but I still wanted more.
              I wanted a challenge, more variance in the day to day. A job that would keep me learning... And I wanted
              to know how to build my own site!
            </p>
            <p>So I became a Software Engineer.And I finally feel like I have found my place. Now I get to problem solve
              with new challenges every day. I get to be creative in my solutions and thinking. I get to continually
              learn new things. And I get to make things beautiful.
            </p>
            <p>Not only all of that but I have found my sweet spot, spanning design and dev teams and helping to
              translate the details that often get lost, or create speed bumps. I can speak both “languages” and
              love to make those connections for teammates.
            </p>
            <p>I still love to bake, hike, garden, occasionally find time to paint, make awesome family themed
              halloween costumes, and try as often as possible to explore what the world has to offer.
            </p>
            <p>Maybe someday I will still become a poet.</p>
          </div>
          <div>
            <picture>
              <source srcSet="/Katrina_mobile.png 503w" media="(max-width: 1000px)" />
              <source srcSet="/Katrina.png 900w" />
              <img
                src="/Katrina.png"
                alt='Headshot of Katrina Cloyd' loading="eager"
              />
            </picture>
            <p>View my full <Link text='Resume' url="/KatrinaCloyd_2025.pdf" external /></p>
            <p>Email me at <Link text='katrinamcloyd@gmail.com' url="mailto:katrinamcloyd@gmail.com" external /></p>
            <p>View my code on <Link text='GitHub' url="https://github.com/KatrinaCloyd" external /></p>
            <p>Connect with me on <Link text='LinkedIn' url="https://www.linkedin.com/in/katrinacloyd/" external /></p>
          </div>
        </div>
        <h2 className={styles.heading}>My Tools</h2>
        <CardGrid list={TOOLS} />
        <br />
      </main>
    </div>
  );
}