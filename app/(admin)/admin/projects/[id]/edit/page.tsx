'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface ProjectEditProps {
  params: {
    id: string
  }
}

export default function EditProject({ params }: ProjectEditProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<File[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    status: '',
    project_type: '',
    property_types: '',
    size_range: '',
    price_range: '',
    total_units: '',
    total_area: '',
    development_period: '',
    completion_date: '',
    features: '',
    amenities: '',
    key_features: '',
    distance_features: '',
    location_highlights: {
      connectivity: '',
      nearby: '',
      neighborhood: ''
    },
    payment_plans: [
      {
        title: '',
        discount: '',
        initial_payment: '',
        highlights: ''
      }
    ],
    is_featured: false
  })

  useEffect(() => {
    fetchProject()
  }, [params.id])

  const fetchProject = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      toast({
        title: "Error",
        description: "Could not fetch project",
        variant: "destructive"
      })
      return
    }

    if (data) {
      setFormData({
        ...data,
        features: Array.isArray(data.features) ? data.features.join(', ') : data.features,
        amenities: Array.isArray(data.amenities) ? data.amenities.join(', ') : data.amenities,
        key_features: Array.isArray(data.key_features) ? data.key_features.join(', ') : data.key_features,
        distance_features: Array.isArray(data.distance_features) ? data.distance_features.join(', ') : data.distance_features,
      })
      setImageUrls(data.images || [])
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setImages(files)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let updatedImageUrls = [...imageUrls]

      if (images.length > 0) {
        const newImageUrls = await Promise.all(
          images.map(async (file) => {
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `projects/${fileName}`

            const { error: uploadError } = await supabase.storage
              .from('images')
              .upload(filePath, file)

            if (uploadError) throw uploadError

            const { data: { publicUrl } } = supabase.storage
              .from('images')
              .getPublicUrl(filePath)

            return publicUrl
          })
        )
        updatedImageUrls = [...updatedImageUrls, ...newImageUrls]
      }

      const { error } = await supabase
        .from('projects')
        .update({
          ...formData,
          features: formData.features.split(',').map(f => f.trim()),
          amenities: formData.amenities.split(',').map(f => f.trim()),
          key_features: formData.key_features.split(',').map(f => f.trim()),
          distance_features: formData.distance_features.split(',').map(f => f.trim()),
          images: updatedImageUrls,
          updated_at: new Date().toISOString()
        })
        .eq('id', params.id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Project updated successfully"
      })
      router.push('/admin/projects')
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Could not update project",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Project</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Basic Information</h2>

            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                <Label>Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Ongoing">Ongoing</SelectItem>
                    <SelectItem value="Upcoming">Upcoming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Details Fields */}
            {/* ...similar to the new project form fields... */}
          </div>

          {/* Features & Amenities */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Features & Amenities</h2>

            <div>
              <Label htmlFor="key_features">Key Features (comma-separated)</Label>
              <Textarea
                id="key_features"
                value={formData.key_features}
                onChange={(e) => setFormData({ ...formData, key_features: e.target.value })}
                placeholder="e.g. Smart Homes, Gated Community, Energy Efficient"
              />
            </div>

            <div>
              <Label htmlFor="amenities">Amenities (comma-separated)</Label>
              <Textarea
                id="amenities"
                value={formData.amenities}
                onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                placeholder="e.g. Swimming Pool, Gym, Tennis Court"
              />
            </div>
          </div>

          {/* Images */}
          <div>
            <Label htmlFor="images">Images</Label>
            <Input
              id="images"
              type="file"
              onChange={handleImageChange}
              multiple
              accept="image/*"
            />
            <div className="mt-2 flex gap-2 flex-wrap">
              {imageUrls.map((url, index) => (
                <div key={index} className="relative w-24 h-24">
                  <Image
                    src={url}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="featured"
              checked={formData.is_featured}
              onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
            />
            <Label htmlFor="featured">Featured Project</Label>
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Project'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
