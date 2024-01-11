//app > api > post > route.js (GET, POST, PUT, DELETE) Server Router
//client (GET) : fetch('/api/post/1',{method:'GET'})
//client (POST) : fetch('/api/post',{method:'POST',body:{data}})

import { NextResponse } from "next/server";

const posts = [
  { id: 1, name: "David", age: 20 },
  { id: 2, name: "Emily", age: 22 },
  { id: 3, name: "Michael", age: 30 },
];

export function GET() {
  // return NextResponse.json({ data: "클라이언트 요청에 대한 Post 응답" });
  return NextResponse.json({ result: posts });
}

//1 - 서버쪽 API라우터에서 미리 클라이언트에 요청이 들어올것에 대비한 응답로직 라우팅 구현
//2 - 클라이언트쪽에서 fetch로 API요청을 보내면 미리 설정된 서버쪽 라우터로부터 응답을 받음
