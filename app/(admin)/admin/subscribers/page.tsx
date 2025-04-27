'use client'

import { useEffect, useState } from 'react'
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
import { Trash2, Mail } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface Subscriber {
  id: number
  email: string
  created_at: string
  subscribed_from: string
  active: boolean
}

export default function SubscribersAdmin() {
  const { toast } = useToast()
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const fetchSubscribers = async () => {
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      toast({
        title: "Error",
        description: "Could not fetch subscribers",
        variant: "destructive"
      })
      return
    }

    setSubscribers(data || [])
    setLoading(false)
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this subscriber?')) {
      const { error } = await supabase
        .from('subscribers')
        .delete()
        .eq('id', id)

      if (error) {
        toast({
          title: "Error",
          description: "Could not delete subscriber",
          variant: "destructive"
        })
        return
      }

      toast({
        title: "Success",
        description: "Subscriber deleted successfully"
      })
      fetchSubscribers()
    }
  }

  const toggleActive = async (id: number, currentActive: boolean) => {
    const { error } = await supabase
      .from('subscribers')
      .update({ active: !currentActive })
      .eq('id', id)

    if (error) {
      toast({
        title: "Error",
        description: "Could not update subscriber status",
        variant: "destructive"
      })
      return
    }

    fetchSubscribers()
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Subscribers</h1>
        <div className="flex items-center gap-2">
          <Badge>{subscribers.length} Total Subscribers</Badge>
          <Badge variant="secondary">
            {subscribers.filter(s => s.active).length} Active
          </Badge>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Subscribed From</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscribers.map((subscriber) => (
              <TableRow key={subscriber.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    {subscriber.email}
                  </div>
                </TableCell>
                <TableCell>{subscriber.subscribed_from}</TableCell>
                <TableCell>
                  {new Date(subscriber.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge
                    className="cursor-pointer"
                    variant={subscriber.active ? "default" : "secondary"}
                    onClick={() => toggleActive(subscriber.id, subscriber.active)}
                  >
                    {subscriber.active ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(subscriber.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
