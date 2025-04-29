'use client'

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MaxWidthContent from "./maxWidthContent";
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Footer() {
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([
          {
            email,
            subscribed_from: 'footer',
            active: true
          }
        ])

      if (error) throw error

      toast({
        title: "Success!",
        description: "You have been subscribed to our newsletter.",
      })
      setEmail('')
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message === 'duplicate key value violates unique constraint "subscribers_email_key"'
          ? "You are already subscribed!"
          : "Failed to subscribe. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <MaxWidthContent>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-bold text-xl">Zeeks Homes</span>
              </div>
              <p className="mb-4 text-primary-foreground/80">
                Building dreams and creating communities since 2010. Your trusted partner in real estate development.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Novare Central Office, Dabala Crescent Wuse Zone 5 Abuja</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>09125555510, 09125555512</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>sales@zeekshomes.ng</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">About Us</Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">Careers</Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">Our Projects</Link>
                </li>
                <li>
                  <Link href="/properties" className="hover:underline">Properties</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">Services</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">Blog</Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">Careers</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:underline">FAQs</Link>
                </li>
                <li>
                  <Link href="/investor-relations" className="hover:underline">Investor Relations</Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="mb-4 text-primary-foreground/80">
                Subscribe to our newsletter for the latest updates on new properties and offers.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  required
                  disabled={loading}
                />
                <Button variant="secondary" className="w-full" type="submit" disabled={loading}>
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
              <div className="mt-6">
                <h4 className="font-medium mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link target="_blank" href="https://www.facebook.com/share/1EGqS79sE8/" className="hover:text-primary-foreground/80">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link target="_blank" href="https://www.instagram.com/zeekshomes.ng?igsh=MW95ZXVidG00bnBxNQ==" className="hover:text-primary-foreground/80">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link target="_blank" href="https://www.tiktok.com/@zeekshomes.ng?_t=ZM-8vnRPMYFqVC&_r=1" className="hover:text-primary-foreground/80">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 4 15.66a6.34 6.34 0 0 0 10.95 4.37A6.33 6.33 0 0 0 17 15.66V8.28a8.16 8.16 0 0 0 4.59 1.42v-3z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Zeeks Homes. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed & Developed with ❤️</p>
          </div>
        </div>
      </MaxWidthContent>
    </footer>
  );
}