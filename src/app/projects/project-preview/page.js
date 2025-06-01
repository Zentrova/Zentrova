'use client';
import {
  ArrowLeft,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  ExternalLink,
  Globe,
  Lightbulb,
  Play,
  Share2,
  Star,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';


const ProjectDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const project = {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Enterprise Solution",
    description: "A comprehensive e-commerce platform designed to handle high-traffic retail operations...",
    category: "Web Development",
    status: "Completed",
    duration: "8 months",
    team: "5 developers",
    year: "2024",
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker", "Redis", "GraphQL"],
    github: "https://github.com/project",
    demo: "https://demo.project.com",
    teamMembers: [
      { name: "Prabhjot", role: "Frontend Lead", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" },
      { name: "Sumit", role: "Backend Lead", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"},
      { name: "Yashpal", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" },
    ],
    metrics: [
      { label: "Performance Improvement", value: "75%", icon: TrendingUp },
      { label: "User Satisfaction", value: "4.8/5", icon: Star },
      { label: "Load Time Reduction", value: "60%", icon: Clock },
      { label: "Conversion Rate", value: "+45%", icon: Target }
    ],
    features: [
      "Real-time inventory management",
      "Multi-payment gateway integration",
      "Advanced search and filtering",
      "Admin dashboard with analytics",
      "Mobile-responsive design",
      "Order tracking system",
      "Customer support chat",
      "Multi-language support"
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'case-study', label: 'Case Study', icon: Star },
    { id: 'team', label: 'Team & Process', icon: Users }
  ];


  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Project Summary */}
            <div className="bg-background2 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Project Summary</h3>
              <p className="text-lg leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-sm text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 ">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background2 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-2xl font-bold mb-6 ">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-header rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'case-study':
        return (
          <div className="space-y-8">
            {/* Project Summary */}
            <div className="bg-background2 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Project Summary</h3>
              <p className="leading-relaxed">
                Our client was struggling with an outdated e-commerce system that couldn't handle peak traffic loads,
                resulting in lost sales and poor user experience. The existing platform had limited scalability,
                no real-time inventory tracking, and a 40% cart abandonment rate due to slow load times and payment issues.
              </p>
            </div>

            {/* Results & Impact */}
            <div className="bg-background2 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Results & Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Performance Improvements</h4>
                  <ul className="space-y-2">
                    <li>• 75% faster page load times</li>
                    <li>• 99.9% uptime during peak traffic</li>
                    <li>• 60% reduction in server costs</li>
                    <li>• Handles 10x more concurrent users</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Business Impact</h4>
                  <ul className="space-y-2">
                    <li>• 45% increase in conversion rate</li>
                    <li>• 30% reduction in cart abandonment</li>
                    <li>• 200% growth in mobile sales</li>
                    <li>• 4.8/5 average user satisfaction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

   
      case 'team':
        return (
          <div className="space-y-8">
            {/* Team Members */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Project Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.teamMembers.map((member, index) => (
                  <div key={index} className="bg-background2 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-primary text-sm">{member.role}</p>
                      </div>
                      <Link href={`/portfolio/${member.name.toLowerCase()}`} className="text-primary ">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Process */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Development Process</h3>
              <div className="bg-background2 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Methodology</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Agile/Scrum methodology</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>2-week sprint cycles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Daily standup meetings</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Sprint reviews & retrospectives</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Tools & Collaboration</h4>
                    <ul className="space-y-3 ">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Git version control</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Jira for project management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Slack for communication</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Figma for design collaboration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Project Timeline</h3>
              <div className="bg-background2 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium ">Project Duration</span>
                    <span className="text-primary">{project.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium ">Team Size</span>
                    <span className="text-primary">{project.team}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium ">Year</span>
                    <span className="text-primary">{project.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium ">Status</span>
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">{project.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <button className="flex items-center space-x-2 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <Link href="/projects">
              <span>Back to Projects</span>
              </Link>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-primary rounded-full text-white text-sm font-medium">
                  {project.status}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-primary mb-2">{project.title}</h1>
              <p className="text-xl mb-6">{project.subtitle}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{project.team}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  className="primaryBtn"
                >
                  <Play className="w-5 h-5" />
                  <span>Live Demo</span>
                </button>
                <button className="SecondaryBtn">
                  <div className='flex items-center gap-2'>
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <img
                  src={project.images}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-y">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                    ? 'text-primary'
                    : 'hover:text-primary'
                  }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProjectDetailPage;