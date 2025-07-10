'use client';
import CustomHeroSection from '@/components/CommonHeroSection';
import EmptyState from '@/components/EmptyState';
import { useBlogs } from '@/context/BlogContext';
import { filterBlogs } from '@/utils/filterBlogs';
import { ChevronDown, Tag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  // const [avatarHover, setAvatarHover] = useState(null); // For avatar tooltip
  const [filter, setFilter] = useState('');
  const { blogs, loading } = useBlogs();
  const router = useRouter();

  const filteredBlogs = filterBlogs({
    blogs,
    category: filter
  })
  if (loading) return <p>Loading...</p>
  console.log("filtered blogs", filteredBlogs)
  const categories = [
    { key: '', label: 'All Projects' },
    { key: 'Web', label: 'Web Apps' },
    { key: 'Ecommerce', label: 'E-commerce' },
    { key: 'App', label: 'Mobile Apps' },
    { key: 'Ai', label: 'AI/ML' },
    { key: 'shopify', label: 'Shopify' },
  ];

  // const filteredProjects = filter === 'all'
  //   ? projects
  //   : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Header */}


      <div className='mb-10'>
        <CustomHeroSection
          title='My Projects'
          desc='Explore my portfolio of innovative solutions and technical excellence.'
        />
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.key ? 'primaryBtn' : 'SecondaryBtn'}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      {filteredBlogs.length > 0 ? filteredBlogs.map((project, index) => (
        <div key={project.ID}
        >
          <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="cursor-pointer group relative backdrop-blur-sm rounded-2xl overflow-hidden border-2 hover:border-primary shadow-lg transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.ID)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.featured_image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm rounded-full">
                    <Tag size={12} />
                    {Object.keys(project.categories)[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                </div>
                <div className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2 "
                  dangerouslySetInnerHTML={{ __html: project.excerpt }} />
                {/* <div className="flex flex-wrap gap-2">
                {Object.values(project.tags).map((tag) => (
                  <span key={tag.ID} className="px-3 py-1 bg-header text-sm rounded-full">
                    {tag.name}
                  </span>
                ))}
              </div> */}
                <div className="flex flex-wrap gap-2">
                  {Object.values(project.tags).slice(0, 3).map((tag) => (
                    <span key={tag.ID} className="px-3 py-1 bg-header text-sm rounded-full">
                      {tag.name}
                    </span>
                  ))}
                  {Object.values(project.tags).length > 3 && (
                    <span className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground">
                      +{Object.values(project.tags).length - 3} more
                    </span>
                  )}
                </div>

              </div>
            </div>
          </div>
          <div className='w-fit mx-auto mb-10'>
            <button className='primaryBtn'>Load More <ChevronDown /></button>
          </div>
        </div>
      )) :
        <EmptyState
          title="No Projects to Show"
          message="We’re working behind the scenes to bring exciting projects soon. Check back later!"
        />
      }




    </div >
  );
};

export default ProjectsPage;
