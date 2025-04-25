'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FileText,
  Home,
  Building,
  MessageSquare,
  Users,
  Cuboid,
  Briefcase,
  Menu
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Blog Posts', href: '/admin/blog-posts', icon: FileText },
  { name: 'Properties', href: '/admin/properties', icon: Home },
  { name: 'Projects', href: '/admin/projects', icon: Building },
  { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { name: 'Subscribers', href: '/admin/subscribers', icon: Users },
  { name: '3D Tours', href: '/admin/tours', icon: Cuboid },
  { name: 'Careers', href: '/admin/careers', icon: Briefcase },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      <div className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r transition-transform duration-200 ease-in-out",
        !isOpen && '-translate-x-full md:translate-x-0'
      )}>
        <div className="flex h-16 items-center justify-center border-b">
          <span className="text-xl font-bold">Admin Panel</span>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
