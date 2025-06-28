'use client';
import React, { useEffect, useState } from 'react';
import OverviewContent from '@/components/project/overviewContent';
import CaseStudyContent from '@/components/project/CaseStudyContent';
import TeamContent from '@/components/project/teamContent';
import Tabs from '@/components/project/tabs';
import Header from '@/components/project/header';
import { useParams } from 'next/navigation';
import { httpRequest } from '@/utils/httpRequest';
export default function ProjectPreview() {
  const [activeTab, setActiveTab] = useState('overview');
  const [projectDetail,setProjectDetail]=useState({});
  const [projectOverview,setProjectOverview]=useState({});
  const params = useParams();
  const slug=params.slug;
  const projectContent = async (slug) => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_BASE}/posts/slug:${slug}`
      );
      if (!result.ok) {
        throw new Error("Blog not found");
      }
      
    const data = await result.json();
    setProjectDetail(data)
    } catch (error) {
      console.error("Error fetching blog:", error.message);
       return null;
    }
  }
  const project= async(slug)=>{
    try {
      const response= await httpRequest({
        url:`project/${slug}`,
        method:'get',
      }
      )
      if(response?.success===true){
        setProjectOverview(response?.data)
      }
    } catch (error) {
      console.error("Error fetching project detail:", error.message);
      return null;
    }


  }


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
      projectContent(slug)
      project(slug)
    }
  },[])

  return (
    <div>
      <Header project={projectOverview} wpData={projectDetail}/>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'overview' && <OverviewContent project={projectOverview} />}
        {activeTab === 'case-study' && <CaseStudyContent sections={sections} project={projectDetail}/>}
        {activeTab === 'team' && <TeamContent project={projectOverview} />}
      </div>
    </div>
  );
}
