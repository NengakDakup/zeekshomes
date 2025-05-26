'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface VirtualTourEditProps {
  params: {
    id: string
  }
}

export default function EditVirtualTour({ params }: VirtualTourEditProps) {
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
    image: '',
    model_url: ''
  })

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
      toast({
        title: "Error",
        description: "Could not fetch tour",
        variant: "destructive"
      })
      return
    }

    if (data) {
      setFormData(data)
      setImagePreview(data.image)
    }
  }

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
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${path}/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('virtual-tours')
      .upload(filePath, file)

    if (uploadError) throw uploadError

    const { data: { publicUrl } } = supabase.storage
      .from('virtual-tours')
      .getPublicUrl(filePath)

    return publicUrl
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let updates = { ...formData }

      if (imageFile) {
        updates.image = await uploadFile(imageFile, 'images')
      }

      if (modelFile) {
        updates.model_url = await uploadFile(modelFile, 'models')
      }

      const { error } = await supabase
        .from('virtual_tours')
        .update(updates)
        .eq('id', params.id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Virtual tour updated successfully"
      })
      router.push('/admin/virtual-tours')
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Could not update virtual tour",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Virtual Tour</h1>

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
            />
            {formData.model_url && !modelFile && (
              <p className="text-sm text-muted-foreground mt-2">
                Current model: {formData.model_url.split('/').pop()}
              </p>
            )}
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Tour'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
