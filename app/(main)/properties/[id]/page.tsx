'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import MaxWidthContent from '@/components/maxWidthContent'
import { supabase } from '@/lib/supabase'
import { MapPin, BedDouble, Bath, Square, ArrowLeft, ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react'

interface PropertyDetailProps {
  params: {
    id: string
  }
}

export default function PropertyDetail({ params }: PropertyDetailProps) {
  const [property, setProperty] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [currentImage, setCurrentImage] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    fetchProperty()
  }, [params.id])

  const fetchProperty = async () => {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', params.id)
      .single()

    if (!error && data) {
      setProperty(data)
    }
    setLoading(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === (property?.images.length || 0) - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? (property?.images.length || 0) - 1 : prev - 1
    )
  }

  const openModal = (image: string) => {
    setSelectedImage(image)
    setShowModal(true)
  }

  if (loading) {
    return (
      <div>
        <div className="relative h-[60vh] bg-muted animate-pulse" />
        <MaxWidthContent>
          <div className="py-12">
            <div className="mb-12 space-y-4">
              <div className="h-4 w-24 bg-muted rounded animate-pulse" />
              <div className="h-8 w-2/3 bg-muted rounded animate-pulse" />
              <div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <div className="space-y-6">
                    <div className="h-6 w-1/4 bg-muted rounded animate-pulse" />
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 bg-muted rounded animate-pulse" />
                      ))}
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-4 bg-muted rounded animate-pulse" />
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
              <Card className="p-6 h-[200px] animate-pulse" />
            </div>
          </div>
        </MaxWidthContent>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section with Image Slideshow */}
      <div className="relative h-[60vh]">
        <Image
          src={property.images[currentImage]}
          alt={property.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Slideshow Navigation */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/80 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/80 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full">
          {currentImage + 1} / {property.images.length}
        </div>
      </div>

      <MaxWidthContent>
        <div className="py-12">
          {/* Property Title Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Badge>{property.status}</Badge>
              <Badge variant="outline">{property.type}</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <MapPin className="h-5 w-5 shrink-0" />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Property Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <BedDouble className="h-5 w-5 shrink-0 text-primary" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 shrink-0 text-primary" />
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5 shrink-0 text-primary" />
                    <span>{property.size} sqm</span>
                  </div>
                </div>
                <p className="text-muted-foreground whitespace-pre-line mb-6">
                  {property.description}
                </p>
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {property.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className="relative aspect-video cursor-pointer"
                    onClick={() => openModal(image)}
                  >
                    <Image
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      fill
                      className={`object-cover rounded-lg transition ${currentImage === index ? 'ring-2 ring-primary' : ''
                        }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-6 sticky top-24">
                <div className="text-3xl font-bold text-primary mb-6">
                  ₦{property.price.toLocaleString()}
                </div>
                <Button className="w-full mb-4">Contact Agent</Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/properties">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Properties
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {showModal && selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 p-4 md:p-8 flex items-center justify-center">
            <div className="relative w-full max-w-6xl max-h-screen">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-2 -right-2 bg-white hover:bg-white/90 text-black z-[100]"
                onClick={() => setShowModal(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="relative w-full">
                <Image
                  src={selectedImage}
                  alt="Full size view"
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </MaxWidthContent>
    </div>
  )
}
