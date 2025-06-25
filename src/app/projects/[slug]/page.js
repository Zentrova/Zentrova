'use client';
import React, { useEffect, useState } from 'react';
import OverviewContent from '@/components/project/overviewContent';
import CaseStudyContent from '@/components/project/CaseStudyContent';
import TeamContent from '@/components/project/teamContent';
import Tabs from '@/components/project/tabs';
import Header from '@/components/project/header';
import { useParams } from 'next/navigation';

export default function ProjectPreview() {
  const [activeTab, setActiveTab] = useState('overview');
  const [projectDetail,setProjectDetail]=useState({});
  const params = useParams();
  const slug=params.slug;
   const blog = async (slug) => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_BASE}/posts/slug:${slug}`
      );
      if (!result.ok) {
        throw new Error("Blog not found");
      }
      
    const data = await result.json();
    console.log("dataa",data)
    setProjectDetail(data)
    } catch (error) {
      console.error("Error fetching blog:", error.message);
       return null;
    }
  }
  const project = {
    title: "E-Commerce Platform",
    subtitle: " Full-Stack Enterprise Solution",
    description: "A comprehensive e-commerce platform designed to handle high-traffic retail operations...",
    category: "Web Development",
    status: "Completed",
    duration: "8 months",
    team: "5 developers",
    year: "2024",
    images: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker", "Redis", "GraphQL"],
    teamMembers: [
      { name: "Prabhjot", role: "Frontend Lead", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" },
      { name: "Sumit", role: "Backend Lead", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" },
      { name: "Yashpal", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" }
    ],
    metrics: [
      { label: "Performance Improvement", value: "75%", icon: require('lucide-react').TrendingUp },
      { label: "User Satisfaction", value: "4.8/5", icon: require('lucide-react').Star },
      { label: "Load Time Reduction", value: "60%", icon: require('lucide-react').Clock },
      { label: "Conversion Rate", value: "+45%", icon: require('lucide-react').Target }
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

  const sections = [
    {
      id: 'poc',
      title: 'What Is a Proof of Concept (POC)?',
      desc: 'A Proof of Concept (POC) is the earliest validation of an idea...',
    },
    {
      id: 'prototype',
      title: 'What Is a Prototype?',
      img: 'https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg?semt=ais_hybrid&w=740',
      desc: 'A Prototype is an interactive sample of your product...',
    },
    // Add more if needed
  ];
  useEffect(()=>{
    if(slug){
      blog(slug)
    }
  },[])

  return (
    <div>
      <Header project={project} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'overview' && <OverviewContent project={project} />}
        {activeTab === 'case-study' && <CaseStudyContent sections={sections} project={projectDetail}/>}
        {activeTab === 'team' && <TeamContent project={project} />}
      </div>
    </div>
  );
}
