'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface CareerEditProps {
  params: {
    id: string
  }
}

export default function EditCareer({ params }: CareerEditProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    experience: '',
    description: '',
    responsibilities: '',
    requirements: '',
    benefits: '',
    active: true
  })

  useEffect(() => {
    fetchCareer()
  }, [params.id])

  const fetchCareer = async () => {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      toast({
        title: "Error",
        description: "Could not fetch career opportunity",
        variant: "destructive"
      })
      return
    }

    if (data) {
      setFormData({
        ...data,
        responsibilities: data.responsibilities.join('\n'),
        requirements: data.requirements.join('\n'),
        benefits: data.benefits.join('\n')
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('careers')
        .update({
          ...formData,
          responsibilities: formData.responsibilities.split('\n').filter(Boolean),
          requirements: formData.requirements.split('\n').filter(Boolean),
          benefits: formData.benefits.split('\n').filter(Boolean),
        })
        .eq('id', params.id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Career opportunity updated successfully"
      })
      router.push('/admin/careers')
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not update career opportunity",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Career</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Input
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                placeholder="e.g. Full-time, Part-time"
                required
              />
            </div>
            <div>
              <Label htmlFor="experience">Experience</Label>
              <Input
                id="experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="e.g. 3+ years"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="responsibilities">Responsibilities (one per line)</Label>
            <Textarea
              id="responsibilities"
              value={formData.responsibilities}
              onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="requirements">Requirements (one per line)</Label>
            <Textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="benefits">Benefits (one per line)</Label>
            <Textarea
              id="benefits"
              value={formData.benefits}
              onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="active"
              checked={formData.active}
              onCheckedChange={(checked) => setFormData({ ...formData, active: checked })}
            />
            <Label htmlFor="active">Active Listing</Label>
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Career'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
