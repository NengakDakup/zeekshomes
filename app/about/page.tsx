import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Users, Building, CheckCircle, Leaf, Heart, Target, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zeeks Homes</h1>
            <p className="text-xl mb-8">
              Building exceptional properties and creating thriving communities across Nigeria since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
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
                Zeeks Homes was founded in 2010 by Adebayo Zeeks, a visionary entrepreneur with a passion for creating exceptional living spaces. What began as a small real estate venture has grown into one of Nigeria's most respected property development companies.
              </p>
              <p className="mb-6">
                Over the past decade, we have successfully delivered over 50 projects across Nigeria, ranging from luxury residential estates to commercial complexes and mixed-use developments. Our commitment to quality, innovation, and customer satisfaction has earned us a reputation for excellence in the real estate industry.
              </p>
              <p className="mb-6">
                Today, Zeeks Homes continues to push boundaries in architectural design, sustainable building practices, and community development. Our team of experienced professionals works tirelessly to create properties that not only meet but exceed our clients' expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission, Vision & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The guiding principles that drive everything we do at Zeeks Homes.
            </p>
          </div>

          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-6 p-6 bg-background rounded-lg shadow">
              <div className="flex items-start gap-4">
                <Target className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg">
                    To create exceptional living and working environments that enhance the quality of life for our clients while contributing positively to the communities we build in. We are committed to delivering properties of the highest quality, built with integrity, innovation, and sustainability at their core.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vision" className="mt-6 p-6 bg-background rounded-lg shadow">
              <div className="flex items-start gap-4">
                <Building className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg">
                    To be Nigeria's most trusted and innovative real estate developer, setting new standards in the industry through architectural excellence, sustainable practices, and customer-centric approaches. We aspire to shape the future of urban living in Africa by creating communities that stand the test of time.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="values" className="mt-6 p-6 bg-background rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Excellence</h4>
                    <p>We strive for excellence in every aspect of our work, from design to construction to customer service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Integrity</h4>
                    <p>We conduct our business with honesty, transparency, and ethical practices at all times.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Sustainability</h4>
                    <p>We are committed to environmentally responsible development practices that minimize our ecological footprint.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Community</h4>
                    <p>We build more than just properties; we create thriving communities that enhance people's lives.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who guide our vision and ensure we deliver excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CEO */}
            <Card className="text-center">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Adebayo Zeeks"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Adebayo Zeeks</h3>
                <p className="text-primary mb-4">Founder & CEO</p>
                <p className="text-sm text-muted-foreground mb-4">
                  With over 25 years of experience in real estate development, Adebayo's vision and leadership have been instrumental in the company's success.
                </p>
              </CardContent>
            </Card>

            {/* COO */}
            <Card className="text-center">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                  alt="Folake Adeyemi"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Folake Adeyemi</h3>
                <p className="text-primary mb-4">Chief Operating Officer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Folake oversees all operations, ensuring that our projects are delivered on time, within budget, and to the highest standards.
                </p>
              </CardContent>
            </Card>

            {/* Head of Architecture */}
            <Card className="text-center">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Chidi Okonkwo"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Chidi Okonkwo</h3>
                <p className="text-primary mb-4">Head of Architecture</p>
                <p className="text-sm text-muted-foreground mb-4">
                  An award-winning architect, Chidi leads our design team in creating innovative and functional spaces that inspire.
                </p>
              </CardContent>
            </Card>

            {/* CFO */}
            <Card className="text-center">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Ibrahim Musa"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Ibrahim Musa</h3>
                <p className="text-primary mb-4">Chief Financial Officer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Ibrahim manages our financial strategy, ensuring the company's continued growth and stability in a dynamic market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition of our commitment to excellence in real estate development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Developer of the Year</h3>
                  <p className="text-sm text-muted-foreground mb-2">Nigeria Real Estate Awards, 2024</p>
                  <p>Recognized for our outstanding contribution to Nigeria's real estate sector.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Best Luxury Residential Development</h3>
                  <p className="text-sm text-muted-foreground mb-2">African Property Awards, 2023</p>
                  <p>Awarded for Beacon City Estate, our flagship luxury development.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustainable Development Excellence</h3>
                  <p className="text-sm text-muted-foreground mb-2">Green Building Council, 2022</p>
                  <p>For our commitment to environmentally responsible building practices.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Best Employer in Real Estate</h3>
                  <p className="text-sm text-muted-foreground mb-2">HR Excellence Awards, 2023</p>
                  <p>Recognizing our commitment to employee development and workplace culture.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation in Architecture</h3>
                  <p className="text-sm text-muted-foreground mb-2">Lagos Design Week, 2024</p>
                  <p>For our groundbreaking approach to modern architectural design.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Impact Award</h3>
                  <p className="text-sm text-muted-foreground mb-2">Corporate Social Responsibility Forum, 2023</p>
                  <p>For our contributions to community development and social initiatives.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Corporate Social Responsibility</h2>
              <p className="text-lg mb-6">
                At Zeeks Homes, we believe in giving back to the communities where we operate. Our CSR initiatives focus on education, environmental sustainability, and community development.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Leaf className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Environmental Initiatives</h3>
                    <p>We've planted over 10,000 trees across Nigeria and implemented waste reduction programs in all our developments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Education Support</h3>
                    <p>Our scholarship program has supported over 200 students in architecture, engineering, and construction management.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Community Development</h3>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Zeeks Homes Family</h2>
            <p className="text-lg mb-8">
              Whether you're looking for your dream home, an investment opportunity, or a career in real estate development, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link href="/careers">View Career Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}