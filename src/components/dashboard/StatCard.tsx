
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  color = "bg-teacher-muted text-teacher-primary", 
  className 
}) => {
  return (
    <Card className={cn("p-4 flex items-center", className)}>
      <div className={cn("p-3 rounded-full mr-3", color)}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </Card>
  );
};

export default StatCard;
