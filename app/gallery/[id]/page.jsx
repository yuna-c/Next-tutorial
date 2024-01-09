"use client";
// Dynamic Routing
// 중첩 폴더 안쪽에 [변수명] 형식으로 폴더를 민들고 그 안쪽에 page.jsx를 생성
// 해당 페이지 컴포넌테에서는 params객체를 props로 전달되고
// http://localhost:3000/gallery/id
// props객체 안에 변수명 property로 url에 전달 params 값을 전달 가능

export default function GalleryDetail({ params }) {
  console.log(params);

  return (
    <div className="detai;">
      <h3>{params.id + "번째 갤러리 상세 페이지"}</h3>
    </div>
  );
}
