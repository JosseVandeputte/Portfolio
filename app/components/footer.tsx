import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Josse Vandeputte
            </Link>
            <p className={styles.tagline}>
              Full-stack developer & designer
            </p>
          </div>
          
          <div className={styles.navigation}>
            <h4>Navigation</h4>
            <nav className={styles.navLinks}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/about" className={styles.navLink}>About</Link>
              <Link href="/blog" className={styles.navLink}>Blog</Link>
              <Link href="/projects" className={styles.navLink}>Projects</Link>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </nav>
          </div>
          
          <div className={styles.legal}>
            <h4>Legal</h4>
            <nav className={styles.navLinks}>
              <Link href="/privacy" className={styles.navLink}>Privacy Policy</Link>
            </nav>
          </div>
          
          <div className={styles.social}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              <a 
                href="https://github.com/JosseVandeputte" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/josse-vandeputte/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a 
                href="mailto:&#x6a;&#x6f;&#x73;&#x73;&#x65;&#x2e;&#x76;&#x61;&#x6e;&#x64;&#x65;&#x70;&#x75;&#x74;&#x74;&#x65;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;" 
                className={styles.socialLink}
              >
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 Josse Vandeputte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}