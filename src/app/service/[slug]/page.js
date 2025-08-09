import CTCSection from '@/components/CTCSection'
import HowItWorks from '@/components/homepage/howItWorks'
import UiUx from '@/components/services/UiUX'
import WebDevelopment from '@/components/services/WebDevelopment'
import WorkInProgress from '@/components/WorkInProgress'
import React from 'react'

export default function ServicePage({ params }) {
  const { slug } = params;

  // Map slugs to components
  const serviceComponents = {
    'ui-ux-development': <UiUx />,
    'web-development': <WebDevelopment />,
    // Add more when you create them
    'app-development':<WorkInProgress/>,
    'seo-optimization': <WorkInProgress/>,
  };

  return (
    <div>
      {/* Render service based on slug */}
      {serviceComponents[slug] || <div>Service Not Found</div>}

      {/* Process Flow */}
      <HowItWorks />

      {/* CTA Section */}
      <CTCSection />
    </div>
  );
}
