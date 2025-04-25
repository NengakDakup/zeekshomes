import Link from "next/link";
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MaxWidthContent from "./maxWidthContent";

export default function Footer() {
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
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="secondary" className="w-full">Subscribe</Button>
              </div>
              <div className="mt-6">
                <h4 className="font-medium mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="https://facebook.com" className="hover:text-primary-foreground/80">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="https://twitter.com" className="hover:text-primary-foreground/80">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://instagram.com" className="hover:text-primary-foreground/80">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="https://linkedin.com" className="hover:text-primary-foreground/80">
                    <Linkedin className="h-5 w-5" />
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