import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Let&apos;s Work Together</h1>
          <p className={styles.subtitle}>
            Ready to bring your ideas to life? I&apos;d love to hear from you.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.contactInfo}>
            <h2>Get In Touch</h2>
            <p>
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I&apos;m always excited to connect with fellow developers, designers, and innovators.
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <h3>Email</h3>
                <a href="mailto:&#x6a;&#x6f;&#x73;&#x73;&#x65;&#x2e;&#x76;&#x61;&#x6e;&#x64;&#x65;&#x70;&#x75;&#x74;&#x74;&#x65;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;" className={styles.contactLink}>
                  &#x6a;&#x6f;&#x73;&#x73;&#x65;&#x2e;&#x76;&#x61;&#x6e;&#x64;&#x65;&#x70;&#x75;&#x74;&#x74;&#x65;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;
                </a>
              </div>
              
              <div className={styles.contactMethod}>
                <h3>LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/josse-vandeputte/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  /in/josse-vandeputte
                </a>
              </div>
              
              <div className={styles.contactMethod}>
                <h3>GitHub</h3>
                <a 
                  href="https://github.com/JosseVandeputte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  /JosseVandeputte
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
