'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, Home as HomeIcon, Briefcase, Award, Users, MoveRight, Search, ChevronsRight } from "lucide-react";
import MaxWidthContent from "@/components/maxWidthContent";
import BlogPreview from "@/components/BlogPreview";

const itemsList = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: <div className="max-w-3xl mb-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Building Dreams, Creating Communities
      </h1>
      <p className="text-md md:text-lg mb-8">
        Zeeks Homes, a distinguished subsidiary of the renowned Zeeks Group of Companies, stands as a beacon of excellence in real estate innovation.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button size="lg" className="border border-white bg-white text-black hover:text-white" asChild>
          <Link href="/properties">View Properties</Link>
        </Button>
        <Button size="lg" variant="outline" className="bg-transparent" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  },
  {
    image: "/images/beacon.png",
    content: <div className="max-w-3xl mb-10">
      <div className="border border-white p-1 bg-gold font-bold w-fit mb-3 text-xs">
        ONGOING PROJECT
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Beacon City Estate
      </h1>
      <p className="text-md md:text-lg mb-8">
        One of our most notable ongoing projects is Beacon City, an estate located at Pyakasa Lugbe, Abuja. This project consists of 14 plots of 300 sqm semi-detached houses and 5 plots of a 500 sqm fully detached house.      </p>
      <div className="flex flex-wrap gap-4">
        <Button size="lg" className="border border-white bg-white text-black hover:text-white" asChild>
          <Link href="/projects/beacon-city">Learn More <MoveRight className="ml-1" /> </Link>
        </Button>
      </div>
    </div>
  }
]

export default function Home() {
  const [items] = useState(itemsList)
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 20000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-100vh">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-end pb-6">
        <div className="absolute inset-0 z-0">
          <Image
            src={items[activeIndex].image}
            alt="Luxury Home"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="w-screen relative z-10 text-white">
          <MaxWidthContent>
            {items[activeIndex].content}
            {/* Property Search */}
            <section className="py-8 hidden md:block">
              <div className="container">
                <div className="bg-background text-black shadow-lg p-6 relative z-20">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Location</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja</SelectItem>
                          <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                          <SelectItem value="ibadan">Ibadan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Property Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="land">Land</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Budget</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-50m">₦0 - ₦50M</SelectItem>
                          <SelectItem value="50m-100m">₦50M - ₦100M</SelectItem>
                          <SelectItem value="100m-200m">₦100M - ₦200M</SelectItem>
                          <SelectItem value="200m+">₦200M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full bg-gold">Search Properties <Search className="w-5 h-5 ml-2" /></Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex gap-2 justify-center">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-sm transition-colors ${index === activeIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View slide ${index + 1}`}
                />
              ))}
            </div>
          </MaxWidthContent>
        </div>
      </section>



      {/* Featured Projects */}
      <section className="py-16">
        <MaxWidthContent >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most prestigious developments, each designed with exceptional attention to detail and built to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beacon City Estate */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Beacon City Estate"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-black mb-2 text-gold">Beacon City Estate</h3>
                <p className="text-muted-foreground mb-4">
                  Our flagship luxury estate with premium amenities and 24/7 security.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">From <span className="text-gold font-bold">₦120M</span></span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects/beacon-city">View Details <MoveRight className="w-5 h-5 ml-1" /> </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Palm Heights */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                  alt="Palm Heights"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-black mb-2 text-gold">Palm Heights</h3>
                <p className="text-muted-foreground mb-4">
                  Modern apartments with stunning views and resort-style facilities.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">From <span className="text-gold font-bold">₦85M</span></span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects/palm-heights">View Details <MoveRight className="w-5 h-5 ml-1" /> </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Riverside Villas */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
                  alt="Riverside Villas"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-black mb-2 text-gold">Riverside Villas</h3>
                <p className="text-muted-foreground mb-4">
                  Exclusive waterfront villas with private gardens and boat access.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">From <span className="text-gold font-bold">₦180M</span></span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects/riverside-villas">View Details <MoveRight className="w-5 h-5 ml-1" /> </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </MaxWidthContent>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-muted">
        <MaxWidthContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex-col gap-4">
              <h2 className="text-3xl font-bold mb-6">About Zeeks Homes</h2>
              <p className="text-lg mb-6">
                Since 2022, Zeeks Homes has been at the forefront of real estate development in Nigeria, delivering exceptional properties that combine innovative design, quality construction, and sustainable practices.
              </p>
              <div className="border-l-4 border-gold pl-4">
                <p className="text-gold font-black italic text-lg">Our Mission</p>
                <p className="text-muted-foreground">
                  At Zeeks Homes, our mission is to redefine the standards of urban living by delivering exceptional real estate solutions that surpass every expectation, elevate lifestyles, and foster enduring value. Through a steadfast dedication to integrity, innovation, and sustainability, we endeavor to create environments that inspire, enrich, and endure for generations to come.                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8 mt-8">
                <div className="flex items-start gap-3">
                  <Building className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold">50+ Projects</h3>
                    <p className="text-sm text-muted-foreground">Completed nationwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HomeIcon className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold">1,200+ Homes</h3>
                    <p className="text-sm text-muted-foreground">Delivered to happy clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold">200+ Employees</h3>
                    <p className="text-sm text-muted-foreground">Dedicated professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold">15+ Awards</h3>
                    <p className="text-sm text-muted-foreground">For excellence in real estate</p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/about">Learn More About Us <MoveRight className="ml-2 w-5 h-5" /> </Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/gs-apartments.png"
                alt="Zeeks Homes Office"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Services */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of real estate services to meet all your property needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Building className="h-12 w-12 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Residential Development</h3>
              <p className="text-muted-foreground mb-4">
                We create modern, sustainable luxury homes with attention to detail. Our projects range from single-family homes to multi-unit complexes, featuring innovative design and energy-efficient solutions.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services#residential" className="text-gold">Learn More <ChevronsRight className="ml-1 w-5 h-5" /> </Link>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-12 w-12 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial Development</h3>
              <p className="text-muted-foreground mb-4">
                Specializing in state-of-the-art commercial properties including offices, retail centers, and industrial facilities. We focus on strategic locations and sustainable practices to deliver competitive business spaces.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services#commercial" className="text-gold">Learn More <ChevronsRight className="ml-1 w-5 h-5" /> </Link>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <HomeIcon className="h-12 w-12 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Property Management</h3>
              <p className="text-muted-foreground mb-4">
                Our comprehensive management services include tenant relations, maintenance, financial management, and regulatory compliance. We ensure smooth operations and maximum value for property owners.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services#management" className="text-gold">Learn More <ChevronsRight className="ml-1 w-5 h-5" /> </Link>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Building className="h-12 w-12 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mixed-Use Development</h3>
              <p className="text-muted-foreground mb-4">
                Creating integrated communities that combine residential, commercial, and recreational spaces. Our developments feature modern amenities and thoughtful layouts to enhance urban living.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services#mixed-use" className="text-gold">Learn More <ChevronsRight className="ml-1 w-5 h-5" /> </Link>
              </Button>
            </Card>
          </div>
        </MaxWidthContent>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <MaxWidthContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from homeowners and investors who have experienced the Zeeks Homes difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Client"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Amara Johnson</h3>
                  <p className="text-sm text-muted-foreground">Homeowner, Beacon City Estate</p>
                </div>
              </div>
              <p className="italic">
                "Moving into our Zeeks home was the best decision we made. The quality of construction and attention to detail is exceptional. The community amenities are world-class."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1703059680844-cc6a926737d9?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Client"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">David Okafor</h3>
                  <p className="text-sm text-muted-foreground">Investor, Multiple Properties</p>
                </div>
              </div>
              <p className="italic">
                "I've invested in several Zeeks Homes properties over the years. Their developments consistently appreciate in value and the rental yields are impressive."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1581941894991-b7f75a66b7bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Client"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Adeyemi</h3>
                  <p className="text-sm text-muted-foreground">Business Owner, Commercial Space</p>
                </div>
              </div>
              <p className="italic">
                "Our company relocated to a Zeeks commercial property last year. The modern facilities and strategic location have helped our business thrive and grow."
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </MaxWidthContent>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <MaxWidthContent>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-lg mb-8">
              Contact our team of experts today to discuss your real estate needs and discover how Zeeks Homes can help you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-black" asChild>
                <Link href="/properties">Browse Properties</Link>
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Blog Preview */}
      <BlogPreview />
    </div>
  );
}