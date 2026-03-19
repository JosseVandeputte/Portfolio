import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.subtitle}>
            Passionate developer with a love for creating digital experiences
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.textContent}>
            <h2>Hello! I&apos;m Josse Vandeputte</h2>
            <p>
              I&apos;m a full-stack developer based in Belgium, passionate about
              creating beautiful and functional digital experiences. With a strong foundation 
              in both frontend and backend technologies, I enjoy bringing ideas to life through code.
            </p>
            
            <p>
              My journey in tech started with curiosity about how computers work, and it has
              evolved into my studies where I get to solve complex problems and build solutions
              that make a difference. I believe in writing clean, maintainable code and 
              designing with the user in mind.
            </p>
          </div>

          <div className={styles.skills}>
            <h3>Technologies I work with</h3>
            <div className={styles.skillTags}>
              <span className={styles.tag}>C#</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>TypeScript</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Vue.js</span>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>Node.js</span>
              <span className={styles.tag}>Laravel</span>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>CSS/SCSS</span>
              <span className={styles.tag}>PHP</span>
              <span className={styles.tag}>PostgreSQL</span>
              <span className={styles.tag}>MongoDB</span>
              <span className={styles.tag}>Git</span>
              <span className={styles.tag}>Docker</span>
              <span className={styles.tag}>Azure</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
