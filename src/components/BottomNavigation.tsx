
import { Calendar, ClipboardList, Home, BookOpen, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: ClipboardList, label: 'Sessions', path: '/sessions' },
    { icon: BookOpen, label: 'Projects', path: '/projects' },
    { icon: User, label: 'PFE', path: '/pfe' },
    { icon: Calendar, label: 'Timetable', path: '/timetable' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200 py-2 px-4 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={cn(
                "flex flex-col items-center py-1 px-3 rounded-lg",
                isActive 
                  ? "text-teacher-primary" 
                  : "text-gray-500 hover:text-teacher-primary"
              )}
            >
              <item.icon size={20} className={cn(isActive ? "text-teacher-primary" : "text-gray-500")} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
