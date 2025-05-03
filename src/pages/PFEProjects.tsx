
import React from 'react';
import MobileHeader from '@/components/MobileHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, FileText, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PFEProjects = () => {
  // Mock data for PFE projects
  const ongoingPFEProjects = [
    {
      id: 1,
      title: "AI-Powered Recommendation System",
      student: "Mohammed Alami",
      stage: "Implementation",
      nextReview: "May 10, 2023",
      lastUpdated: "2 days ago",
      status: "on-track",
    },
    {
      id: 2,
      title: "Blockchain for Supply Chain Management",
      student: "Leila Bennani",
      stage: "Research",
      nextReview: "May 15, 2023",
      lastUpdated: "3 days ago",
      status: "at-risk",
    },
    {
      id: 3,
      title: "IoT Smart Agriculture System",
      student: "Karim Idrissi",
      stage: "Testing",
      nextReview: "May 8, 2023",
      lastUpdated: "Yesterday",
      status: "on-track",
    }
  ];

  const completedPFEProjects = [
    {
      id: 4,
      title: "Machine Learning for Medical Diagnosis",
      student: "Yasmine El Mansouri",
      grade: "Excellent",
      completionDate: "April 15, 2023",
      status: "completed",
    },
    {
      id: 5,
      title: "Cloud-Based ERP System",
      student: "Omar Tazi",
      grade: "Very Good",
      completionDate: "April 20, 2023",
      status: "completed",
    }
  ];

  // PFE project card component for ongoing projects
  const OngoingPFECard = ({ project }: { project: typeof ongoingPFEProjects[0] }) => {
    const statusColors = {
      'on-track': 'bg-green-100 text-green-700',
      'at-risk': 'bg-red-100 text-red-700',
      'delayed': 'bg-amber-100 text-amber-700',
    };
    
    const statusLabel = {
      'on-track': 'On Track',
      'at-risk': 'At Risk',
      'delayed': 'Delayed',
    };

    return (
      <Card className="p-4 mb-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">{project.title}</h3>
          <Badge 
            variant="outline" 
            className={statusColors[project.status as keyof typeof statusColors]}
          >
            {statusLabel[project.status as keyof typeof statusLabel]}
          </Badge>
        </div>
        
        <div className="space-y-2 mt-3">
          <div className="flex items-center text-sm text-gray-600">
            <User size={16} className="mr-2" />
            <span>Student: {project.student}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <FileText size={16} className="mr-2" />
            <span>Stage: {project.stage}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>Next Review: {project.nextReview}</span>
          </div>
        </div>
        
        <div className="mt-3 text-xs text-gray-500">
          Last updated: {project.lastUpdated}
        </div>
      </Card>
    );
  };

  // PFE project card component for completed projects
  const CompletedPFECard = ({ project }: { project: typeof completedPFEProjects[0] }) => {
    return (
      <Card className="p-4 mb-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">{project.title}</h3>
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Completed
          </Badge>
        </div>
        
        <div className="space-y-2 mt-3">
          <div className="flex items-center text-sm text-gray-600">
            <User size={16} className="mr-2" />
            <span>Student: {project.student}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <FileText size={16} className="mr-2" />
            <span>Grade: {project.grade}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>Completed: {project.completionDate}</span>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="app-container">
      <MobileHeader title="PFE Projects" />
      
      <main className="app-content">
        <Tabs defaultValue="ongoing">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ongoing">
            {ongoingPFEProjects.map(project => (
              <OngoingPFECard key={project.id} project={project} />
            ))}
          </TabsContent>
          
          <TabsContent value="completed">
            {completedPFEProjects.map(project => (
              <CompletedPFECard key={project.id} project={project} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default PFEProjects;
