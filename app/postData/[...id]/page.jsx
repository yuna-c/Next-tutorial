"use client";

export default function PostDetail({ params }) {
  //다이나믹 라우터 폴더명을 [...변수명]으로 설정할 경우
  //기본 라우터명 뒤의 모든 값을 배열로 그룹화해서 params로 전달가능 ('use client'설정 필요)
  //post/abc/1 --> {id:['abc','1']}
  console.log(params);
  return <div>{/* <h2>{id}번째 게시글 상세페이지</h2> */}</div>;
}
