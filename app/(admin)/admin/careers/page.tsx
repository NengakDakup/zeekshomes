'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface Career {
  id: number
  title: string
  department: string
  location: string
  type: string
  experience: string
  active: boolean
  created_at: string
}

export default function CareersAdmin() {
  const router = useRouter()
  const { toast } = useToast()
  const [careers, setCareers] = useState<Career[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCareers()
  }, [])

  const fetchCareers = async () => {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      toast({
        title: "Error",
        description: "Could not fetch careers",
        variant: "destructive"
      })
      return
    }

    setCareers(data || [])
    setLoading(false)
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this career opportunity?')) {
      const { error } = await supabase
        .from('careers')
        .delete()
        .eq('id', id)

      if (error) {
        toast({
          title: "Error",
          description: "Could not delete career opportunity",
          variant: "destructive"
        })
        return
      }

      toast({
        title: "Success",
        description: "Career opportunity deleted successfully"
      })
      fetchCareers()
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Careers</h1>
        <Button asChild>
          <Link href="/admin/careers/new">
            <Plus className="mr-2 h-4 w-4" /> Add Career
          </Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {careers.map((career) => (
              <TableRow key={career.id}>
                <TableCell className="font-medium">{career.title}</TableCell>
                <TableCell>{career.department}</TableCell>
                <TableCell>{career.location}</TableCell>
                <TableCell>{career.type}</TableCell>
                <TableCell>
                  <Badge variant={career.active ? "default" : "secondary"}>
                    {career.active ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push(`/admin/careers/${career.id}/edit`)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(career.id)}
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
