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
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
              <p className="text-lg md:text-xl mb-8">
                Our flagship luxury estate development, representing the pinnacle of modern living in Lagos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Request Information
                </Button>
                <Button size="lg" className="bg-gold text-white border-white hover:bg-white/10">
                  Schedule a Visit
                </Button>
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
                Set on 50 acres of prime land in Lekki, Beacon City Estate is an exclusive gated community that offers unparalleled luxury, security, and comfort. This flagship development by Zeeks Homes features 120 meticulously designed residences, ranging from elegant townhouses to spacious villas.
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
                  <h3 className="font-semibold text-gold">120 Units</h3>
                  <p className="text-sm text-muted-foreground">Luxury Residences</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                  <MapPin className="h-8 w-8 text-gold shrink-0 mb-2" />
                  <h3 className="font-semibold text-gold">Lekki, Lagos</h3>
                  <p className="text-sm text-muted-foreground">Prime Location</p>
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
                    <p>Situated in the heart of Lekki, with easy access to major highways, business districts, shopping centers, and international schools.</p>
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
                      <span className="font-medium">Residential Estate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Types:</span>
                      <span className="font-medium">Villas, Townhouses</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bedrooms:</span>
                      <span className="font-medium">3-6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size Range:</span>
                      <span className="font-medium">250-600 sqm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price Range:</span>
                      <span className="font-medium">₦120M - ₦350M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="bg-green-600">Ongoing</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Completion:</span>
                      <span className="font-medium">Phase 1: 2024</span>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <div className="space-y-4">
                    <Button className="w-full">Download Brochure</Button>
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
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Beacon City Estate Exterior"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Beacon City Estate Villa"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                alt="Beacon City Estate Interior"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Beacon City Estate Exterior"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Beacon City Estate Living Room"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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

          <Tabs defaultValue="villa" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="villa">Villa</TabsTrigger>
              <TabsTrigger value="townhouse">Townhouse</TabsTrigger>
              <TabsTrigger value="penthouse">Penthouse</TabsTrigger>
            </TabsList>

            <TabsContent value="villa">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden border">
                  <Image
                    src="https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Villa Floor Plan"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Luxury Villa</h3>
                  <p className="mb-6">
                    Our spacious 5-bedroom villas offer the ultimate in luxury living, with generous living spaces, premium finishes, and private gardens.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold">Size</h4>
                      <p>500-600 sqm</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bedrooms</h4>
                      <p>5</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bathrooms</h4>
                      <p>6</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Garage</h4>
                      <p>2 Cars</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Master suite with walk-in closet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Gourmet kitchen with island</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Private swimming pool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Home office/study</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Entertainment room</span>
                    </div>
                  </div>
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Floor Plan
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="townhouse">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden border">
                  <Image
                    src="https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Townhouse Floor Plan"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Elegant Townhouse</h3>
                  <p className="mb-6">
                    Our 4-bedroom townhouses combine modern design with practical living spaces, perfect for families seeking comfort and style.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold">Size</h4>
                      <p>350-400 sqm</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bedrooms</h4>
                      <p>4</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bathrooms</h4>
                      <p>4.5</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Garage</h4>
                      <p>2 Cars</p>
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
                      <span>Private garden</span>
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
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Floor Plan
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="penthouse">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden border">
                  <Image
                    src="https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Penthouse Floor Plan"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Luxury Penthouse</h3>
                  <p className="mb-6">
                    Our exclusive penthouses offer panoramic views, expansive living spaces, and the ultimate in luxury and privacy.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gold">Size</h4>
                      <p>450-550 sqm</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold">Bedrooms</h4>
                      <p>4</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold">Bathrooms</h4>
                      <p>5</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold">Garage</h4>
                      <p>2 Cars</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                      <span>Panoramic views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                      <span>Gourmet kitchen with premium appliances</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                      <span>Private elevator access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                      <span>Spacious terrace</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                      <span>Home automation system</span>
                    </div>
                  </div>
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Floor Plan
                  </Button>
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
              <h3 className="font-semibold mb-2">24/7 Security</h3>
              <p className="text-sm text-muted-foreground">Gated community with round-the-clock security personnel and CCTV surveillance.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Pool className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Swimming Pools</h3>
              <p className="text-sm text-muted-foreground">Olympic-sized community pool and children's pool with lounging areas.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Dumbbell className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Fitness Center</h3>
              <p className="text-sm text-muted-foreground">State-of-the-art gym with cardio and strength training equipment.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Trees className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Parks & Gardens</h3>
              <p className="text-sm text-muted-foreground">Beautifully landscaped green spaces with walking paths and seating areas.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Building className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Clubhouse</h3>
              <p className="text-sm text-muted-foreground">Community clubhouse with event spaces, lounge, and business center.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wifi className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">High-Speed Internet</h3>
              <p className="text-sm text-muted-foreground">Fiber optic internet connectivity throughout the estate.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Droplet className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Water Treatment</h3>
              <p className="text-sm text-muted-foreground">Advanced water purification system ensuring clean water supply.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Power Backup</h3>
              <p className="text-sm text-muted-foreground">Uninterrupted power supply with backup generators and solar options.</p>
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
                Beacon City Estate is strategically located in the heart of Lekki, one of Lagos' most prestigious neighborhoods, offering convenient access to business districts, shopping centers, schools, and leisure facilities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gold">Excellent Connectivity</h3>
                    <p>15 minutes to Lekki-Epe Expressway, 25 minutes to Victoria Island, 45 minutes to Murtala Muhammed International Airport.</p>
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
              <Button>Get Directions</Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2144&q=80"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Outright Payment</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">5%</span>
                  <span className="text-muted-foreground"> Discount</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Full payment at once</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>5% discount on property price</span>
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
                  <span className="text-3xl font-bold">30%</span>
                  <span className="text-muted-foreground"> Initial Payment</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>30% initial payment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Balance spread over 24 months</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>No interest charges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Flexible payment schedule</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Mortgage Option</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">20%</span>
                  <span className="text-muted-foreground"> Down Payment</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>20% down payment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Partnership with leading banks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Up to 20-year mortgage terms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Competitive interest rates</span>
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
              <Button size="lg" className="bg-gold text-white border-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}