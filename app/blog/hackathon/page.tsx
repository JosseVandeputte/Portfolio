import styles from './page.module.css';
import Image from "next/image";

export default function Hackathon() {
    const galleryPhotos = [
        {
            src: '/blog/hackathon/team-pic.jpg',
            alt: 'Team picture at Hack The Future',
            caption: 'Team Coffee and Code',
            featured: true,
        },
        {
            src: '/blog/hackathon/badge-pic.jpg',
            alt: 'Hack The Future participant badge',
            caption: 'Ready to hack',
            featured: false,
        },
        {
            src: '/blog/hackathon/coding-pic.jpg',
            alt: 'Coding during the challenge',
            caption: 'Deep in challenge 105',
            featured: false,
        },
        {
            src: '/blog/hackathon/lobby-pic.jpg',
            alt: 'Lobby atmosphere at the event',
            caption: 'Aquatopia vibes',
            featured: false,
        },
    ];

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Hack The Future 2025</h1>
                    <p className={styles.subtitle}>A day of coding, teamwork, and CTF challenges in Antwerp (and free coffee ☕️)</p>
                </div>

                <article className={styles.article}>
                    <p>
                        In the end of 2025, I had the incredible opportunity to travel to Antwerp alongside a great
                        group of colleagues from Howest to attend Hack The Future 2025. Organized by De Cronos
                        Group, right by the Antwerp Zoo & Antwerp Central Station, this massive hackathon brought 
                        together over a few hunderds of students to bridge the gap between our studies and
                        the IT industry.
                    </p>

                    <p>
                        This year&apos;s overarching theme was Aquatopia, and it completely set the tone for an immersive
                        day of coding and problem-solving.
                    </p>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Diving into the Deep with Team Howest</h2>
                        <p>
                            I teamed up with Mathijs Schaepdryver as team called "Coffee & Code".
                            Together, we fully embraced the "Code, Create, Compete" mindset as we were assigned to
                            one of the most exciting tracks of the day.
                        </p>
                        <p>
                            We took on Challenge 105: "Lost in the deep: codeerexpeditie naar Atlantis", which was
                            hosted and guided by the fantastic team at Exsertus.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>The Challenge: Capture the Flag in Atlantis</h2>
                        <p>
                            If you love clever programming and thinking outside the box, this was the place to be.
                            Our expedition to Atlantis was not a simple coding test; it was structured as four
                            intense Capture-The-Flag exercises.
                        </p>
                        <p>To uncover the flags and solve the mysteries of the deep, we relied heavily on:</p>
                        <ul className={styles.list}>
                            <li>
                                <strong>Clever programming:</strong> Writing clean, effective code under time pressure
                                to bypass technical hurdles.
                            </li>
                            <li>
                                <strong>A problem-solving mindset:</strong> Looking at roadblocks from different
                                angles to find the solutions.
                            </li>
                            <li>
                                <strong>Seamless teamwork:</strong> Splitting tasks, sharing insights
                                and keeping each other motivated throughout the day.
                            </li>
                        </ul>
                        <p>
                            These exercises seriously took our technical skills to the next level. It is one thing to
                            write code in a classroom, but it is an entirely different thrill to apply it in a
                            fast-paced, competitive environment with real-world industry coaches looking over your
                            shoulder.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Day Schedule</h2>
                        <div className={styles.scheduleImage}>
                            <Image
                                src="/blog/hackathon/planning.png"
                                alt="Hack The Future day schedule"
                                width={1600}
                                height={400}
                            />
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>A Massive Thank You</h2>
                        <p>
                            We had an absolute blast. A huge thank you to the coaches from Exsertus for their
                            guidance and support during our deep-sea code expedition. And of course, a massive
                            shoutout to everyone involved in organizing Hack The Future for putting together such a
                            fun, educational, and flawlessly executed event.
                        </p>
                        <p>
                            Sadly we didn't win anything but if we would team up together again, 
                            we would definitely choose the same track and hopefully win something.
                        </p>
                        <p>It was the perfect mix of learning, networking, and pure hacking fun.</p>
                        <p className={styles.closing}>Until the next adventure!</p>
                    </section>
                    
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Pictures</h2>
                        <div className={styles.gallery}>
                            {galleryPhotos.map((photo) => (
                                <figure
                                    key={photo.src}
                                    className={`${styles.galleryCard} ${photo.featured ? styles.featuredCard : ''}`}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        width={1200}
                                        height={800}
                                        className={styles.galleryImage}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <figcaption className={styles.galleryCaption}>{photo.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}