'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import MaxWidthContent from '@/components/maxWidthContent'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface VirtualTour {
  id: string
  title: string
  location: string
  description: string
  image: string
  model_url: string
  created_at: string
}

const VirtualToursPage = () => {
  const [tours, setTours] = useState<VirtualTour[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTours()
  }, [])

  const fetchTours = async () => {
    const { data, error } = await supabase
      .from('virtual_tours')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching tours:', error)
      return
    }

    setTours(data || [])
    setLoading(false)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold border-b-4 border-b-primary">
            <h1 className="text-3xl font-bold mb-3 text-gold">Virtual Tours</h1>
            <p className="text-lg mb-8">
              Take a virtual walkthrough of our premium properties across Nigeria from the comfort of your device.
            </p>
          </div>
        </MaxWidthContent>
      </section>

      {/* Virtual Tours Grid */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold flex items-center gap-1">
                      <Video className="h-3 w-3" /> Virtual Tour
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gold">{tour.title}</h3>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{tour.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  <Button className="w-full" asChild>
                    <Link href={`/properties/virtual-tours/${tour.id}`}>
                      View Tour
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team to schedule an in-person viewing or request a virtual tour of any other property in our portfolio.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Sales Team</Link>
            </Button>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  )
}

export default VirtualToursPage