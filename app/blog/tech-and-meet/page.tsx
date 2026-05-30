import Article from "@/app/components/blog-article/article";
import styles from "./page.module.css";

type TechAndMeetSession = {
	title: string;
	presenter: string;
	date: string;
	description: string[];
	imageUrl: string;
	imageAlt: string;
};

export default function TechAndMeet() {
	const techAndMeetInfo: Array<TechAndMeetSession> = [
		{
			title: "The Road to a Defensible IT/OT Architecture",
			presenter: "Dieter Sarrazyn",
			date: "01/10/2025",
			description: [
				"The first session of the academic year of the tech and meet, I was present, was delivered by Dieter Sarrazyn, a security architect with extensive experience in industrial control systems (ICS) and operational technology (OT) security with the topic: The road to a defensible IT/OT architecture.",
				'The core of the talk focused on the fundamental tension between OT environments, where uptime and operational reliability are non-negotiable, and the growing pressure to connect those systems to corporate IT networks and the internet. Sarrazyn walked us through how frameworks like NIS2 and IEC 62443 are applied in practice: NIS2 as the regulatory "what" that defines obligations for operators of critical infrastructure, and IEC 62443 as the technical "how" that guides architecture and implementation. What stood out was his emphasis on the lifecycle aspect, security in OT is not a one-time project but a continuous process that has to be considered throughout the entire life of the facility.',
				"As a student who has mostly worked on developing software, the OT world felt almost foreign at first. In traditional IT, you can generally afford to patch and restart services with limited disruption. In a factory or critical infrastructure setting, a few minutes of unplanned downtime can have serious financial, operational, or even safety consequences. That shift in perspective, understanding how the same cybersecurity principles translate completely differently depending on context, was genuinely eye-opening.",
				"The session was clearly aimed at an audience interested in industrial cybersecurity, but I think any IT student benefits from understanding this broader landscape. It helped me see how much of the security work that happens in the world is invisible to most developers. I would attend a follow-up session without hesitation, and I would recommend this talk to anyone curious about the intersection of cybersecurity, regulation, and operational systems.",
			],
			imageUrl: "/blog/tech-and-meet/tms1.jpg",
			imageAlt: "Image of Tech & Meet Session 1",
		},
		{
			title: "Threat Intelligence: from Threats to Tactics",
			presenter: "Sandro Manzo & Niels Desloover",
			date: "07/10/2025",
			description: [
				"The second Tech & Meet session featured two speakers where Niels Desloover and Sandro Manzo are both members within the Centre for Cybersecurity Belgium (CCB), the national authority responsible for cybersecurity policy and incident response in Belgium.",
				"The talk focused on how cyber threat intelligence works in practice, how you move from raw indicators of compromise and adversary behaviour to actionable intelligence that actually helps defend an organisation. They walked us through the intelligence cycle and showed how it plays out in real operations at the national level. What made it concrete were the Belgian-specific initiatives: Spear Warning, a system that proactively alerts organisations about threats specifically targeting them, and the Belgian Anti-Phishing Shield (BAPS), which blocks known phishing domains at the DNS level for Belgian internet users.",
				"What struck me most was hearing how the concepts I had only read about, like the intelligence cycle or indicator enrichment, actually play out inside a national authority. Seeing practitioners explain what their day-to-day work looks like, rather than reading about it abstractly, gave me a much clearer picture of how threat intelligence operates at scale. It also made the topic feel a lot more tangible and relevant than I expected going in.",
				"I walked away with a renewed appreciation for how much invisible work goes into keeping Belgium's digital infrastructure safe, and with a broader view of what a career in cybersecurity can look like. The combination of deep technical knowledge and policy awareness that a role at the CCB seems to require is something I had not considered before. I would strongly recommend this session to anyone following a cybersecurity track.",
			],
			imageUrl: "/blog/tech-and-meet/tms2.jpg",
			imageAlt: "Image of Tech & Meet Session 2",
		},
		{
			title: ".NET 10 Demystified",
			presenter: "Kevin DeRudder",
			date: "18/11/2025",
			description: [
				"The third Tech & Meet session arrived just one week after the official release of .NET 10, which made the timing feel especially well chosen. Kevin DeRudder, a developer with deep experience in the Microsoft ecosystem, gave us a tour of what is new in .NET 10 and C# 14, and how those changes fit into the broader direction of the platform.",
				"On the language side, C# 14 introduces the `field` keyword, which simplifies property declarations by giving you direct access to the compiler-generated backing field inside a property getter or setter without having to declare it manually. Extension blocks were another highlight, allowing static extension methods to be grouped and organised in a cleaner, more readable way. On the framework side, QuickGrid in Blazor received CSS improvements that make data tables more straightforward to style. Kevin also covered .NET Aspire, a set of tooling and orchestration components designed to simplify building observable, cloud-ready distributed applications, and gave a brief look at .NET MAUI for cross-platform native development.",
				"The highlight of the evening was a live demo where Kevin built an Aspire application that consumed the Spotify API. Watching a complete integration, configuration, dependency injection, structured logging, and API calls, come together cleanly in .NET 10 was a practical demonstration of how far the platform has come in terms of developer experience. It showed that the ecosystem is not just technically capable but also genuinely pleasant to work with.",
				"I had used C# in a few school projects but had never engaged seriously with the broader .NET ecosystem. This session gave me a much richer picture of how mature and comprehensive the platform has become. The idea that .NET now targets web, mobile, desktop, and distributed cloud applications within a single ecosystem is something I underestimated. It has made me want to revisit .NET for a personal project, and I would attend a similar session next year without hesitation.",
			],
			imageUrl: "/blog/tech-and-meet/tms3.jpg",
			imageAlt: "Image of Tech & Meet Session 3",
		},
		{
			title: "Transitioning to IPv6",
			presenter: "Nico Declerck",
			date: "25/11/2025",
			description: [
				"The fourth session was delivered by Nico Declerck, a networking professional who made it his mission that evening to convince us that the transition from IPv4 to IPv6 is no longer something we can keep deferring. What made the session particularly enjoyable was how he wove technical content together with anecdotes about the city of Bruges, its history, its architecture, and its beers, which kept the room engaged throughout what could otherwise have been a dry topic.",
				"The core argument was straightforward: IPv4 address exhaustion is not a future problem, it is a present reality. Regional internet registries have been out of freely available IPv4 addresses for years, and the workarounds in place, NAT, address sharing, buying and selling address blocks on the secondary market, are becoming increasingly expensive and complex to manage. Declerck made the case for a Dual Stack in Practice approach as the realistic path forward: running IPv4 and IPv6 in parallel during the transition period, and gradually shifting the balance until an IPv6-only environment becomes achievable.",
				"The session was technically thorough. Declerck covered routing table implications, how firewall rules need to be rethought for IPv6, and how security-by-design principles apply differently in an IPv6 environment. One point that genuinely surprised me was that simply enabling IPv6 alongside an existing IPv4 setup can introduce new attack surfaces if the IPv6 traffic is not being filtered with the same rigour, many organisations have a hardened IPv4 perimeter but leave IPv6 largely unmanaged.",
				"Network infrastructure is something I interact with as a developer but rarely think about at this level. This session reminded me how much the foundation matters and how decisions made at the protocol layer ripple upward into application design and security posture. I had covered IPv6 briefly in networking courses, but seeing it framed as an urgent operational challenge rather than a distant theoretical topic was a useful shift in perspective. I would recommend this talk to any IT student, regardless of specialisation.",
			],
			imageUrl: "/blog/tech-and-meet/tms4.jpg",
			imageAlt: "Image of Tech & Meet Session 4",
		},
		{
			title: "DeepSeek Uncovered",
			presenter: "Dimitri Casier",
			date: "09/12/2025",
			description: [
				"The fifth Tech & Meet session of the semester was delivered by Dimitri Casier, who took us on a structured deep dive into DeepSeek, the Chinese open-source AI model that caused a significant stir in the AI industry at the start of 2025. Given how much DeepSeek had been discussed online and in the news, I was curious to hear a more rigorous, data-driven analysis rather than the hype-driven coverage I had mostly seen.",
				"Casier presented a detailed comparison of DeepSeek-V3's performance against proprietary models like GPT-4o and Claude. The benchmark numbers were striking: 79.7% on Aider-Polyglot Edit versus GPT-4o's 18.2%, and 75.9% on MMLU-Pro. In education-oriented benchmarks, DeepSeek reached 90.2% on certain mathematics evaluations. The most disruptive figure, however, was the cost: at $0.14 per million input tokens, DeepSeek-V3 is roughly 214 times cheaper than GPT-4 at comparable quality. The training efficiency was equally remarkable, approximately 2.788 million H800 GPU hours to train the model, a fraction of what similar-performing proprietary models had required.",
				"What set this session apart from a standard technology overview was the geopolitical framing. Casier discussed what it means for the global AI landscape that a Chinese research lab produced a frontier-class model at a fraction of the cost and compute that Western labs had assumed was necessary. It directly challenges the narrative that raw spending on compute is the primary driver of AI capability, and it has significant implications for how countries and companies think about AI sovereignty and strategic positioning.",
				"As a developer who uses AI tools on a daily basis, the cost efficiency angle resonated with me most personally. The idea that high-quality AI capabilities could become genuinely accessible to individual developers and small teams, not just large enterprises, is exciting. The session also prompted me to think more critically about the provenance of the tools I use: where a model is trained, who controls it, and what data and privacy policies apply. I would attend this kind of session again and recommend it to anyone working in or adjacent to AI-related development.",
			],
			imageUrl: "/blog/tech-and-meet/tms5.jpg",
			imageAlt: "Image of Tech & Meet Session 5",
		},
	];

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.hero}>
					<h1 className={styles.title}>Tech & Meet @ Howest</h1>
					<p className={styles.subtitle}>Where Technology Meets Community</p>
				</div>

				<nav className={styles.sessionIndex}>
					{techAndMeetInfo.map((session, index) => (
						<a
							key={index}
							href={`#session-${index + 1}`}
							className={styles.sessionIndexItem}
						>
							<span className={styles.sessionIndexNumber}>#{index + 1}</span>
							<span className={styles.sessionIndexTitle}>{session.title}</span>
							<span className={styles.sessionIndexDate}>{session.date}</span>
						</a>
					))}
				</nav>

				{techAndMeetInfo.map((session, index) => (
					<Article
						key={index}
						id={`session-${index + 1}`}
						title={session.title}
						presenter={session.presenter}
						date={session.date}
						description={session.description}
						imageUrl={session.imageUrl}
						imageAlt={session.imageAlt}
					/>
				))}
			</div>
		</div>
	);
}
