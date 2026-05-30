"use client";

import { useState } from "react";
import styles from "./collapsible-section.module.css";

type Props = {
	title: string;
	children: React.ReactNode;
	defaultOpen?: boolean;
};

export default function CollapsibleSection({
	title,
	children,
	defaultOpen = true,
}: Props) {
	const [open, setOpen] = useState(defaultOpen);

	return (
		<div className={styles.section}>
			<button
				className={`${styles.heading} ${!open ? styles.headingCollapsed : ""}`}
				onClick={() => setOpen((o) => !o)}
				aria-expanded={open}
			>
				<span>{title}</span>
				<span className={styles.right}>
					<span className={styles.hint}>{open ? "collapse" : "expand"}</span>
					<svg
						className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="M5 7.5L10 12.5L15 7.5"
							stroke="currentColor"
							strokeWidth="1.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</button>

			{open && <div className={styles.content}>{children}</div>}
		</div>
	);
}
