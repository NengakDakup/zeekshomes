'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import MaxWidthContent from '@/components/maxWidthContent'
import { Button } from '@/components/ui/button'
import { MapPin, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
// import ModelViewer from '@/components/ModelViewer'

// Dynamically import the Model Viewer component to avoid SSR issues
const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false })

interface VirtualTourViewProps {
  params: {
    id: string
  }
}

export default function VirtualTourView({ params }: VirtualTourViewProps) {
  const [tour, setTour] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTour()
  }, [params.id])

  const fetchTour = async () => {
    const { data, error } = await supabase
      .from('virtual_tours')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      console.error('Error fetching tour:', error)
      return
    }

    setTour(data)
    setLoading(false)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!tour) {
    return <div>Tour not found</div>
  }

  return (
    <div>
      <div className="bg-primary py-20">
        <MaxWidthContent>
          <Button variant="ghost" className="text-white mb-4" asChild>
            <Link href="/properties/virtual-tours">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tours
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white mb-2">{tour.title}</h1>
          <div className="flex items-center text-white/80">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{tour.location}</span>
          </div>
        </MaxWidthContent>
      </div>

      <MaxWidthContent>
        <div className="py-8">
          <div className="aspect-[16/9] w-full bg-muted rounded-lg overflow-hidden mb-8">
            <ModelViewer modelUrl={tour.model_url} />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">About this Property</h2>
            <p className="text-muted-foreground">{tour.description}</p>
          </div>

          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Viewing</Link>
            </Button>
          </div>
        </div>
      </MaxWidthContent>
    </div>
  )
}
