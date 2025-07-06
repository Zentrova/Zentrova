'use client';
import React, { useState, use, useEffect } from 'react';
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
import CtcBtn from '@/components/homepage/ctcBtn';
import CountUp from 'react-countup';
import { httpRequest } from '@/utils/httpRequest';
import Link from 'next/link';


export default function PortfolioPage({ params }) {

  const [activeTab, setActiveTab] = useState('overview');
  const [portfolio, setPortfolio] = useState(null)
  const resolvedParam = use(params)
  const decodedParam = decodeURIComponent(resolvedParam?.id);

  const fetchData = async () => {
    try {
      const response = await httpRequest({
        url: `/team/${decodedParam}`,
        method: "GET",
      });

      if (response.success) {
        setPortfolio(response.data.data);
        console.log("data fetched successfully", response);
      } else {
        console.warn("Data was not fetched successfully");
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);





  // Check if member exists
  // if (!data) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold text-red-500 mb-2">Member Not Found</h1>
  //         <p className="text-gray-600 mb-4">The portfolio for "{memberId}" does not exist.</p>
  //         <p className="text-sm text-gray-500">
  //           Available portfolios: {Object.keys(portfolios).join(', ')}
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }


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
      experience: "4",
      projects: "15",
      clients: "10",
      commits: "2000"
    }
  };

  const displayedProjects = activeTab === 'projects' ? portfolioData.projects : portfolioData.projects.filter(p => p.featured);

  const ProjectCard = ({ project }) => (
    <div className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-header hover:border-primary transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          height={100}
          width={100}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
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

  const BlogCard = () => (
    <div className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-header hover:border-primary transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <Image
          src='{project.image}'
          alt='blog img'
                    height={100}
          width={100}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm rounded-full">
            <Tag size={12} />
            web
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          Blog Title
        </h3>
        <p className="text-sm mb-4 line-clamp-3">
          Blog desc
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className='flex items-end gap-2'>
                  <h1 className="text-3xl lg:text-4xl font-bold text-primary">
                    {portfolio?.name}
                  </h1>
                  {portfolio?.linkedin &&
                    <Link href={portfolio?.linkedin} target='blank' className='bg-header hover:bg-primary p-2.5 rounded-full text-primary hover:text-white cursor-pointer'>
                      <Linkedin className="h-5 w-5 " />
                    </Link>
                  }
                </span>
                <p className="text-xl mb-3">{portfolio?.designation}</p>
                <p className="leading-relaxed text-lg">{portfolio?.description}</p>
              </div>

              <div className="flex items-center space-x-2  text-base mt-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{portfolioData.location}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {[
                  { label: 'Years Exp', value: portfolioData.stats.experience },
                  { label: 'Projects', value: portfolioData.stats.projects },
                  { label: 'Clients', value: portfolioData.stats.clients },
                  { label: 'Commits', value: portfolioData.stats.commits }
                ].map((item, idx) => (
                  <div key={idx} className="text-center border border-header  rounded-xl py-4  shadow-sm hover:shadow-md transition">
                    <div className="text-3xl font-bold text-primary">
                      <CountUp end={item.value} duration={2} />+
                    </div>
                    <div className="text-sm ">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avatar Image */}
            <div className="flex justify-center">
              <Image
                src={portfolio?.profileImage || '/IMg'}
                alt={portfolio?.name || 'Img'}
                width={500}
                height={600}
                unoptimized
                className="rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 object-cover w-full h-auto max-w-sm"
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
                {portfolio?.skills.map((skill, index) => (
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

          <section className="py-12 bg-background2">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Featured Projects</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProjects.slice(0, 3).map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>

              {/* <div className='mt-8 mx-auto w-fit'>
                <CtcBtn text="  View All Projects"   onClick={() => setActiveTab('projects')}/>
              </div> */}

            </div>
          </section>

          <section className="py-12 bg-background2">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Must Read</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <BlogCard />

              </div>

              {/* <div className='mt-8 mx-auto w-fit'>
                <CtcBtn text="  View All Projects"   onClick={() => setActiveTab('projects')}/>
              </div> */}

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
        <section className="py-16 bg-background2">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Work Experience</h2>

            {/* LinkedIn-style timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {/* {portfolio?.experience.map((exp, index) => ( */}
                <div className="relative flex items-start mb-8 pb-8 border-b border-gray-200 last:border-b-0">

                  {/* Company logo placeholder / Circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded text-primary text-xs font-bold flex items-center justify-center">
                     ab
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                       {portfolio?.experience?.designation}
                      </h3>
                    </div>

                    <p className="text-base text-gray-700 dark:text-gray-300 font-medium mb-1">
                      {portfolio?.experience?.company}
                    </p>

                    <p className="text-sm text-gray-500 mb-3">
                      {portfolio?.experience?.date?.start} - {portfolio?.experience?.date?.status} 
                    </p>

                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {portfolio?.experience?.responsibilities}
                    </p>
                  </div>
                </div>
              {/* ))} */}
            </div>
          </div>
        </section>


      )}
    </div>
  );
}