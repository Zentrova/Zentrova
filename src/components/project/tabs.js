'use client';
import { Target, Star, Users } from 'lucide-react';

const tabList = [
  { id: 'overview', label: 'Overview', icon: Target },
  { id: 'case-study', label: 'Case Study', icon: Star },
  { id: 'team', label: 'Team & Process', icon: Users },
];

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="border-y">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex space-x-8 overflow-x-auto">
        {tabList.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 py-4 px-2 font-medium transition-colors whitespace-nowrap ${activeTab === tab.id ? 'text-primary' : 'hover:text-primary'}`}
          >
            <tab.icon className="w-5 h-5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Tabs;
