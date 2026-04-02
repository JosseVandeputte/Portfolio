import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      imageAlt: "Portfolio Website",
      description: "A responsive portfolio website.",
      technologies: ["React", "CSS Modules", "TypeScript"],
      image: "/next.svg",
      demoUrl: "https://vdpj.be",
      codeUrl: "https://github.com/JosseVandeputte/Portfolio"
    },
        {
      id: 2,
      title: <>Vigilis Law Consult <br/> <span style={{ fontStyle: 'italic', fontSize: '0.75em', fontWeight: 'normal' }}>(updated version will be online at end of Q2 2026)</span></>,
      imageAlt: "Vigilis Law Consult",
      description: "A professional consulting platform for an expert in Belgian security law, offering legal advisory, law enforcement training, and public sector consulting.",
      technologies: ["React", "CSS Modules", "TypeScript", "Deno"],
      image: "/vlc.png",
      demoUrl: "https://vigilislawconsult.be",
      codeUrl: "https://github.com/JosseVandeputte/vigilislawconsult.be/tree/v2"    
    },
    {
      id: 3,
      title: "Wordle",
      imageAlt: "Wordle",
      description: "A clone of the popular Wordle game with a modern twist.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/wordle.png",
      demoUrl: "https://wordle.vdpj.be",
      codeUrl: "https://github.com/JosseVandeputte/Wordle"
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

        <section className={styles.cta}>
          <h2>Interested in working together?</h2>
          <p>I&apos;m always open to discussing new opportunities and collaborations.</p>
          <Link href="/contact" className={styles.contactButton}>
            Let&apos;s Talk
          </Link>
        </section>
      </div>
    </div>
  );
}
