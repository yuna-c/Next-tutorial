import { postDB } from "@/app/DB/postData";
import { NextResponse } from "next/server";
import fs from "fs";

//순서3- 삭제 라우터 요청이 들어오면 전달받은 글 고유번호를 가지고 기존의 배열해서
//해당 순번의 객체만 제거한다음 새롭게 바뀐 내용으로 기존의 파일을 서버쪽에서 덮어쓰기 함
export async function GET(req, res) {
  const { postNum } = await res.params;
  return NextResponse.json({ result: postDB[parseInt(postNum)] });
}

export async function DELETE(req, res) {
  const { postNum } = await res.params;
  const deletedData = postDB.filter((post) => post.id != postNum);
  const resultData = JSON.stringify(deletedData);

  fs.writeFileSync(
    "./app/DB/postData.js",
    `export const postDB=${resultData};`,
    "utf-8"
  );
  return NextResponse.json({ result: "data deleted" }, { status: 200 });
}
