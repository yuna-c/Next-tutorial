import { NextResponse } from "next/server";
import { postDB } from "@/DB/postData";

export function GET() {
  return NextResponse.json({ result: postDB });
}
