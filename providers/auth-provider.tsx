'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Immediate auth check
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setUser(session.user)
      } else {
        setUser(null)
        router.push('/admin/login')
      }
      setLoading(false)
    }

    checkUser()

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user)
      } else {
        setUser(null)
        router.push('/admin/login')
      }
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router]) // Add router to dependency array

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
