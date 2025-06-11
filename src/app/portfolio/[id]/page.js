'use client';
import React, { useState, use } from 'react';
import {
  MapPin,
  Download,
  Send,
  Code,
  User,
  Award,
  ExternalLink,
  Eye,
  Github,
  Tag,
  Instagram,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';
import Image from 'next/image';

// src/app/portfolio/[id]/page.js

const portfolios = {
  prabhjot: {
    name: "Prabhjot Singh",
    role: "Frontend Developer",
    bio: "Passionate about UI/UX and clean code.",
  },
  sumit: {
    name: "Sumit Kumar",
    role: "Backend Developer",
    bio: "Loves working with databases and scalable systems.",
  },
  yashpal: {
    name: "Yashpal Singh",
    role: "Full Stack Engineer",
    bio: "Bridging frontend and backend with elegant solutions.",
  },
  raktinder: {
    name: "Raktinder Singh",
    role: "Project Manager",
    bio: "Ensuring delivery, deadlines, and delightful UX.",
  },
};

export default function PortfolioPage({ params }) {
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);
  const memberId = resolvedParams?.id?.toLowerCase?.() || '';
  const data = portfolios[memberId];

  const [activeTab, setActiveTab] = useState('overview');

  // Check if member exists
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-2">Member Not Found</h1>
          <p className="text-gray-600 mb-4">The portfolio for "{memberId}" does not exist.</p>
          <p className="text-sm text-gray-500">
            Available portfolios: {Object.keys(portfolios).join(', ')}
          </p>
        </div>
      </div>
    );
  }

  const portfolioData = {
    name: "Prabhjot Singh",
    title: "Frontend Developer & UI/UX Designer",
    role: "Senior Developer",
    location: "Ludhiana, Punjab, India",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    email: "prabhjot@example.com",
    phone: "+91-98765-43210",
    resumeUrl: "/resume-prabhjot-singh.pdf",
    bio: "Passionate frontend developer with 4+ years of experience creating engaging user interfaces and seamless user experiences.",
    teamBio: "Lead frontend developer specializing in React and modern web technologies. Mentors junior developers and drives technical excellence.",

    socialLinks: [
      { icon: <Instagram className="h-5 w-5" />, href: "#" },
      { icon: <Facebook className="h-5 w-5" />, href: "#" },
      { icon: <Twitter className="h-5 w-5" />, href: "#" },
      { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    ],

    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX Design"],

    experience: [
      {
        company: "TechCorp Solutions",
        position: "Senior Frontend Developer",
        duration: "2022 - Present",
        description: "Lead frontend development for enterprise applications serving 100K+ users."
      },
      {
        company: "StartupXYZ",
        position: "Frontend Developer",
        duration: "2020 - 2022",
        description: "Developed responsive web applications using React and TypeScript."
      }
    ],

    projects: [
      {
        title: "E-Commerce Dashboard",
        description: "Modern admin dashboard for e-commerce platform with real-time analytics and inventory management.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
        liveUrl: "https://demo-dashboard.com",
        githubUrl: "https://github.com/prabhjot/ecommerce-dashboard",
        category: "web",
        featured: true
      },
      {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates and team coordination features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
        tech: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
        liveUrl: "https://taskapp-demo.com",
        githubUrl: "https://github.com/prabhjot/task-manager",
        category: "web",
        featured: true
      },
      {
        title: "Portfolio Website",
        description: "Responsive portfolio website with modern animations and optimized performance.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
        tech: ["React", "Framer Motion", "SCSS"],
        liveUrl: "https://portfolio-demo.com",
        githubUrl: "https://github.com/prabhjot/portfolio",
        category: "web",
        featured: false
      },
      {
        title: "Weather App",
        description: "Beautiful weather application with location-based forecasts and interactive maps.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
        tech: ["Vue.js", "Weather API", "Mapbox"],
        liveUrl: "https://weather-demo.com",
        githubUrl: "https://github.com/prabhjot/weather-app",
        category: "web",
        featured: false
      }
    ],

    services: [
      {
        title: "Frontend Development",
        description: "Build modern, responsive web applications using React and Next.js",
        icon: Code
      },
      {
        title: "UI/UX Design",
        description: "Create intuitive user interfaces and seamless user experiences",
        icon: User
      },
      {
        title: "Web Optimization",
        description: "Optimize website performance, SEO, and accessibility",
        icon: Award
      }
    ],

    stats: {
      experience: "4+",
      projects: "15+",
      clients: "10+",
      commits: "2000+"
    }
  };

  const displayedProjects = activeTab === 'projects' ? portfolioData.projects : portfolioData.projects.filter(p => p.featured);
  
  const ProjectCard = ({ project }) => (
    <div className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-white hover:border-primary transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Eye className="w-4 h-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm rounded-full">
            <Tag size={12} />
            {project.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="bg-header px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="bg-header px-2 py-1 rounded-full text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <section className="">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-primary">
                  {data.name}
                </h1>
                <p className="text-xl mb-3">
                  {data.role}
                </p>
                <p className="leading-relaxed">
                  {data.bio}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{portfolioData.location}</span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.experience}</div>
                  <div className="text-sm">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.projects}</div>
                  <div className="text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.clients}</div>
                  <div className="text-sm">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.commits}</div>
                  <div className="text-sm">Commits</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  href={portfolioData.resumeUrl}
                  download
                  className="primaryBtn"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-4">
                {portfolioData.socialLinks.map(({ icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="transition-transform hover:scale-110"
                  >
                    <span className="w-10 h-10 bg-header hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={portfolioData.avatar}
                alt={portfolioData.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                width={500}
                height={600}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background2 border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent hover:text-primary'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {(activeTab === 'overview') && (
        <>
          <section className="py-12 bg-background2">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-header px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-background2">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Featured Projects</h2>
                <button
                  onClick={() => setActiveTab('projects')}
                  className="hover:text-primary font-medium transition-colors"
                >
                  View All Projects →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProjects.slice(0, 3).map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-background2">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-8">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolioData.services.map((service, index) => (
                  <div key={index} className="border shadow-lg rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'projects' && (
        <section className="py-12 bg-background2">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'experience' && (
        <section className="py-12 bg-background2">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="border shadow-lg rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm mt-1 md:mt-0">{exp.duration}</span>
                  </div>
                  <p className="">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}