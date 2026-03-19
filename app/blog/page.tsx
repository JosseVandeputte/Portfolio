import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Blog() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Blog</h1>
                    <p className={styles.description}>
                        Welcome to my blog! Here, I share my thoughts on technology, programming, and my personal experiences in the tech world.
                    </p>
                </section>

                <section className={styles.content}>
                    <div className={styles.buttons}>
                        <div className={styles.link}>
                            <Image
                                src="/blog/hackathon/hackthefuture.jpg"
                                alt="Hackathon Placeholder"
                                width={600}
                                height={400}
                                className={styles.blogImage}
                            />
                            <h2 className={styles.blogTitle}>Hackathon - 12/11/2025 </h2>
                            <p className={styles.blogDescription}>
                                Sharing my experience and learnings from participating in a recent hackathon of Hack The Future.
                            </p>
                            <Link href="/blog/hackathon" className={styles.readMore}>
                                Read More
                            </Link>
                        </div>
                        <div className={styles.link}>
                            <Image
                                src="/internship.jpg"
                                alt="Internship Placeholder"
                                width={600}
                                height={400}
                                className={styles.blogImage}
                            />
                            <h2 className={styles.blogTitle}>Internship</h2>
                            <p className={styles.blogDescription}>
                                Reflecting on my internship experience and the valuable lessons learned at [Company Name].
                            </p>
                            <Link href="/blog/internship" className={styles.readMore}>
                                Read More
                            </Link>
                        </div>
                        <div className={styles.link}>
                            <Image
                                src="/techandmeet.jpg"
                                alt="Tech & Meet Placeholder"
                                width={600}
                                height={400}
                                className={styles.blogImage}
                            />
                            <h2 className={styles.blogTitle}>Tech & Meet</h2>
                            <p className={styles.blogDescription}>
                                Insights and highlights from attending the Tech & Meet conference of Howest.
                            </p>
                            <Link href="/blog/tech-and-meet" className={styles.readMore}>
                                Read More
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}