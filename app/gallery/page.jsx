import styles from "./gallery.module.scss";

export default function Gallery() {
  return (
    <main className={styles.gallery}>
      <h1 className={styles.h1}>Gallery Page</h1>
    </main>
  );
}

export const generateMetadata = () => {
  return {
    title: "Gallery Page",
    description: "위치는 위나 아래나 상관없어",
  };
};
