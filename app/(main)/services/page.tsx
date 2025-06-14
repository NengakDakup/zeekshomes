import Image from "next/image";
import Link from "next/link";
import { Building, Home, Briefcase, CheckCircle, Users, Award, ArrowRight, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MaxWidthContent from "@/components/maxWidthContent";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <h1 className="text-3xl font-bold mb-3 text-gold">Our Services</h1>
            <p className="text-lg mb-8">
              Comprehensive real estate solutions tailored to meet your needs,
              delivered with excellence and professionalism.
            </p>
          </div>
        </MaxWidthContent>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Residential Development */}
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="relative h-[300px]">
                <Image
                  src="/images/residential-development.png"
                  alt="Residential Development"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="relative z-20 p-6 -mt-20 text-white">
                <div className="flex justify-center mb-4">
                  <Home className="h-12 w-12 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Residential Development</h3>
                <p className="text-sm text-center mb-4">
                  Creating exceptional living spaces that combine luxury, comfort, and sustainability.
                </p>
                <Button className="w-full border-white text-white bg-gold hover:bg-white hover:text-black" asChild>
                  <Link href="#residential">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Commercial Development */}
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="relative h-[300px]">
                <Image
                  src="/images/commercial.png"
                  alt="Commercial Development"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="relative z-20 p-6 -mt-20 text-white">
                <div className="flex justify-center mb-4">
                  <Building className="h-12 w-12 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Commercial Development</h3>
                <p className="text-sm text-center mb-4">
                  State-of-the-art commercial properties designed for business success.
                </p>
                <Button className="w-full border-white text-white bg-gold hover:bg-white hover:text-black" asChild>
                  <Link href="#commercial">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Property Management */}
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="relative h-[300px]">
                <Image
                  src="/images/property-management.png"
                  alt="Property Management"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="relative z-20 p-6 -mt-20 text-white">
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-12 w-12 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Property Management</h3>
                <p className="text-sm text-center mb-4">
                  Comprehensive management services to protect and enhance your property investment.
                </p>
                <Button className="w-full border-white text-white bg-gold hover:bg-white hover:text-black" asChild>
                  <Link href="#management">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mixed-Use Development */}
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="relative h-[300px]">
                <Image
                  src="/images/mix-used.png"
                  alt="Mixed-Use Development"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="relative z-20 p-6 -mt-20 text-white">
                <div className="flex justify-center mb-4">
                  <Building className="h-12 w-12 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Mixed-Use Development</h3>
                <p className="text-sm text-center mb-4">
                  Creating vibrant integrated communities for living, working, and recreation.
                </p>
                <Button className="w-full border-white text-white bg-gold hover:bg-white hover:text-black" asChild>
                  <Link href="#mixed-use">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </MaxWidthContent>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-muted" id="residential">
        <MaxWidthContent>
          <div className="space-y-24">
            {/* Residential Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gold mb-4">Residential Development</Badge>
                <h2 className="text-3xl font-bold mb-6">Creating Exceptional Living Spaces</h2>
                <p className="text-lg mb-8">
                  At Zeeks Homes, we specialize in creating modern, sustainable, and luxurious living spaces that cater to diverse lifestyles. Our residential projects are designed with the utmost attention to detail, ensuring that every home we build meets the highest standards of quality and comfort. We incorporate the latest architectural trends and innovative technologies to deliver homes that are not only aesthetically pleasing but also energy-efficient and environmentally friendly. Our developments range from single-family homes to multi-unit complexes, each thoughtfully planned to provide residents with a harmonious living environment that enhances their overall quality of life.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Luxury Estates</h4>
                      <p>Gated communities with world-class amenities and 24/7 security</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Premium Apartments</h4>
                      <p>Modern living spaces in prime locations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Smart Homes</h4>
                      <p>Integration of advanced technology for modern living</p>
                    </div>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/projects">View Our Projects <MoveRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/residential-development.png"
                  alt="Residential Development"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Commercial Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="commercial">
              <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/commercial.png"
                  alt="Commercial Development"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="bg-gold mb-4">Commercial Development</Badge>
                <h2 className="text-3xl font-bold mb-6">Building Business Success</h2>
                <p className="text-lg mb-8">
                  Our commercial development services focus on creating state-of-the-art properties that offer optimal functionality and aesthetic appeal. We understand the unique requirements of businesses and design commercial spaces that foster productivity, collaboration, and growth. From office buildings and retail centers to industrial facilities and mixed-use developments, we utilize cutting-edge design principles and sustainable construction practices to deliver projects that stand out in the market. Our commercial properties are strategically located to maximize accessibility and visibility, providing our clients with a competitive edge in their respective industries.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Office Spaces</h4>
                      <p>Grade A office buildings with modern facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Retail Centers</h4>
                      <p>Prime locations with high footfall potential</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Mixed-Use Developments</h4>
                      <p>Integrated spaces combining retail, office, and residential</p>
                    </div>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/properties">View Available Properties <MoveRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>

            {/* Property Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="management">
              <div>
                <Badge className="bg-gold mb-4">Property Management</Badge>
                <h2 className="text-3xl font-bold mb-6">Professional Property Management</h2>
                <p className="text-lg mb-8">
                  Zeeks Homes offers comprehensive property management services designed to ensure the seamless operation and maintenance of properties. Our property management team is dedicated to maximizing the value and performance of each property under our care. We provide a full suite of services, including tenant relations, lease administration, maintenance and repairs, financial management, and compliance with local regulations. Our proactive approach to property management ensures that issues are addressed promptly, and properties are maintained to the highest standards, resulting in satisfied tenants and owners.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Maintenance & Repairs</h4>
                      <p>24/7 maintenance support and preventive care</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Tenant Management</h4>
                      <p>Professional tenant screening and relationship management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Financial Reporting</h4>
                      <p>Detailed financial tracking and regular reporting</p>
                    </div>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">Request Management Services <MoveRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/property-management.png"
                  alt="Property Management"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Mixed-Use Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="mixed-use">
              <div>
                <Badge className="bg-gold mb-4">Mixed-Use Development</Badge>
                <h2 className="text-3xl font-bold mb-6">Integrated Community Living</h2>
                <p className="text-lg mb-8">
                  Our mixed-use developments are designed to create integrated communities that combine residential, commercial, and recreational spaces, enhancing the quality of urban life. By blending different types of properties within a single development, we create vibrant neighborhoods that offer convenience, accessibility, and a sense of community. Our mixed-use projects feature thoughtfully planned layouts that encourage interaction and connectivity, providing residents and businesses with a dynamic environment that meets their diverse needs. These developments are equipped with modern amenities and infrastructure, making them desirable places to live, work, and play.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Residential Units</h4>
                      <p>Modern apartments and homes with premium amenities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Commercial Spaces</h4>
                      <p>Retail and office spaces designed for business success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Recreational Areas</h4>
                      <p>Parks, gyms, and community centers for a balanced lifestyle</p>
                    </div>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/projects">Explore Our Mixed-Use Projects <MoveRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/mix-used.png"
                  alt="Mixed-Use Development"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <MaxWidthContent>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how our services can meet your real estate needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" className="bg-gold hover:bg-gold/90" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}
