'use client';

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import MaxWidthContent from "@/components/maxWidthContent";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface BlogPostProps {
  params: {
    id: string
  }
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  author: string
}

export default function BlogPost({ params }: BlogPostProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error) {
        console.error(error)
        notFound()
        return
      }

      setPost(data)
      setLoading(false)
    }

    fetchPost()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen animate-pulse">
        <div className="h-[60vh] bg-muted" />
        <MaxWidthContent>
          <div className="py-16">
            <div className="h-8 bg-muted rounded w-1/3 mb-4" />
            <div className="h-4 bg-muted rounded w-1/4 mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          </div>
        </MaxWidthContent>
      </div>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <MaxWidthContent>
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-gold">{post.category}</Badge>
              <span className="text-sm text-white/80">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-lg font-bold">{post.author[0]}</span>
              </div>
              <div>
                <p className="font-medium">By {post.author}</p>
                <p className="text-sm text-white/80">Zeeks Homes</p>
              </div>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              <Separator className="my-12" />

              {/* Author Section */}
              <div className="bg-muted p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{post.author[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                    <p className="text-muted-foreground mb-4">
                      Real estate analyst with over a decade of experience in the Nigerian property market.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <Button variant="outline" className="mb-8 w-full" asChild>
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>

                <div className="bg-muted p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-4">Share this article</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Twitter</Button>
                    <Button variant="outline" size="sm" className="flex-1">LinkedIn</Button>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Subscribe to Newsletter</h3>
                  <p className="text-sm mb-4">Get the latest real estate insights delivered to your inbox.</p>
                  <Button className="w-full bg-gold hover:bg-gold/90">Subscribe Now</Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}