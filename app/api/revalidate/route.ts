/**
 * On-Demand Revalidation API Route
 *
 * Called by WordPress when content is updated to instantly refresh cached pages.
 * This eliminates the wait time for ISR revalidation.
 */

import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Secret token to secure the endpoint (set in WordPress and Next.js env)
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'bravinci-revalidate-2024'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { secret, path, tag, type, slug } = body

    // Verify secret token
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate by tag if provided
    if (tag) {
      revalidateTag(tag)
      return NextResponse.json({ revalidated: true, tag })
    }

    // Revalidate by path if provided
    if (path) {
      revalidatePath(path)
      return NextResponse.json({ revalidated: true, path })
    }

    // Revalidate based on content type and slug
    if (type && slug) {
      const tags: string[] = []
      const paths: string[] = []

      switch (type) {
        case 'bv_service':
          // Revalidate cache tags for services
          tags.push('services', `service-${slug}`)
          // Also revalidate paths for full page cache
          paths.push(`/services/${slug}`, '/services')
          break

        case 'bv_solution':
          // Revalidate cache tags for solutions
          tags.push('solutions', `solution-${slug}`)
          paths.push(`/solutions/${slug}`, '/solutions')
          break

        case 'bv_industry':
          tags.push('industries', `industry-${slug}`)
          paths.push(`/industries/${slug}`, '/industries')
          break

        case 'page':
          paths.push(`/${slug}`)
          if (slug === 'home' || slug === '') {
            paths.push('/')
          }
          break

        default:
          paths.push('/')
      }

      // Revalidate all cache tags (clears fetch cache)
      for (const t of tags) {
        revalidateTag(t)
      }

      // Revalidate all paths (clears page cache)
      for (const p of paths) {
        revalidatePath(p)
      }

      return NextResponse.json({ revalidated: true, tags, paths })
    }

    // If no specific target, revalidate everything
    revalidatePath('/', 'layout')
    return NextResponse.json({ revalidated: true, all: true })

  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}

// Also support GET for testing
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('secret')
  const path = searchParams.get('path')

  if (secret !== REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  if (path) {
    revalidatePath(path)
    return NextResponse.json({ revalidated: true, path })
  }

  return NextResponse.json({ error: 'Missing path parameter' }, { status: 400 })
}
