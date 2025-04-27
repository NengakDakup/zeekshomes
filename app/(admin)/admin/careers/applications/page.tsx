'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Eye, Download } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface Application {
  id: number
  career_id: number
  job_title: string
  name: string
  email: string
  phone: string
  cover_letter: string
  resume_url: string
  status: string
  created_at: string
}

export default function ApplicationsAdmin() {
  const { toast } = useToast()
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from('job_applications')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      toast({
        title: "Error",
        description: "Could not fetch applications",
        variant: "destructive"
      })
      return
    }

    setApplications(data || [])
    setLoading(false)
  }

  const updateStatus = async (id: number, status: string) => {
    const { error } = await supabase
      .from('job_applications')
      .update({ status })
      .eq('id', id)

    if (error) {
      toast({
        title: "Error",
        description: "Could not update application status",
        variant: "destructive"
      })
      return
    }

    fetchApplications()
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Applications</h1>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  {new Date(application.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>{application.name}</TableCell>
                <TableCell>{application.job_title}</TableCell>
                <TableCell>
                  <Select
                    value={application.status}
                    onValueChange={(value) => updateStatus(application.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">
                        <Badge variant="secondary">Pending</Badge>
                      </SelectItem>
                      <SelectItem value="reviewing">
                        <Badge variant="default">Reviewing</Badge>
                      </SelectItem>
                      <SelectItem value="shortlisted">
                        <Badge className="bg-blue-500">Shortlisted</Badge>
                      </SelectItem>
                      <SelectItem value="rejected">
                        <Badge variant="destructive">Rejected</Badge>
                      </SelectItem>
                      <SelectItem value="hired">
                        <Badge className="bg-green-500">Hired</Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedApplication(application)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={application.resume_url} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <DialogDescription>
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-medium mb-1">Position</h3>
                  <p>{selectedApplication?.job_title}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Applicant</h3>
                  <p>{selectedApplication?.name}</p>
                  <p>{selectedApplication?.email}</p>
                  <p>{selectedApplication?.phone}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Cover Letter</h3>
                  <p className="whitespace-pre-line">{selectedApplication?.cover_letter}</p>
                </div>
                <div>
                  <Button variant="outline" asChild>
                    <a href={selectedApplication?.resume_url} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" /> Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
