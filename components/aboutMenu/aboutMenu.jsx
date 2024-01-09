import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about/president">President</Link>
        </li>
        <li>
          <Link href="/about/company">Pompany</Link>
        </li>
      </ul>
    </nav>
  );
}
