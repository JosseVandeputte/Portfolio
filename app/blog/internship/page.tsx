import styles from './page.module.css';

export default function Internship() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Internship Journey</h1>
                    <p className={styles.subtitle}>Building Experience, One Step at a Time</p>
                    <div className={styles.comingSoon}>
                        <span className={styles.comingSoonText}>Coming Soon</span>
                    </div>
                    <p className={styles.description}>
                        Follow along as I share insights, experiences, and lessons learned during my internship journey.
                        Tips, challenges, and growth stories coming your way!
                    </p>
                </div>
            </div>
        </div>
    );
}