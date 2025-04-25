import MaxWidthContent from '@/components/maxWidthContent';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <h1 className="text-3xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2023</p>
          </div>
        </MaxWidthContent>
      </section>

      <section className="py-16">
        <MaxWidthContent>
          <div className="prose max-w-4xl mx-auto">
            <p className="lead">At Zeeks Homes, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.</p>

            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Property preferences and requirements</li>
              <li>Financial information for property transactions</li>
              <li>Communication history</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Process property transactions</li>
              <li>Provide customer service</li>
              <li>Send relevant updates and information</li>
              <li>Improve our services</li>
            </ul>

            {/* Add more privacy policy content */}
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}
