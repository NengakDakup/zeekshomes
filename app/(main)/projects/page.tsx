import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MaxWidthContent from "@/components/maxWidthContent";
import { Building, Calendar, MapPin, MoveRight } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <h1 className="text-3xl font-bold mb-3 text-gold">Our Projects</h1>
            <p className="text-lg mb-8">
              Discover our portfolio of exceptional real estate developments across Nigeria.
            </p>
          </div>
        </MaxWidthContent>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16" id="ongoing">
        <MaxWidthContent>
          <div className="text-center mb-12">
            <Badge className="bg-gold mb-4">Ongoing Projects</Badge>
            <h2 className="text-3xl font-bold mb-4">Current Developments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience our latest projects under construction, setting new standards in real estate development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beacon City Estate */}
            <Card className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/images/beacon.png"
                  alt="Beacon City Estate"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Beacon City Estate</h3>
                <p className="text-muted-foreground mb-4">
                  Luxury residential estate with modern amenities and 24/7 security.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Lugbe, Abuja</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>120 Units</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Completion: 2024</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/projects/beacon-city">View Details <MoveRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            {/* Add more ongoing projects with the same structure */}
          </div>
        </MaxWidthContent>
      </section>

      {/* Completed Projects */}
      <section className="py-16 bg-muted" id="completed">
        <MaxWidthContent>
          <div className="text-center mb-12">
            <Badge className="bg-gold mb-4">Completed Projects</Badge>
            <h2 className="text-3xl font-bold mb-4">Successfully Delivered Properties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of completed projects, showcasing our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add completed projects with similar card structure */}
          </div>
        </MaxWidthContent>
      </section>

      {/* Upcoming Projects */}
      <section className="py-16" id="upcoming">
        <MaxWidthContent>
          <div className="text-center mb-12">
            <Badge className="bg-gold mb-4">Upcoming Projects</Badge>
            <h2 className="text-3xl font-bold mb-4">Future Developments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Preview our upcoming projects and be the first to invest in tomorrow's landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add upcoming projects with similar card structure */}
          </div>
        </MaxWidthContent>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <MaxWidthContent>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Our Projects?</h2>
            <p className="text-lg mb-8">
              Contact our team to learn more about investment opportunities in our developments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" className="bg-gold hover:bg-gold/90" asChild>
                <Link href="/properties">View Available Properties</Link>
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}

export default ProjectsPage