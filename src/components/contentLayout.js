'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContentLayout = ({ sections, activeId, sectionRefs }) => {
  return (
    <section className="flex gap-12">
      {/* Sidebar */}
      <div className="w-1/4 flex flex-col px-2">
        <div className="sticky top-32">
          <p className="text-xl font-semibold my-2">Content</p>
          <ul className="content-List">
            {sections.map((sec) => (
              <Link href={`#${sec.id}`} key={sec.id}>
                <li className={activeId === sec.id ? 'active' : ''}>
                  {sec.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className="w-full mt-4">
            <Image
              src="https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?semt=ais_hybrid&w=740"
              alt="Blog Thumbnail"
              height={100}
              width={100}
              unoptimized
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 space-y-16 text-justify">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="scroll-mt-24"
          >
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="leading-relaxed">{section.desc}</p>

            {section.img && (
              <div className="w-full my-4">
                <Image
                  src={section.img}
                  alt={section.title}
                  width={100}
                  height={100}
                  className="rounded-lg object-contain w-auto max-h-[520px] h-full"
                  unoptimized
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentLayout;
