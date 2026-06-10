import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  return NextResponse.redirect(new URL("/home", request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/about"],
  // "/news/:path*"
};
