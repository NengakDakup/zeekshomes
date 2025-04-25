import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MapPin, Home, Building, Bath, BedDouble, Square as SquareFeet, Search, Filter, ArrowRight } from "lucide-react";
import MaxWidthContent from "@/components/maxWidthContent";

export default function PropertiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <h1 className="text-3xl font-bold mb-3 text-gold">Find Your Perfect Property</h1>
            <p className="text-lg mb-8">
              Browse our extensive collection of premium properties across Nigeria.
            </p>
          </div>
        </MaxWidthContent>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <MaxWidthContent>
          <div className="bg-background rounded-lg shadow-lg p-6 -mt-16 relative z-20 border-t-4 border-primary">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold mb-4 md:mb-0">Property Search</h2>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Advanced Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
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
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
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
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50m">₦0 - ₦50M</SelectItem>
                    <SelectItem value="50m-100m">₦50M - ₦100M</SelectItem>
                    <SelectItem value="100m-200m">₦100M - ₦200M</SelectItem>
                    <SelectItem value="200m-500m">₦200M - ₦500M</SelectItem>
                    <SelectItem value="500m+">₦500M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by keyword" className="pl-10" />
              </div>
              <Button className="bg-gold"> Search Properties <Search className="ml-1 w-5 h-5" /> </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Properties Listing */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Available Properties</h2>
              <p className="text-muted-foreground">Showing 12 of 48 properties</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="size-asc">Size: Small to Large</SelectItem>
                  <SelectItem value="size-desc">Size: Large to Small</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Luxury Villa"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                <Badge className="absolute top-4 right-4 bg-green-600">For Sale</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gold">Luxury Waterfront Villa</h3>
                  <p className="font-bold text-gold">₦250M</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Banana Island, Ikoyi, Lagos</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-muted-foreground" />
                    <span>5 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span>6 Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquareFeet className="h-4 w-4 text-muted-foreground" />
                    <span>550 sqm</span>
                  </div>
                </div>
                <Separator className="mb-4" />
                <Button className="w-full" asChild>
                  <Link href="/properties/luxury-waterfront-villa">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property 2 */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                  alt="Modern Apartment"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-green-600">For Sale</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gold">Modern Apartment</h3>
                  <p className="font-bold text-gold">₦85M</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Victoria Island, Lagos</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-muted-foreground" />
                    <span>3 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span>3 Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquareFeet className="h-4 w-4 text-muted-foreground" />
                    <span>180 sqm</span>
                  </div>
                </div>
                <Separator className="mb-4" />
                <Button className="w-full" asChild>
                  <Link href="/properties/modern-apartment">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property 3 */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
                  alt="Riverside Villa"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-blue-600">For Rent</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gold">Riverside Villa</h3>
                  <p className="font-bold text-gold">₦15M/yr</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Ikoyi, Lagos</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-muted-foreground" />
                    <span>4 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span>4.5 Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquareFeet className="h-4 w-4 text-muted-foreground" />
                    <span>350 sqm</span>
                  </div>
                </div>
                <Separator className="mb-4" />
                <Button className="w-full" asChild>
                  <Link href="/properties/riverside-villa">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property 4 */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Family Townhouse"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-green-600">For Sale</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gold">Family Townhouse</h3>
                  <p className="font-bold text-gold">₦120M</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Lekki Phase 1, Lagos</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-muted-foreground" />
                    <span>4 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span>4 Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquareFeet className="h-4 w-4 text-muted-foreground" />
                    <span>320 sqm</span>
                  </div>
                </div>
                <Separator className="mb-4" />
                <Button className="w-full" asChild>
                  <Link href="/properties/family-townhouse">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property 5 */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Office Space"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-blue-600">For Rent</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gold">Premium Office Space</h3>
                  <p className="font-bold text-gold">₦8M/yr</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Victoria Island, Lagos</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>Commercial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquareFeet className="h-4 w-4 text-muted-foreground" />
                    <span>200 sqm</span>
                  </div>
                </div>
                <Separator className="mb-4" />
                <Button className="w-full" asChild>
                  <Link href="/properties/premium-office-space">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property 6 */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Eco-Friendly Home"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                <Badge className="absolute top-4 right-4 bg-green-600">For Sale</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gold">Eco-Friendly Home</h3>
                  <p className="font-bold text-gold">₦180M</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Abuja</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-muted-foreground" />
                    <span>4 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span>3 Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquareFeet className="h-4 w-4 text-muted-foreground" />
                    <span>300 sqm</span>
                  </div>
                </div>
                <Separator className="mb-4" />
                <Button className="w-full" asChild>
                  <Link href="/properties/eco-friendly-home">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* More properties would continue here */}
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
              <Button variant="outline" size="sm">4</Button>
              <Button variant="outline" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Featured Property */}
      <section className="py-16 bg-muted" id="featured">
        <MaxWidthContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Waterfront Villa"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="inline-block mb-4">
                <Badge className="bg-primary text-primary-foreground">Featured Property</Badge>
              </div>
              <h2 className="text-3xl font-bold mb-4">Luxury Waterfront Villa</h2>
              <p className="text-2xl font-bold text-primary mb-4">₦250,000,000</p>
              <p className="text-lg mb-6">
                Experience the epitome of luxury living in this stunning waterfront villa located in the prestigious Banana Island. With breathtaking views, premium finishes, and world-class amenities, this property represents the pinnacle of real estate in Lagos.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-5 w-5 text-primary" />
                  <span>5 Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <span>6 Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <SquareFeet className="h-5 w-5 text-primary" />
                  <span>550 sqm</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Banana Island, Ikoyi</span>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="/properties/luxury-waterfront-villa">View Property Details</Link>
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg mb-8">
              Contact our team of real estate experts who can help you find the perfect property that meets your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" className="bg-gold hover:bg-gold" asChild>
                <Link href="/properties/virtual-tours">Take a Virtual Tour</Link>
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}