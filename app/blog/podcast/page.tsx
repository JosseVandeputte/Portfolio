import styles from './page.module.css';

export default function Podcast() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>How AI Is Changing the Job of Software Developers</h1>
                    <p className={styles.subtitle}>Howest IT Student Podcast - May 2026</p>
                </div>

                <article className={styles.article}>
                    <p>
                        A few weeks ago I had the chance to sit down with Vincent Verbergt for an episode
                        of the Howest IT Student Podcast. We talked about something that&apos;s been on every
                        developer&apos;s mind lately: what does AI actually mean for our jobs?
                    </p>

                    <div className={styles.spotifyEmbed}>
                        <iframe
                            style={{ borderRadius: '12px', border: 'none' }}
                            src="https://open.spotify.com/embed/episode/3VvVBkIp5an8nMGD5oVnT3"
                            width="100%"
                            height="152"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>From Writing Code to Designing Systems</h2>
                        <p>
                            The big shift we kept coming back to is that the day-to-day work of a developer
                            is moving up a level. AI tools are getting good enough to handle a lot of the
                            routine coding, which means our value is increasingly in knowing <em>what</em> to
                            build and <em>why</em> - not just <em>how</em>. Architecture, design decisions,
                            and understanding the bigger picture matter more than ever.
                        </p>
                        <p>
                            That&apos;s both exciting and a little daunting. It means you need to stay sharp on
                            fundamentals so you can actually judge whether the AI output is correct, and you
                            need to get comfortable operating at a higher level of abstraction than most of
                            us were trained for.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>The Security Side of the Story</h2>
                        <p>
                            We also spent some time on the risks that come with AI-generated code. When you
                            lean on AI to write whole chunks of your application, you can end up shipping
                            vulnerabilities you never reviewed. The code looks fine on the surface, but the
                            subtle security issues that a senior developer would have caught can slip right
                            through.
                        </p>
                        <p>
                            The takeaway is that AI raises the productivity ceiling but also raises the stakes
                            on code review. You can&apos;t just accept the output - you need to understand it.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Takeaway</h2>
                        <p>
                            It was a great conversation and genuinely changed how I think about learning
                            priorities going into my career. Use AI as a tool, but invest in the skills that
                            let you guide and verify it. The developers who thrive will be the ones who can
                            think at the system level and ask the right questions.
                        </p>
                        <p className={styles.closing}>Give it a listen - it&apos;s only 22 minutes.</p>
                    </section>
                </article>
            </div>
        </div>
    );
}
