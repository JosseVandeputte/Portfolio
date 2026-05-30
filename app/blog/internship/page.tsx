import styles from "./page.module.css";
import Image from "next/image";

const gallery = [
	{
		src: "/blog/internship/outreach-hackathon.png",
		alt: "Outreach hackathon during internship",
		caption: "Outreach Hackathon",
		featured: false,
	},
	{
		src: "/blog/internship/iso27001-cake.png",
		alt: "ISO 27001 certification celebration",
		caption: "Celebrating ISO 27001",
		featured: false,
	},
	{
		src: "/blog/internship/cybersec-fisherman.png",
		alt: "Cybersecurity awareness",
		caption: "Cybersec 2026 - Brussel Expo",
		featured: false,
	},
	{
		src: "/blog/internship/game-night.png",
		alt: "Game night with the team",
		caption: "Game night with the team",
		featured: false,
	},
];

const stack = [
	{ name: "React TSX", desc: "Frontend" },
	{ name: "TypeScript", desc: "Backend" },
	{ name: "Apollo GraphQL", desc: "API" },
	{ name: "MySQL", desc: "Database" },
	{ name: "MongDB", desc: "Database" },
	{ name: "Redis", desc: "Caching" },
	{ name: "RabbitMQ", desc: "Message broker" },
];

export default function Internship() {
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.hero}>
					<h1 className={styles.title}>Internship Full-Stack Developer</h1>
					<p className={styles.subtitle}>
						Feb 2026 - May 2026 - Ghent, Belgium
					</p>
				</div>

				<article className={styles.article}>
					<p>
						For my internship I joined the OutKept team in Ghent as a full-stack
						developer. OutKept is a cybersecurity awareness company based in
						Ghent that runs an automated phishing simulation platform. Rather
						than using generic email templates, they crowdsource realistic
						phishing simulations from a community of ethical phishers (who can
						earn money doing this).
					</p>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>What I Worked On</h2>
						<p>
							During my internship, I had the opportunity to work on the
							platform of OutKept, contributing to both frontend and backend
							development. In the beginning I received a lot of small UI/UX bugs
							to fix, which was a great way to get familiar with the codebase
							and the product, from the client, phisher and manager side. As I
							got more comfortable, I started taking on larger features and
							improvements, working closely with the team to implement new
							functionality.
						</p>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Tech Stack</h2>
						<p>The project was built with the following technologies:</p>
						<div className={styles.techGrid}>
							{stack.map((t) => (
								<div key={t.name} className={styles.techCard}>
									<strong>{t.name}</strong>
									<span>{t.desc}</span>
								</div>
							))}
						</div>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Highlights</h2>
						<ul className={styles.list}>
							<li>
								<strong>ISO 27001 certified</strong> - OutKept recently achieved
								their ISO 27001 certificate. And in my first week of internship
								we receive from one of their partners a
								&ldquo;gefelicitaart&rdquo; all the way from The Netherlands. It
								was a nice way to start the internship and a great example of
								the kind of impact OutKept has in the cybersecurity space.
							</li>
							<li>
								<strong>Internal Hackathon</strong> - In the middle of my
								internship, the team organized an internal hackathon focused on
								outreach in different countries. We had to come up with creative
								ways to spread awareness about cybersecurity and phishing. It
								was a fun and learning experience with the use of AI and
								outreach tools like Lemlist, and it was great to see the team
								come together to brainstorm and execute on different ideas.
							</li>
							<li>
								<strong>Cybersec Europe 2026</strong> - In my last days of my
								internship, I had the opportunity to attend 2 days of the
								Cybersec Europe conference in Brussels Expo with the team. It
								was a great chance to learn about the latest trends and
								developments in cybersecurity with AI, and to network with
								professionals in the industry.
							</li>
							<li>
								<strong>Game night</strong> - One of the last weeks, the team
								organized a game night where we played some games and had fun
								together. It was a nice way to come together and unwind after a
								few weeks of hard work, and it was great to see the team bond
								over some friendly competition.
							</li>
							<li>
								<strong>&ldquo;Friesday&rdquo;</strong> - Every Friday, the team
								has a tradition of having fries together. It was a great way to
								bond with the team and get to know the people who work their.
							</li>
						</ul>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>What I Learned</h2>
						<p>
							The internship gave me a great opportunity to apply and deepen my
							technical skills in a real-world setting. I got hands-on
							experience with technologies and I learned how to navigate the
							complexities of working on a production codebase. I also gained
							insights into the importance of ui/ux design (how to think about
							what a simple user would expect from a feature, and how to design
							for that). Overall, it was a valuable experience that helped me
							grow as a developer and gave me a better understanding of what
							it&apos;s like to work in the tech industry.
						</p>
						<br />
						<p>
							Also, i learned a lot about how to talk to none technical people
							about technical stuff, especially in sprint reviews and meetings
							with none technical colleagues. It was a great experience to learn
							how to communicate complex technical concepts in a way that&apos;s
							accessible and understandable to everyone, regardless of their
							technical background.
						</p>
						<br />
						<p>
							Because the OutKept developers team is not that big, we also
							needed to do some QA-testing, which was a great experience to
							learn how to test new implemented features. So with this I also
							learned how to think about what the impact of a small change can
							be on the whole application, and how to test for that.
						</p>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Pictures</h2>
						<div className={styles.gallery}>
							{gallery.map((photo) => (
								<figure
									key={photo.src}
									className={`${styles.galleryCard} ${photo.featured ? styles.featuredCard : ""}`}
								>
									<Image
										src={photo.src}
										alt={photo.alt}
										width={1200}
										height={800}
										className={styles.galleryImage}
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
									<figcaption className={styles.galleryCaption}>
										{photo.caption}
									</figcaption>
								</figure>
							))}
						</div>
					</section>
				</article>
			</div>
		</div>
	);
}
