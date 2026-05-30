"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About Me" },
		{ href: "/blog", label: "Blog" },
		{ href: "/projects", label: "Projects" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link href="/" className={styles.logo}>
					<Image
						src="/logo.png"
						alt=""
						width={40}
						height={40}
						className={styles.logoImage}
					/>
				</Link>

				<nav className={styles.nav}>
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<button
					className={styles.hamburger}
					onClick={() => setMenuOpen((o) => !o)}
					aria-label="Toggle menu"
					aria-expanded={menuOpen}
				>
					<span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
					<span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
					<span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
				</button>
			</div>

			{menuOpen && (
				<nav className={styles.mobileMenu}>
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`${styles.mobileLink} ${pathname === item.href ? styles.mobileActive : ""}`}
							onClick={() => setMenuOpen(false)}
						>
							{item.label}
						</Link>
					))}
				</nav>
			)}
		</header>
	);
}
