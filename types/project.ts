export interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  completion_date?: string;
  features: string[];
  images: string[];
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}
