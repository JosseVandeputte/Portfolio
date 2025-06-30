import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Let's Work Together</h1>
          <p className={styles.subtitle}>
            Ready to bring your ideas to life? I'd love to hear from you.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.contactInfo}>
            <h2>Get In Touch</h2>
            <p>
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'm always excited to connect with fellow developers, designers, and innovators.
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <h3>Email</h3>
                <a href="mailto:josse.vandeputte@gmail.com" className={styles.contactLink}>
                  josse.vandeputte@gmail.com
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

          <div className={styles.contactForm}>
            <h2>Send a Message</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className={styles.availability}>
          <h2>Availability</h2>
          <p>
            I'm currently available for new projects and collaborations. 
            Whether you need a full-stack developer, frontend specialist, 
            or technical consultant, let's discuss how I can help bring your vision to life.
          </p>
          <div className={styles.status}>
            <span className={styles.statusIndicator}></span>
            {' '}Available for new opportunities
          </div>
        </section>
      </div>
    </div>
  );
}
