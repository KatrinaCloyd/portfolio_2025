import type { Metadata } from "next";
import Navigation from "@comp/Navigation/Navigation";
import styles from '../../../styles/page.module.scss';

export const metadata: Metadata = {
  title: "Katrina Cloyd | Lygos Project Page",
  description: "What I did for Lygos",
};

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main>
        <h1>LYGOS</h1>
        <p>Detailed info about what I did for Lygos here!</p>
        <p>TIME TO ADD SOME CONTENT!!!!!!! </p>
      </main>
    </div>
  );
}