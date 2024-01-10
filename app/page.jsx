import styles from "./main.module.scss";
import clsx from "clsx";
import Image from "next/image";
import pic from "./pic.jpg";
import pic1 from "@/public/pic_.jpg";
import pic2 from "@/public/pic._njpg";
console.log(pic);
console.log(styles);

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Main Page</h1>

      <div className={clsx(styles.pic)}>
        <img src={pic.src} alt="image" />
      </div>

      <div className={clsx(styles.pic)}>
        <Image src={pic1} alt="image2" fill quality={75} />
      </div>

      <div className={clsx(styles.pic)}>
        <Image src={pic2} alt="image new" fill quality={75} priority />
      </div>
    </main>
  );
}

/*
  Next에서 Image컴포넌트를 사용해야 되는 이유
  1. 원본 빌드시에 import한다음에 브라우저 크기에 따른 이미지 용량을 자동 최적화시켜서
  2. 클라이언트 요청이 들어올떄 미리 최적화시킨 이미지를 렌더링
  3. 브라우저 폭을 인지해서 그때마다 폭에 따른 최적화된 이미지 제공
  4. quality속성으로 직접 최적화가능 0~100(default:75)
  5. priority속성을 이용해서 빨리 출력해야 되야되는 이미지에 우선순위를 부여가능
  6. 기본적으로 Image 컴포넌트는 lazy loading기능을 적용하는데 priority 적용시 lazy loading 기능은 강제 해제됨(주의)
*/
