'use client';
import React, { useState } from 'react';
import { Github, ExternalLink, Users, Calendar, Tag } from 'lucide-react';

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState('all');

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "3 months",
      github: "https://github.com",
      demo: "https://demo.com",
      teamMembers: [
        { name: "John Doe", role: "Frontend Developer", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
        { name: "Jane Smith", role: "Backend Developer", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" },
        { name: "Mike Johnson", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" }
      ]
    },
    {
      id: 2,
      title: "AI Task Manager",
      description: "Intelligent task management application powered by machine learning algorithms for priority optimization and deadline prediction.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      duration: "4 months",
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
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Node.js"],
      duration: "6 months",
      github: "https://github.com",
      demo: "https://demo.com",
      teamMembers: [
        { name: "Sarah Davis", role: "Mobile Developer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" },
        { name: "Tom Anderson", role: "Security Engineer", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face" },
        { name: "Emma Wilson", role: "Product Manager", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face" }
      ]
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data visualization with real-time updates, custom charts, and advanced filtering capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "web",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      duration: "2 months",
      github: "https://github.com",
      demo: "https://demo.com",
      teamMembers: [
        { name: "David Lee", role: "Data Engineer", avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face" },
        { name: "Lisa Zhang", role: "Frontend Developer", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face" }
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
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              My Projects
            </h1>
            <p className="text-x max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative solutions, creative designs, and collaborative achievements. 
              Each project represents a journey of problem-solving and technical excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? 'primaryBtn'
                  : 'SecondaryBtn'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative backdrop-blur-sm rounded-2xl overflow-hidden border-2 hover:border-primary shadow-lg transition-all duration-500 ${
                index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up delay-200'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action buttons */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  <a
                    href={project.github}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary backdrop-blur-sm text-white text-sm rounded-full">
                    <Tag size={12} />
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar size={14} />
                    {project.duration}
                  </div>
                </div>

                <p className=" mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-header text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Team Members */}
                <div className="border-t border-black/10 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={16} className="" />
                    <span className="text-sm  font-medium">Team Members</span>
                  </div>
                  
                  <div className="space-y-2">
                    {project.teamMembers.map((member, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full border-2 border-white/20"
                        />
                        <div>
                          <p className=" text-sm font-medium">{member.name}</p>
                          <p className=" text-xs">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default ProjectsPage;