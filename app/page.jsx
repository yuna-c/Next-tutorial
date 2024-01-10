import styles from "./main.module.scss";
import pic from "./pic.jpg";
import clsx from "clsx";
console.log(pic);
console.log(styles);

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Main Page</h1>

      <div className={clsx(styles.pic)}>
        <img src={pic.src} alt="image" />
      </div>
    </main>
  );
}

/*
Brendan Eich (Javascript)
Ryan Dahl (Node, Type)
React (Facebook ---> meta)
Next (Vercel)
Nescape --> Explore(MS) --> FireFox(Mozilla) --> Chrome (Chrome)
W3C vs MDN
*/
