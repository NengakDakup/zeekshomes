'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Plus, Pencil, Trash } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  author: string
}

export default function BlogPostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const { toast } = useToast()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('date', { ascending: false })

    if (error) {
      toast({
        title: "Error",
        description: "Could not fetch blog posts",
        variant: "destructive"
      })
      return
    }

    setPosts(data)
  }

  const deletePost = async (id: number) => {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

    if (error) {
      toast({
        title: "Error",
        description: "Could not delete blog post",
        variant: "destructive"
      })
      return
    }

    toast({
      title: "Success",
      description: "Blog post deleted successfully"
    })
    fetchPosts()
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Button asChild>
          <Link href="/admin/blog-posts/new">
            <Plus className="mr-2 h-4 w-4" /> New Post
          </Link>
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={`/admin/blog-posts/${post.id}/edit`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deletePost(post.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
