import Article from '@/app/components/blog-article/article';
import styles from './page.module.css';

type TechAndMeetSession = {
    title: string,
    presenter: string,
    date: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
}

export default function TechAndMeet() {
    const techAndMeetInfo: Array<TechAndMeetSession> = [
        {
            title: 'The Road to a Defensible IT/OT Architecture',
            presenter: 'Dieter Sarrazyn',
            date: '01/10/2025',
            description: 
                "This talk will cover the road in obtaining a resilient and defensible ICS network architecture to be " +
                "able to withstand today's operational requirements and cybersecurity challenges.  We will not only " +
                "cover the bridging of OT and IT (mind the gap), but will also explore regulatory and standard " +
                "frameworks, such as NIS2 and IEC 62443. These are used as resources towards your architectural needs " +
                "while assuring that the needs for both operation resilience and effective defense posture are " +
                "identified and maintained throughout the lifecycle of the facility. This talk highlights the " +
                "possible consequences for the way of working for ICS staff & suppliers, dependencies on IT " +
                "architecture, and risks from other networks, the Internet or adversaries. By the end of " +
                "the session, you will understand how NIS2 defines the “what”, IEC 62443 delivers the “how”, " +
                "and how combining both enables a resilient and sustainable approach to OT/IT security.",
            imageUrl: '/blog/tech-and-meet/tms1.jpg',
            imageAlt: 'Image of Tech & Meet Session 1',
        },
        {
            title: 'Threat Intelligence: from Threats to Tactics',
            presenter: 'Sandro Manzo & Niels Desloover',
            date: '07/10/2025',
            description: 'Niels Desloover and Sandro Manzo, both members of the CyTRIS department within the ' +
                'Centre for Cybersecurity Belgium, shared their expertise on cyber threat intelligence. It was a ' +
                'great complement to the course on cyber threat intelligence which they are also teaching us this ' +
                'semester. It was particularly fascinating to hear their stories about how threat ' +
                'intelligence is used to make the Belgian cyberspace safer through initiatives such as ' +
                'Spear Warning and the Belgian Anti-Phishing Shield (BAPS)!',
            imageUrl: '/blog/tech-and-meet/tms2.jpg',
            imageAlt: 'Image of Tech & Meet Session 2',
        },
        {
            title: '.NET 10 Demystified',
            presenter: 'Kevin DeRudder',
            date: '18/11/2025',
            description: 'With .NET 10 being released on 11/11/2025, Kevin DeRudder walked us through the key ' +
                'updates, including the new C# 14 features like the field keyword, extension blocks for static ' +
                'extension methods, and the new QuickGrid CSS improvements in Blazor, along with several enhancements ' +
                'in the .NET 10 runtime and tooling. He also gave a nice overview of the broader .NET ecosystem, ' +
                'giving us a look at Aspire and .NET MAUI. One of the highlights was a practical demo, where Kevin ' +
                'built an Aspire application using the Spotify API, showing how .NET 10 makes it possible to write ' +
                'really clean code when working with external services. I learned a lot about both what\'s new ' +
                'in .NET 10 and the .NET ecosystem as a whole!',
            imageUrl: '/blog/tech-and-meet/tms3.jpg',
            imageAlt: 'Image of Tech & Meet Session 3',
        },
        {
            title: 'Transitioning to IPv6',
            presenter: 'Nico Declerck',
            date: '25/11/2025',
            description: 'Nico Declerck guided us through ' +
                'the inevitable transition from IPv4 to IPv6. He highlighted why procrastination is no longer ' +
                'an option due to the depletion of IPv4 addresses and discussed the ultimate goal of an IPv6-only ' +
                'environment. The core of the session focused on "Dual Stack in Practice," offering concrete ' +
                'insights into deploying IPv6 within existing infrastructures today, covering routing, firewalls, ' +
                'and security by design. Alongside his technical expertise, Nico kept the evening highly engaging ' +
                'by weaving in delightful anecdotes about the city of Bruges, its history, and its beers. It was a ' +
                'highly practical session that made it clear: the time to start planning a dual-stack strategy is now!',
            imageUrl: '/blog/tech-and-meet/tms4.jpg',
            imageAlt: 'Image of Tech & Meet Session 4',
        },
        {
            title: 'DeepSeek Uncovered',
            presenter: 'Dimitri Casier',
            date: '09/12/2025',
            description: 'Mister Casier took us on a deep dive into DeepSeek, the rapidly emerging ' +
                'open-source AI that is challenging proprietary titans like GPT-4 and Claude. The session ' +
                'was packed with compelling data, showing how DeepSeek-V3 leads in coding benchmarks like ' +
                'Aider-Polyglot Edit (79.7% compared to GPT-4o\'s 18.2%) and achieves 75.9% on MMLU-Pro. ' +
                'One of the biggest highlights was the cost efficiency: at $0.14 per million input tokens, ' +
                'it is roughly 214 times cheaper than GPT-4. Dimitri also showed us its capabilities across ' +
                'code generation, education (hitting 90.2% on certain math benchmarks), and finance. We ' +
                'even touched upon the geopolitical implications of achieving such high performance with ' +
                'highly efficient training (just 2.788 million H800 GPU hours), proving that DeepSeek is ' +
                'a genuine, market-disrupting force democratizing access to powerful AI.',
            imageUrl: '/blog/tech-and-meet/tms5.jpg',
            imageAlt: 'Image of Tech & Meet Session 5',
        }
    ]


    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Tech & Meet @ Howest</h1>
                    <p className={styles.subtitle}>Where Technology Meets Community</p>
                </div>

                {techAndMeetInfo.map((session, index) => (
                    <Article
                        key={index}
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