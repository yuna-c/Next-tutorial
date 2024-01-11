import { postDB } from "@/DB/postData";
import { NextResponse } from "next/server";

// 모든 데이터를 가져오는 서버 라우터
export function GET() {
  return NextResponse.json({ result: postDB });
}

// 클라이언트로부터 Post방식으로 특정 데이터를 전달 받아서 저장해 주는 서버 라우터
// async 시간 걸리니까
export async function POST(req, res) {
  const payload = await req.json();
  console.log(payload);
  if (payload) {
    return NextResponse.json(
      { result: "data posted" },
      { status: 200 }
    ); /* 응답객체, 서버상태 숫자값*/
  } else return NextResponse.json({ result: "fail to Post" }, { status: 400 });
}
