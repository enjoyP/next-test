
// import { NextRequest } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//     console.log(request.nextUrl.pathname, "niuniu")
//     //   return NextResponse.redirect(new URL('/home', request.url))
// }

// // /about /about/xxx /about/xxx/xxx
// // export const config = {
// //     matcher: ['/about/:path*','/dashboard'],
// // }

// export const config = {
//     matcher: [
//         /*
//          * Match all request paths except for the ones starting with:
//          * - api (API routes)
//          * - _next/static (static files)
//          * - _next/image (image optimization files)
//          * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//          */
//         '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
//     ],
// }

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }
// }

import { NextRequest,NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    //如果不是登录页
    if (request.nextUrl.pathname !== '/login') {
        //并且没有token
        const token = request.cookies.get('token')?.value;
        if(!token) {
            //拦截登录页
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}