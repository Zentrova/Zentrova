'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSidebarForm from './contactsidebarform';

const ContentLayout = ({ sections, activeId, sectionRefs, blog }) => {


  const relatedBlogs = [
    { title: "5 UX Mistakes to Avoid", slug: "ux-mistakes" },
    { title: "Why React is Awesome", slug: "react-awesome" },
    { title: "Beginner's Guide to Tailwind CSS", slug: "tailwind-guide" },
  ];



  return (
    <section className="flex gap-10">


      {/* Main Content */}
      <div className="w-3/4 space-y-16 text-justify mt-8">
        <div>

          <h1 className="text-3xl font-bold leading-tight mb-5">
            {blog?.title}
          </h1>

          <div className='h-[450px] w-full mb-4'>
            <Image
              src={blog?.featured_image || "/bg.jpg"}
              height={100}
              alt='Blog Title'
              width={100}
              className='object-cover h-full w-full '
              unoptimized
            />
          </div>
          <div
            className="prose prose-lg max-w-none  dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />


          {relatedBlogs.length > 0 && (
            <div className="mt-6 backdrop-blur-xl p-4 rounded-xl border shadow">
              <h3 className="text-lg font-semibold text-zinc-800 mb-3">Recommended Reads</h3>
              <div className="flex flex-wrap gap-2">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blogs/${item.slug}`}
                    className="px-4 py-1 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-full border border-zinc-300 hover:bg-primaryLight transition"
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
      <div className="w-1/4 flex flex-col px-2">
        <div className='sticky top-28'>
          <ContactSidebarForm />
        </div>
      </div>
    </section>
  );
};

export default ContentLayout;
