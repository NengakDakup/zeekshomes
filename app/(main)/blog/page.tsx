'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Calendar, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import MaxWidthContent from '@/components/maxWidthContent'
import { supabase } from '@/lib/supabase'

const categories = [
  'All Posts',
  'Market Trends',
  'Investment Tips',
  'Property Guides',
  'Company News'
]

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [searchQuery, setSearchQuery] = useState('')
  const postsPerPage = 6

  useEffect(() => {
    fetchPosts()
  }, [currentPage, selectedCategory, searchQuery])

  const fetchPosts = async () => {
    setLoading(true)
    let query = supabase
      .from('posts')
      .select('*', { count: 'exact' })
      .order('date', { ascending: false })

    // Apply category filter
    if (selectedCategory !== 'All Posts') {
      query = query.eq('category', selectedCategory)
    }

    // Apply search filter
    if (searchQuery) {
      query = query.or(`title.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%`)
    }

    // Apply pagination
    const from = (currentPage - 1) * postsPerPage
    const to = from + postsPerPage - 1
    query = query.range(from, to)

    const { data, count, error } = await query

    if (error) {
      console.error(error)
      return
    }

    setPosts(data || [])
    setTotalPages(Math.ceil((count || 0) / postsPerPage))
    setLoading(false)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gs-apartments.png"
            alt="Blog"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <MaxWidthContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl bg-white/95 backdrop-blur-sm p-8 md:p-12 border-l-8 border-gold"
          >
            <div className="inline-block px-4 py-1 bg-gold text-white text-sm font-medium rounded-full mb-4">
              Our Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Updates</h1>
            <p className="text-lg text-gray-600">
              Stay informed about the latest trends in real estate and company updates.
            </p>
          </motion.div>
        </MaxWidthContent>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <MaxWidthContent>
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post - Show first post as featured */}
          {posts.length > 0 && (
            <Card className="mb-16 overflow-hidden group">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px] md:h-full">
                  <Image
                    src={posts[0].image}
                    alt="Featured Post"
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <Badge className="mb-4 bg-gold hover:bg-gold/80">Featured</Badge>
                  <h2 className="text-2xl font-bold mb-4">{posts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{posts[0].date}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="group" asChild>
                    <Link href={`/blog/${posts[0].id}`}>
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Add loading skeletons here
              Array(6).fill(0).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-4" />
                    <div className="h-8 bg-gray-200 rounded mb-4" />
                    <div className="h-4 bg-gray-200 rounded" />
                  </CardContent>
                </Card>
              ))
            ) : (
              posts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="px-0 group" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant="outline"
                  size="sm"
                  className={currentPage === i + 1 ? 'bg-primary text-primary-foreground' : ''}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  )
}
