import PostDataList from "@/components/postDataList/postDataList";
import styles from "./postData.module.scss";
import clsx from "clsx";

export default function PostData() {
  return (
    <section className={clsx(styles.postData)}>
      <h1>Post Data List</h1>
      <PostDataList />
    </section>
  );
}

/*
  front
  - 사용자가 URL요청시 그에 출력될 UI컴포넌트들을 미리 설정한 라우터에 따라 출력로직
  - 사용자 이벤트 발생시 비동기 데이터를 요청(request)해서 서버로부터 응답(response)받은 데이터를 다시 UI로 변환후 출력
  - 서버로 RESTFul 방식으로 요청을 보내기 위해서는 fetch로 method방식을 구분해서 보냄
  - fetch(url+QueryString,{mehtod:'GET'}) GET방식 요청
  - fetch(url,{method:'POST',body:저장할 데이터}) POST방식 요청
  - fetch(url,{method:'PUT',body:수정할 데이터}) PUT방식 요청
  - fetch(url+QueryString,{method:'DELETE}) DELETE방식 요청

  back
  - 클라이언트로부터 넘어오는 요청의 형식에 맞게 응답처리 로직 분기처리 (Server routing)
  - 백엔드가 전달받은 요청은 크게 4가지 (CRUD) -> RESTFul API(CRUD 구조적으로 처리하기위한 개발방법론)
  - Creat (POST) -중요한데이터 전달 (body)
  - Read (GET) - 쿼리문이나 parameter같이 덜 중요한 데이터 전달 (url-queryString)
  - Update (PUT) -중요한데이터 전달 (body)
  - Delete (DELETE) -쿼리문이나 parameter같이 덜 중요한 데이터 전달 (url-queryString)

  https://nextjs.org/docs/app/building-your-application/routing/route-handlers
*/
