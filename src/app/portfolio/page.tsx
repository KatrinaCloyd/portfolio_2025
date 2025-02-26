import type { Metadata } from "next";
import Navigation from "@/components/Navigation/Navigation";

import styles from "../../styles/page.module.scss";

export const metadata: Metadata = {
  title: "Katrina Cloyd | My Portfolio",
  description: "Here's the work. My favs. My best. And some just for fun (which are also my favs and best).",
};

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main>
        <h1>My Projects</h1>
        <p>Below is a list of some of my favorite projects over the past few years.
          Most I developed, some I served as a designer and developer, and others are
          a selection of some of my favorite design projects.
        </p>
        <p className={styles.note}>Placeholder for project cards.</p>
      </main>
    </div>
  );
}