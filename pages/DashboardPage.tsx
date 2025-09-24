import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import type { Appointment, Reminder } from '../types';

const DashboardPage: React.FC = () => {
  const { isAuthenticated, t } = useAppContext();
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, doctor: 'Dr. Sharma', date: '2024-08-15', time: '10:00 AM' },
  ]);
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, text: 'Take Vitamin D supplement', datetime: '2024-08-12 09:00' },
  ]);

  const [newAppointment, setNewAppointment] = useState({ doctor: '', date: '', time: '' });
  const [newReminder, setNewReminder] = useState({ text: '', datetime: '' });

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


  if (!isAuthenticated) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-300">{t('login_prompt')}</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-white mb-8">My Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Appointments Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">{t('my_appointments')}</h2>
          <div className="space-y-4 mb-6">
            {appointments.map(app => (
              <div key={app.id} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="font-bold text-white">{app.doctor}</p>
                <p className="text-sm text-gray-400">{new Date(app.date).toDateString()} at {app.time}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleAddAppointment} className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">{t('book_appointment')}</h3>
            <input type="text" placeholder={t('doctor_name')} value={newAppointment.doctor} onChange={e => setNewAppointment({...newAppointment, doctor: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
            <div className="flex gap-4">
              <input type="date" value={newAppointment.date} onChange={e => setNewAppointment({...newAppointment, date: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
              <input type="time" value={newAppointment.time} onChange={e => setNewAppointment({...newAppointment, time: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700">{t('book_appointment')}</button>
          </form>
        </div>

        {/* Reminders Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">{t('my_reminders')}</h2>
          <div className="space-y-4 mb-6">
            {reminders.map(rem => (
              <div key={rem.id} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="font-bold text-white">{rem.text}</p>
                <p className="text-sm text-gray-400">{new Date(rem.datetime).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleAddReminder} className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">{t('add_reminder')}</h3>
            <input type="text" placeholder={t('reminder_text')} value={newReminder.text} onChange={e => setNewReminder({...newReminder, text: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
            <input type="datetime-local" value={newReminder.datetime} onChange={e => setNewReminder({...newReminder, datetime: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
            <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">{t('add_reminder')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;