import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing development skills.",
      technologies: ["Next.js", "CSS Modules", "TypeScript"],
      image: "/next.svg",
      demoUrl: "https://vdpj.be",
      codeUrl: ""
    }
  ];

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
                  alt={project.title}
                  width={60}
                  height={60}
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
                  <Link href={project.demoUrl} className={styles.demoLink}>
                    Live Demo
                  </Link>
                  <Link href={project.codeUrl} className={styles.codeLink}>
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Interested in working together?</h2>
          <p>I'm always open to discussing new opportunities and collaborations.</p>
          <Link href="/contact" className={styles.contactButton}>
            Let's Talk
          </Link>
        </section>
      </div>
    </div>
  );
}
