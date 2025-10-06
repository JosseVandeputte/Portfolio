import styles from './page.module.css';

export default function Hackathon() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Hackathon Adventures</h1>
                    <p className={styles.subtitle}>Code, Create, Compete</p>
                    <div className={styles.comingSoon}>
                        <p className={styles.comingSoonText}>📍 Antwerp</p>
                        <p className={styles.comingSoonText}>⏰ 12/11/2025</p>
                    </div>
                    <br />
                    <div className={styles.comingSoon}>
                        <span className={styles.comingSoonText}>More Info Coming Soon</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}