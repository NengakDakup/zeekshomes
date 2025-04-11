'use client'
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

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Real Estate in Nigeria',
    excerpt: 'Exploring emerging trends and opportunities in Nigeria\'s dynamic property market.',
    image: '/images/beacon.png',
    category: 'Market Trends',
    date: 'December 10, 2023',
    author: 'John Doe'
  },
  // Add more blog posts here
  {
    id: 2,
    title: 'Investment Opportunities in Lagos Real Estate',
    excerpt: 'A detailed analysis of prime investment locations and properties in Lagos.',
    image: '/images/gs-apartments.png',
    category: 'Investment Tips',
    date: 'December 8, 2023',
    author: 'Jane Smith'
  },
  {
    id: 3,
    title: "First-Time Home Buyer's Guide",
    excerpt: 'Essential tips and considerations for purchasing your first property in Nigeria.',
    image: '/images/beacon.png',
    category: 'Property Guides',
    date: 'December 5, 2023',
    author: 'Michael Johnson'
  },
  {
    id: 4,
    title: 'Zeeks Properties Launches New Development',
    excerpt: 'Announcing our latest luxury residential project in Victoria Island.',
    image: '/images/gs-apartments.png',
    category: 'Company News',
    date: 'December 3, 2023',
    author: 'Sarah Williams'
  },
  {
    id: 5,
    title: 'Sustainable Building Practices in Nigeria',
    excerpt: 'How eco-friendly construction is shaping the future of Nigerian real estate.',
    image: '/images/beacon.png',
    category: 'Market Trends',
    date: 'November 30, 2023',
    author: 'David Chen'
  },
  {
    id: 6,
    title: 'Property Market Review: Q4 2023',
    excerpt: 'Analysis of real estate trends and market performance in the last quarter.',
    image: '/images/gs-apartments.png',
    category: 'Market Trends',
    date: 'November 28, 2023',
    author: 'Amanda Brown'
  }
]

const categories = [
  'All Posts',
  'Market Trends',
  'Investment Tips',
  'Property Guides',
  'Company News'
]

export default function BlogPage() {
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
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All Posts' ? 'default' : 'outline'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <Card className="mb-16 overflow-hidden group">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[300px] md:h-full">
                <Image
                  src="/images/beacon.png"
                  alt="Featured Post"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <Badge className="mb-4 bg-gold hover:bg-gold/80">Featured</Badge>
                <h2 className="text-2xl font-bold mb-4">The Future of Real Estate in Nigeria</h2>
                <p className="text-muted-foreground mb-6">
                  Exploring emerging trends and opportunities in Nigeria's dynamic property market. Learn about the latest developments and investment opportunities.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 10, 2023</span>
                  </div>
                </div>
                <Button variant="outline" className="group" asChild>
                  <Link href="/blog/1">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  )
}
