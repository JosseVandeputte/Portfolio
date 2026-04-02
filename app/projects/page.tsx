import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.subtitle}>
            A collection of work that showcases my skills and passion for development
          </p>
        </section>

        <section className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={70}
                  height={70}
                />
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  <Link href={project.demoUrl} className={styles.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                  <Link href={project.codeUrl} className={styles.codeLink} target="_blank" rel="noopener noreferrer">
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
