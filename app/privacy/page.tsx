import styles from "./page.module.css";

export default function Privacy() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Privacy & Cookie Policy</h1>
          <p className={styles.subtitle}>
            Last updated: July 1, 2025
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.section}>
            <p>
              This website exclusively uses functional cookies. These are cookies that are necessary for the correct functioning of the website. They store, for example, your language preference or other technical data, so that you can use the website optimally.
            </p>
          </div>

          <div className={styles.section}>
            <h2>What are functional cookies?</h2>
            <p>
              Functional cookies are essential for the technical functioning of the website. They ensure that the website works correctly and that you can reach the desired pages. These cookies do not store personal data and are not intended for tracking or profiling users.
            </p>
          </div>

          <div className={styles.section}>
            <h2>No consent required</h2>
            <p>
              Since this website only uses functional cookies, it is not necessary to ask for your consent to place them. The legislation only requires an information obligation, which we fulfill through this statement.
            </p>
          </div>

          <div className={styles.section}>
            <h2>How can you browse the website without cookies?</h2>
            <p>
              You can manage or disable cookies in your browser settings. Please note that disabling functional cookies may affect the operation of the website.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Contact</h2>
            <p>
              For questions about this privacy and cookie policy, you can contact:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Josse Vandeputte</strong></p>
              <p>Email: info@vdpj.be</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
