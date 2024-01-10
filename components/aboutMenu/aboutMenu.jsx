import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <Link href="/about/president">President</Link>
        </li>
        <li>
          <Link href="/about/company">Company</Link>
        </li>
      </ul>
    </nav>
  );
}
