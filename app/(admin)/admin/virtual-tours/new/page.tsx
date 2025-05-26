'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export default function NewVirtualTour() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [modelFile, setModelFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const url = URL.createObjectURL(file)
      setImagePreview(url)
    }
  }

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setModelFile(file)
    }
  }

  const uploadFile = async (file: File, path: string) => {
    if (!file) {
      throw new Error('No file selected')
    }

    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${path}/${fileName}`

    try {
      // Add file type check
      if (path === 'models' && !['gltf', 'glb'].includes(fileExt?.toLowerCase() || '')) {
        throw new Error('Invalid model file type. Please use .gltf or .glb')
      }

      if (path === 'images' && !file.type.startsWith('image/')) {
        throw new Error('Invalid image file type')
      }

      const { error: uploadError, data } = await supabase.storage
        .from('virtual-tours')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('virtual-tours')
        .getPublicUrl(filePath)

      return publicUrl
    } catch (error) {
      console.error('Upload error:', error)
      throw new Error(error instanceof Error ? error.message : 'Upload failed')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!imageFile || !modelFile) {
        throw new Error('Please select both an image and a 3D model file')
      }

      // Upload files
      const [imageUrl, modelUrl] = await Promise.all([
        uploadFile(imageFile, 'images'),
        uploadFile(modelFile, 'models')
      ])

      // Create virtual tour with no user_id reference since policy handles access
      const { error } = await supabase
        .from('virtual_tours')
        .insert([{
          ...formData,
          image: imageUrl,
          model_url: modelUrl,
          created_at: new Date().toISOString()
        }])

      if (error) {
        console.error('Insert error:', error)
        throw error
      }

      toast({
        title: "Success",
        description: "Virtual tour created successfully"
      })
      router.push('/admin/virtual-tours')
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Could not create virtual tour",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Virtual Tour</h1>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
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
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
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

          <div>
            <Label htmlFor="image">Cover Image</Label>
            <div className="mt-2 space-y-4">
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {imagePreview && (
                <div className="relative aspect-video w-full max-w-xl">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="model">3D Model (GLTF)</Label>
            <Input
              id="model"
              type="file"
              accept=".gltf,.glb"
              onChange={handleModelChange}
              required
            />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Tour'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
