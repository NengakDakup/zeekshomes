import { notFound } from 'next/navigation';
import MaxWidthContent from '@/components/maxWidthContent';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin } from 'lucide-react';
import CareerApplicationForm from '@/components/forms/CareerApplicationForm';

type Career = {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

type Careers = {
  [key: string]: Career;
};

const careers: Careers = {
  "senior-architect": {
    title: "Senior Architect",
    department: "Design",
    location: "Abuja",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced architect to lead design projects and mentor junior team members.",
    responsibilities: [
      "Lead architectural design projects from concept to completion",
      "Mentor and guide junior architects and designers",
      "Collaborate with clients and stakeholders",
      "Ensure compliance with building codes and regulations",
      "Review and approve design documents"
    ],
    requirements: [
      "Bachelor's degree in Architecture",
      "Valid architectural license",
      "5+ years of experience in residential architecture",
      "Proficiency in AutoCAD and Revit",
      "Strong leadership and communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Professional development opportunities",
      "Annual leave",
      "Performance bonuses"
    ]
  },
  "project-manager": {
    title: "Project Manager",
    department: "Construction",
    location: "Lagos",
    type: "Full-time",
    experience: "8+ years",
    description: "We are seeking an experienced Project Manager to oversee our large-scale residential and commercial development projects.",
    responsibilities: [
      "Lead and manage multiple construction projects simultaneously",
      "Develop and maintain project schedules and budgets",
      "Coordinate with contractors, architects, and stakeholders",
      "Ensure project compliance with quality standards",
      "Manage project risks and resolve issues"
    ],
    requirements: [
      "Bachelor's degree in Construction Management, Engineering, or related field",
      "PMP certification preferred",
      "8+ years of experience in construction project management",
      "Strong knowledge of construction methodologies and regulations",
      "Excellent leadership and communication skills"
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance and life insurance",
      "Performance bonuses",
      "Company vehicle",
      "Professional development support"
    ]
  },
  "property-consultant": {
    title: "Property Consultant",
    department: "Sales",
    location: "Lagos",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our sales team as a Property Consultant to help clients find their perfect property while maximizing investment potential.",
    responsibilities: [
      "Generate and qualify sales leads",
      "Conduct property viewings and presentations",
      "Negotiate sales and lease agreements",
      "Maintain client relationships",
      "Provide market analysis and investment advice"
    ],
    requirements: [
      "Bachelor's degree in Real Estate, Business, or related field",
      "Valid real estate license",
      "3+ years of real estate sales experience",
      "Strong negotiation and closing skills",
      "Excellent networking abilities"
    ],
    benefits: [
      "Competitive commission structure",
      "Health insurance",
      "Sales training and development",
      "Performance incentives",
      "Flexible working hours"
    ]
  }
};



export default function CareerPage({ params }: { params: { opportunityId: string } }) {
  const career = careers[params.opportunityId];

  if (!career) {
    notFound();
  }

  return (
    <div>
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <Badge className="bg-gold mb-2">{career.department}</Badge>
            <h1 className="text-3xl font-bold mb-3">{career.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{career.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>{career.experience}</span>
              </div>
              <Badge variant="outline">{career.type}</Badge>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg mb-8">{career.description}</p>

                <h2 className="text-2xl font-bold mb-4">Key Responsibilities</h2>
                <ul className="space-y-2 mb-8">
                  {career.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="space-y-2 mb-8">
                  {career.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <ul className="space-y-2 mb-8">
                  {career.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <CareerApplicationForm jobTitle={career.title} />
            </div>
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  // Return an array of objects with the opportunityId params
  // This should include all possible career opportunity IDs
  return [
    { opportunityId: "senior-architect" },
    { opportunityId: "project-manager" },
    { opportunityId: "property-consultant" },
  ];
}
