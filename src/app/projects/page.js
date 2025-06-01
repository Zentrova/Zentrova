'use client';
import React, { useState } from 'react';
import { Github, ExternalLink, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [avatarHover, setAvatarHover] = useState(null); // For avatar tooltip
  const [filter, setFilter] = useState('all');
  const router = useRouter();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      teamMembers: [
        { name: "Prabhjot", role: "Frontend Developer", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
        { name: "Sumit", role: "Backend Developer", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" },
        { name: "Yashpal", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" }
      ]
    },
    {
      id: 2,
      title: "AI Task Manager",
      description: "Intelligent task management application powered by machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com",
      teamMembers: [
        { name: "Alice Brown", role: "ML Engineer", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" },
        { name: "Bob Wilson", role: "Full Stack Developer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" }
      ]
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking app with biometric authentication and real-time analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Node.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      teamMembers: [
        { name: "Sarah Davis", role: "Mobile Developer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" },
        { name: "Tom Anderson", role: "Security Engineer", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face" },
        { name: "Emma Wilson", role: "Product Manager", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face" }
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore my portfolio of innovative solutions and technical excellence.
        </p>
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
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => router.push('/projects/project-preview')}
            className="cursor-pointer group relative backdrop-blur-sm rounded-2xl overflow-hidden border-2 hover:border-primary shadow-lg transition-all duration-500"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 flex gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <Link href={project.github} onClick={(e) => e.stopPropagation()} className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
                  <Github size={18} />
                </Link>
                <Link href={project.demo} onClick={(e) => e.stopPropagation()} className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
                  <ExternalLink size={18} />
                </Link>
              </div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm rounded-full">
                  <Tag size={12} />
                  {project.category.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Avatars */}
                <div className="flex -space-x-4">
                  {project.teamMembers.map((member, idx) => {
                    const avatarKey = `${project.id}-${idx}`;
                    return (
                      <div
                        key={avatarKey}
                        className="relative z-10"
                        onMouseEnter={() => setAvatarHover(avatarKey)}
                        onMouseLeave={() => setAvatarHover(null)}
                      >
                        <Link href={`/portfolio/${member.name.toLowerCase()}`} onClick={(e) => e.stopPropagation()}>
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            height={100}
                            width={100}
                            className="h-10 w-10 rounded-full border-2 border-white object-cover transition-transform duration-300 hover:z-30 hover:scale-110 hover:-translate-x-2"
                            unoptimized
                          />
                        </Link>
                        {avatarHover === avatarKey && (
                          <div className="absolute top-full -right-14 transform -translate-x-1/2 mt-2 z-40 bg-white text-gray-900 text-xs px-3 py-2 rounded shadow-md whitespace-nowrap">
                            <p className="font-medium">{member.name}</p>
                            <p className="text-xs">{member.role}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-header text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
