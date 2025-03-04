import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, Home as HomeIcon, Briefcase, Award, Users, CheckCircle } from "lucide-react";
import MaxWidthContent from "@/components/maxWidthContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-end pb-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Home"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="w-screen relative z-10 text-white">
          <MaxWidthContent>
            <div className="max-w-3xl mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Building Dreams, Creating Communities
              </h1>
              <p className="text-md md:text-lg mb-8">
                Zeeks Homes is Nigeria's premier real estate developer, creating exceptional living and working spaces that stand the test of time.
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
                      <Button className="w-full">Search Properties</Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
                <h3 className="text-xl font-bold mb-2">Beacon City Estate</h3>
                <p className="text-muted-foreground mb-4">
                  Our flagship luxury estate with premium amenities and 24/7 security.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">From ₦120M</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects/beacon-city">View Details</Link>
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
                <h3 className="text-xl font-bold mb-2">Palm Heights</h3>
                <p className="text-muted-foreground mb-4">
                  Modern apartments with stunning views and resort-style facilities.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">From ₦85M</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects/palm-heights">View Details</Link>
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
                <h3 className="text-xl font-bold mb-2">Riverside Villas</h3>
                <p className="text-muted-foreground mb-4">
                  Exclusive waterfront villas with private gardens and boat access.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">From ₦180M</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects/riverside-villas">View Details</Link>
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
            <div>
              <h2 className="text-3xl font-bold mb-6">About Zeeks Homes</h2>
              <p className="text-lg mb-6">
                Since 2010, Zeeks Homes has been at the forefront of real estate development in Nigeria, delivering exceptional properties that combine innovative design, quality construction, and sustainable practices.
              </p>
              <p className="mb-8">
                Our mission is to create living and working spaces that enhance the quality of life for our clients while contributing positively to the communities we build in.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Building className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">50+ Projects</h3>
                    <p className="text-sm text-muted-foreground">Completed nationwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HomeIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">1,200+ Homes</h3>
                    <p className="text-sm text-muted-foreground">Delivered to happy clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">200+ Employees</h3>
                    <p className="text-sm text-muted-foreground">Dedicated professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">15+ Awards</h3>
                    <p className="text-sm text-muted-foreground">For excellence in real estate</p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Building className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Residential Development</h3>
              <p className="text-muted-foreground mb-4">
                Premium homes designed for modern living, from apartments to luxury villas.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services#residential">Learn More</Link>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial Development</h3>
              <p className="text-muted-foreground mb-4">
                Office spaces, retail centers, and mixed-use developments for businesses.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services#commercial">Learn More</Link>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <HomeIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Property Management</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive management services for residential and commercial properties.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services#management">Learn More</Link>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Builds</h3>
              <p className="text-muted-foreground mb-4">
                Bespoke homes tailored to your specific requirements and preferences.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services#custom">Learn More</Link>
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
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
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
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
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
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
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
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link href="/properties">Browse Properties</Link>
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Blog Preview */}
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
                  <span>Real Estate Trends</span>
                </div>
                <h3 className="text-xl font-bold mb-2">The Future of Real Estate in Nigeria</h3>
                <p className="text-muted-foreground mb-4">
                  Exploring emerging trends and opportunities in Nigeria's dynamic property market.
                </p>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/blog/future-real-estate-nigeria">
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
                  <span>Investment Tips</span>
                </div>
                <h3 className="text-xl font-bold mb-2">5 Tips for First-Time Property Investors</h3>
                <p className="text-muted-foreground mb-4">
                  Essential advice for those looking to make their first real estate investment.
                </p>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/blog/first-time-investor-tips">
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
                  <span>Home Improvement</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainable Features That Add Value to Your Home</h3>
                <p className="text-muted-foreground mb-4">
                  How eco-friendly upgrades can increase your property's value and appeal.
                </p>
                <Button variant="link" className="px-0" asChild>
                  <Link href="/blog/sustainable-home-features">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}