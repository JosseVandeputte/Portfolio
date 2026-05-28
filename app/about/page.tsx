import styles from "./page.module.css";
import { projects, skills, excludeFromSkills } from "../data/projects";

const technologies = [
  ...new Set([
    ...projects.flatMap((p) => p.technologies).filter((t) => !excludeFromSkills.has(t)),
    ...skills,
  ]),
];

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.subtitle}>
            Applied Computer Science student at Howest · Graduating June 2026
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.textContent}>
            <h2>Hello! I&apos;m Josse Vandeputte</h2>
            <p>
              I&apos;m a full-stack developer from Belgium, currently finishing my degree in
              Applied Computer Science at Howest (Bruges). I build both frontend and backend,
              and I care about writing code that&apos;s clean, maintainable, and actually
              pleasant to work with.
            </p>
            <p>
              Alongside my studies I have worked on personal projects like RailSync and
              Vigilis Law Consult, and completed an internship at Outkept in Ghent where I
              got hands-on experience in a real development environment.
            </p>
          </div>

          <div className={styles.skills}>
            <h3>Technologies I work with</h3>
            <div className={styles.skillTags}>
              {technologies.map((tech) => (
                <span key={tech} className={styles.tag}>{tech}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
