import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import MaxWidthContent from './maxWidthContent'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

const BlogPreview = () => {
  return (
    <section className="py-16">
      <MaxWidthContent>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Button variant="outline" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                alt="Blog Post"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <span>April 15, 2025</span>
                <span className="mx-2">•</span>
                <span className="text-gold">Real Estate Trends</span>
              </div>
              <h3 className="text-xl font-bold mb-2">The Future of Real Estate in Nigeria</h3>
              <p className="text-muted-foreground mb-4">
                Exploring emerging trends and opportunities in Nigeria's dynamic property market.
              </p>
              <Button variant="link" className="px-0" asChild>
                <Link href="/blog/1">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1556156653-e5a7c69cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Blog Post"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <span>April 8, 2025</span>
                <span className="mx-2">•</span>
                <span className="text-gold">Investment Tips</span>
              </div>
              <h3 className="text-xl font-bold mb-2">5 Tips for First-Time Property Investors</h3>
              <p className="text-muted-foreground mb-4">
                Essential advice for those looking to make their first real estate investment.
              </p>
              <Button variant="link" className="px-0" asChild>
                <Link href="/blog/2">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Blog Post"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <span>April 1, 2025</span>
                <span className="mx-2">•</span>
                <span className="text-gold">Home Improvement</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Features That Add Value to Your Home</h3>
              <p className="text-muted-foreground mb-4">
                How eco-friendly upgrades can increase your property's value and appeal.
              </p>
              <Button variant="link" className="px-0" asChild>
                <Link href="/blog/3">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </MaxWidthContent>
    </section>
  )
}

export default BlogPreview