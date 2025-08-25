import CTCSection from '@/components/CTCSection'
import HowItWorks from '@/components/homepage/howItWorks'
import AppDevelopment from '@/components/services/AppDevelopment'
import DigitalMarketingSEO from '@/components/services/DigitalMarketingSEO'
import MaintenanceSupport from '@/components/services/MaintenanceSupport'
import ShopifyDevelopment from '@/components/services/ShopifyDevelopment'
import UiUx from '@/components/services/UiUX'
import WebDevelopment from '@/components/services/WebDevelopment'
import WorkInProgress from '@/components/WorkInProgress'
import React from 'react'

export default async function ServicePage({ params }) {
  const { slug } = await params;

  // Map slugs to components
  const serviceComponents = {
    'ui-ux-development': <UiUx />,
    'web-development': <WebDevelopment />,
    'app-development': <AppDevelopment />,
    'shopify-development': <ShopifyDevelopment />,
    'maintenance-support': <MaintenanceSupport />,
    'digital-marketing-seo': <DigitalMarketingSEO/>,
  };

  return (
    <div>
      {serviceComponents[slug] || <div>Service Not Found</div>}

      {/* <HowItWorks /> */}

      <CTCSection />
    </div>
  );
}
