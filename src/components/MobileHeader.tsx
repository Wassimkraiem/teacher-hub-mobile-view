
import React from 'react';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface MobileHeaderProps {
  title: string;
  className?: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ title, className }) => {
  return (
    <header className={cn("sticky top-0 z-10 bg-white border-b border-gray-100 p-4 flex items-center justify-between", className)}>
      <div className="flex items-center">
        <Avatar className="h-8 w-8 mr-3">
          <AvatarImage src="https://github.com/shadcn.png" alt="Teacher" />
          <AvatarFallback>TC</AvatarFallback>
        </Avatar>
        <h1 className="font-medium text-lg">{title}</h1>
      </div>
      <button className="relative p-2 rounded-full hover:bg-gray-100">
        <Bell size={20} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
    </header>
  );
};

export default MobileHeader;
