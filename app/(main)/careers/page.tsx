'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, MapPin, Building, Clock } from 'lucide-react'
import MaxWidthContent from '@/components/maxWidthContent'
import { supabase } from '@/lib/supabase'

interface Career {
  id: number
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  active: boolean
}

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCareers()
  }, [])

  const fetchCareers = async () => {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false })

    if (!error) {
      setCareers(data || [])
    }
    setLoading(false)
  }

  return (
    <div>
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <h1 className="text-3xl font-bold mb-3">Career Opportunities</h1>
            <p className="text-lg">
              Join our team of professionals dedicated to transforming the real estate landscape.
            </p>
          </div>
        </MaxWidthContent>
      </section>

      <section className="py-16">
        <MaxWidthContent>
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="w-full animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-6 bg-muted rounded w-1/4 mb-4" />
                    <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : careers.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">No Open Positions</h2>
              <p className="text-muted-foreground">
                There are currently no open positions. Please check back later.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {careers.map((career, index) => (
                <motion.div
                  key={career.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-xl font-bold mb-2">{career.title}</h2>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              <span>{career.department}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{career.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{career.type}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{career.experience}</span>
                            </div>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={`/careers/${career.id}`}>View Position</Link>
                        </Button>
                      </div>
                      <p className="text-muted-foreground line-clamp-2">{career.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </MaxWidthContent>
      </section>
    </div>
  )
}
