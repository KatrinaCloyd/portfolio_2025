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
              Working hand in hand with the design team remotely collaborating, we completed this full
              site build in under three months. Just in time for Lygos&apos; new product launch.
            </p>
          </div>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textBox}>
            <h2>An easily editable website for a growing company</h2>
            <p>Because of the nature of the company, Lygos and their product offerings are always growing and
              changing. Meaning their website needed to be just as flexible to allow for that growth and change.
              To support this need we implemented a new visual CMS, Builder.io.
            </p>
            <p>Builder.io allows for custom components, to keep the design, look and feel of the website
              consistent and in line with the new brand guidelines, while also allowing editors to add new
              content, reorder page flows, edit links, and upload new assets without developer involvement.
            </p>
            <p>With a tech stack including Next.js, custom React components, Typescript, Styled Components,
              and Vercel for hosting, we delivered this and more.
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
          <p>The first step of this site build was digesting the finalized Figma prototypes. From there we determined
            which information was being reused throughout the site widely enough to constitute reusable data entries
            vs which content should be one-off entries. We then broke the designs down into self contained
            components, solidified the content model, wrote the tickets, and dove into agile development.
          </p>
        </div>

        <div className={styles.twoColumn}>
          <Video video='/lygos/Lygos_Img4_DESKTOP.mov' poster='/lygos/Lygos_Img4(still)_DESKTOP.png' />
          <div className={styles.textBox}>
            <h2>Flexible site with guardrails</h2>
            <p>While Builder.io allows for full editor control in the interface, we decided that there needed to be limitations.
              We now had a beautiful new brand and while we wanted to allow editor freedom, we didn&apos;t want anyone to be able to
              break from the design system. Instead we opted for a library of completely controlled and styled custom components.
              From smaller building blocks like inline Links, Buttons, and Informational Cards, to larger page sections like
              Carousels and Contact Forms. All of which were developed with baked-in responsive, mobile-first design, accessibility
              considerations and best practices, and usage guardrails.
            </p>
            <p>For example, editors can select if the section should have a grey background or a navy, but the color of the text
              in that section is dynamically hard coded based on the selected background color for contrast needs and design
              consistency.
            </p>
          </div>
        </div>

        <div className={styles.textOnly}>
          <h2>Cross team collaboration</h2>
          <p>As we neared the final launch of the refreshed site, the development team worked hand-in-hand for final
            functional and design QA. Continuing to work in an agile approach, new tickets were created as the design
            team requested adjustments or received final approval on assets and copy.
          </p>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textBox}>
            <h2>Unlimited pages</h2>
            <p>Utilizing Next.js dynamic routes and static site generation functions this site was initially launched
              with 14 main landing pages and 9 blog page entries. However, the site could support the creation and
              publication of as many additional pages and blog entries as the marketing team decides to publish. All
              without any additional development work.
            </p>
            <p>Final launch also included multiple integrations, such as enabling Hubspot form embeds and tracking,
              and Google analytics – for conversion and event tracking.
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
          <p>After the initial site launch I shifted into a hybrid development and design role to continue to support Lygos.
            Over the following year and a half I collaborated with the Lygos marketing team to expand site capabilities and to
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
          <p>Beyond development and design I also lead client trainings on the Builder.io interface, explained
            the authoring and publishing process, and recorded detailed training videos. It was a great collaboration and
            so rewarding to be helping a truly sustainable company grow and expand their reach.
          </p>
          <p>Visit the <CustomLink text="Lygos Live Site" url="https://www.lygos.com/" external /></p>
          <br />
          <p>Back to <CustomLink text="My Full Portfolio" url="/portfolio" /></p>
        </div>
      </main>
    </div>
  );
}