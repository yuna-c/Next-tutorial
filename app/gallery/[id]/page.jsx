"use client";
// Dynamic Routing
// 중첩 폴더 안쪽에 [변수명] 형식으로 폴더를 민들고 그 안쪽에 page.jsx를 생성
// 해당 페이지 컴포넌테에서는 params객체를 props로 전달되고
// http://localhost:3000/gallery/id
// props객체 안에 변수명 property로 url에 전달 params 값을 전달 가능
// 리액트 마운트되는 시점 : 클라이언트 사이드 랜더링 방식, 서버에서 빈 HTML을 브라우저를 화면에 전부 가져오면서 Dom 형태로 만들 때 다 데이터 다운 될때까지 기다림(서버 사이드 랜더링)
// 넥스트 마운트 시점 : 서버 사이드 랜더링 방식, 사용자 요청이 들어 갔을때 서버에서 미리 만들어진 HTML 파일이 가져와 짐
export default function GalleryDetail({ params }) {
  console.log(params);

  return (
    <div className="detai;">
      <h3>{params.id + "번째 갤러리 상세 페이지"}</h3>
    </div>
  );
}
