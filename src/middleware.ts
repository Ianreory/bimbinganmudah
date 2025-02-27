import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Ambil token dari cookies
  const token = request.cookies.get("authToken")?.value;

  console.log("Token ditemukan:", token);

  // Jika tidak ada token, arahkan ke login
  if (!token || token.trim() === "") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Jika user sudah login tetapi mengakses halaman /login, arahkan ke dashboard
  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// Pastikan middleware berjalan di /dashboard dan /login
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
