'use client';
import React, { useState } from 'react';
import { Calendar, ChevronDown, Search, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CustomHeroSection from '@/components/CommonHeroSection';
import { useBlogs } from '@/context/BlogContext';
import { filterBlogs } from '@/utils/filterBlogs';
import moment from 'moment';
import EmptyState from '@/components/EmptyState';

const BlogsPage = () => {
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { blogs, loading } = useBlogs();

  const filteredBlogs = filterBlogs({
    blogs,
    category: filter
  }).filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  const categories = [
    { key: '', label: 'All' },
    { key: 'Ecommerce', label: 'E-Commerce' },
    { key: 'Web', label: 'Web' },
    { key: 'App', label: 'Mobile Apps' },
    { key: 'Shopify', label: 'Shopify' },
    { key: 'Ai', label: 'AI/ML' }
  ];

  return (
    <div className="min-h-screen">
      <div className='mb-10'>
        <CustomHeroSection
          title='Blog Posts'
          desc=' Discover insights, tutorials, and thoughts on web development, technology trends,
            and best practices from our community of developers and designers.'
        />
      </div>

      {/* Search + Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-xl">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-header bg-background focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="w-full overflow-hidden">
          <div className="flex md:justify-center gap-4 overflow-x-auto pb-4 -mb-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.key ? 'primaryBtn' : 'SecondaryBtn'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <Link href={`/blog/${blog.slug}`} key={blog.ID}>
                <article
                  className={`group relative backdrop-blur-sm rounded-2xl overflow-hidden border-2 hover:border-primary shadow-lg transition-all duration-500 cursor-pointer ${index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up delay-200'}`}
                  onMouseEnter={() => setHoveredBlog(blog.ID)}
                  onMouseLeave={() => setHoveredBlog(null)}
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.featured_image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        <Calendar size={10} />
                        {moment(blog.date).format("MMMM D, YYYY")}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {blog.title}
                    </h2>
                    <div
                      className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                    />
                    <div className="flex items-center gap-2 pt-2 border-t border-black/10">
                      <User size={18} className="text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">
                        {blog.author.name}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Blogs Available"
            message="New content is on the way. Stay connected for upcoming posts!"
          />
        )}
        {filteredBlogs.length > 6 && (
          <div className='w-fit mx-auto mt-10'>
            <button className='primaryBtn'>Load More <ChevronDown /></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
