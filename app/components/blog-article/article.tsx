import Image from 'next/image';
import styles from './article.module.css';

interface ArticleProps {
    title: string;
    presenter: string;
    date: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}


export default function Article({
    title,
    presenter,
    date,
    description,
    imageUrl,
    imageAlt
}: ArticleProps) {
    return (
        <div className={styles.content}>
                    <h2 className={styles.contentTitle}>{title}</h2>
                    <div className={styles.contentInfo}>
                        <h3 className={styles.contentPresenter}>Presenter: {presenter}</h3>
                        <h4 className={styles.contentDate}>{date}</h4>
                    </div>
                    <div className={styles.gridContainer}>
                        <div>
                            <p className={styles.contentDescription}>
                                {description}
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                width={355}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
    );
}