import Link from "next/link";
import styles from "./page.module.css";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <h1 className={styles.name}>
            <span className={styles.highlight}>Josse</span> Vandeputte
          </h1>
          <p className={styles.bio}>
            Developer from Belgium. I study Applied Computer Science and build things 
            on the side — mostly full-stack web stuff - in my free time.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <p className={styles.aboutText}>
            My journey in tech began with a curiosity about how computers work and has 
            evolved into studying Applied Computer Science. I enjoy solving complex problems 
            and building digital experiences that actually feel good to use. Both frontend 
            and backend, focusing on clean code and solid architecture.
          </p>
          <Link href="/about" className={styles.inlineLink}>
            More about my background →
          </Link>
        </div>
      </section>

      <section className={styles.recent}>
        <div className={styles.recentInner}>
          <p className={styles.recentLabel}>Recent work</p>
          <ul className={styles.projectList}>
            {projects.reverse().slice(0, 3).map((project) => (
              <li key={project.id}>
                <Link href={project.demoUrl || project.codeUrl} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  <span className={styles.projectName}>{project.title}</span>
                  <span className={styles.projectMeta}>{project.technologies.slice(0, 4).join(", ")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/projects" className={styles.viewAll}>
            All projects →
          </Link>
        </div>
      </section>

      <section className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.bottomText}>
            Want to chat? <Link href="/contact" className={styles.inlineLink}>Get in touch</Link> or find me on{" "}
            <Link href="https://github.com/JosseVandeputte" className={styles.inlineLink} target="_blank" rel="noopener noreferrer">GitHub</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
