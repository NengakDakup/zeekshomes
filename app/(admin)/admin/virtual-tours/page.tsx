'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export default function VirtualToursAdmin() {
  const { toast } = useToast()
  const [tours, setTours] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTours()
  }, [])

  const fetchTours = async () => {
    const { data, error } = await supabase
      .from('virtual_tours')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      toast({
        title: "Error",
        description: "Could not fetch tours",
        variant: "destructive"
      })
      return
    }

    setTours(data || [])
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this tour?')) return

    // Find the tour to get file paths
    const tour = tours.find(t => t.id === id)
    if (!tour) return

    try {
      // Delete files from storage
      const imagePath = tour.image.split('/').pop()
      const modelPath = tour.model_url.split('/').pop()

      await Promise.all([
        supabase.storage.from('virtual-tours').remove([`images/${imagePath}`]),
        supabase.storage.from('virtual-tours').remove([`models/${modelPath}`])
      ])

      // Delete tour record
      const { error } = await supabase
        .from('virtual_tours')
        .delete()
        .eq('id', id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Tour deleted successfully"
      })
      fetchTours()
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not delete tour",
        variant: "destructive"
      })
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Virtual Tours</h1>
        <Button asChild>
          <Link href="/admin/virtual-tours/new">
            <Plus className="mr-2 h-4 w-4" /> Add Tour
          </Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tours.map((tour) => (
              <TableRow key={tour.id}>
                <TableCell>
                  <div className="relative w-16 h-16">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </TableCell>
                <TableCell>{tour.title}</TableCell>
                <TableCell>{tour.location}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/virtual-tours/${tour.id}/edit`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(tour.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
