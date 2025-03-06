import type { Metadata } from "next";
import Navigation from "@comp/Navigation/Navigation";
import ProjectGrid from "@comp/ProjectGrid/ProjectGrid";
import styles from "../../styles/page.module.scss";
import { PROJECT_SUMMARIES } from "@/data/ProjectSummaries";
import { METADATA, PortfolioOGMetaData } from "@/data/MetaData";

export const metadata: Metadata = {
  title: METADATA.PORTFOLIO.title,
  description: METADATA.PORTFOLIO.description,
  openGraph: PortfolioOGMetaData,
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
        <ProjectGrid projects={PROJECT_SUMMARIES} />
      </main>
    </div>
  );
}