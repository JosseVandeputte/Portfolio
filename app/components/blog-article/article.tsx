import Image from "next/image";
import styles from "./article.module.css";

interface ArticleProps {
	id?: string;
	title: string;
	presenter: string;
	date: string;
	description: string[];
	imageUrl: string;
	imageAlt: string;
}

export default function Article({
	id,
	title,
	presenter,
	date,
	description,
	imageUrl,
	imageAlt,
}: ArticleProps) {
	return (
		<div id={id} className={styles.content}>
			<div className={styles.imageContainer}>
				<Image
					src={imageUrl}
					alt={imageAlt}
					width={1000}
					height={300}
					className={styles.bannerImage}
				/>
			</div>
			<div className={styles.body}>
				<h2 className={styles.contentTitle}>{title}</h2>
				<div className={styles.contentInfo}>
					<span className={styles.contentPresenter}>{presenter}</span>
					<span className={styles.contentDate}>{date}</span>
				</div>
				{description.map((para, i) => (
					<p key={i} className={styles.contentDescription}>
						{para}
					</p>
				))}
			</div>
		</div>
	);
}
