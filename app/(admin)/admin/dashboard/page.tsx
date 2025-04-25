'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import {
  FileText,
  Home,
  Building,
  MessageSquare,
  Users
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    posts: 0,
    properties: 0,
    projects: 0,
    messages: 0,
    subscribers: 0
  })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    // Fetch counts from Supabase
    const [
      { count: postsCount },
      { count: propertiesCount },
      { count: projectsCount },
      { count: messagesCount },
      { count: subscribersCount }
    ] = await Promise.all([
      supabase.from('posts').select('*', { count: 'exact' }),
      supabase.from('properties').select('*', { count: 'exact' }),
      supabase.from('projects').select('*', { count: 'exact' }),
      supabase.from('messages').select('*', { count: 'exact' }),
      supabase.from('subscribers').select('*', { count: 'exact' })
    ])

    setStats({
      posts: postsCount || 0,
      properties: propertiesCount || 0,
      projects: projectsCount || 0,
      messages: messagesCount || 0,
      subscribers: subscribersCount || 0
    })
  }

  const statCards = [
    { title: 'Blog Posts', value: stats.posts, icon: FileText },
    { title: 'Properties', value: stats.properties, icon: Home },
    { title: 'Projects', value: stats.projects, icon: Building },
    { title: 'Messages', value: stats.messages, icon: MessageSquare },
    { title: 'Subscribers', value: stats.subscribers, icon: Users }
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <Icon className="h-8 w-8 text-gray-400" />
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
