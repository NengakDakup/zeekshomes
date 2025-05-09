import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Home, Building, Calendar, CheckCircle, Shield, Wifi, Droplet, Zap, Trees, Car, Dumbbell, School as Pool, Download } from "lucide-react";
import MaxWidthContent from "@/components/maxWidthContent";

export default function BeaconCityPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beacon2.png"
            alt="Beacon City Estate"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <MaxWidthContent>
          <div className="relative z-10 text-white">
            <div className="">
              <Badge className="bg-primary text-primary-foreground mb-4">Featured Project</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Beacon City Estate
              </h1>
              <p className="text-lg md:text-xl">
                <MapPin className="inline-block mr-2" /> AIRPORT ROAD, ABUJA
              </p>
              <p className="text-lg md:text-xl mb-8">
                A Smart City where comfort meets innovation
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="w-full md:w-auto">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">
                    Request Information
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-gold text-white border-white hover:bg-white/10">
                    Schedule a Visit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg mb-6">
                Beacon City is an ultra-modern estate development project in the heart of Abuja.
                This Smart City integrates state-of-the-art infrastructure with sustainable living
                solutions, creating a harmonious blend of technology and comfort.
              </p>
              <p className="mb-6">
                Each home in Beacon City Estate is built to the highest standards, with premium finishes, smart home technology, and energy-efficient features. The estate also boasts world-class amenities, including a clubhouse, swimming pools, tennis courts, and beautifully landscaped parks.
              </p>
              <p className="mb-8">
                With its strategic location, exceptional design, and comprehensive facilities, Beacon City Estate represents the future of luxury living in Nigeria. Construction began in 2023 and is scheduled for completion in phases through 2026.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                  <Home className="h-8 w-8 text-gold shrink-0 mb-2" />
                  <h3 className="font-semibold text-gold">300+ Units</h3>
                  <p className="text-sm text-muted-foreground">Smart Homes</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                  <MapPin className="h-8 w-8 text-gold shrink-0 mb-2" />
                  <h3 className="font-semibold text-gold">Airport Road</h3>
                  <p className="text-sm text-muted-foreground">Abuja</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                  <Calendar className="h-8 w-8 text-gold shrink-0 mb-2" />
                  <h3 className="font-semibold text-gold">2023-2026</h3>
                  <p className="text-sm text-muted-foreground">Development Period</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                  <Building className="h-8 w-8 text-gold shrink-0 mb-2" />
                  <h3 className="font-semibold text-gold">50 Acres</h3>
                  <p className="text-sm text-muted-foreground">Land Area</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="outline" className="text-sm bg-gold text-white">Luxury Living</Badge>
                <Badge variant="outline" className="text-sm bg-gold text-white">Smart Homes</Badge>
                <Badge variant="outline" className="text-sm bg-gold text-white">Gated Community</Badge>
                <Badge variant="outline" className="text-sm bg-gold text-white">Energy Efficient</Badge>
                <Badge variant="outline" className="text-sm bg-gold text-white">Premium Finishes</Badge>
                <Badge variant="outline" className="text-sm bg-gold text-white">24/7 Security</Badge>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Strategic Location</h3>
                    <p>Located along Airport Road, Abuja, with easy access to the city center and key infrastructure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Architectural Excellence</h3>
                    <p>Contemporary designs that blend aesthetics with functionality, created by award-winning architects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Investment Potential</h3>
                    <p>Strong appreciation prospects due to prime location and high-quality construction.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Property Details</h3>
                  <Separator className="mb-4" />
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Project Type:</span>
                      <span className="font-medium">Smart City Estate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Types:</span>
                      <span className="font-medium">Semi-Detached Duplex, Fully-Detached Duplex</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bedrooms:</span>
                      <span className="font-medium">3-6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size Range:</span>
                      <span className="font-medium">300-500 sqm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price Range:</span>
                      <span className="font-medium">₦5M - ₦8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="bg-green-600">Ongoing</Badge>
                    </div>

                  </div>
                  <Separator className="my-6" />
                  <div className="space-y-4">
                    <Link href="/BEACON-BROCHURE-BB.pdf" download>
                      <Button className="w-full">Download Brochure</Button>
                    </Link>
                    <Button variant="outline" className="w-full">Contact Sales Team</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted">
        <MaxWidthContent>
          <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/beacon2.png"
                alt="Beacon City Estate Exterior"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/semi-detached.png"
                alt="Beacon City Estate Villa"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/fully-detached.png"
                alt="Beacon City Estate Interior"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/court.png"
                alt="Beacon City Estate Exterior"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/aerial.png"
                alt="Beacon City Estate Living Room"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/top.png"
                alt="Beacon City Estate Pool"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Floor Plans */}
      <section className="py-16">
        <MaxWidthContent>
          <h2 className="text-3xl font-bold mb-8 text-center">Floor Plans</h2>

          <Tabs defaultValue="semi-detached-duplex" className="w-full">
            <TabsList className="grid w-full max-w-[500px] mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="semi-detached-duplex">Semi-Detached Duplex</TabsTrigger>
              <TabsTrigger value="fully-detached-duplex">Fully-Detached Duplex</TabsTrigger>
            </TabsList>

            <TabsContent value="semi-detached-duplex">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden border">
                  <Image
                    src="/images/semi-plan.png"
                    alt="Semi-detached Floor Plan"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Semi-Detached Duplex</h3>
                  <p className="font-semibold mb-2">
                    NGN 5,000,000
                  </p>
                  <p className="mb-6">
                    Our spacious 3-bedroom semi-detached duplex offers the ultimate in luxury living, with generous living spaces, and premium finishes.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold">Size</h4>
                      <p>300 sqm</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bedrooms</h4>
                      <p>3</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bathrooms</h4>
                      <p>3</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Garage</h4>
                      <p>4 Cars</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Guest bedroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Ante room</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Living room</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Home office/study</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mini bar</span>
                    </div>
                  </div>
                  <Link href="/BEACON-BROCHURE-BB.pdf" download>
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" /> Download Floor Plan
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fully-detached-duplex">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden border">
                  <Image
                    src="/images/fully-plan.png"
                    alt="Fully detached Duplex"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Fully-Detached Duplex</h3>
                  <p className="font-semibold mb-2">
                    NGN 8,000,000
                  </p>
                  <p className="mb-6">
                    500 sqm Plot: Perfect for larger homes with spacious yards, a 5 bedroom fully
                    detached duplex.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold">Size</h4>
                      <p>500 sqm</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bedrooms</h4>
                      <p>5</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bathrooms</h4>
                      <p>5</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Garage</h4>
                      <p>6 Cars</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Open-plan living area</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Modern kitchen with breakfast bar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Open BQ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Master bedroom with en-suite</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Rooftop terrace</span>
                    </div>
                  </div>
                  <Link href="/BEACON-BROCHURE-BB.pdf" download>
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" /> Download Floor Plan
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </MaxWidthContent>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-muted">
        <MaxWidthContent>
          <h2 className="text-3xl font-bold mb-16 text-center">World-Class Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Gated Community</h3>
              <p className="text-sm text-muted-foreground">Ensuring safety and privacy for all residents with controlled access.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">24/7 Security</h3>
              <p className="text-sm text-muted-foreground">Professional security personnel and advanced surveillance systems.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Car className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Paved Roads</h3>
              <p className="text-sm text-muted-foreground">Well-maintained and beautifully designed roads and walkways.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Trees className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Green Spaces</h3>
              <p className="text-sm text-muted-foreground">Lush, landscaped gardens and recreational areas for community enjoyment.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Electricity Supply</h3>
              <p className="text-sm text-muted-foreground">Stable and reliable power supply throughout the estate.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Dumbbell className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Sports Facilities</h3>
              <p className="text-sm text-muted-foreground">Basketball courts, playgrounds and recreational areas.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Dumbbell className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Health Centre</h3>
              <p className="text-sm text-muted-foreground">Modern fitness facility and wellness center for residents.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wifi className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">High-Speed Internet</h3>
              <p className="text-sm text-muted-foreground">Fiber optic internet connectivity throughout the estate.</p>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Location */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Location</h2>
              <p className="text-lg mb-6">
                Beacon City is strategically located along Airport Road, Abuja, offering seamless
                connectivity to the city's major landmarks and infrastructure.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gold">Key Distances</h3>
                    <p>10 minutes to Airport, 15 minutes to City Center, 20 minutes to Central Business District</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gold">Nearby Amenities</h3>
                    <p>5 minutes to shopping malls, 10 minutes to international schools, 15 minutes to hospitals and medical centers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gold">Neighborhood</h3>
                    <p>Situated in an established residential area with other premium developments and expatriate communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/top.png"
                alt="Beacon City Estate Location"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Payment Plans */}
      <section className="py-16 bg-muted">
        <MaxWidthContent>
          <h2 className="text-3xl font-bold mb-8 text-center">Payment Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Outright Payment</h3>
                <div className="text-center mb-6">
                  <span className="text-muted-foreground"> Discounted Price</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Full payment at once</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Discount on property price</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Priority unit selection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Customization options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold">
              <CardContent className="p-6">
                <div className="bg-gold text-primary-foreground text-center py-1 px-4 rounded-full text-sm font-medium mb-4 mx-auto w-fit">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Installment Plan</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">50%</span>
                  <span className="text-muted-foreground"> Initial Payment</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>30% initial payment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Balance spread over 3-6 months</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Discounted interest charges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Flexible payment schedule</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8 text-muted-foreground">
            Contact our sales team for more information about payment plans and financing options.
          </p>
        </MaxWidthContent>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground border-b border-gold">
        <MaxWidthContent>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Secure Your Place in Beacon City Estate</h2>
            <p className="text-lg mb-8">
              Don't miss the opportunity to be part of this exclusive community. Contact us today to schedule a site visit or to learn more about available units.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
              <Link href="/BEACON-BROCHURE-BB.pdf" download>
                <Button size="lg" className="bg-gold text-white border-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </Link>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}