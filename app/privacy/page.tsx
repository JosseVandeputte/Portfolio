import styles from "./page.module.css";

export default function Privacy() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            Last updated: June 30, 2025
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2>Introduction</h2>
            <p>
              This Privacy Policy describes how Josse Vandeputte ("I", "me", or "my") 
              collects, uses, and protects your information when you visit this website.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Information I Collect</h2>
            <h3>Personal Information</h3>
            <p>
              When you contact me through the contact form, I may collect:
            </p>
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Subject and message content</li>
            </ul>
            
            <h3>Automatically Collected Information</h3>
            <p>
              When you visit this website, I may automatically collect certain information, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on the site</li>
              <li>Referring website</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>How I Use Your Information</h2>
            <p>
              I use the information I collect to:
            </p>
            <ul>
              <li>Respond to your inquiries and contact requests</li>
              <li>Improve the website and user experience</li>
              <li>Analyze website usage and performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Information Sharing</h2>
            <p>
              I do not sell, trade, or otherwise transfer your personal information to third parties. 
              This does not include trusted third parties who assist me in operating the website, 
              conducting business, or serving you, so long as those parties agree to keep this 
              information confidential.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Data Security</h2>
            <p>
              I implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the Internet or electronic storage is 100% secure.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Cookies</h2>
            <p>
              This website may use cookies to enhance your browsing experience. Cookies are small 
              files that a site or its service provider transfers to your computer's hard drive 
              through your web browser that enables the site's systems to recognize your browser 
              and capture certain information.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Third-Party Services</h2>
            <p>
              This website may include links to third-party websites or services. I am not 
              responsible for the privacy practices of these external sites. I encourage you 
              to review their privacy policies before providing any personal information.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact me at:
            </p>
            <p>
              <strong>Email:</strong> josse.vandeputte@gmail.com
            </p>
          </div>

          <div className={styles.section}>
            <h2>Changes to This Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. Any changes will be posted on 
              this page with an updated revision date. I encourage you to review this policy 
              periodically to stay informed about how I protect your information.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
