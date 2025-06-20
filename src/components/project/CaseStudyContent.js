'use client';
import { useEffect, useRef, useState } from 'react';
import ContentLayout from '@/components/contentLayout';

const CaseStudyContent = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach(section => {
      const ref = sectionRefs.current[section.id];
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <ContentLayout
      sections={sections}
      activeId={activeId}
      sectionRefs={sectionRefs}
    />
  );
};

export default CaseStudyContent;
