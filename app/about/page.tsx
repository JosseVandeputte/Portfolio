import styles from "./page.module.css";
import { projects, skills, excludeFromSkills } from "../data/projects";
import Link from "next/link";
import CollapsibleSection from "../components/collapsible-section";

const technologies = [
	...new Set([
		...projects
			.flatMap((p) => p.technologies)
			.filter((t) => !excludeFromSkills.has(t)),
		...skills,
	]),
];

const experience = [
	{
		role: "Student Job",
		company: "Kinepolis",
		period: "Sep 2024 - Present",
		location: "Bruges, Belgium",
		tags: ["Customer Service", "B2C", "B2B", "Sales", "Events", "Teamwork"],
	},
	{
		role: "Web Developer",
		company: "Vigilis Law Consult",
		period: "Aug 2023 - Present",
		location: "Bruges, Belgium",
		tags: ["Front-end", "Back-end"],
	},
	{
		role: "Internship Full-Stack Developer",
		company: "OutKept",
		period: "Feb 2026 - May 2026",
		location: "Ghent, Belgium",
		tags: ["React.js", "TypeScript", "Apollo GraphQL"],
	},
	{
		role: "Student Job",
		company: "Action",
		period: "Oct 2021 - Jan 2024",
		location: "Bruges, Belgium",
		tags: ["Customer Service", "Sales", "Teamwork"],
	},
];

const education = [
	{
		school: "HOWEST University of Applied Sciences West Flanders",
		degree: "Bachelor's degree, Applied Computer Science",
		period: "Sep 2023 - Jun 2026",
	},
];

const certifications = [
	{
		name: "Start your business using AI and low-code",
		issuer: "University of Economics in Katowice",
		date: "March 2025",
		tags: ["Low-code", "Start-ups"],
	},
];

export default function About() {
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<section className={styles.hero}>
					<h1 className={styles.title}>About Me</h1>
					<p className={styles.subtitle}>
						Applied Computer Science student at Howest
					</p>
				</section>

				<section className={styles.content}>
					<div className={styles.textContent}>
						<h2>Hello! I&apos;m Josse Vandeputte</h2>
						<p>
							I&apos;m a full-stack developer from Belgium, currently finishing
							my degree in Applied Computer Science at Howest (Bruges). I build
							both frontend and backend, and I care about writing code
							that&apos;s clean, maintainable, and actually pleasant to work
							with.
						</p>
						<p>
							Alongside my studies I have worked on personal projects like
							RailSync and Vigilis Law Consult, and completed an internship at
							Outkept in Ghent ({" "}
							<Link href={"/blog/internship"}>Go to blog</Link> ) where I got
							hands-on experience in a real development environment.
						</p>
					</div>

					<CollapsibleSection title="Technologies I work with">
						<div className={styles.skillTags}>
							{technologies.map((tech) => (
								<span key={tech} className={styles.tag}>
									{tech}
								</span>
							))}
						</div>
					</CollapsibleSection>

					<CollapsibleSection title="Experience">
						<div className={styles.timeline}>
							{experience.map((item) => (
								<div
									key={item.role + item.company}
									className={styles.timelineItem}
								>
									<div className={styles.timelineLeft}>
										<span className={styles.timelinePeriod}>{item.period}</span>
										<span className={styles.timelineLocation}>
											{item.location}
										</span>
									</div>
									<div className={styles.timelineRight}>
										<p className={styles.timelineRole}>{item.role}</p>
										<p className={styles.timelineCompany}>{item.company}</p>
										{item.tags.length > 0 && (
											<div className={styles.tagRow}>
												{item.tags.map((tag) => (
													<span key={tag} className={styles.tag}>
														{tag}
													</span>
												))}
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</CollapsibleSection>

					<CollapsibleSection title="Education">
						<div className={styles.timeline}>
							{education.map((item) => (
								<div key={item.school} className={styles.timelineItem}>
									<div className={styles.timelineLeft}>
										<span className={styles.timelinePeriod}>{item.period}</span>
									</div>
									<div className={styles.timelineRight}>
										<p className={styles.timelineRole}>{item.degree}</p>
										<p className={styles.timelineCompany}>{item.school}</p>
									</div>
								</div>
							))}
						</div>
					</CollapsibleSection>

					<CollapsibleSection title="Licenses & Certifications">
						<div className={styles.timeline}>
							{certifications.map((item) => (
								<div key={item.name} className={styles.timelineItem}>
									<div className={styles.timelineLeft}>
										<span className={styles.timelinePeriod}>{item.date}</span>
									</div>
									<div className={styles.timelineRight}>
										<p className={styles.timelineRole}>{item.name}</p>
										<p className={styles.timelineCompany}>{item.issuer}</p>
										{item.tags.length > 0 && (
											<div className={styles.tagRow}>
												{item.tags.map((tag) => (
													<span key={tag} className={styles.tag}>
														{tag}
													</span>
												))}
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</CollapsibleSection>
				</section>
			</div>
		</div>
	);
}
