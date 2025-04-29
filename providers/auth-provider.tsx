'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter, usePathname } from 'next/navigation'
import LoadingScreen from '@/components/LoadingScreen'

const AuthContext = createContext<{
  user: any;
  loading: boolean;
}>({
  user: null,
  loading: true,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()

        if (session) {
          setUser(session.user)
          // If logged in and trying to access login page, redirect to dashboard
          if (pathname === '/admin/login') {
            router.push('/admin/dashboard')
          }
        } else {
          setUser(null)
          // Only redirect to login if trying to access admin pages
          if (pathname?.startsWith('/admin') && pathname !== '/admin/login') {
            router.push('/admin/login')
          }
        }
      } catch (error) {
        console.error('Auth error:', error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        setUser(session.user)
        if (pathname === '/admin/login') {
          router.push('/admin/dashboard')
        }
      } else {
        setUser(null)
        if (pathname?.startsWith('/admin') && pathname !== '/admin/login') {
          router.push('/admin/login')
        }
      }
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, pathname])

  // Show loading screen while checking auth status
  if (loading) {
    return <LoadingScreen />
  }

  // Only show loading for admin routes
  if (pathname?.startsWith('/admin') && !user && pathname !== '/admin/login') {
    return <LoadingScreen />
  }

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
