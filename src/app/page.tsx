import type { Metadata } from "next";
import Link from "@comp/Link/Link";
import Navigation from "@/components/Navigation/Navigation";
import Carousel from "@comp/Carousel/Carousel";
import { PROJECT_SUMMARIES } from "@/data/ProjectSummaries";
import styles from "../styles/page.module.scss";

export const metadata: Metadata = {
  title: "Katrina Cloyd | Frontend Software Engineer",
  description: `As a Frontend Software Engineer with ten as a graphic designer,
    I specialize in React, Typescript, and bridging the gap between development and design.`,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main>
        <h1>Hello</h1>
        <p>Welcome to my portfolio site.</p>
        <p>I am a Fontend Software Engineer with a soft spot for great design.
          With a background in the arts and graphic design, I have an eye for details and a drive to get them just right.</p>
        <p>Here you can find examples of my work with detailed information, links, and more.</p>
        <p>Explore,
          make your self at home,
          I&apos;d love to hear from you,
          or better: work with you.</p>
        <p>I work best at the intersection of polished code and great design.</p>
        <p>How can I help you get there, too?</p>
        <p>More <Link text='About Me' url='/about' /></p>
        <h2 className={styles.heading}>Work</h2>
        <p>I have worked across teams in various roles contributing to website design, review, development,
          testing, code reviews, QA, launch, trainings, documentation, and ongoing support!
        </p>
        <p>Here are a few of my favs.</p>
        <p>View my full <Link text='Portfolio' url='/portfolio' /></p>
        <Carousel projects={PROJECT_SUMMARIES} />
        <h2 id='contact' className={styles.heading}>Contact</h2>
        <p>Email me at <Link text='katrinamcloyd@gmail.com' url="mailto:katrinamcloyd@gmail.com" external /></p>
        <p>See what I have been coding lately on my <Link text='GitHub' url="https://github.com/KatrinaCloyd" external /></p>
        <p>Connect with me on <Link text='LinkedIn' url="https://www.linkedin.com/in/katrinacloyd/" external /></p>
      </main>
    </div>
  );
}
