import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import MaxWidthContent from "@/components/maxWidthContent";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

// Updated blog posts data
const blogPosts: { [key: string]: BlogPost } = {
  "1": {
    id: 1,
    title: "The Future of Real Estate in Nigeria",
    excerpt: "Exploring emerging trends and opportunities in Nigeria's dynamic property market.",
    content: `The Nigerian real estate market is undergoing a remarkable transformation, driven by technological innovation, demographic shifts, and changing consumer preferences. This comprehensive analysis explores key trends shaping the future of real estate in Nigeria.

    Key areas covered include:
    - Digital transformation in property transactions
    - Rise of smart homes and sustainable building practices
    - Impact of urbanization on property development
    - Growing demand for mixed-use developments
    - Evolution of property financing options`,
    image: "/images/beacon.png",
    category: "Market Trends",
    date: "December 10, 2023",
    author: "John Doe"
  },
  "2": {
    id: 2,
    title: "Investment Opportunities in Lagos Real Estate",
    excerpt: "A detailed analysis of prime investment locations and properties in Lagos.",
    content: `Lagos continues to be Nigeria's premier real estate investment destination. This article examines current opportunities in various neighborhoods, from Victoria Island to Lekki, analyzing potential returns and market dynamics.

    Topics covered:
    - High-yield investment areas
    - Commercial vs residential opportunities
    - Risk assessment and mitigation strategies
    - Market entry strategies
    - Legal considerations for investors`,
    image: "/images/gs-apartments.png",
    category: "Investment Tips",
    date: "December 8, 2023",
    author: "Jane Smith"
  },
  "3": {
    id: 3,
    title: "Investment Opportunities in Lagos Real Estate",
    excerpt: "A detailed analysis of prime investment locations and properties in Lagos.",
    content: `Lagos continues to be Nigeria's premier real estate investment destination. This article examines current opportunities in various neighborhoods, from Victoria Island to Lekki, analyzing potential returns and market dynamics.

    Topics covered:
    - High-yield investment areas
    - Commercial vs residential opportunities
    - Risk assessment and mitigation strategies
    - Market entry strategies
    - Legal considerations for investors`,
    image: "/images/gs-apartments.png",
    category: "Investment Tips",
    date: "December 8, 2023",
    author: "Jane Smith"
  },
  "4": {
    id: 4,
    title: "Investment Opportunities in Lagos Real Estate",
    excerpt: "A detailed analysis of prime investment locations and properties in Lagos.",
    content: `Lagos continues to be Nigeria's premier real estate investment destination. This article examines current opportunities in various neighborhoods, from Victoria Island to Lekki, analyzing potential returns and market dynamics.

    Topics covered:
    - High-yield investment areas
    - Commercial vs residential opportunities
    - Risk assessment and mitigation strategies
    - Market entry strategies
    - Legal considerations for investors`,
    image: "/images/gs-apartments.png",
    category: "Investment Tips",
    date: "December 8, 2023",
    author: "Jane Smith"
  },
  "5": {
    id: 5,
    title: "Investment Opportunities in Lagos Real Estate",
    excerpt: "A detailed analysis of prime investment locations and properties in Lagos.",
    content: `Lagos continues to be Nigeria's premier real estate investment destination. This article examines current opportunities in various neighborhoods, from Victoria Island to Lekki, analyzing potential returns and market dynamics.

    Topics covered:
    - High-yield investment areas
    - Commercial vs residential opportunities
    - Risk assessment and mitigation strategies
    - Market entry strategies
    - Legal considerations for investors`,
    image: "/images/gs-apartments.png",
    category: "Investment Tips",
    date: "December 8, 2023",
    author: "Jane Smith"
  },
  "6": {
    id: 6,
    title: "Investment Opportunities in Lagos Real Estate",
    excerpt: "A detailed analysis of prime investment locations and properties in Lagos.",
    content: `Lagos continues to be Nigeria's premier real estate investment destination. This article examines current opportunities in various neighborhoods, from Victoria Island to Lekki, analyzing potential returns and market dynamics.

    Topics covered:
    - High-yield investment areas
    - Commercial vs residential opportunities
    - Risk assessment and mitigation strategies
    - Market entry strategies
    - Legal considerations for investors`,
    image: "/images/gs-apartments.png",
    category: "Investment Tips",
    date: "December 8, 2023",
    author: "Jane Smith"
  },
  // Add the rest of the blog posts similarly
};

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
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
                <p className="text-sm text-white/80">Real Estate Analyst</p>
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
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-6">
                    {paragraph.trim()}
                  </p>
                ))}
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
                    <Button variant="outline" size="sm">View Profile</Button>
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

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}