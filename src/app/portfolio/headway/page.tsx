import type { Metadata } from "next";
import { PROJECT_SUMMARIES } from "@/data/ProjectSummaries";
import Navigation from "@comp/Navigation/Navigation";
import CustomLink from "@comp/Link/Link";
import Header from "@comp/Header/Header";
import styles from '../../../styles/page.module.scss';

const projectData = PROJECT_SUMMARIES[2];

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
          <source srcSet="/headway/Headway_Img1_MOBILE.png 670w" media="(max-width: 700px)" />
          <source srcSet="/headway/Headway_Img1_DESKTOP.png 1340w" />
          <img
            src="/headway/Headway_Img1_DESKTOP.png"
            alt='Headway Resource Center Landing Page'
            loading="eager"
          />
        </picture>

        <div className={styles.textOnly}>
          <h2>Online mental health provider in need of a editable resource center.</h2>
          <p>Headway is an online health service connecting providers with patients. Their goal is to help
            therapists grow their practices while also helping patients find the care right for them that
            they can afford. To support partner providers, they wanted to enhance their existing website
            with a resource library for the therapists in the Headway network.</p>
          <p>Visit the <CustomLink text="Live Site" url="https://headway.co/resources/all" external /></p>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textBox}>
            <h2>The Challenge</h2>
            <p>Headway had developed a proof of concept with a single example article. However, they needed
              support to scale this into a flexible framework that could grow alongside their expanding
              resource offerings. It was also crucial to give content editors autonomy to easily publish
              new articles and resources without developer involvement. On top of all of that, the new
              resource center needed to integrate seamlessly with the existing website, that meant
              developing within the existing code base, keeping consistent styling conventions, and
              utilizing and expanding upon their established styled component library.</p>
          </div>
          <picture>
            <source srcSet="/headway/Headway_Img2_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/headway/Headway_Img2_DESKTOP.png 700w" />
            <img
              src="/headway/Headway_Img2_DESKTOP.png"
              alt='Collage of designs at various breakpoints.'
            />
          </picture>
        </div>

        <div className={styles.twoColumn}>
          <picture>
            <source srcSet="/headway/Headway_Img3_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/headway/Headway_Img3_DESKTOP.png 700w" />
            <img
              src="/headway/Headway_Img3_DESKTOP.png"
              alt='Diagram of user prototype flow'
            />
          </picture>
          <div className={styles.textBox}>
            <h2>Design new pages and user flows</h2>
            <p>As the lead designer, I was responsible for developing the user flow, page layouts, and
              component blocks for the Resource Center. Working within Headway&apos;s established brand
              guidelines and UX framework, I created fully functional, mobile-first prototypes,
              optimized across three distinct responsive breakpoints.</p>
            <p>This included the design of four foundational page types: the main Resource Center
              landing page, category landing pages, author pages, and individual resource articles.
              On the main landing page, users could browse featured articles by topic, navigate to
              topic-specific category pages, or access individual featured articles directly. From
              article pages, users had the ability to view related content, return to the relevant
              category or main landing page, or explore the author&apos;s detail page.</p>
          </div>
        </div>

        <div className={styles.textOnly}>
          <h2>Navigating scope creep</h2>
          <p>After several rounds of positive feedback and growing excitement, we were faced with a
            shifted release date and a reduced budget. Initial thoughts were less than optimistic,
            as it seemed we would have to limit delivery to only a hard coded landing page and a
            single article page template. Determined to deliver the robust Resource Center the client
            envisioned, I shifted into problem-solving mode. By prioritizing flexibility, selectively
            refining components, and cutting non-essential elements, I created a streamlined yet
            versatile component library. This allowed us to support three core, fully editable, page
            types and ultimately deliver a fully functional Resource Center, scaled down in scope
            but not in impact.</p>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textBox}>
            <h2>Contributing new flexibility to existing code base</h2>
            <p>Once the new pages were approved, I transitioned into development as the sole developer
              on the project. I worked within Headway&apos;s extensive existing codebase, which powers both
              their core product and marketing site. Building in React with TypeScript, and using
              Tailwind CSS along with their established styled component library, I ensured all new
              code adhered strictly to their conventions. By following their published code standards
              and leveraging their component system and existing icon set, I maintained visual and
              structural consistency, allowing any Headway developer to work within my new code just
              as they would elsewhere in the codebase.</p>
          </div>
          <picture>
            <source srcSet="/headway/Headway_Img4_MOBILE.png 500w" media="(max-width: 700px)" />
            <source srcSet="/headway/Headway_Img4_DESKTOP.png 700w" />
            <img
              src="/headway/Headway_Img4_DESKTOP.png"
              alt='Desktop and Moblie mocks of example article page'
            />
          </picture>
        </div>

        <div className={styles.textOnly}>
          <h2>Editor autonomy</h2>
          <p>I incorporated Builder.io as the CMS for the resource center to provide a visual editing
            experience, allowing non-technical team members to author, preview and publish new pages and
            content independently. This approach gave the team the flexibility to scale the Resource
            Center quickly and efficiently, without needing to rely on their already busy development
            team. Now, editors can easily make updates, add new articles, and even publish entirely
            new category pages as needed.</p>
        </div>

        <picture className={styles.fullImg}>
          <source srcSet="/headway/Headway_Img5_MOBILE.png 670w" media="(max-width: 700px)" />
          <source srcSet="/headway/Headway_Img5_DESKTOP.png 1340w" />
          <img
            src="/headway/Headway_Img5_DESKTOP.png"
            alt='Collage of page components at various breakpoints.'
          />
        </picture>

        <div className={styles.textOnly}>
          <h2>Delivered just what they needed and still growing</h2>
          <p>In the end, we successfully delivered a robust, dynamic, and scalable Resource Center, built in a
            blog-style format, still live and actively used today, all within a shortened timeline and
            a constrained budget. It was fun and fulfilling to collaborate with the team at
            Headway, I learned so much, and I&apos;m proud to have contributed to a company whose mission and values I
            genuinely believe in.</p>
          <p>Visit the <CustomLink text="Live Site" url="https://headway.co/resources/all" external /></p>
          <br />
          <p>Back to <CustomLink text="My Full Portfolio" url="/portfolio" /></p>
        </div>

      </main>
    </div>
  );
}