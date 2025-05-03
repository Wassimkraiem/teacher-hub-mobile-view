
import React from 'react';
import { Card } from '@/components/ui/card';
import { ClipboardList, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UpcomingSessionProps {
  title: string;
  time: string;
  location?: string;
  className?: string;
  type: 'session' | 'project' | 'pfe';
}

const UpcomingSession: React.FC<UpcomingSessionProps> = ({ 
  title, 
  time, 
  location, 
  className,
  type 
}) => {
  const getTypeStyles = () => {
    switch(type) {
      case 'session':
        return "bg-teacher-muted text-teacher-primary";
      case 'project':
        return "bg-green-100 text-green-600";
      case 'pfe':
        return "bg-amber-100 text-amber-600";
      default:
        return "bg-teacher-muted text-teacher-primary";
    }
  };

  const getTypeIcon = () => {
    switch(type) {
      case 'session':
        return <ClipboardList size={16} />;
      case 'project':
        return <BookIcon size={16} />;
      case 'pfe':
        return <UserIcon size={16} />;
      default:
        return <ClipboardList size={16} />;
    }
  };

  return (
    <Card className={cn("p-4", className)}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <span className={cn("p-1 rounded-md mr-2", getTypeStyles())}>
            {getTypeIcon()}
          </span>
          <span className="text-xs capitalize">{type}</span>
        </div>
        <div className="flex items-center text-gray-500 text-xs">
          <Clock size={14} className="mr-1" />
          {time}
        </div>
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      {location && <p className="text-sm text-gray-500">{location}</p>}
    </Card>
  );
};

// Simple icons for the components
const BookIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const UserIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default UpcomingSession;
