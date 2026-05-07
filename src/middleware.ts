import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function getRequestProtocol(request: NextRequest): string {
  const forwardedProto = request.headers.get('x-forwarded-proto')
  if (forwardedProto) return forwardedProto.toLowerCase()

  try {
    const visitor = JSON.parse(request.headers.get('cf-visitor') || '{}')
    if (typeof visitor.scheme === 'string') return visitor.scheme.toLowerCase()
  } catch {
    // Ignore malformed proxy metadata and fall back to the request URL.
  }

  return request.nextUrl.protocol.replace(':', '').toLowerCase()
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase() || ''
  const protocol = getRequestProtocol(request)

  if (host === 'www.crewcmd.dev' || (host === 'crewcmd.dev' && protocol !== 'https')) {
    const canonicalUrl = new URL(request.url)
    canonicalUrl.protocol = 'https:'
    canonicalUrl.hostname = 'crewcmd.dev'
    return NextResponse.redirect(canonicalUrl, 301)
  }

  return NextResponse.next()
}
