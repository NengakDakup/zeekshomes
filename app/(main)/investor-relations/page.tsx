import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, PieChart, TrendingUp } from 'lucide-react';
import MaxWidthContent from '@/components/maxWidthContent';

export default function InvestorRelationsPage() {
  return (
    <div>
      <section className="relative pt-40 bg-primary">
        <MaxWidthContent>
          <div className="max-w-3xl mt-5 bg-white p-6 md:p-10 border-l-8 border-gold">
            <h1 className="text-3xl font-bold mb-3">Investor Relations</h1>
            <p className="text-lg">Access financial information, reports, and investment opportunities.</p>
          </div>
        </MaxWidthContent>
      </section>

      <section className="py-16">
        <MaxWidthContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <FileText className="h-8 w-8 text-gold" />
                  <h3 className="text-xl font-bold">Annual Reports</h3>
                </div>
                <p className="text-muted-foreground mb-4">Access our detailed annual financial reports and statements.</p>
                <Button className="w-full" asChild>
                  <Link href="/files/annual-report-2023.pdf">
                    Download Latest <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Add more investor information cards */}
          </div>
        </MaxWidthContent>
      </section>
    </div>
  );
}
