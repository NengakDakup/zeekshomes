'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Building, MapPin, Briefcase, Clock, CheckCircle } from 'lucide-react'
import MaxWidthContent from '@/components/maxWidthContent'
import CareerApplicationForm from '@/components/forms/CareerApplicationForm'
import { supabase } from '@/lib/supabase'

interface Career {
  id: number
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  active: boolean
}

interface CareerDetailProps {
  params: {
    id: string
  }
}

export default function CareerDetail({ params }: CareerDetailProps) {
  const [career, setCareer] = useState<Career | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCareer()
  }, [params.id])

  const fetchCareer = async () => {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error || !data) {
      notFound()
      return
    }

    setCareer(data)
    setLoading(false)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!career) {
    return notFound()
  }

  return (
    <div>
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold"
          >
            <h1 className="text-3xl font-bold mb-4">{career.title}</h1>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                <span>{career.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{career.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span>{career.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{career.experience}</span>
              </div>
            </div>
          </motion.div>
        </MaxWidthContent>
      </section>

      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Job Overview */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Department</p>
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-primary" />
                          <span className="font-medium">{career.department}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Location</p>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium">{career.location}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Type</p>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <span className="font-medium">{career.type}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Experience</p>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-medium">{career.experience}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Description */}
                <div className="prose max-w-none mb-8">
                  <h2 className="text-xl font-semibold mb-4">About the Role</h2>
                  <p className="text-muted-foreground">{career.description}</p>
                </div>

                {/* Key Responsibilities */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
                    <ul className="space-y-3">
                      {career.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                    <ul className="space-y-3">
                      {career.requirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                    <ul className="space-y-3">
                      {career.benefits.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <CareerApplicationForm
                  jobTitle={career.title}
                  careerId={career.id}
                />
              </motion.div>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  )
}
