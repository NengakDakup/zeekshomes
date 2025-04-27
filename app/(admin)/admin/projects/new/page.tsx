'use client'

import { useState } from 'react'
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

export default function NewProject() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<File[]>([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    status: 'Upcoming',
    completion_date: '',
    features: '',
    is_featured: false,
    project_type: '',
    property_types: '',
    size_range: '',
    price_range: '',
    total_units: '',
    total_area: '',
    development_period: '',
    amenities: '',
    key_features: '',
    distance_features: '', // For location/distance information
    payment_plans: [
      {
        title: '',
        discount: '',
        initial_payment: '',
        highlights: ''
      }
    ]
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setImages(files)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const imageUrls = await Promise.all(
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

      const { error } = await supabase
        .from('projects')
        .insert([
          {
            ...formData,
            features: formData.features.split(',').map(f => f.trim()),
            images: imageUrls,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      toast({
        title: "Success",
        description: "Project created successfully"
      })
      router.push('/admin/projects')
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Could not create project",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
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
                <Label htmlFor="project_type">Project Type</Label>
                <Input
                  id="project_type"
                  value={formData.project_type}
                  onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                  placeholder="e.g. Residential Estate"
                  required
                />
              </div>
              <div>
                <Label htmlFor="property_types">Property Types</Label>
                <Input
                  id="property_types"
                  value={formData.property_types}
                  onChange={(e) => setFormData({ ...formData, property_types: e.target.value })}
                  placeholder="e.g. Villas, Townhouses"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="size_range">Size Range (sqm)</Label>
                <Input
                  id="size_range"
                  value={formData.size_range}
                  onChange={(e) => setFormData({ ...formData, size_range: e.target.value })}
                  placeholder="e.g. 250-600"
                />
              </div>
              <div>
                <Label htmlFor="price_range">Price Range (₦)</Label>
                <Input
                  id="price_range"
                  value={formData.price_range}
                  onChange={(e) => setFormData({ ...formData, price_range: e.target.value })}
                  placeholder="e.g. 120M - 350M"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="total_units">Total Units</Label>
                <Input
                  id="total_units"
                  type="number"
                  value={formData.total_units}
                  onChange={(e) => setFormData({ ...formData, total_units: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="total_area">Total Area</Label>
                <Input
                  id="total_area"
                  value={formData.total_area}
                  onChange={(e) => setFormData({ ...formData, total_area: e.target.value })}
                  placeholder="e.g. 50 Acres"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="development_period">Development Period</Label>
                <Input
                  id="development_period"
                  value={formData.development_period}
                  onChange={(e) => setFormData({ ...formData, development_period: e.target.value })}
                  placeholder="e.g. 2023-2026"
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

          {/* Location Features */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Location Features</h2>
            <div>
              <Label htmlFor="distance_features">Distance Features (comma-separated)</Label>
              <Textarea
                id="distance_features"
                value={formData.distance_features}
                onChange={(e) => setFormData({ ...formData, distance_features: e.target.value })}
                placeholder="e.g. 15 mins to Airport, 5 mins to Shopping Mall"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="completion_date">Completion Date</Label>
            <Input
              id="completion_date"
              type="date"
              value={formData.completion_date}
              onChange={(e) => setFormData({ ...formData, completion_date: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="features">Features (comma-separated)</Label>
            <Textarea
              id="features"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              placeholder="e.g. Swimming Pool, Garden, Playground"
            />
          </div>

          <div>
            <Label htmlFor="images">Images</Label>
            <Input
              id="images"
              type="file"
              onChange={handleImageChange}
              multiple
              accept="image/*"
              required
            />
            {images.length > 0 && (
              <div className="mt-2 flex gap-2 flex-wrap">
                {Array.from(images).map((file, index) => (
                  <div key={index} className="relative w-24 h-24">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            )}
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
            {loading ? 'Creating...' : 'Create Project'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
