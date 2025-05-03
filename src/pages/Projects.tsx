
import React from 'react';
import MobileHeader from '@/components/MobileHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  // Mock data for project cards
  const ongoingProjects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description: "A mobile application for online shopping with React Native",
      students: ["Ahmed M.", "Sarah L.", "John D."],
      nextMeeting: "May 6, 2:00 PM",
      progress: 65,
      status: "In progress"
    },
    {
      id: 2,
      title: "Machine Learning for Image Recognition",
      description: "Implementation of ML algorithms for image classification",
      students: ["Alex J.", "Maria R."],
      nextMeeting: "May 8, 10:00 AM",
      progress: 40,
      status: "In progress"
    },
    {
      id: 3,
      title: "Hospital Management System",
      description: "Web-based system for managing hospital operations",
      students: ["David K.", "Emma T.", "Michael B."],
      nextMeeting: "May 7, 1:30 PM",
      progress: 70,
      status: "In progress"
    }
  ];

  const completedProjects = [
    {
      id: 4,
      title: "Smart Home Dashboard",
      description: "IoT dashboard for monitoring and controlling smart home devices",
      students: ["Thomas L.", "Sophie M."],
      nextMeeting: null,
      progress: 100,
      status: "Completed"
    },
    {
      id: 5,
      title: "Student Attendance System",
      description: "Mobile app for tracking student attendance with QR codes",
      students: ["Laura G.", "Mark H.", "Diana P."],
      nextMeeting: null,
      progress: 100,
      status: "Completed"
    }
  ];

  // ProgressBar component
  const ProgressBar = ({ progress }: { progress: number }) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-teacher-primary h-2 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  // Project card component
  const ProjectCard = ({ project }: { project: typeof ongoingProjects[0] }) => {
    return (
      <Card className="p-4 mb-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">{project.title}</h3>
          <Badge
            variant="outline"
            className={project.status === "Completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}
          >
            {project.status}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
        
        {project.progress < 100 && (
          <div className="mb-3 space-y-1">
            <div className="flex justify-between text-xs">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <ProgressBar progress={project.progress} />
          </div>
        )}
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Users size={16} className="mr-2" />
          <span>Students: {project.students.join(", ")}</span>
        </div>
        
        {project.nextMeeting && (
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>Next meeting: {project.nextMeeting}</span>
          </div>
        )}
      </Card>
    );
  };

  return (
    <div className="app-container">
      <MobileHeader title="Student Projects" />
      
      <main className="app-content">
        <Tabs defaultValue="ongoing">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ongoing">
            {ongoingProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>
          
          <TabsContent value="completed">
            {completedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Projects;
