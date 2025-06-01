'use client';
import React, { useState } from 'react';
import { Calendar, User } from 'lucide-react';

const BlogsPage = () => {
  const [hoveredBlog, setHoveredBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      description: "Exploring the latest trends and technologies shaping the future of web development. From serverless architecture to AI-powered tools, discover what's coming next in the world of modern web applications.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop",
      author: "Prabhjot Singh",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      description: "A comprehensive guide to architecting React applications for scale. Learn best practices for component organization, state management, and performance optimization in large-scale projects.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      author: "Sumit Kumar",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "AI and Machine Learning in 2024",
      description: "Dive deep into the current state of artificial intelligence and machine learning. Discover breakthrough technologies, practical applications, and what these advances mean for developers.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      author: "Raktinder",
      date: "March 8, 2024"
    },
    {
      id: 4,
      title: "Mastering CSS Grid and Flexbox",
      description: "Complete guide to modern CSS layout techniques. Learn when to use Grid vs Flexbox, advanced layout patterns, and practical examples for building responsive designs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      author: "Yashpal Singh",
      date: "March 5, 2024"
    },
    {
      id: 5,
      title: "Node.js Performance Optimization",
      description: "Boost your Node.js application performance with proven strategies. Explore caching, database optimization, memory management, and monitoring techniques for production apps.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      author: "Sumit Kumar",
      date: "March 1, 2024"
    },
    {
      id: 6,
      title: "Modern JavaScript Patterns",
      description: "Explore advanced JavaScript patterns and best practices. From functional programming concepts to async/await patterns, elevate your JavaScript development skills.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=600&fit=crop",
      author: "Yashpal Singh",
      date: "February 28, 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Blog Posts</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover insights, tutorials, and thoughts on web development, technology trends,
          and best practices from our community of developers and designers.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className={`group relative backdrop-blur-sm rounded-2xl overflow-hidden border-2 hover:border-primary shadow-lg transition-all duration-500 cursor-pointer ${index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up delay-200'
                }`}
              onMouseEnter={() => setHoveredBlog(blog.id)}
              onMouseLeave={() => setHoveredBlog(null)}
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Date badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                    <Calendar size={10} />
                    {blog.date}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                  {blog.description}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 pt-2 border-t border-black/10">
                  <User size={18} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {blog.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;