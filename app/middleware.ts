// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const userRole = req.cookies.get('userRole')?.value;
  
  // Protected routes
  const isTraineePath = req.nextUrl.pathname.startsWith('/trainee');
  const isAdminPath = req.nextUrl.pathname.startsWith('/admin');
  const isProfilePath = req.nextUrl.pathname.startsWith('/profile');
  
  // Check if user is trying to access a protected route
  if ((isTraineePath || isAdminPath || isProfilePath) && !token) {
    // Not logged in — redirect to login
    console.log('Redirecting to login...');
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  // Role-based access control
  if (isAdminPath && userRole !== 'admin') {
    // Trainee trying to access admin routes
    return NextResponse.redirect(new URL('/trainee/dashboard', req.url));
  }
  
  if (isTraineePath && userRole !== 'trainee') {
    // Admin trying to access trainee routes (optional, depending on your requirements)
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/trainee/:path*',
    '/admin/:path*',
    '/profile/:path*',
  ],
};