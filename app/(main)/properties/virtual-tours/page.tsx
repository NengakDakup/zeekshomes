import MaxWidthContent from '@/components/maxWidthContent'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BedDouble, Bath, MapPin, Square as SquareFeet, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const VirtualToursPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold border-b-4 border-b-primary">
            <h1 className="text-3xl font-bold mb-3 text-gold">Virtual Tours</h1>
            <p className="text-lg mb-8">
              Take a virtual walkthrough of our premium properties across Nigeria from the comfort of your device.
            </p>
          </div>
        </MaxWidthContent>
      </section>

      {/* Virtual Tours Grid */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt="Luxury Waterfront Villa"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary">Featured</Badge>
                  <Badge className="bg-gold flex items-center gap-1">
                    <Video className="h-3 w-3" /> Virtual Tour
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gold">Luxury Waterfront Villa</h3>
                  <p className="font-bold text-gold">₦250M</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Banana Island, Lagos</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-muted-foreground" />
                    <span>5 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span>6 Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquareFeet className="h-4 w-4 text-muted-foreground" />
                    <span>550 sqm</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/properties/virtual-tours/luxury-waterfront-villa">
                    Start Virtual Tour
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property 2 */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227"
                  alt="Beacon City Villa"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gold flex items-center gap-1">
                    <Video className="h-3 w-3" /> Virtual Tour
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gold">Beacon City Villa</h3>
                  <p className="font-bold text-gold">₦180M</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Lekki, Lagos</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-muted-foreground" />
                    <span>4 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span>4.5 Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquareFeet className="h-4 w-4 text-muted-foreground" />
                    <span>400 sqm</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/properties/virtual-tours/beacon-city-villa">
                    Start Virtual Tour
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property 3 */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227"
                  alt="Beacon City Villa"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gold flex items-center gap-1">
                    <Video className="h-3 w-3" /> Virtual Tour
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gold">Beacon City Villa</h3>
                  <p className="font-bold text-gold">₦180M</p>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Lekki, Lagos</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-muted-foreground" />
                    <span>4 Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span>4.5 Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquareFeet className="h-4 w-4 text-muted-foreground" />
                    <span>400 sqm</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/properties/virtual-tours/beacon-city-villa">
                    Start Virtual Tour
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Add more properties here with the same structure */}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team to schedule an in-person viewing or request a virtual tour of any other property in our portfolio.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Sales Team</Link>
            </Button>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  )
}

export default VirtualToursPage