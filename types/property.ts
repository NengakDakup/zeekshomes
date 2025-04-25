export interface Property {
  id: number
  title: string
  description: string
  price: number
  location: string
  type: string
  status: 'For Sale' | 'For Rent'
  bedrooms?: number
  bathrooms?: number
  size: number
  features: string[]
  images: string[]
  isFeatured: boolean
  createdAt: string
  updatedAt: string
}
