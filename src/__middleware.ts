// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/robots.txt') {
//     const response = NextResponse.next()
//     response.headers.set('cache-control', 'max-age=1209600, public')
//     return response
//   }
// }