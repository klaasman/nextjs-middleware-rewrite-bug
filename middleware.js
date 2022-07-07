import { NextResponse } from "next/server";

export function middleware(request) {
  return request.nextUrl.pathname.includes("page-2")
    ? NextResponse.rewrite(`${request.nextUrl.origin}/insufficient-access`)
    : NextResponse.next();
}
