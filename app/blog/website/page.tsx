import styles from "./page.module.css";

export default function WebsiteBlog() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>How I Built This Website</h1>
          <p className={styles.subtitle}>
            A look behind the scenes of vdpj.be - the tech, the hosting, and how it all fits together
          </p>
        </div>

        <article className={styles.article}>
          <p>
            This e-portfolio is a custom-built website, not a CMS or a template. I wanted full control
            over the design and structure, and building it from scratch was also a great opportunity to
            apply what I know about modern web development.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
            <p>
              The website is built with the following technologies:
            </p>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <strong>Next.js 15</strong>
                <span>React framework with file-based routing and server components</span>
              </div>
              <div className={styles.techCard}>
                <strong>React 19</strong>
                <span>UI library for building component-based interfaces</span>
              </div>
              <div className={styles.techCard}>
                <strong>TypeScript</strong>
                <span>Type-safe JavaScript throughout the entire codebase</span>
              </div>
              <div className={styles.techCard}>
                <strong>CSS Modules</strong>
                <span>Scoped, component-level styling without any CSS-in-JS overhead</span>
              </div>
            </div>
            <p>
              I chose Next.js because it handles routing, image optimisation, and static generation
              out of the box, which means fast load times without much extra configuration. TypeScript
              keeps the codebase maintainable, especially when the data structures (like the projects list)
              grow over time.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Hosting & Domain</h2>
            <p>
              The website is hosted through <strong>Vimexx</strong> and is available at{" "}
              <strong>vdpj.be</strong>. Vimexx handles the DNS, SSL certificate, and web hosting.
              The domain was registered separately and pointed to the hosting environment where
              the Next.js build output is served.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How I Add a New Blog Post</h2>
            <p>
              Because the site uses Next.js file-based routing, adding a new blog post is
              straightforward:
            </p>
            <ol className={styles.list}>
              <li>Create a new folder inside <code>/app/blog/</code> with the slug name (e.g. <code>my-new-post</code>)</li>
              <li>Add a <code>page.tsx</code> file inside that folder with the article content</li>
              <li>Optionally add a <code>page.module.css</code> for post-specific styling</li>
              <li>Add the new card to the blog overview page at <code>/app/blog/page.tsx</code></li>
            </ol>
            <p>
              There is no database, no CMS admin panel, and no build pipeline beyond a standard
              Next.js production build. The entire site lives in a single repository and is deployed
              by pushing the build output to the Vimexx hosting environment.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why a Custom Site Instead of a CMS?</h2>
            <p>
              I considered platforms like WordPress, Wix, or GitHub Pages, but decided against them
              for a few reasons. I wanted the portfolio to itself be a demonstration of what I can build -
              a WordPress site says very little about your development skills. Building it from scratch
              with Next.js and TypeScript shows a working knowledge of modern frontend development,
              component architecture, and deployment workflows.
            </p>
            <p>
              It also gives me full flexibility. Every layout, colour, and interaction is intentional
              and fully under my control.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
