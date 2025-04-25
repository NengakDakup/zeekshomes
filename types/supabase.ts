export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      // Add your table definitions here
      // Example:
      properties: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          price: number
          // ... other fields
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          price: number
          // ... other fields
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          price?: number
          // ... other fields
        }
      }
    }
  }
}
