import MaxWidthContent from '@/components/maxWidthContent';

export default function TermsConditionsPage() {
  return (
    <div>
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <h1 className="text-3xl font-bold mb-3">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: December 2023</p>
          </div>
        </MaxWidthContent>
      </section>

      <section className="py-16">
        <MaxWidthContent>
          <div className="prose max-w-4xl mx-auto">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Zeeks Homes' services, you agree to be bound by these terms and conditions.</p>

            <h2>2. Property Information</h2>
            <p>While we strive to maintain accurate property information, all details are subject to change and verification.</p>

            <h2>3. Reservations and Payments</h2>
            <p>Property reservations are only confirmed upon receipt of the required deposit and documentation.</p>

            {/* Add more terms and conditions content */}
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}
