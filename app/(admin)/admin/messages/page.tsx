'use client'

import { useEffect, useState } from 'react'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from '@/components/ui/badge'
import { Trash2, Eye } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface Message {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
  read: boolean
}

export default function MessagesAdmin() {
  const router = useRouter()
  const { toast } = useToast()
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      toast({
        title: "Error",
        description: "Could not fetch messages",
        variant: "destructive"
      })
      return
    }

    setMessages(data || [])
    setLoading(false)
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      const { error } = await supabase
        .from('messages')
        .delete()
        .eq('id', id)

      if (error) {
        toast({
          title: "Error",
          description: "Could not delete message",
          variant: "destructive"
        })
        return
      }

      toast({
        title: "Success",
        description: "Message deleted successfully"
      })
      fetchMessages()
    }
  }

  const viewMessage = async (message: Message) => {
    // First update local state for immediate feedback
    setSelectedMessage(message)

    if (!message.read) {
      try {
        // Update Supabase
        const { error } = await supabase
          .from('messages')
          .update({ read: true })
          .eq('id', message.id)

        if (error) throw error

        // Update local state only after successful database update
        setMessages(prevMessages =>
          prevMessages.map(m =>
            m.id === message.id ? { ...m, read: true } : m
          )
        )

      } catch (error) {
        toast({
          title: "Error",
          description: "Could not update message status",
          variant: "destructive"
        })
        // If there's an error, close the modal and refetch messages
        setSelectedMessage(null)
        fetchMessages()
      }
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Messages</h1>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id} className={!message.read ? "bg-muted/50" : undefined}>
                <TableCell>
                  {new Date(message.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>{message.name}</TableCell>
                <TableCell>{message.email}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>
                  <Badge variant={message.read ? "secondary" : "default"}>
                    {message.read ? "Read" : "Unread"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => viewMessage(message)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(message.id)}
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

      {/* Message Dialog */}
      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4">Message Details</DialogTitle>
            <DialogDescription>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">From</p>
                  <p>{selectedMessage?.name} ({selectedMessage?.email})</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Subject</p>
                  <p>{selectedMessage?.subject}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Message</p>
                  <p className="whitespace-pre-line">{selectedMessage?.message}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Received</p>
                  <p>{selectedMessage?.created_at && new Date(selectedMessage.created_at).toLocaleString()}</p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
