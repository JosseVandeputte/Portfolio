import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.errorCode}>404</div>
                    <h1 className={styles.title}>Page Not Found</h1>
                    <p className={styles.subtitle}>
                        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                    
                    <div className={styles.ctas}>
                        <Link href="/" className={styles.primaryButton}>
                            Go Back Home
                        </Link>
                        <Link href="/projects" className={styles.secondaryButton}>
                            View My Work
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
