import React, { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import type { Appointment, Reminder } from '../types';
import { AlertIcon } from '../constants';

const DashboardPage: React.FC = () => {
  const { isAuthenticated, t, openLoginModal } = useAppContext();

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem('appointments');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse appointments from localStorage", error);
      return [];
    }
  });

  const [reminders, setReminders] = useState<Reminder[]>(() => {
    try {
      const saved = localStorage.getItem('reminders');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse reminders from localStorage", error);
      return [];
    }
  });

  const [newAppointment, setNewAppointment] = useState({ doctor: '', date: '', time: '' });
  const [newReminder, setNewReminder] = useState({ text: '', datetime: '' });
  const [notificationPermission, setNotificationPermission] = useState('default');

  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  }, []);
  
  useEffect(() => {
    if (isAuthenticated) {
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }
  }, [appointments, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
        localStorage.setItem('reminders', JSON.stringify(reminders));
    }
  }, [reminders, isAuthenticated]);

  const handleRequestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        setNotificationPermission(permission);
      });
    }
  };

  const checkNotifications = useCallback(() => {
    if (notificationPermission !== 'granted' || !isAuthenticated) return;
    
    const now = new Date().getTime();
    const ONE_HOUR_IN_MS = 60 * 60 * 1000;

    // Check reminders
    const dueReminders = reminders.filter(r => new Date(r.datetime).getTime() <= now);
    if (dueReminders.length > 0) {
      dueReminders.forEach(r => {
        new Notification('Reminder', { body: r.text, icon: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%233b82f6;%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class=%27cls-1%27 d=%27M83.43,45.13c-2.31-13.45-13.73-23.77-27.18-23.77H43.75c-13.45,0-24.87,10.32-27.18,23.77H12.5v28h4.07c2.31,13.45,13.73,23.77,27.18,23.77h12.5c13.45,0,24.87-10.32,27.18-23.77H87.5v-28H83.43Z%27/%3E%3Ccircle class=%27cls-2%27 cx=%2743.75%27 cy=%2746.88%27 r=%275%27/%3E%3Ccircle class=%27cls-2%27 cx=%2762.5%27 cy=%2746.88%27 r=%275%27/%3E%3Cpath class=%27cls-2%27 d=%27M43.75,62.5s6.25,5,18.75,0c0,0-6.25-2.5-18.75,0Z%27/%3E%3C/svg%3E' });
      });
      setReminders(prev => prev.filter(r => !dueReminders.some(due => due.id === r.id)));
    }

    // Check appointments
    const upcomingAppointments = appointments.filter(app => {
      if (app.notified) return false;
      const appTime = new Date(`${app.date}T${app.time}`).getTime();
      const timeUntil = appTime - now;
      return timeUntil > 0 && timeUntil <= ONE_HOUR_IN_MS;
    });

    if (upcomingAppointments.length > 0) {
      upcomingAppointments.forEach(app => {
        new Notification('Appointment Reminder', {
          body: `Your appointment with ${app.doctor} is in about an hour.`,
          icon: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%233b82f6;%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class=%27cls-1%27 d=%27M83.43,45.13c-2.31-13.45-13.73-23.77-27.18-23.77H43.75c-13.45,0-24.87,10.32-27.18,23.77H12.5v28h4.07c2.31,13.45,13.73,23.77,27.18,23.77h12.5c13.45,0,24.87-10.32,27.18-23.77H87.5v-28H83.43Z%27/%3E%3Ccircle class=%27cls-2%27 cx=%2743.75%27 cy=%2746.88%27 r=%275%27/%3E%3Ccircle class=%27cls-2%27 cx=%2762.5%27 cy=%2746.88%27 r=%275%27/%3E%3Cpath class=%27cls-2%27 d=%27M43.75,62.5s6.25,5,18.75,0c0,0-6.25-2.5-18.75,0Z%27/%3E%3C/svg%3E'
        });
      });
      setAppointments(prev =>
        prev.map(app =>
          upcomingAppointments.some(up => up.id === app.id) ? { ...app, notified: true } : app
        )
      );
    }
  }, [reminders, appointments, notificationPermission, isAuthenticated]);

  useEffect(() => {
    const interval = setInterval(checkNotifications, 10000); // Check every 10 seconds
    return () => clearInterval(interval);
  }, [checkNotifications]);

  const handleAddAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAppointment.doctor && newAppointment.date && newAppointment.time) {
      setAppointments([...appointments, { ...newAppointment, id: Date.now() }]);
      setNewAppointment({ doctor: '', date: '', time: '' });
    }
  };
  
  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReminder.text && newReminder.datetime) {
      setReminders([...reminders, { ...newReminder, id: Date.now() }]);
      setNewReminder({ text: '', datetime: '' });
    }
  };

  const NotificationBanner = () => {
    if (notificationPermission === 'granted') return null;

    return (
      <div className="bg-gray-700/50 border border-gray-600 p-4 rounded-lg mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <AlertIcon />
          <p className="ml-3 text-gray-300">
            {notificationPermission === 'denied'
              ? 'Notifications are blocked. Please enable them in your browser settings for alerts.'
              : 'Enable notifications to get alerts for your appointments and reminders.'}
          </p>
        </div>
        {notificationPermission === 'default' && (
          <button
            onClick={handleRequestNotificationPermission}
            className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-md hover:bg-teal-700"
          >
            Enable
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 relative">
       {!isAuthenticated && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-lg p-4">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">{t('login_prompt')}</h2>
          <button 
            onClick={openLoginModal} 
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('login')}
          </button>
        </div>
      )}
      <div className={!isAuthenticated ? 'blur-sm pointer-events-none' : ''}>
        <h1 className="text-3xl font-bold text-white mb-8">My Dashboard</h1>
        <NotificationBanner />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Appointments Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col">
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">{t('my_appointments')}</h2>
            <div className="space-y-4 mb-6 flex-grow max-h-80 overflow-y-auto pr-2">
              {appointments.length > 0 ? appointments.map(app => (
                <div key={app.id} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                  <p className="font-bold text-white">{app.doctor}</p>
                  <p className="text-sm text-gray-400">{new Date(app.date).toDateString()} at {app.time}</p>
                </div>
              )) : <p className="text-gray-500">No upcoming appointments.</p>}
            </div>
            <form onSubmit={handleAddAppointment} className="space-y-4 mt-auto">
              <h3 className="text-lg font-medium text-gray-200 pt-4 border-t border-gray-700">{t('book_appointment')}</h3>
              <input type="text" placeholder={t('doctor_name')} value={newAppointment.doctor} onChange={e => setNewAppointment({...newAppointment, doctor: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
              <div className="flex gap-4">
                <input type="date" value={newAppointment.date} onChange={e => setNewAppointment({...newAppointment, date: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
                <input type="time" value={newAppointment.time} onChange={e => setNewAppointment({...newAppointment, time: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700">{t('book_appointment')}</button>
            </form>
          </div>

          {/* Reminders Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">{t('my_reminders')}</h2>
            <div className="space-y-4 mb-6 flex-grow max-h-80 overflow-y-auto pr-2">
              {reminders.length > 0 ? reminders.map(rem => (
                <div key={rem.id} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                  <p className="font-bold text-white">{rem.text}</p>
                  <p className="text-sm text-gray-400">{new Date(rem.datetime).toLocaleString()}</p>
                </div>
              )) : <p className="text-gray-500">No reminders set.</p>}
            </div>
            <form onSubmit={handleAddReminder} className="space-y-4 mt-auto">
              <h3 className="text-lg font-medium text-gray-200 pt-4 border-t border-gray-700">{t('add_reminder')}</h3>
              <input type="text" placeholder={t('reminder_text')} value={newReminder.text} onChange={e => setNewReminder({...newReminder, text: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
              <input type="datetime-local" value={newReminder.datetime} onChange={e => setNewReminder({...newReminder, datetime: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
              <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">{t('add_reminder')}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;