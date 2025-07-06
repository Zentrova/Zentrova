'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSidebarForm from './contactsidebarform';
import AnimatedBlogContent from './AnimatedBlogContent';

const ContentLayout = ({ sections, activeId, sectionRefs, blog }) => {
  const relatedBlogs = [
    { title: "5 UX Mistakes to Avoid", slug: "ux-mistakes" },
    { title: "Why React is Awesome", slug: "react-awesome" },
    { title: "Beginner's Guide to Tailwind CSS", slug: "tailwind-guide" },
  ];

  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Main Content */}
      <div className="w-full lg:w-3/4 space-y-10 text-justify mt-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-5">
            {blog?.title}
          </h1>

          <div className="relative w-full h-60 sm:h-72 md:h-[450px] mb-6">
            <Image
              src={blog?.featured_image || "/bg.jpg"}
              alt='Blog Title'
              fill
              className='object-cover rounded-xl'
              unoptimized
            />
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-base sm:prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Recommended Reads */}
          {relatedBlogs.length > 0 && (
            <div className="mt-10 p-4 sm:p-6 rounded-xl border shadow backdrop-blur-xl">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Recommended Reads</h3>
              <div className="flex flex-wrap gap-2">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blogs/${item.slug}`}
                    className="px-4 py-1 text-sm font-medium rounded-full border border-header hover:bg-primaryLight transition"
                    title={item.title}
                  >
                    {item.title.length > 30 ? item.title.slice(0, 30) + '…' : item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden md:block w-full lg:w-1/4 mt-10 lg:mt-8">
        <div className="lg:sticky lg:top-28">
          <ContactSidebarForm />
        </div>
      </div>
    </section>
  );
};

export default ContentLayout;
