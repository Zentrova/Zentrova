'use client';
import { CheckCircle } from 'lucide-react';

const OverviewContent = ({ project }) => (
  <div className="space-y-8">
    <div className="bg-background2 rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-4 text-primary">Project Summary</h3>
      <p className="text-lg leading-relaxed mb-6">{project?.summary}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* {project.metrics.map((metric, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center mb-2">
              <metric.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="text-sm text-gray-500">{metric.label}</div>
          </div>
        ))} */}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-6">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project?.keyFeatures?.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3 p-4 bg-background2 rounded-lg border border-gray-200 hover:border-primary transition-colors">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
      <div className="flex flex-wrap gap-3">
        {project?.technologies?.map((tech, index) => (
          <span key={index} className="px-4 py-2 bg-header rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default OverviewContent;