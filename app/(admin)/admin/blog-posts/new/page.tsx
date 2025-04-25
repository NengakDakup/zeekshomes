'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Editor } from '@tinymce/tinymce-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export default function NewBlogPost() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    image: '',
    category: '',
    author: '',
  })
  const editorRef = useRef<any>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      // Create preview URL
      const url = URL.createObjectURL(file)
      setImagePreview(url)
    }
  }

  const uploadImage = async (file: File) => {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `blog-posts/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file)

    if (uploadError) {
      throw uploadError
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath)

    return publicUrl
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!imageFile) {
        throw new Error('Please select an image')
      }

      // Upload image first
      const imageUrl = await uploadImage(imageFile)

      // Create blog post with image URL
      const { error } = await supabase
        .from('posts')
        .insert([
          {
            ...formData,
            image: imageUrl,
            content: editorRef.current?.getContent() || '',
            date: new Date().toISOString(),
          }
        ])

      if (error) throw error

      toast({
        title: "Success",
        description: "Blog post created successfully"
      })
      router.push('/admin/blog-posts')
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Could not create blog post",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    'Real Estate',
    'Investment',
    'Home Improvement',
    'Market Updates',
    'Lifestyle'
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>

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
            <Label htmlFor="excerpt">Excerpt</Label>
            <Input
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
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
            <Label>Category</Label>
            <Select
              onValueChange={(value) => setFormData({ ...formData, category: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              required
            />
          </div>

          <div>
            <Label>Content</Label>
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
              onInit={(evt: any, editor: any) => editorRef.current = editor}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ] as string[],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
              initialValue="Start writing your blog post here..."
            />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Post'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
