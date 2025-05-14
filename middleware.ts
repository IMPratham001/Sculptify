import { createMiddleware } from '@/lib/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Protect all routes under /admin
export const config = {
  matcher: '/admin/:path*',
}

export function middleware(request: NextRequest) {
  // Check if user is authenticated and has admin role
  const isAuthenticated = request.cookies.has('session');
  const isAdmin = request.cookies.get('role')?.value === 'admin';

  if (!isAuthenticated || !isAdmin) {
    const url = new URL('/auth/login', request.url);
    url.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}