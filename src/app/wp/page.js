'use client';

import { useEffect, useState } from 'react';


export default function ServicesPage() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Replace with your slug for the blog post you're using as service
  const SLUG = 'website-development';

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_BASE}/posts/slug:${SLUG}`
        );
        const data = await res.json();
        console.log("dataa",data)
        setBlog(data || null);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);
  useEffect(() => {
  const map = {
    container: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", // 👈 responsive grid layout
    card: "p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md",        // 👈 card styling
    title: "text-xl font-bold text-center text-primary mb-2",
    // add more if needed
  };

  const elements = document.querySelectorAll("[data-style]");
  elements.forEach((el) => {
    const tailwind = map[el.getAttribute("data-style")];
    if (tailwind) {
      el.className = tailwind;
    }
  });
}, []);


  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog) return <p className="text-center mt-10 text-red-600">Service not found.</p>;

  return (
    <div className="min-h-screen px-4 py-10 md:px-20 lg:px-40 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white">
      <h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        {blog.title}
      </h1>

      <div
        className=" prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
