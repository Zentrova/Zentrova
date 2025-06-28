'use client';
import Link from 'next/link';
import { CheckCircle, ExternalLink } from 'lucide-react';

const TeamContent = ({ project }) => (
  <div className="space-y-8">
    <div>
      <h3 className="text-2xl font-bold mb-6 text-primary">Project Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.members?.map((member, index) => (
          <div key={index} className="bg-background2 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <img src={member?.profileImage} alt={member?.name} className="w-16 h-16 rounded-full object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold">{member?.name}</h4>
                <p className="text-primary text-sm">{member?.skills}</p>
              </div>
              <Link href={`/portfolio/${member?.name.toLowerCase()}`} className="text-primary">
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-6 text-primary">Development Process</h3>
      <div className="bg-background2 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Methodology</h4>
            <ul className="space-y-3">
              {project.process?.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tools & Collaboration</h4>
            <ul className="space-y-3">
              {project.process?.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamContent;
