
import CTCSection from '@/components/CTCSection';
import AppDevelopment from '@/components/services/AppDevelopment';
import DigitalMarketingSEO from '@/components/services/DigitalMarketingSEO';
import MaintenanceSupport from '@/components/services/MaintenanceSupport';
import ShopifyDevelopment from '@/components/services/ShopifyDevelopment';
import UiUx from '@/components/services/UiUX';
import WebDevelopment from '@/components/services/WebDevelopment';
import React from 'react';

// Metadata for each service page
const servicesMetadata = {
  'ui-ux-development': {
    title: 'UI/UX Design Services | User-Centric & Engaging Interfaces | Xentrova',
    description: 'Xentrova provides expert UI/UX design services, focusing on creating intuitive, engaging, and user-centric interfaces. We help you build products that your users will love.',
    keywords: ['UI/UX design', 'user experience', 'user interface', 'design agency', 'product design', 'wireframing', 'prototyping'],
  },
  'web-development': {
    title: 'Custom Web Development Services | Scalable & Secure Solutions | Xentrova',
    description: 'Xentrova offers custom web development services, creating high-performance, scalable, and secure websites and web applications. We focus on ROI-driven solutions to help your business grow.',
    keywords: ['web development', 'custom website development', 'web application development', 'e-commerce development', 'responsive design', 'SEO optimization'],
  },
  'app-development': {
    title: 'Mobile App Development Services | iOS & Android Experts | Xentrova',
    description: 'Xentrova builds high-performance iOS, Android, and cross-platform mobile apps. Our expert team handles the entire lifecycle, from strategy and design, to development and launch.',
    keywords: ['mobile app development', 'iOS app development', 'Android app development', 'React Native development', 'Flutter development', 'cross-platform app development'],
  },
  'shopify-development': {
    title: 'Shopify Development Services | E-commerce Solutions for Growth | Xentrova',
    description: 'Drive your online sales with our expert Shopify development services. We build, customize, and optimize Shopify stores for performance, scalability, and exceptional customer experiences.',
    keywords: ['Shopify development', 'Shopify expert', 'e-commerce development', 'Shopify themes', 'Shopify apps', 'online store'],
  },
  'maintenance-support': {
    title: 'Website Maintenance & Support Services | Reliable & Proactive | Xentrova',
    description: 'Keep your website or application running smoothly with our proactive maintenance and support services. We handle updates, security, backups, and performance optimization so you can focus on your business.',
    keywords: ['website maintenance', 'application support', 'security updates', 'performance optimization', 'technical support'],
  },
  'digital-marketing-seo': {
    title: 'Digital Marketing & SEO Services | Drive Traffic & Growth | Xentrova',
    description: 'Boost your online visibility and drive organic traffic with our results-driven digital marketing and SEO services. We help you rank higher, reach your target audience, and achieve your business goals.',
    keywords: ['digital marketing', 'SEO services', 'search engine optimization', 'content marketing', 'PPC', 'social media marketing'],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const metadata = servicesMetadata[slug] || {
    title: 'Service Not Found | Xentrova',
    description: 'The requested service could not be found.',
  };
  return metadata;
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  // Map slugs to components
  const serviceComponents = {
    'ui-ux-development': <UiUx />,
    'web-development': <WebDevelopment />,
    'app-development': <AppDevelopment />,
    'shopify-development': <ShopifyDevelopment />,
    'maintenance-support': <MaintenanceSupport />,
    'digital-marketing-seo': <DigitalMarketingSEO />,
  };

  return (
    <div>
      {serviceComponents[slug] || <div>Service Not Found</div>}
      <CTCSection />
    </div>
  );
}
