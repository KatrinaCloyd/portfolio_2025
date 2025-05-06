import type { Metadata } from "next";
import { PROJECT_SUMMARIES } from "@/data/ProjectSummaries";
// import Navigation from "@comp/Navigation/Navigation";
// import CustomLink from "@comp/Link/Link";
// import Header from "@comp/Header/Header";
// import styles from '../../../styles/page.module.scss';
// import Video from "@/components/Video/Video";

const projectData = PROJECT_SUMMARIES[1];

export const metadata: Metadata = {
  title: `Katrina Cloyd | ${projectData.company} Project Page`,
  description: projectData.role || 'Frontend Developer and Designer for web site creation.',
};

export default function TPDetailPg() {
  return (null);
  //   <div className={styles.page}>
  //     <Navigation />
  //     <main className={styles.main}>

  //       <Header {...projectData} />

  //       {/* Hero image template */}
  //       <picture className={styles.fullImg}>
  //         <source srcSet="/FOLDER/FILENAME_MOBILE.png 670w" media="(max-width: 700px)" />
  //         <source srcSet="/FOLDER/FILENAME_DESKTOP.png 1340w" />
  //         <img
  //           src="/FOLDER/FILENAME_DESKTOP.png"
  //           alt='ALT TEXT'
  //           loading="eager"
  //         />
  //       </picture>

  //       {/* Text Only template */}
  //       <div className={styles.textOnly}>
  //         <h2>OPTIONAL HEADING</h2>
  //         <p>COPY HERE</p>
  //         <p>COPY HERE</p>
  //         <p>COPY HERE</p>
  //         <p>COPY BEFORE TEXT <CustomLink text="LINK TEXT" url="URL" external /></p>
  //       </div>

  //       {/* Two Column template */}
  //       <div className={styles.twoColumn}>
  //         <picture>
  //           <source srcSet="/FOLDER/FILENAME_MOBILE.png 500w" media="(max-width: 700px)" />
  //           <source srcSet="/FOLDER/FILENAME_DESKTOP.png 700w" />
  //           <img
  //             src="/FOLDER/FILENAME_DESKTOP.png"
  //             alt='ALT TEXT'
  //           />
  //         </picture>
  //         <div className={styles.textBox}>
  //           <h2>OPTIONAL HEADING</h2>
  //           <p>COPY HERE</p>
  //           <p>COPY HERE</p>
  //           <p>COPY HERE</p>
  //           <p>COPY BEFORE TEXT <CustomLink text="LINK TEXT" url="URL" external /></p>
  //         </div>
  //       </div>

  //       {/* Two Column VIDEO template */}
  //       <div className={styles.twoColumn}>
  //         <Video video='/FOLDER/FILENAME_DESKTOP.mov' poster='/FOLDER/FILENAME_(still)_DESKTOP.png' />
  //         <div className={styles.textBox}>
  //           <h2>OPTIONAL HEADING</h2>
  //           <p>COPY HERE</p>
  //           <p>COPY HERE</p>
  //           <p>COPY HERE</p>
  //           <p>COPY BEFORE TEXT <CustomLink text="LINK TEXT" url="URL" external /></p>
  //         </div>
  //       </div>

  //       {/* Full Image template (not hero) */}
  //       <picture className={styles.fullImg}>
  //         <source srcSet="/FOLDER/FILENAME_MOBILE.png 670w" media="(max-width: 700px)" />
  //         <source srcSet="/FOLDER/FILENAME_DESKTOP.png 1340w" />
  //         <img
  //           src="/FOLDER/FILENAME_DESKTOP.png"
  //           alt='ALT TEXT'
  //         />
  //       </picture>

  //     </main>
  //   </div>
  // );
}