import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.highlight}>Josse</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Full-stack developer
          </p>
          <p className={styles.heroDescription}>
            I build modern web applications with clean code and beautiful design. 
            Passionate about creating solutions that make a difference.
          </p>
          
          <div className={styles.heroCtas}>
            <Link href="/projects" className={styles.primaryButton}>
              View My Work
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What I Do</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Image
                  src="/window.svg"
                  alt="Frontend Development"
                  width={24}
                  height={24}
                />
              </div>
              <h3>Frontend Development</h3>
              <p>Creating responsive and interactive user interfaces.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Image
                  src="/globe.svg"
                  alt="Backend Development"
                  width={24}
                  height={24}
                />
              </div>
              <h3>Backend Development</h3>
              <p>Building robust APIs and server-side applications.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Image
                  src="/file.svg"
                  alt="UI/UX Design"
                  width={24}
                  height={24}
                />
              </div>
              <h3>UI/UX Design</h3>
              <p>Designing intuitive and engaging user experiences with attention to detail and usability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Let's Work Together</h2>
          <p>Ready to bring your ideas to life? Let's discuss your next project.</p>
          <Link href="/contact" className={styles.primaryButton}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
