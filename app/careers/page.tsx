'use client'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MaxWidthContent from "@/components/maxWidthContent";
import { Briefcase, MapPin, Timer } from "lucide-react";

const careers = [
  {
    id: "senior-architect",
    title: "Senior Architect",
    department: "Design",
    location: "Abuja",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced architect to lead design projects and mentor junior team members.",
  },
  {
    id: "project-manager",
    title: "Project Manager",
    department: "Construction",
    location: "Lagos",
    type: "Full-time",
    experience: "8+ years",
    description: "Seeking a seasoned project manager to oversee large-scale residential developments.",
  },
  {
    id: "property-consultant",
    title: "Property Consultant",
    department: "Sales",
    location: "Lagos",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our sales team to help clients find their perfect property investment.",
  },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <h1 className="text-3xl font-bold mb-3 text-gold">Join Our Team</h1>
            <p className="text-lg mb-8">
              Build your career with one of Nigeria's fastest-growing real estate developers.
            </p>
          </div>
        </MaxWidthContent>
      </section>

      {/* Career Opportunities */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careers.map((career) => (
              <Card key={career.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className="bg-gold mb-2">{career.department}</Badge>
                      <h3 className="text-xl font-bold">{career.title}</h3>
                    </div>
                    <Badge variant="outline">{career.type}</Badge>
                  </div>
                  <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{career.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{career.experience}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{career.description}</p>
                  <Button className="w-full" asChild>
                    <Link href={`/careers/${career.id}`}>View & Apply</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </MaxWidthContent>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <MaxWidthContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a team that values innovation, growth, and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add your values/benefits cards here */}
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}
