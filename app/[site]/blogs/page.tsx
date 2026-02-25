'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Newspaper,
  ArrowRight,
  Calendar,
  User,
  Clock,
  Tag
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useSite } from '@/lib/site-context'

// Placeholder blog posts - will be replaced with WordPress content
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Strategic Intelligence in Business',
    excerpt: 'Discover how AI and machine learning are transforming the way organizations gather and analyze competitive intelligence.',
    author: 'Bravinci Team',
    date: '2024-02-15',
    readTime: '5 min read',
    category: 'Strategy',
    image: null
  },
  {
    id: 2,
    title: 'Building a Data-Driven Culture',
    excerpt: 'Learn the essential steps to transform your organization into a truly data-literate enterprise.',
    author: 'Bravinci Team',
    date: '2024-02-10',
    readTime: '7 min read',
    category: 'Analytics',
    image: null
  },
  {
    id: 3,
    title: 'Understanding the Strategy Command Center',
    excerpt: 'A deep dive into our flagship solution and how it revolutionizes strategic decision-making.',
    author: 'Bravinci Team',
    date: '2024-02-05',
    readTime: '6 min read',
    category: 'Solutions',
    image: null
  },
  {
    id: 4,
    title: 'SCIP Certification: What You Need to Know',
    excerpt: 'Everything you need to know about the Strategic Consortium of Intelligence Professionals certification.',
    author: 'Bravinci Team',
    date: '2024-01-28',
    readTime: '4 min read',
    category: 'Education',
    image: null
  },
  {
    id: 5,
    title: 'Data Sovereignty in the Modern Enterprise',
    excerpt: 'Why data sovereignty matters and how Dividos helps organizations maintain control of their data.',
    author: 'Bravinci Team',
    date: '2024-01-20',
    readTime: '8 min read',
    category: 'Technology',
    image: null
  },
  {
    id: 6,
    title: 'Competitive Intelligence Best Practices',
    excerpt: 'Expert insights on building an effective competitive intelligence program in your organization.',
    author: 'Bravinci Team',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Strategy',
    image: null
  }
]

const categories = ['All', 'Strategy', 'Analytics', 'Solutions', 'Education', 'Technology']

export default function BlogsPage() {
  const { basePath } = useSite()
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#F7AE57]/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div
              className={cn(
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
                <Newspaper className="w-4 h-4 text-[#F7AE57]" />
                <span>Insights & Updates</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Bravinci </span>
                <span className="gradient-text">Blog</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Stay informed with the latest insights on strategic intelligence,
                business analytics, and industry trends from our expert team.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all',
                      activeCategory === category
                        ? 'bg-[#0E78AA] text-white'
                        : 'glass-card hover:bg-foreground/5'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group rounded-2xl glass-card overflow-hidden hover-lift transition-all duration-500"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-[#0E78AA]/20 to-[#F7AE57]/20 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-[#0E78AA]/30" />
                  </div>

                  <div className="p-6">
                    {/* Category Tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-3 h-3 text-[#F7AE57]" />
                      <span className="text-xs font-medium text-[#F7AE57]">{post.category}</span>
                    </div>

                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium text-[#0E78AA] hover:text-[#0E78AA]/80"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More / Pagination Placeholder */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                More articles coming soon from WordPress
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Stay </span>
              <span className="gradient-text">Informed</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on strategic intelligence
              and business analytics delivered to your inbox.
            </p>
            <Button
              size="lg"
              className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href={`${basePath}/contact`}>
                Subscribe Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
