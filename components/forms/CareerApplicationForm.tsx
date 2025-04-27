'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface CareerApplicationFormProps {
  jobTitle: string
  careerId: number
}

export default function CareerApplicationForm({ jobTitle, careerId }: CareerApplicationFormProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!formData.resume) {
        throw new Error('Please attach your resume')
      }

      // Validate file size (5MB max)
      if (formData.resume.size > 5 * 1024 * 1024) {
        throw new Error('File size must be less than 5MB')
      }

      // Validate file type
      const fileExt = formData.resume.name.split('.').pop()?.toLowerCase()
      if (!['pdf', 'doc', 'docx'].includes(fileExt || '')) {
        throw new Error('Invalid file type. Please upload PDF, DOC, or DOCX')
      }

      const timestamp = new Date().getTime()
      const fileName = `${timestamp}_${formData.resume.name}`
      const filePath = `resumes/${fileName}`

      // Upload with specific content type
      const { error: uploadError, data } = await supabase.storage
        .from('applications')
        .upload(filePath, formData.resume, {
          cacheControl: '3600',
          upsert: false,
          contentType: formData.resume.type
        })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        throw new Error('Failed to upload resume')
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('applications')
        .getPublicUrl(filePath)

      // Create application record
      const { error: insertError } = await supabase
        .from('job_applications')
        .insert([
          {
            career_id: careerId,
            job_title: jobTitle,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            cover_letter: formData.coverLetter,
            resume_url: publicUrl,
            status: 'pending'
          }
        ])

      if (insertError) throw insertError

      toast({
        title: "Success",
        description: "Your application has been submitted successfully.",
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null,
      })

    } catch (error: any) {
      console.error('Submission error:', error)
      toast({
        title: "Error",
        description: error.message || "Failed to submit application",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-6">Apply for {jobTitle}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone *</label>
            <Input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Cover Letter *</label>
            <Textarea
              rows={6}
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              className="resize-none"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Resume *</label>
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
              required
              disabled={loading}
            />
            <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
