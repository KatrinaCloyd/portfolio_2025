import type { Metadata } from "next";
import { PROJECT_SUMMARIES } from "@/data/ProjectSummaries";
import Navigation from "@comp/Navigation/Navigation";
import CustomLink from "@comp/Link/Link";
import Header from "@comp/Header/Header";
import styles from '../../../styles/page.module.scss';
import Video from "@/components/Video/Video";

const projectData = PROJECT_SUMMARIES[1];

export const metadata: Metadata = {
  title: `Katrina Cloyd | ${projectData.company} Project Page`,
  description: projectData.role || 'Frontend Developer and Designer for web site creation.',
};

export default function TPDetailPg() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main className={styles.main}>

        <Header {...projectData} />
        <picture className={styles.fullImg}>
          <source srcSet="/tp/TP_Img1_MOBILE.png 670w" media="(max-width: 700px)" />
          <source srcSet="/tp/TP_Img1_DESKTOP.png 1340w" />
          <img
            src="/tp/TP_Img1_DESKTOP.png"
            alt='The Program homepage'
            loading="eager"
          />
        </picture>

        <div className={styles.textOnly}>
          <h2>In-house design and development for a marking agency</h2>
          <p>The Program is a marketing agency specializing in strategic consultation, creative direction,
            content production, and technical development. Over the course of my three and a half years with
            the company, I played a key role in the evolution of its main marketing website, contributing to
            multiple iterations as the site continued to grow and improve with every step. The site was
            built using React, Next.js, and GraphQL and is backed by Contentful headless CMS. During this
            time, I also earned a Contentful Professional Certification.
          </p>
          <p>Visit the <CustomLink text="Live Site" url="https://the-program.com/" external /></p>
        </div>

        <div className={styles.twoColumn}>
          <picture>
            <source srcSet="/tp/TP_Img2_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/tp/TP_Img2_DESKTOP.png 700w" />
            <img
              src="/tp/TP_Img2_DESKTOP.png"
              alt='Collage of updated landing pages for The Program'
            />
          </picture>
          <div className={styles.textBox}>
            <h2>Site refresh</h2>
            <p>The most recent major update of the website was driven by a brand refresh to bring more maturity
              to the TP brand and refinement to the site. This brought the company approach, values, and work
              to the forefront while making company offerings more clear.</p>
            <p>The site was reorganized to reduce page count and simplify page layouts and flow in order to enhance
              clarity, better convey company&apos;s offerings and ethos, and improve the user experience by making
              relevant information easier to find.</p>
          </div>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textBox}>
            <h2>Cross team contributions</h2>
            <p>I worked across both design and development teams on this project. Starting from established brand
              guidelines and homepage wireframes, I was responsible for reskinning subsequent pages and produced
              responsive mobile and tablet designs. On the development side, I created detailed implementation
              tickets and led the execution, ensuring we met tight deadlines, including delivering the updated
              site in time for the new brand launch and a key client presentation.</p>
          </div>
          <picture>
            <source srcSet="/tp/TP_Img3_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/tp/TP_Img3_DESKTOP.png 700w" />
            <img
              src="/tp/TP_Img3_DESKTOP.png"
              alt='Collage of updated page designs for various breakpoints'
            />
          </picture>
        </div>

        <div className={styles.twoColumn}>
          <picture>
            <source srcSet="/tp/TP_Img4_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/tp/TP_Img4_DESKTOP.png 700w" />
            <img
              src="/tp/TP_Img4_DESKTOP.png"
              alt='Content map of page components and data model'
            />
          </picture>
          <div className={styles.textBox}>
            <h2>Clean up of existing code.</h2>
            <p>The first step was a comprehensive audit of the existing data model, component library, and codebase.
              I led this effort, identifying opportunities for simplification, reduction in redundancies, and
              trimming of outdated options that were no longer in use. By combining related code and components
              with related partials we were able to eliminate over ten component options in the Contentful content
              model and editor interface. This greatly simplified the editor experience and resulted in a major
              reduction in the GraphQL query complexity and data load size.</p>
          </div>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textBox}>
            <h2>Net new components.</h2>
            <p>After clean up and reorganization was complete it was time for the creation of new components
              reflective of the new brand. Working from approved desktop Figma prototypes, I was responsible
              for translating the designs into responsive layouts for mobile and tablet. I then led the
              end-to-end development process, which included content modeling, component mapping, implementation,
              testing, QA, deployment, and ongoing performance monitoring.</p>
          </div>
          <picture>
            <source srcSet="/tp/TP_Img5_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/tp/TP_Img5_DESKTOP.png 700w" />
            <img
              src="/tp/TP_Img5_DESKTOP.png"
              alt='Figma designs of new component at three size breakpoints.'
            />
          </picture>
        </div>

        <div className={styles.textOnly}>
          <h2>Accessibility as a top priority.</h2>
          <p>A marketing site for a content creation agency means a lot of videos and motion. While aiming
            to create an eye-catching and exciting user experience, I also made it a personal priority to
            ensure accessibility by honoring user preferences for reduced motion on all auto play videos,
            gifs and animations. Leveraging the Content API, we detected system-level motion preferences
            then passed that selection down throughout the site, enabling components with autoplay videos,
            GIFs, or animations to adjust accordingly.</p>
        </div>

        <div className={styles.twoColumn}>
          <Video video='/tp/TP_Img6_DESKTOP.mov' poster='/tp/TP_Img6(still).png' />
          <div className={styles.textBox}>
            <h2>Down to the Details</h2>
            <p>Because of how frequently videos are used across the site, the details of video controls
              became an important consideration. Design and development collaborated closely to strike
              a balance between fully custom video controls and native browser controls in order to
              deliver a cohesive user experience across devices. While custom controls offered greater
              flexibility for branding and interactivity, native controls ensure accessibility and
              consistency across platforms. Ultimately we agreed on a hybrid approach: using native
              controls as the foundation, enhanced with subtle custom styling and behavior where it
              added value without compromising usability or performance. This allowed us to maintain
              visual consistency while ensuring reliable and familiar functionality.</p>
          </div>
        </div>

        <div className={styles.textOnly}>
          <h2>Trainings, Demo, and Documentation</h2>
          <p>Following the site launch, I led regular training sessions for content editors to ensure
            they were confident making updates within the Contentful interface. To support ongoing
            learning and onboarding, I also recorded a series of training videos for reference and
            created detailed documentation covering the new component library, available configuration
            options, and best practices. This included tips and tricks to help editors get the most
            out of the system and ultimately empower the team to manage content independently, without
            relying on developers.</p>
        </div>

        <picture className={styles.fullImg}>
          <source srcSet="/tp/TP_Img7_MOBILE.png 670w" media="(max-width: 700px)" />
          <source srcSet="/tp/TP_Img7_DESKTOP.png 1340w" />
          <img
            src="/tp/TP_Img7_DESKTOP.png"
            alt='ALT TEXT'
          />
        </picture>

        <div className={styles.textOnly}>
          <h2>Ongoing support</h2>
          <p>I continued to support the site and codebase through ongoing updates, including the
            development of new pages and added component capabilities. Because of the strength of
            my contributions, this work has transitioned into a freelance engagement, where I
            remain the sole developer and support designer for ongoing improvements and
            maintenance.</p>
          <p>Visit the <CustomLink text="Live Site" url="https://the-program.com/" external /></p>
          <br />
          <p>Back to <CustomLink text="My Full Portfolio" url="/portfolio" /></p>
        </div>

      </main>
    </div>
  );
}