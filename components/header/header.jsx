"use client";
import Link from "next/link";
import styles from "./header.module.scss";
console.log(styles);
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link
            href="/"
            className={pathname === "/" ? styles.on : ""}
            onClick={() => {
              console.log(pathname);
            }}
          >
            Main
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? styles.active : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className={pathname === "/gallery" ? styles.on : ""}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </header>
  );
}
