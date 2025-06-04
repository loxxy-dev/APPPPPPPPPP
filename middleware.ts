import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the request is for the dashboard
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // Check if user has an active subscription
    const hasSubscription = request.cookies.has("subscription_active")
    const isAuthenticated = request.cookies.has("user_authenticated")
    const isMainDashboard = request.nextUrl.pathname === "/dashboard"

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    // Allow access to main dashboard even without subscription
    if (isMainDashboard) {
      return NextResponse.next()
    }

    // For all other dashboard pages, check subscription
    if (!hasSubscription) {
      // We'll handle the display of the message in the layout
      return NextResponse.next()
    }
  }

  // Auto-redirect authenticated users from home page to dashboard
  if (request.nextUrl.pathname === "/") {
    const isAuthenticated = request.cookies.has("user_authenticated")
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  // Auto-redirect authenticated users from login/signup to dashboard
  if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup") {
    const isAuthenticated = request.cookies.has("user_authenticated")
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/", "/login", "/signup"],
}
