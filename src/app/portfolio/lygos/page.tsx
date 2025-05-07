import type { Metadata } from "next";
import { PROJECT_SUMMARIES } from "@/data/ProjectSummaries";
import Navigation from "@comp/Navigation/Navigation";
import CustomLink from "@comp/Link/Link";
import Header from "@comp/Header/Header";
import styles from '../../../styles/page.module.scss';
import Video from "@/components/Video/Video";

const projectData = PROJECT_SUMMARIES[0];

export const metadata: Metadata = {
  title: `Katrina Cloyd | ${projectData.company} Project Page`,
  description: projectData.role || 'Frontend Developer and Designer for web site creation.',
};

export default function LygosDetailPg() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main className={styles.main}>

        <Header {...projectData} />

        <picture className={styles.fullImg}>
          <source srcSet="/lygos/Lygos_Img1_MOBILE.png 670w" media="(max-width: 700px)" />
          <source srcSet="/lygos/Lygos_Img1_DESKTOP.png 1340w" />
          <img
            src="/lygos/Lygos_Img1_DESKTOP.png"
            alt='Lygos company homepage'
            loading="eager"
          />
        </picture>

        <div className={styles.textOnly}>
          <h2>Biotech company looking for a complete refresh</h2>
          <p>Lygos specializes in innovative, sustainable solutions, working to replace petrochemicals
            with cleaner, high-performing plant-based alternatives. During my time working with The Program,
            Lygos came to us in need of a new brand identity and website that would reflect its core values
            and support their growth.
          </p>
          <p>Visit the <CustomLink text="Live Site" url="https://www.lygos.com/" external /></p>
        </div>

        <div className={styles.twoColumn}>
          <picture>
            <source srcSet="/lygos/Lygos_Img2_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/lygos/Lygos_Img2_DESKTOP.png 700w" />
            <img
              src="/lygos/Lygos_Img2_DESKTOP.png"
              alt='Collage of Lygos website at desktop and mobile sizes.'
            />
          </picture>
          <div className={styles.textBox}>
            <h2>Completely new web site to accompany a new brand</h2>
            <p>At project kickoff, I was working as a part of the technical development team of five.
              Working hand in hand with the design team in a fully remote environment, we successfully
              completed a full site build in under three months, just in time for Lygos&apos; new product launch.
            </p>
          </div>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textBox}>
            <h2>An easily editable website for a growing company</h2>
            <p>Because of the nature of the company, Lygos and their product offerings are always growing and
              changing. Meaning their website needed to be just as flexible to allow for that growth and change.
              To support this need we implemented a visual CMS, Builder.io.
            </p>
            <p>Builder.io supports custom components, enabling us to maintain a consistent design and user experience
              aligned with the new brand guidelines. At the same time, it empowers editors to add new content, reorder
              page flows, edit links, and upload assets, all without requiring developer support.
            </p>
            <p>With a tech stack including Next.js, custom React components, Typescript, Styled Components,
              and Vercel for hosting, we delivered a flexible, high-performance solution and more.
            </p>
          </div>
          <picture>
            <source srcSet="/lygos/Lygos_Img3_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/lygos/Lygos_Img3_DESKTOP.png 700w" />
            <img
              src="/lygos/Lygos_Img3_DESKTOP.png"
              alt='View of Builder Editor showing various Component Menus'
            />
          </picture>
        </div>

        <div className={styles.textOnly}>
          <h2>Give it structure</h2>
          <p>The first step in the site build was reviewing and analyzing the finalized Figma prototypes. From
            there, we identified which content was reused frequently enough to warrant reusable data entries,
            versus which pieces were better suited as one-off entries. We then broke the designs into self-contained
            components, finalized the content model, created detailed tickets, and dove into agile development.
          </p>
        </div>

        <div className={styles.twoColumn}>
          <Video video='/lygos/Lygos_Img4_DESKTOP.mov' poster='/lygos/Lygos_Img4(still)_DESKTOP.png' />
          <div className={styles.textBox}>
            <h2>Flexible site with guardrails</h2>
            <p>While Builder.io allows for full editor control in the interface, we recognized the need to establish
              thoughtful limitations. With a beautiful new brand in place, it was important to strike a balance between
              editorial flexibility and maintaining design consistency. To achieve this, we implemented a library of
              fully styled, custom components, ranging from smaller building blocks like inline links, buttons, and
              informational cards, to larger page sections like carousels and contact forms. Each component, from large
              to small, was developed with responsive, mobile-first design, incorporating accessibility
              best practices, and guardrails for usage.
            </p>
            <p>For example, editors can select if the section should have a grey background or a navy, but the color of the text
              in that section is dynamically determined based on the selected background. This ensures proper contrast for accessibility
              while maintaining design consistency.
            </p>
          </div>
        </div>

        <div className={styles.textOnly}>
          <h2>Cross team collaboration</h2>
          <p>As we neared the final launch of the refreshed site, the development team worked hand-in-hand with design to complete
            functional and visual QA. Staying true to our agile workflow, we created new tickets on the fly as the design team requested
            adjustments or finalized assets and copy.
          </p>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textBox}>
            <h2>Unlimited pages</h2>
            <p>Leveraging Next.js dynamic routing and static site generation, the site was initially launched
              with 14 main landing pages and 9 blog page entries. However, the site was built to scale, enabling
              the marketing team to create and publish an unlimited number of additional pages and blog posts,
              all without requiring further developer involvement.
            </p>
            <p>Final launch also included several key integrations, including HubSpot form embeds with tracking and
              Google Analytics for conversion and event monitoring.
            </p>
          </div>
          <picture>
            <source srcSet="/lygos/Lygos_Img5_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/lygos/Lygos_Img5_DESKTOP.png 700w" />
            <img
              src="/lygos/Lygos_Img5_DESKTOP.png"
              alt='Spread of various landing pages across the Lygos website.'
            />
          </picture>
        </div>

        <div className={styles.textOnly}>
          <h2>Post-launch support</h2>
          <p>After the initial site launch I shifted into a hybrid development/design role to continue to support Lygos.
            Over the following year and a half, I collaborated with the Lygos marketing team to expand site capabilities and to
            design and develop new components to support their changing needs and growing product offerings.
          </p>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textBox}>
            <h2>Full spectrum support</h2>
            <p>Working within the new brand standards and design framework, and in collaboration with Lygos leadership, I
              covered the full spectrum for ongoing support. I was responsible for all stages of work, from initial visual
              designs of new components, to approved functional Figma prototypes, through technical development and launch.
            </p>
            <p>This work included:</p>
            <ul>
              <li>Category and filtering capability for blog entries</li>
              <li>New hero variant with video capabilities</li>
              <li>A dynamic, categorized drop-down section to share product specific technical formulation sheets</li>
              <li>Interactive map of distributors and distribution areas</li>
              <li>...and more.</li>
            </ul>
          </div>
          <picture>
            <source srcSet="/lygos/Lygos_Img6_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/lygos/Lygos_Img6_DESKTOP.png 700w" />
            <img
              src="/lygos/Lygos_Img6_DESKTOP.png"
              alt='The new distribution map component on the Lygos site.'
            />
          </picture>
        </div>

        <picture className={styles.fullImg}>
          <source srcSet="/lygos/Lygos_Img7_MOBILE.png 670w" media="(max-width: 700px)" />
          <source srcSet="/lygos/Lygos_Img7_DESKTOP.png 1340w" />
          <img
            src="/lygos/Lygos_Img7_DESKTOP.png"
            alt='Collage of new page component designs.'
          />
        </picture>

        <div className={styles.textOnly}>
          <p>Beyond development and design I also lead client trainings on the Builder.io interface, walked them through
            the authoring and publishing process, and created detailed training videos. It was a rewarding collaboration,
            and I found it truly fulfilling to help a sustainable company like Lygos grow and expand their reach.
          </p>
          <p>Visit the <CustomLink text="Lygos Live Site" url="https://www.lygos.com/" external /></p>
          <br />
          <p>Back to <CustomLink text="My Full Portfolio" url="/portfolio" /></p>
        </div>
      </main>
    </div>
  );
}