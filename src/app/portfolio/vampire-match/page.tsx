import type { Metadata } from "next";
import { PROJECT_SUMMARIES } from "@/data/ProjectSummaries";
import Navigation from "@comp/Navigation/Navigation";
import CustomLink from "@comp/Link/Link";
import Header from "@comp/Header/Header";
import styles from '../../../styles/page.module.scss';
import Video from "@/components/Video/Video";

const projectData = PROJECT_SUMMARIES[4];

export const metadata: Metadata = {
    title: `Katrina Cloyd | ${projectData.company} Project Page`,
    description: projectData.role || 'Frontend Developer and Designer for web site creation.',
};

export default function VampDetailPg() {
    return (
        <div className={styles.page}>
            <Navigation />
            <main className={styles.main}>

                <Header {...projectData} />

                <picture className={styles.fullImg}>
                    <source srcSet="/vamp/Vamp_Img1_MOBILE.png 670w" media="(max-width: 700px)" />
                    <source srcSet="/vamp/Vamp_Img1_DESKTOP.png 1340w" />
                    <img
                        src="/vamp/Vamp_Img1_DESKTOP.png"
                        alt='Vampire Match homepage'
                        loading="eager"
                    />
                </picture>

                <div className={styles.textOnly}>
                    <h2>Not a dating app for blood suckers</h2>
                    <p>Rather, a fun memory card match game based on the movie and television series
                        <em>What We Do In The Shadows.</em>
                    </p>
                    <p>Can you get the high score?</p>
                    <p>Visit the <CustomLink text="Live Site" url="https://vampirematch.netlify.app/" external /></p>
                    <p>View the code on <CustomLink text="GitHub" url="https://github.com/UniKittyCorns/MemoryCardGame" external /></p>
                </div>

                <div className={styles.twoColumn}>
                    <div className={styles.textBox}>
                        <h2>My first web app</h2>
                        <p>This was the first large team project that I completed during my time at Alchemy
                            Code Lab. Built entirely with vanilla Javascript, before any of us knew anything
                            about React or styling libraries, my team of four completed this game in a five
                            day sprint.
                        </p>
                        <p>Yes, this is a pretty old project at this point, and there are places where this could
                            be improved, for sure. But it will always be one of my favorites!
                        </p>
                    </div>
                    <picture>
                        <source srcSet="/vamp/Vamp_Img2_MOBILE.png 500w" media="(max-width: 700px)" />
                        <source srcSet="/vamp/Vamp_Img2_DESKTOP.png 700w" />
                        <img
                            src="/vamp/Vamp_Img2_DESKTOP.png"
                            alt='Medium difficult game board mid-play.'
                        />
                    </picture>
                </div>

                <div className={styles.twoColumn}>
                    <Video video='/vamp/Vamp_Img3_DESKTOP.mov' poster='/vamp/Vamp_Img3(still)_DESKTOP.png' />
                    <div className={styles.textBox}>
                        <h2>The flip</h2>
                        <p>The idea for this game initially came about based on a simple css flip animation.
                            When I first saw this css rotate animation I was immediately inspired to make a memory card
                            matching game of some kind. As a team we landed on a favorite show to build for inspiration and
                            the project was a go! From there we took off into planning and development.
                        </p>
                        <p>Said flip animation proved a bit more of a challenge for us css newbies, but eventually
                            we got things flipping nice and smooth.
                        </p>
                    </div>
                </div>

                <div className={styles.twoColumn}>
                    <div className={styles.textBox}>
                        <h2>The shuffle</h2>
                        <p>The second challenge came with the concept of a deck of cards, shuffling and randomization.
                            We wanted to make sure that even if a user chose the easy level over and over again, they
                            would still get to see cards from the entire deck. Also, for the game play itself, we
                            needed the cards to be randomly placed on the board.
                        </p>
                        <p>This was solved using a sort function that leveraged <code>Math.random()</code> ensuring that even the
                            developers couldn&apos;t predict the card placement on the board.
                        </p>
                    </div>
                    <picture>
                        <source srcSet="/vamp/Vamp_Img4_MOBILE.png 500w" media="(max-width: 700px)" />
                        <source srcSet="/vamp/Vamp_Img4_DESKTOP.png 700w" />
                        <img
                            src="/vamp/Vamp_Img4_DESKTOP.png"
                            alt='Snippit of the card shuffle code.'
                        />
                    </picture>
                </div>

                <div className={styles.twoColumn}>
                    <picture>
                        <source srcSet="/vamp/Vamp_Img5_MOBILE.png 500w" media="(max-width: 700px)" />
                        <source srcSet="/vamp/Vamp_Img5_DESKTOP.png 700w" />
                        <img
                            src="/vamp/Vamp_Img5_DESKTOP.png"
                            alt='The High Score board showing various scores for three different players.'
                        />
                    </picture>
                    <div className={styles.textBox}>
                        <h2>High scores</h2>
                        <p>One of my primary contributions to the team was score handling and the high scores page.
                            Implementing local storage, I solved for saving high scores across game difficulty levels
                            for multiple players. And of course, for players displeased with their performance, a &quot;Clear
                            All Scores&quot; button to wipe the slate clean.
                        </p>
                        <p>I must admit, I had the most fun creating the vintage video game look and feel for the page.</p>
                    </div>
                </div>

                <div className={styles.twoColumn}>
                    <div className={styles.textBox}>
                        <h2>Custom illustrations and fun sound effects</h2>
                        <p>Our love for the project really inspired us to make the full experience as fun as we could.
                            We added sound effects for actions and of course a win!
                        </p>
                        <p>Not to mention the wonderful illustrations. Because we were so proud of these, we had to build
                            in a &quot;Give Up&quot; functionality so that even if you can&apos;t beat the level, you can still see all
                            of the cards face up! Best used on the 48 card level (whew)!
                        </p>
                        <p>Illustration credit to the lovely <CustomLink url="https://github.com/sorayamajdolashrafi" text="Soraya Majdolashrafi." external />
                        </p>
                    </div>
                    <picture>
                        <source srcSet="/vamp/Vamp_Img6_MOBILE.png 500w" media="(max-width: 700px)" />
                        <source srcSet="/vamp/Vamp_Img6_DESKTOP.png 700w" />
                        <img
                            src="/vamp/Vamp_Img6_DESKTOP.png"
                            alt='Grid of all of the card illustrations for the game.'
                        />
                    </picture>
                </div>


                <div className={styles.twoColumn}>
                    <picture>
                        <source srcSet="/vamp/Vamp_Img7_MOBILE.png 500w" media="(max-width: 700px)" />
                        <source srcSet="/vamp/Vamp_Img7_DESKTOP.png 700w" />
                        <img
                            src="/vamp/Vamp_Img7_DESKTOP.png"
                            alt='The About page featuring illustrations for team members.'
                        />
                    </picture>
                    <div className={styles.textBox}>
                        <h2>What would you do in the shadows?</h2>
                        <p>Give it a go, see if you can beat my high (lowest?) score!</p>
                        <p>Try your hand at <CustomLink text="Vampire Matching" url="https://vampirematch.netlify.app/" external /></p>
                        <p>You can also check out the <CustomLink text="UniKittyCorn team GitHub" url="https://github.com/UniKittyCorns/MemoryCardGame" external /></p>
                        <p>Back to <CustomLink text="My Full Portfolio" url="/portfolio" /></p>
                    </div>
                </div>

            </main>
        </div>
    );
}