// context/projectContext.js
'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState([]);
  const [proLoading, setProLoading] = useState(true);

  const fetchProject = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}project`);
      const data = await res.json();
      setProject(data.data || []);
    } catch (error) {
    } finally {
      setProLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <ProjectContext.Provider value={{ project, proLoading }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
