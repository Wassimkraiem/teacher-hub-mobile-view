
import React from 'react';
import MobileHeader from '@/components/MobileHeader';
import BottomNavigation from '@/components/BottomNavigation';
import SessionCard from '@/components/sessions/SessionCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Sessions = () => {
  // Mock data for sessions
  const upcomingSessions = [
    {
      id: 1,
      title: 'Web Development - React Hooks',
      date: 'Today',
      time: '10:00 - 11:30 AM',
      location: 'Room 201, Building A',
      studentCount: 24,
      status: 'upcoming' as const,
    },
    {
      id: 2,
      title: 'Database Systems',
      date: 'Tomorrow',
      time: '9:00 - 10:30 AM',
      location: 'Lab 104, IT Building',
      studentCount: 18,
      status: 'upcoming' as const,
    },
    {
      id: 3,
      title: 'Mobile App Development',
      date: 'May 6',
      time: '1:00 - 2:30 PM',
      location: 'Room 305, Engineering Building',
      studentCount: 15,
      status: 'upcoming' as const,
    },
  ];

  const ongoingSessions = [
    {
      id: 4,
      title: 'Software Engineering Principles',
      date: 'Today',
      time: '8:00 - 9:30 AM',
      location: 'Room 101, CS Department',
      studentCount: 22,
      status: 'ongoing' as const,
    },
  ];

  const completedSessions = [
    {
      id: 5,
      title: 'Data Structures and Algorithms',
      date: 'Yesterday',
      time: '10:00 - 11:30 AM',
      location: 'Room 201, Building A',
      studentCount: 26,
      status: 'completed' as const,
    },
    {
      id: 6,
      title: 'Machine Learning Fundamentals',
      date: 'May 1',
      time: '1:00 - 2:30 PM',
      location: 'Room 305, Engineering Building',
      studentCount: 20,
      status: 'completed' as const,
    },
  ];

  return (
    <div className="app-container">
      <MobileHeader title="Sessions" />
      
      <main className="app-content">
        <Tabs defaultValue="upcoming">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-3">
            {upcomingSessions.map(session => (
              <SessionCard
                key={session.id}
                title={session.title}
                date={session.date}
                time={session.time}
                location={session.location}
                studentCount={session.studentCount}
                status={session.status}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="ongoing" className="space-y-3">
            {ongoingSessions.map(session => (
              <SessionCard
                key={session.id}
                title={session.title}
                date={session.date}
                time={session.time}
                location={session.location}
                studentCount={session.studentCount}
                status={session.status}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-3">
            {completedSessions.map(session => (
              <SessionCard
                key={session.id}
                title={session.title}
                date={session.date}
                time={session.time}
                location={session.location}
                studentCount={session.studentCount}
                status={session.status}
              />
            ))}
          </TabsContent>
        </Tabs>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Sessions;
