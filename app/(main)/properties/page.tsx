'use client'

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
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function PropertiesPage() {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const itemsPerPage = 6
  const [featuredProperty, setFeaturedProperty] = useState<any>(null)

  const [filters, setFilters] = useState({
    location: undefined as string | undefined,
    type: undefined as string | undefined,
    bedrooms: undefined as string | undefined,
    priceRange: undefined as string | undefined,
    search: '',
    sortBy: 'newest'
  })

  const clearFilters = () => {
    setFilters({
      location: undefined,
      type: undefined,
      bedrooms: undefined,
      priceRange: undefined,
      search: '',
      sortBy: 'newest'
    })
    setCurrentPage(1)
  }

  useEffect(() => {
    fetchProperties()
    fetchFeaturedProperty()
    // Reset to first page when filters change
    setCurrentPage(1)
  }, [filters, currentPage])

  const parsePrice = (range: string) => {
    const ranges: { [key: string]: [number, number] } = {
      '0-50m': [0, 50000000],
      '50m-100m': [50000000, 100000000],
      '100m-200m': [100000000, 200000000],
      '200m-500m': [200000000, 500000000],
      '500m+': [500000000, Number.MAX_SAFE_INTEGER]
    }
    return ranges[range]
  }

  const fetchProperties = async () => {
    try {
      let query = supabase
        .from('properties')
        .select('*', { count: 'exact' })

      // Apply filters
      if (filters.location && filters.location !== 'all') {
        query = query.ilike('location', `%${filters.location}%`)
      }
      if (filters.type && filters.type !== 'all') {
        query = query.eq('type', filters.type)
      }
      if (filters.bedrooms && filters.bedrooms !== 'any') {
        const minBedrooms = parseInt(filters.bedrooms)
        query = query.gte('bedrooms', minBedrooms)
      }
      if (filters.priceRange && filters.priceRange !== 'all') {
        const [min, max] = parsePrice(filters.priceRange)
        query = query.gte('price', min).lte('price', max)
      }
      if (filters.search) {
        query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%,location.ilike.%${filters.search}%`)
      }

      // Apply sorting
      switch (filters.sortBy) {
        case 'price-asc':
          query = query.order('price', { ascending: true })
          break
        case 'price-desc':
          query = query.order('price', { ascending: false })
          break
        case 'size-asc':
          query = query.order('size', { ascending: true })
          break
        case 'size-desc':
          query = query.order('size', { ascending: false })
          break
        default:
          query = query.order('created_at', { ascending: false })
      }

      // Apply pagination
      const from = (currentPage - 1) * itemsPerPage
      const to = from + itemsPerPage - 1
      query = query.range(from, to)

      const { data: properties, count, error } = await query
      if (error) throw error

      setProperties(properties || [])
      setTotalPages(Math.ceil((count || 0) / itemsPerPage))
      setLoading(false)
    } catch (error) {
      console.error('Error fetching properties:', error)
    }
  }

  const fetchFeaturedProperty = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('is_featured', true)
        .single()

      if (error) throw error
      setFeaturedProperty(data)
    } catch (error) {
      console.error('Error fetching featured property:', error)
    }
  }

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
              <Button
                variant="destructive"
                className="flex items-center gap-2"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <Select
                  value={filters.location}
                  onValueChange={(value) => setFilters(f => ({ ...f, location: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                    <SelectItem value="ibadan">Ibadan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select
                  value={filters.type}
                  onValueChange={(value) => setFilters(f => ({ ...f, type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="House">House</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Land">Land</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select
                  value={filters.bedrooms}
                  onValueChange={(value) => setFilters(f => ({ ...f, bedrooms: value }))}
                >
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
                <Select
                  value={filters.priceRange}
                  onValueChange={(value) => setFilters(f => ({ ...f, priceRange: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
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
                <Input
                  placeholder="Search by keyword"
                  className="pl-10"
                  value={filters.search}
                  onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
                />
              </div>
              <Button
                className="bg-gold"
                onClick={() => {
                  setCurrentPage(1)
                  fetchProperties()
                }}
              >
                Search Properties <Search className="ml-1 w-5 h-5" />
              </Button>
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
              <p className="text-muted-foreground">
                Showing {properties.length} of {totalPages * itemsPerPage} properties
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Select
                value={filters.sortBy}
                onValueChange={(value) => setFilters(f => ({ ...f, sortBy: value }))}
              >
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
            {loading ? (
              // Loading skeletons
              Array(6).fill(0).map((_, i) => (
                <Card key={i} className="overflow-hidden animate-pulse">
                  <div className="h-64 bg-muted" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-4 bg-muted rounded w-full" />
                  </div>
                </Card>
              ))
            ) : (
              properties.map((property) => (
                <Card key={property.id} className="overflow-hidden group">
                  <div className="relative h-64">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    {property.is_featured && (
                      <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                    )}
                    <Badge className="absolute top-4 right-4 bg-green-600">
                      {property.status}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gold">{property.title}</h3>
                      <p className="font-bold text-gold">
                        ₦{property.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                      {property.bedrooms && (
                        <div className="flex items-center gap-1">
                          <BedDouble className="h-4 w-4 text-muted-foreground" />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                      )}
                      {property.bathrooms && (
                        <div className="flex items-center gap-1">
                          <Bath className="h-4 w-4 text-muted-foreground" />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <SquareFeet className="h-4 w-4 text-muted-foreground" />
                        <span>{property.size} sqm</span>
                      </div>
                    </div>
                    <Separator className="mb-4" />
                    <Button className="w-full" asChild>
                      <Link href={`/properties/${property.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant="outline"
                  size="sm"
                  className={currentPage === i + 1 ? 'bg-primary text-primary-foreground' : ''}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Featured Property */}
      <section className="py-16 bg-muted" id="featured">
        <MaxWidthContent>
          {featuredProperty ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={featuredProperty.images[0]}
                  alt={featuredProperty.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <div className="inline-block mb-4">
                  <Badge className="bg-primary text-primary-foreground">Featured Property</Badge>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredProperty.title}</h2>
                <p className="text-2xl font-bold text-primary mb-4">
                  ₦{featuredProperty.price.toLocaleString()}
                </p>
                <p className="text-lg mb-6">{featuredProperty.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {featuredProperty.bedrooms && (
                    <div className="flex items-center gap-2">
                      <BedDouble className="h-5 w-5 text-primary" />
                      <span>{featuredProperty.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {featuredProperty.bathrooms && (
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span>{featuredProperty.bathrooms} Bathrooms</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <SquareFeet className="h-5 w-5 text-primary" />
                    <span>{featuredProperty.size} sqm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{featuredProperty.location}</span>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <Link href={`/properties/${featuredProperty.id}`}>View Property Details</Link>
                </Button>
              </div>
            </div>
          ) : null}
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