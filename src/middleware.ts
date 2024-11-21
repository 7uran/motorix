import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/home', '/blog', '/about', '/features', '/contact', '/payment', '/shop', '/checkout', '/cart', '/dashboard'];
const publicRoutes = ['/', '/signup', '/login'];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = cookies().get('userToken')?.value;
    const isAdmin = cookies().get('isAdmin')?.value === 'true';

    if (isProtectedRoute && !cookie) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }


    if (path.startsWith('/dashboard') && (!cookie || !isAdmin)) {
        return NextResponse.redirect(new URL('/wheels-and-tires', req.nextUrl));
    }


    if (isPublicRoute && cookie) {
        return NextResponse.redirect(new URL('/wheels-and-tires', req.nextUrl));
    }


    if (path === '/' && process.env.NODE_ENV === 'development') {
        return NextResponse.redirect(new URL('/wheels-and-tires', req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
