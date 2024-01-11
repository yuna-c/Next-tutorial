import { NextResponse } from "next/server";
import { postDB } from "@/DB/postData";

export async function GET(req, res) {
  const { postNum } = await res.params;
  console.log(postNum);
  return NextResponse.json({ result: postDB[parseInt(postNum)] });
}
