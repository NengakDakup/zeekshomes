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
  {
    name: 'Careers',
    icon: Briefcase,
    submenu: [
      { name: 'Job Listings', href: '/admin/careers' },
      { name: 'Applications', href: '/admin/careers/applications' }
    ]
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

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
            const isActive = !item.submenu && pathname === item.href
            const Icon = item.icon
            const hasSubmenu = !!item.submenu

            return (
              <div key={item.name}>
                {hasSubmenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={cn(
                        "flex items-center justify-between w-full rounded-lg px-3 py-2 text-sm font-medium",
                        openSubmenu === item.name
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      <div className="flex items-center gap-x-3">
                        <Icon className="h-5 w-5" />
                        {item.name}
                      </div>
                      <svg
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openSubmenu === item.name && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openSubmenu === item.name && (
                      <div className="mt-2 ml-6 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm font-medium",
                              pathname === subItem.href
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
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
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </>
  )
}
