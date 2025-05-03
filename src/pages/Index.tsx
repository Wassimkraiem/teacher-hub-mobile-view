
import React from 'react';
import MobileHeader from '@/components/MobileHeader';
import BottomNavigation from '@/components/BottomNavigation';
import StatCard from '@/components/dashboard/StatCard';
import UpcomingSession from '@/components/dashboard/UpcomingSession';
import { Calendar, ClipboardList, BookOpen, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Index = () => {
  // Mock data for the dashboard
  const upcomingSessions = [
    {
      id: 1,
      title: 'Web Development - React Hooks',
      time: '10:00 - 11:30 AM',
      location: 'Room 201, Building A',
      type: 'session' as const,
    },
    {
      id: 2,
      title: 'Mobile App Project Supervision',
      time: '1:00 - 2:30 PM',
      location: 'Lab 304, IT Department',
      type: 'project' as const,
    },
    {
      id: 3,
      title: 'Final Year Project - AI Implementation',
      time: 'Tomorrow, 9:00 AM',
      location: 'Meeting Room 3',
      type: 'pfe' as const,
    },
  ];

  return (
    <div className="app-container">
      <MobileHeader title="Teacher Dashboard" />
      
      <main className="app-content">
        <section className="mb-6">
          <h2 className="text-lg font-medium mb-3">Overview</h2>
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              title="Sessions"
              value="12"
              icon={<ClipboardList size={18} />}
            />
            <StatCard
              title="Projects"
              value="8"
              icon={<BookOpen size={18} />}
              color="bg-green-100 text-green-600"
            />
            <StatCard
              title="PFE Projects"
              value="5"
              icon={<User size={18} />}
              color="bg-amber-100 text-amber-600"
            />
            <StatCard
              title="Weekly Hours"
              value="18h"
              icon={<Calendar size={18} />}
              color="bg-purple-100 text-purple-600"
            />
          </div>
        </section>

        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium">Today's Schedule</h2>
            <a href="/timetable" className="text-sm text-teacher-primary">View all</a>
          </div>
          <Card className="p-4 bg-white">
            <div className="flex justify-between mb-2 pb-2 border-b">
              <span className="text-sm text-gray-500">8:00 AM</span>
              <span className="text-sm font-medium">Office Hours</span>
            </div>
            <div className="flex justify-between mb-2 pb-2 border-b">
              <span className="text-sm text-gray-500">10:00 AM</span>
              <span className="text-sm font-medium">Web Development Class</span>
            </div>
            <div className="flex justify-between mb-2 pb-2 border-b">
              <span className="text-sm text-gray-500">1:00 PM</span>
              <span className="text-sm font-medium">Project Supervision</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">3:30 PM</span>
              <span className="text-sm font-medium">Department Meeting</span>
            </div>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium">Upcoming Activities</h2>
          </div>
          <div className="space-y-3">
            {upcomingSessions.map(session => (
              <UpcomingSession
                key={session.id}
                title={session.title}
                time={session.time}
                location={session.location}
                type={session.type}
              />
            ))}
          </div>
        </section>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
