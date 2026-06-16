import { NextResponse } from "next/server";

export function proxy(request: Request) {
  const url = new URL(request.url);

  const pathname = url.pathname;

  // 1. 放行 Next.js 内部资源
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/public")
  ) {
    return NextResponse.next();
  }

  // 2. 放行 API
  if (
    pathname.startsWith("/api/rfq") ||
    pathname.startsWith("/api/contact") ||
    pathname.startsWith("/api/openwebui")
  ) {
    return NextResponse.next();
  }

  // 3. 放行多语言路由
  if (
    pathname.startsWith("/en") ||
    pathname.startsWith("/de") ||
    pathname.startsWith("/fr") ||
    pathname.startsWith("/es")
  ) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

// ⭐ 必须保留（你刚才缺的就是这个）
export default proxy;