
import React from 'react';
import MobileHeader from '@/components/MobileHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Timetable = () => {
  // Mock data for timetable
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const timetableData = {
    'Monday': [
      { time: '09:00 - 10:30', title: 'Data Structures', location: 'Room 201' },
      { time: '11:00 - 12:30', title: 'Web Development', location: 'Lab 104' },
      { time: '14:00 - 15:30', title: 'Office Hours', location: 'Office 305' },
    ],
    'Tuesday': [
      { time: '08:30 - 10:00', title: 'Machine Learning', location: 'Room 102' },
      { time: '13:00 - 14:30', title: 'Project Supervision', location: 'Meeting Room 2' },
    ],
    'Wednesday': [
      { time: '09:00 - 10:30', title: 'Database Systems', location: 'Lab 203' },
      { time: '11:00 - 12:30', title: 'Department Meeting', location: 'Conference Room' },
      { time: '15:00 - 16:30', title: 'Mobile Dev Workshop', location: 'Lab 104' },
    ],
    'Thursday': [
      { time: '10:00 - 11:30', title: 'PFE Supervision', location: 'Office 305' },
      { time: '13:30 - 15:00', title: 'Software Engineering', location: 'Room 201' },
    ],
    'Friday': [
      { time: '09:00 - 10:30', title: 'Web Development', location: 'Lab 104' },
      { time: '11:00 - 12:30', title: 'Faculty Meeting', location: 'Main Hall' },
      { time: '14:00 - 15:30', title: 'Office Hours', location: 'Office 305' },
    ]
  };

  return (
    <div className="app-container">
      <MobileHeader title="Weekly Timetable" />
      
      <main className="app-content">
        <Tabs defaultValue="Monday">
          <TabsList className="grid grid-cols-5 mb-4">
            {weekDays.map(day => (
              <TabsTrigger key={day} value={day} className="text-xs sm:text-sm">
                {day.substring(0, 3)}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {weekDays.map(day => (
            <TabsContent key={day} value={day}>
              <h2 className="text-lg font-medium mb-3">{day}</h2>
              
              {timetableData[day as keyof typeof timetableData].length > 0 ? (
                <div className="space-y-3">
                  {timetableData[day as keyof typeof timetableData].map((session, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="min-w-[100px] text-teacher-primary font-medium">
                          {session.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{session.title}</h3>
                          <p className="text-sm text-gray-500">{session.location}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-6 text-center text-gray-500">
                  No sessions scheduled for this day
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Timetable;
