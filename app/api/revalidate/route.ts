/**
 * On-Demand Revalidation API Route
 *
 * Called by WordPress when content is updated to instantly refresh cached pages.
 */

import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'bravinci-revalidate-2024'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { secret, path, type, slug } = body

    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate by path if provided
    if (path) {
      revalidatePath(path)
      return NextResponse.json({ revalidated: true, path })
    }

    // Revalidate based on content type and slug
    if (type && slug) {
      const paths: string[] = []

      switch (type) {
        case 'bv_service':
          paths.push(`/services/${slug}`, '/services')
          break
        case 'bv_solution':
          paths.push(`/solutions/${slug}`, '/solutions')
          break
        case 'bv_industry':
          paths.push(`/industries/${slug}`, '/industries')
          break
        case 'page':
          paths.push(`/${slug}`)
          if (slug === 'home' || slug === '') paths.push('/')
          break
        default:
          paths.push('/')
      }

      for (const p of paths) {
        revalidatePath(p)
      }

      // Also revalidate the layout to clear fetch caches
      revalidatePath('/', 'layout')

      return NextResponse.json({ revalidated: true, paths })
    }

    // If no specific target, revalidate everything
    revalidatePath('/', 'layout')
    return NextResponse.json({ revalidated: true, all: true })

  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}

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
