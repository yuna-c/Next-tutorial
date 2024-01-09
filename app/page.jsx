import styles from "./main.module.scss";
console.log(styles);

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Main Page</h1>
    </main>
  );
}
