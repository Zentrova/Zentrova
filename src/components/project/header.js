'use client';
import { ArrowLeft, Calendar, Users } from 'lucide-react';
import Link from 'next/link';

const Header = ({project,wpData}) => (
  <div className="max-w-7xl mx-auto px-6 py-8">
    <div className="flex items-center space-x-4 mb-6">
      <Link href="/projects" className="flex items-center space-x-2 hover:text-primary transition-colors">
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Projects</span>
      </Link>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
            {project?.tags?.map(tag=>tag)}
          </span>
          {/* <span className="px-3 py-1 bg-primary rounded-full text-white text-sm font-medium">
            {project.status}
          </span> */}
        </div>
        <h1 className="text-4xl font-bold text-primary mb-2">{project?.title}</h1>
        <p className="text-xl mb-6">{project?.subTitle}</p>
        <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
          {/* <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{project.duration}</span>
          </div> */}
          {/* <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>{project.team}</span>
          </div> */}
        </div>
      </div>
      <div>
        <img
          src={wpData?.featured_image}
          alt={project?.title}
          className="w-full h-80 object-cover rounded-2xl"
        />
      </div>
    </div>
  </div>
);

export default Header;
