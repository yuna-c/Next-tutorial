import Image from "next/image";
import styles from "./main.module.scss";
import clsx from "clsx";
import pic from "./pic.jpg";
import pic1 from "@/public/pic.jpg";
import pic2 from "@/public/pic_.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Main Page</h1>

      <div className={clsx(styles.pic)}>
        <img src={pic.src} alt="image" />
      </div>

      <div className={clsx(styles.pic)}>
        <Image
          src={pic1}
          alt="image1"
          quality={75}
          fill
          //속성이 fill일때 next가 크기 산정이 어려우므로, 특정 크기 미만의 브라우저폭에 대한 사이즈크기 지정 권장
          sizes="(min-width: 808px) 50vw, 100vw"
          priority
        />
      </div>

      <div className={clsx(styles.pic)}>
        <Image src={pic2} alt="image2" width={300} height={300} quality={75} />
      </div>
    </main>
  );
}

/*
Next에서 Image컴포넌트를 사용해야 되는 이유

0. LCP(Largest Contentfull Paint): 웹페이지 로딩속도 측정시 컨텐츠에 있는 이미지나 영상같이 용량이 큰 소스용량까지 로딩속도 측정에 포함시키는 방식 (Image컴포넌트는 LCP를 성능점수를 높이기 위함)
1. 원본 빌드시에 import한다음에 브라우저 크기에 따른 이미지 용량을 자동 최적화시켜서
2. 클라이언트 요청이 들어올떄 미리 최적화시킨 이미지를 렌더링
3. 브라우저 폭을 인지해서 그때마다 폭에 따른 최적화된 이미지 제공
4. quality속성으로 직접 최적화가능 0~100(default:75)
5. priority속성을 이용해서 빨리 출력해야 되야되는 이미지에 우선순위를 부여가능
6. 기본적으로 Image 컴포넌트는 lazy loading기능을 적용하는데 priority 적용시 lazy loading 기능은 강제 해제됨(주의)
7. lazyloading이란 viewport에 보이는 이미지만 렌더링을 하고 문서에는 있지만 viewport에 보이지 않으면 로딩을 미룸(화면에 처음 보이는 큰 이미지)
8. Image컴포넌트 호출시 가급적 width, height속성을 지정해야지 next가 빌드시에 해당 사이즈에 맞는 최적화작업을 함
9. 이미지의 크키가 고정값이 아닐때에는 fill적용 (연결되어 있는 style의 넓이,높이를 판한해서 최적화)
10. fill속성 적용시 추가적으로 하면 좋은 속성 
*/
