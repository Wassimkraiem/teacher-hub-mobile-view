
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SessionCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  studentCount?: number;
  status?: 'upcoming' | 'ongoing' | 'completed';
  className?: string;
}

const SessionCard: React.FC<SessionCardProps> = ({
  title,
  date,
  time,
  location,
  studentCount,
  status = 'upcoming',
  className,
}) => {
  const statusColors = {
    upcoming: "bg-blue-100 text-blue-700",
    ongoing: "bg-green-100 text-green-700",
    completed: "bg-gray-100 text-gray-700",
  };

  return (
    <Card className={cn("p-4", className)}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{title}</h3>
        <Badge 
          variant="outline" 
          className={cn("capitalize", statusColors[status])}
        >
          {status}
        </Badge>
      </div>
      
      <div className="space-y-2 mt-3">
        <div className="flex items-center text-sm text-gray-600">
          <Clock size={16} className="mr-2" />
          <span>{date} • {time}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>
        
        {studentCount && (
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2" />
            <span>{studentCount} students</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SessionCard;
