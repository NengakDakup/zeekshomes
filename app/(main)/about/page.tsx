import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Users, Building, CheckCircle, Leaf, Heart, Target, Clock, ChevronsDown, Shield } from "lucide-react";
import MaxWidthContent from "@/components/maxWidthContent";
import BlogPreview from "@/components/BlogPreview";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white h-screen z-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay */}
          <Image
            src="/images/beacon.png"
            alt="Hero background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-screen h-full relative z-10 text-white">
          <div className="bg-white border-l-8 border-gold text-black p-10 max-w-[1000px] absolute bottom-0 left-0">
            <div className="text-gold font-extrabold text-sm mb-4">WELCOME TO ZEEKS HOMES</div>
            <h1 className="text-3xl font-bold mb-6">About Zeeks Homes</h1>
            <p className="mb-3">
              Zeeks Homes, a distinguished subsidiary of the renowned Zeeks Group of Companies, stands as a beacon of excellence in the realm of real estate innovation.
            </p>
            <Link className="text-gold inline-flex items-center" href="#our-story">Read More <ChevronsDown /></Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16" id="our-story">
        <MaxWidthContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Zeeks Homes Building"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                Incorporated in 2022, Zeeks Homes leverages the extensive experience and resources of Zeeks Group to focus exclusively on the real estate and property management sector. Our portfolio includes residential, commercial, and mixed-use developments, all designed to enhance urban living and deliver long-term value to our clients and investors.
              </p>
              <p className="mb-6">
                Our commitment to quality, innovation, and customer satisfaction has earned us a reputation for excellence in the real estate industry. Today, Zeeks Homes continues to push boundaries in architectural design, sustainable building practices, and community development.
              </p>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted">
        <MaxWidthContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission, Vision & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The guiding principles that drive everything we do at Zeeks Homes.
            </p>
          </div>

          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="values">Core Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-6 p-6 bg-background rounded-lg shadow border-l-4 border-r-4 border-gold">
              <div className="flex items-start gap-4">
                <Target className="h-12 w-12 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gold">Our Mission</h3>
                  <p className="text-lg">
                    Our mission is to redefine the standards of urban living by delivering exceptional real estate solutions that surpass every expectation, elevate lifestyles, and foster enduring value.
                  </p>
                  <p className="text-lg mt-2">
                    Through innovative design, sustainable practices, and unwavering commitment to quality, we aim to create spaces that inspire and transform communities while setting new benchmarks in the real estate industry.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="values" className="mt-6 p-6 bg-background rounded-lg shadow border-l-4 border-r-4 border-gold">
              <h3 className="text-xl font-bold mb-4 text-gold">Our Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gold">Integrity</h3>
                    <p>We conduct ourselves with honesty, transparency, and accountability, fostering trust among our stakeholders.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold">Excellence</h4>
                    <p>We strive for excellence in every aspect of our work, from design to construction to customer service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold">Integrity</h4>
                    <p>We conduct our business with honesty, transparency, and ethical practices at all times.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold">Sustainability</h4>
                    <p>We are committed to environmentally responsible development practices that minimize our ecological footprint.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold">Community</h4>
                    <p>We build more than just properties; we create thriving communities that enhance people's lives.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </MaxWidthContent>
      </section>



      {/* Achievements */}
      < section className="py-16 bg-muted" >
        <MaxWidthContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition of our commitment to excellence in real estate development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-primary text-white">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold">Developer of the Year</h3>
                  <p className="text-sm text-muted-foreground mb-2">Nigeria Real Estate Awards, 2024</p>
                  <p>Recognized for our outstanding contribution to Nigeria's real estate sector.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-white">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold">Best Luxury Residential Development</h3>
                  <p className="text-sm text-muted-foreground mb-2">African Property Awards, 2023</p>
                  <p>Awarded for Beacon City Estate, our flagship luxury development.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-white">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold">Sustainable Development Excellence</h3>
                  <p className="text-sm text-muted-foreground mb-2">Green Building Council, 2022</p>
                  <p>For our commitment to environmentally responsible building practices.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-white">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold">Best Employer in Real Estate</h3>
                  <p className="text-sm text-muted-foreground mb-2">HR Excellence Awards, 2023</p>
                  <p>Recognizing our commitment to employee development and workplace culture.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-white">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold">Innovation in Architecture</h3>
                  <p className="text-sm text-muted-foreground mb-2">Lagos Design Week, 2024</p>
                  <p>For our groundbreaking approach to modern architectural design.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-white">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold">Community Impact Award</h3>
                  <p className="text-sm text-muted-foreground mb-2">Corporate Social Responsibility Forum, 2023</p>
                  <p>For our contributions to community development and social initiatives.</p>
                </div>
              </div>
            </Card>
          </div>
        </MaxWidthContent>
      </section >

      {/* CSR Initiatives */}
      < section className="py-16" >
        <MaxWidthContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Corporate Social Responsibility</h2>
              <p className="text-lg mb-6">
                At Zeeks Homes, we believe in giving back to the communities where we operate. Our CSR initiatives focus on education, environmental sustainability, and community development.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Leaf className="h-6 w-6 text-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gold">Environmental Initiatives</h3>
                    <p>We've planted over 10,000 trees across Nigeria and implemented waste reduction programs in all our developments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gold">Education Support</h3>
                    <p>Our scholarship program has supported over 200 students in architecture, engineering, and construction management.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gold">Community Development</h3>
                    <p>We've built community centers, renovated schools, and provided clean water facilities in underserved areas.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/csr">Learn More About Our CSR Initiatives</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="CSR Initiative"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </MaxWidthContent>
      </section >

      {/* CTA Section */}
      < section className="py-16 bg-primary text-primary-foreground" >
        <MaxWidthContent>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Zeeks Homes Family</h2>
            <p className="text-lg mb-8">
              Whether you're looking for your dream home, an investment opportunity, or a career in real estate development, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" className="text-white bg-gold hover:bg-white/10" asChild>
                <Link href="/careers">View Career Opportunities</Link>
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section >

      <BlogPreview />
    </div >
  );
}