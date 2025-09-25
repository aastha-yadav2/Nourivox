import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { useNavigate } from 'react-router-dom';
import { 
    InfoIcon, PhoneIcon, BookmarkIcon, CopyIcon, ExternalLinkIcon, AdvancedAITechnologyIcon, 
    OurAimIcon, ScopeIcon, CalendarIcon, PrescriptionIcon, OtcIcon, WellnessIcon, FindPharmacyIcon, LocationIcon,
    UploadCloudIcon, CloseIcon, CheckCircleIcon, XCircleIcon, QuestionMarkCircleIcon, AlertIcon, FirstAidIcon, FitnessIcon, DietIcon,
    GeneralPhysicianIcon, DermatologistIcon, PsychiatristIcon, PediatricianIcon, ObstetricianGynecologistIcon, YouTubeIcon
} from '../constants';
import { useAppContext } from '../hooks/useAppContext';
import type { PrescriptionAnalysisResult, AnalysisHistoryItem, SymptomAnalysisResult, PharmacyInfo, Appointment, Reminder } from '../types';


const InfoCard: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
  <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-teal-400 mb-4">{title}</h2>
    <div className="text-gray-300 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export const RevolutionizingSection = () => {
  const { t } = useAppContext();

  const techPoints = [
    { title: t('about_tech_expert_team_title'), desc: t('about_tech_expert_team_desc') },
    { title: t('about_tech_patient_first_title'), desc: t('about_tech_patient_first_desc') },
    { title: t('about_tech_advanced_ai_title'), desc: t('about_tech_advanced_ai_desc') },
  ];

  const scopePoints = [
    { title: t('about_scope_current_title'), desc: t('about_scope_current_desc') },
    { title: t('about_scope_future_title'), desc: t('about_scope_future_desc') },
  ];

  return (
    <div className="py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">{t('about_rev_title')}</h2>
        <p className="text-lg text-gray-400">{t('about_rev_subtitle')}</p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Advanced AI Technology Card */}
        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 flex flex-col items-center text-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/40">
          <div className="mb-6"><AdvancedAITechnologyIcon /></div>
          <h3 className="text-xl font-semibold text-blue-400 mb-6">{t('about_tech_title')}</h3>
          <div className="space-y-4 text-left w-full">
            {techPoints.map((point, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg">
                <p className="font-semibold text-gray-200">{point.title}</p>
                <p className="text-sm text-gray-400">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Aim Card */}
        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 flex flex-col items-center text-center transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-900/40">
          <div className="mb-6"><OurAimIcon /></div>
          <h3 className="text-xl font-semibold text-green-400 mb-6">{t('about_aim_title')}</h3>
          <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg h-full flex items-center">
            <p className="text-gray-300">{t('about_aim_desc')}</p>
          </div>
        </div>
        
        {/* Scope Card */}
        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 flex flex-col items-center text-center transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-900/40">
          <div className="mb-6"><ScopeIcon /></div>
          <h3 className="text-xl font-semibold text-green-400 mb-6">{t('about_scope_title')}</h3>
          <div className="space-y-4 text-left w-full">
            {scopePoints.map((point, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg">
                <p className="font-semibold text-gray-200">{point.title}</p>
                <p className="text-sm text-gray-400">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="mt-16 max-w-4xl mx-auto">
         <div className="bg-gradient-to-r from-gray-800 to-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{t('join_revolution_title')}</h3>
            <p className="text-gray-400">{t('join_revolution_subtitle')}</p>
        </div>
      </div>
    </div>
  );
};


export const AboutPage: React.FC = () => (
  <main className="container mx-auto p-4 sm:p-6 lg:p-8">
    <RevolutionizingSection />
  </main>
);

export const ConsultationPage: React.FC = () => {
    const { t, isAuthenticated, openLoginModal } = useAppContext();
    const navigate = useNavigate();

    const consultationTypes = [
        {
            icon: <GeneralPhysicianIcon />,
            title: t('general_physician'),
            description: t('general_physician_desc'),
            color: 'bg-blue-500/20 text-blue-400',
        },
        {
            icon: <DermatologistIcon />,
            title: t('dermatologist'),
            description: t('dermatologist_desc'),
            color: 'bg-indigo-500/20 text-indigo-400',
        },
        {
            icon: <PsychiatristIcon />,
            title: t('psychiatrist'),
            description: t('psychiatrist_desc'),
            color: 'bg-emerald-500/20 text-emerald-400',
        },
        {
            icon: <PediatricianIcon />,
            title: t('pediatrician'),
            description: t('pediatrician_desc'),
            color: 'bg-rose-500/20 text-rose-400',
        },
        {
            icon: <ObstetricianGynecologistIcon />,
            title: t('obstetrician_gynecologist'),
            description: t('obstetrician_gynecologist_desc'),
            color: 'bg-pink-500/20 text-pink-400',
        },
    ];
    
    const handleBookNow = () => {
        if (isAuthenticated) {
            navigate('/dashboard');
        } else {
            openLoginModal();
        }
    };

    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">{t('consultation_title')}</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t('consultation_subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {consultationTypes.map((consultation, index) => (
                    <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center flex flex-col items-center shadow-lg hover:border-teal-500/50 transition-all duration-300">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${consultation.color} mb-6`}>
                            {consultation.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{consultation.title}</h3>
                        <p className="text-gray-400 text-sm flex-grow mb-6">{consultation.description}</p>
                        <button 
                            onClick={handleBookNow}
                            className="mt-auto w-full px-6 py-2 font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 transition-colors text-white"
                        >
                            {t('book_now')}
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
};

export const DoctorsPage: React.FC = () => {
    const doctors = [
      {
        "name": "Dr. Gurjeet Khurana",
        "specialty": "Anaesthesiology",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Anurag Rawat",
        "specialty": "Cardiology",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Deepak Goel",
        "specialty": "Neurology",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Malini Srivastava",
        "specialty": "Clinical Psychology",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Atul Agrawal",
        "specialty": "Orthopaedics",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Ranjeet Kumar",
        "specialty": "Neurosurgery",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Reshma Kaushik",
        "specialty": "Emergency Medicine",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Rashmi Jindal",
        "specialty": "Dermatology, Venereology and Leprosy",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Astha Agrawal",
        "specialty": "Pediatrics",
        "city": "Dehradun",
        "state": "Uttarakhand",
        "youtube": "https://www.youtube.com/@asthaagrawal05"
      },
      {
        "name": "Dr. Shruti Kumar",
        "specialty": "Pediatrics",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Madhusudan Garg",
        "specialty": "Pediatrics",
        "city": "Dehradun",
        "state": "Uttarakhand"
      },
      {
        "name": "Dr. Sumita Prabhakar",
        "specialty": "Obstetrics & Gynaecology",
        "city": "Dehradun",
        "state": "Uttarakhand",
        "youtube": "https://youtube.com/@sumitaprabhakar?si=tLgx324Ml-Diswg9"
      },
      {
        "name": "Dr. Neerja Bhatla",
        "specialty": "Obstetrics & Gynaecology",
        "city": "New Delhi",
        "state": "Delhi"
      }
    ];

    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Our Doctors</h1>
                <p className="text-lg text-gray-400">Find a specialist from our network of trusted healthcare professionals in your area.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:border-teal-500/80 hover:shadow-teal-900/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                        <div className="flex-grow">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 font-bold text-2xl mr-4 border-2 border-teal-500/30">
                                    {doctor.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
                                    <p className="text-teal-400">{doctor.specialty}</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 pt-4 mt-4 space-y-4">
                            <div className="flex items-center text-gray-400">
                                <LocationIcon />
                                <span className="ml-2">{doctor.city}, {doctor.state}</span>
                            </div>
                            {doctor.youtube && (
                                <a href={doctor.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
                                    <YouTubeIcon />
                                    <span className="ml-2">View on YouTube</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export const VaccinesPage: React.FC = () => {
    const { isAuthenticated, t, openLoginModal } = useAppContext();
    
    const vaccineSchedule = [
        { name: 'BCG (Bacillus Calmette-Guerin)', timing: 'At Birth' },
        { name: 'Hepatitis B (Birth Dose)', timing: 'At Birth' },
        { name: 'Oral Polio Vaccine (OPV 0)', timing: 'At Birth' },
        { name: 'Pentavalent Vaccine (1st Dose)', timing: '6 Weeks' },
        { name: 'Rotavirus Vaccine (1st Dose)', timing: '6 Weeks' },
        { name: 'Measles-Rubella (MR) (1st Dose)', timing: '9-12 Months' },
        { name: 'DPT Booster (1st Dose)', timing: '16-24 Months' },
        { name: 'Typhoid Conjugate Vaccine', timing: '9-12 Months' },
        { name: 'COVID-19 Vaccine', timing: 'As per Govt. guidelines' },
    ];

    const [appointments, setAppointments] = useState<Appointment[]>(() => {
        try {
          const saved = localStorage.getItem('vaccineAppointments');
          return saved ? JSON.parse(saved) : [];
        } catch (error) { return []; }
    });

    const [reminders, setReminders] = useState<Reminder[]>(() => {
        try {
          const saved = localStorage.getItem('vaccineReminders');
          return saved ? JSON.parse(saved) : [];
        } catch (error) { return []; }
    });

    const [newAppointment, setNewAppointment] = useState({ vaccine: '', doctor: '', date: '', time: '' });
    const [newReminder, setNewReminder] = useState({ vaccine: '', datetime: '' });
    const [notificationPermission, setNotificationPermission] = useState('default');
    
    useEffect(() => {
        if ('Notification' in window) {
          setNotificationPermission(Notification.permission);
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('vaccineAppointments', JSON.stringify(appointments));
        }
    }, [appointments, isAuthenticated]);

    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('vaccineReminders', JSON.stringify(reminders));
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

        const dueReminders = reminders.filter(r => new Date(r.datetime).getTime() <= now);
        if (dueReminders.length > 0) {
          dueReminders.forEach(r => {
            new Notification('Vaccine Reminder', { body: r.text });
          });
          setReminders(prev => prev.filter(r => !dueReminders.some(due => due.id === r.id)));
        }

        const upcomingAppointments = appointments.filter(app => {
          if (app.notified) return false;
          const appTime = new Date(`${app.date}T${app.time}`).getTime();
          const timeUntil = appTime - now;
          return timeUntil > 0 && timeUntil <= ONE_HOUR_IN_MS;
        });

        if (upcomingAppointments.length > 0) {
          upcomingAppointments.forEach(app => {
            new Notification('Vaccination Appointment Reminder', {
              body: `Your appointment for ${app.doctor} is in about an hour.`,
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
        if (newAppointment.vaccine && newAppointment.doctor && newAppointment.date && newAppointment.time) {
          const appointmentText = `${newAppointment.vaccine} with ${newAppointment.doctor}`;
          setAppointments([...appointments, { doctor: appointmentText, date: newAppointment.date, time: newAppointment.time, id: Date.now() }]);
          setNewAppointment({ vaccine: '', doctor: '', date: '', time: '' });
        }
    };
      
    const handleAddReminder = (e: React.FormEvent) => {
        e.preventDefault();
        if (newReminder.vaccine && newReminder.datetime) {
          const reminderText = `Reminder for ${newReminder.vaccine}`;
          setReminders([...reminders, { text: reminderText, datetime: newReminder.datetime, id: Date.now() }]);
          setNewReminder({ vaccine: '', datetime: '' });
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
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Immunization Schedule</h1>
                <p className="text-lg text-gray-400">Recommended vaccination schedule for children in India.</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg">
                    <ul className="divide-y divide-gray-700">
                        {vaccineSchedule.map((vaccine, index) => (
                            <li key={index} className="p-6 flex items-center justify-between hover:bg-gray-800 transition-colors">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{vaccine.name}</h3>
                                    <p className="text-gray-400 text-sm">Recommended Timing</p>
                                </div>
                                <div className="flex items-center bg-teal-500/20 text-teal-300 text-sm font-bold px-3 py-1 rounded-full">
                                    <CalendarIcon />
                                    <span className="ml-2">{vaccine.timing}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                 <p className="text-center text-gray-500 mt-8 text-sm">
                    Disclaimer: This is a general guide. Please consult your pediatrician for a personalized vaccination schedule.
                </p>
            </div>

            <div className="mt-16 relative">
               {!isAuthenticated && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-lg p-4">
                  <h2 className="text-2xl font-bold text-white mb-4 text-center">Please log in to plan your vaccinations.</h2>
                  <button 
                    onClick={openLoginModal} 
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Login
                  </button>
                </div>
              )}
              <div className={!isAuthenticated ? 'blur-sm pointer-events-none' : ''}>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Plan Your Vaccinations</h2>
                <NotificationBanner />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Appointments Section */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col">
                    <h2 className="text-2xl font-semibold text-teal-400 mb-4">Vaccination Appointments</h2>
                    <div className="space-y-4 mb-6 flex-grow max-h-60 overflow-y-auto pr-2">
                      {appointments.length > 0 ? appointments.map(app => (
                        <div key={app.id} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                          <p className="font-bold text-white">{app.doctor}</p>
                          <p className="text-sm text-gray-400">{new Date(app.date).toDateString()} at {app.time}</p>
                        </div>
                      )) : <p className="text-gray-500">No upcoming vaccination appointments.</p>}
                    </div>
                    <form onSubmit={handleAddAppointment} className="space-y-4 mt-auto">
                      <h3 className="text-lg font-medium text-gray-200 pt-4 border-t border-gray-700">Schedule a new appointment</h3>
                      <select value={newAppointment.vaccine} onChange={e => setNewAppointment({...newAppointment, vaccine: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required>
                        <option value="" disabled>Select a vaccine</option>
                        {vaccineSchedule.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
                      </select>
                      <input type="text" placeholder="Doctor or Clinic Name" value={newAppointment.doctor} onChange={e => setNewAppointment({...newAppointment, doctor: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
                      <div className="flex gap-4">
                        <input type="date" value={newAppointment.date} onChange={e => setNewAppointment({...newAppointment, date: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
                        <input type="time" value={newAppointment.time} onChange={e => setNewAppointment({...newAppointment, time: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
                      </div>
                      <button type="submit" className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700">Schedule Appointment</button>
                    </form>
                  </div>

                  {/* Reminders Section */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col">
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Vaccine Reminders</h2>
                    <div className="space-y-4 mb-6 flex-grow max-h-60 overflow-y-auto pr-2">
                      {reminders.length > 0 ? reminders.map(rem => (
                        <div key={rem.id} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                          <p className="font-bold text-white">{rem.text}</p>
                          <p className="text-sm text-gray-400">{new Date(rem.datetime).toLocaleString()}</p>
                        </div>
                      )) : <p className="text-gray-500">No vaccine reminders set.</p>}
                    </div>
                    <form onSubmit={handleAddReminder} className="space-y-4 mt-auto">
                      <h3 className="text-lg font-medium text-gray-200 pt-4 border-t border-gray-700">Add a new reminder</h3>
                      <select value={newReminder.vaccine} onChange={e => setNewReminder({...newReminder, vaccine: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required>
                        <option value="" disabled>Select a vaccine</option>
                        {vaccineSchedule.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
                      </select>
                      <input type="datetime-local" value={newReminder.datetime} onChange={e => setNewReminder({...newReminder, datetime: e.target.value})} className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded" required />
                      <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Add Reminder</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </main>
    );
};

const StatusIcon: React.FC<{ status: 'Present' | 'Not Clear' | 'Missing' }> = ({ status }) => {
    switch(status) {
        case 'Present': return <CheckCircleIcon />;
        case 'Missing': return <XCircleIcon />;
        case 'Not Clear': return <QuestionMarkCircleIcon />;
        default: return null;
    }
};

const AnalysisResultDisplay: React.FC<{result: PrescriptionAnalysisResult}> = ({ result }) => (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">Detected Medicines</h3>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
          {result.medicines.length > 0 ? (
            <ul className="divide-y divide-gray-700">
              {result.medicines.map((med, i) => (
                <li key={i} className="py-2">
                  <p className="font-bold text-white">{med.name}</p>
                  <p className="text-sm text-gray-400">Dosage: {med.dosage || 'N/A'} | Frequency: {med.frequency || 'N/A'}</p>
                </li>
              ))}
            </ul>
          ) : <p className="text-gray-400">No medicines could be clearly identified.</p>}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-yellow-300 mb-2">Verification Checklist</h3>
         <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <ul className="space-y-2">
              {result.authenticity_checks.map((check, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span className="text-gray-300">{check.item}</span>
                  <div className="flex items-center gap-2">
                      <StatusIcon status={check.status} />
                      <span className="text-sm font-semibold">{check.status}</span>
                  </div>
                </li>
              ))}
            </ul>
         </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-300 mb-2">AI Recommendations</h3>
         <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4">
                {result.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
            </ul>
         </div>
      </div>
       <div className="mt-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-sm">
          <p className="font-bold">Disclaimer:</p>
          <p>{result.disclaimer}</p>
      </div>
    </div>
);

const PrescriptionAnalysis: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<PrescriptionAnalysisResult | null>(null);
  const [history, setHistory] = useState<AnalysisHistoryItem[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem('prescriptionAnalysisHistory');
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (e) {
      console.error("Failed to load history from localStorage", e);
    }
  }, []);

  const saveToHistory = (newResult: PrescriptionAnalysisResult, image: string) => {
    const newItem: AnalysisHistoryItem = {
      id: new Date().toISOString(),
      timestamp: new Date().toLocaleString(),
      imagePreview: image,
      result: newResult,
    };
    const updatedHistory = [newItem, ...history].slice(0, 10); // Keep last 10
    setHistory(updatedHistory);
    try {
      localStorage.setItem('prescriptionAnalysisHistory', JSON.stringify(updatedHistory));
    } catch (e) {
      console.error("Failed to save history to localStorage", e);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setAnalysisResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const fileToGenerativePart = async (file: File) => {
    const base64EncodedDataPromise = new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  };

  const handleAnalyze = async () => {
    if (!imageFile || !imagePreview) {
      setError("Please upload an image first.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const imagePart = await fileToGenerativePart(imageFile);
      const textPart = { text: "Analyze this prescription image. It may be handwritten or printed. Identify medicines, dosages, and frequencies. Check for authenticity markers like doctor's signature, date, and patient details. Provide recommendations and a clear disclaimer. Your information must come from verified sources like WHO or MoHFW India." };
      
      const responseSchema = {
          type: Type.OBJECT,
          properties: {
              medicines: {
                  type: Type.ARRAY,
                  items: {
                      type: Type.OBJECT,
                      properties: {
                          name: { type: Type.STRING },
                          dosage: { type: Type.STRING },
                          frequency: { type: Type.STRING },
                      },
                      required: ["name", "dosage", "frequency"],
                  }
              },
              authenticity_checks: {
                  type: Type.ARRAY,
                  items: {
                      type: Type.OBJECT,
                      properties: {
                          item: { type: Type.STRING },
                          status: { type: Type.STRING, enum: ['Present', 'Not Clear', 'Missing'] }
                      },
                      required: ["item", "status"],
                  }
              },
              recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
              disclaimer: { type: Type.STRING }
          },
          required: ["medicines", "authenticity_checks", "recommendations", "disclaimer"]
      };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: [imagePart, textPart] },
        config: {
            systemInstruction: "You are an AI assistant for analyzing medical prescriptions. Your analysis must be based on information from reliable sources like the WHO and MoHFW India. You must not provide a definitive 'real' or 'fake' judgment but instead check for common elements of a valid prescription.",
            responseMimeType: "application/json",
            responseSchema: responseSchema,
        }
      });
      
      const result = JSON.parse(response.text);
      setAnalysisResult(result);
      saveToHistory(result, imagePreview);

    } catch (err) {
      console.error("Error analyzing prescription:", err);
      setError("Failed to analyze the prescription. The AI service may be temporarily unavailable or the image could not be processed.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleClear = () => {
    setImageFile(null);
    setImagePreview(null);
    setAnalysisResult(null);
    setError(null);
    if(fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 space-y-4">
            <h2 className="text-2xl font-bold text-white">Upload Prescription</h2>
            <div 
              className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-teal-500 bg-gray-800"
              onClick={() => fileInputRef.current?.click()}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Prescription preview" className="mx-auto max-h-48 rounded-md" />
              ) : (
                <>
                  <UploadCloudIcon />
                  <p className="mt-2 text-sm text-gray-400">Click to upload or drag & drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                </>
              )}
            </div>
            <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/png, image/jpeg" className="hidden" />

            <div className="flex gap-4">
              <button onClick={handleAnalyze} className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:bg-gray-500" disabled={isLoading || !imageFile}>
                {isLoading ? 'Analyzing...' : 'Analyze Prescription'}
              </button>
              <button onClick={handleClear} className="w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-500">
                Clear
              </button>
            </div>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Analysis History</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {history.length > 0 ? history.map(item => (
                    <div key={item.id} className="flex items-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700/70 cursor-pointer" onClick={() => { setAnalysisResult(item.result); setImagePreview(item.imagePreview)}}>
                        <img src={item.imagePreview} className="w-10 h-10 rounded-md object-cover mr-4" />
                        <div>
                            <p className="text-sm font-semibold text-gray-200">Analysis</p>
                            <p className="text-xs text-gray-400">{item.timestamp}</p>
                        </div>
                    </div>
                )) : <p className="text-sm text-gray-500">No history yet.</p>}
            </div>
        </div>
      </div>
      
      <div className="lg:col-span-2 bg-gray-800/50 p-6 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">Analysis Results</h2>
        {isLoading && (
            <div className="flex justify-center items-center h-full">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto"></div>
                    <p className="mt-4 text-gray-300">AI is analyzing your prescription...</p>
                </div>
            </div>
        )}
        {error && <p className="text-center text-red-400 bg-red-500/20 p-4 rounded-lg">{error}</p>}
        {analysisResult && <AnalysisResultDisplay result={analysisResult} />}
        {!isLoading && !error && !analysisResult && <p className="text-center text-gray-500">Upload a prescription image to begin analysis.</p>}
      </div>
    </div>
  );
};


const SymptomAnalysisResultDisplay: React.FC<{ result: SymptomAnalysisResult }> = ({ result }) => (
    <div className="space-y-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h3 className="flex items-center text-lg font-semibold text-blue-300 mb-2"><InfoIcon /> <span className="ml-2">Health Guidance</span></h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4 text-sm">
                    {result.health_guidance.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h3 className="flex items-center text-lg font-semibold text-red-300 mb-2"><FirstAidIcon /> <span className="ml-2">Emergency First Aid</span></h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4 text-sm">
                    {result.first_aid.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h3 className="flex items-center text-lg font-semibold text-green-300 mb-2"><FitnessIcon /> <span className="ml-2">Fitness Plan</span></h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4 text-sm">
                    {result.fitness_plan.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h3 className="flex items-center text-lg font-semibold text-yellow-300 mb-2"><DietIcon /> <span className="ml-2">Diet Plan</span></h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4 text-sm">
                    {result.diet_plan.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        </div>
        <div className="mt-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-sm">
            <p className="font-bold">Disclaimer:</p>
            <p>{result.disclaimer}</p>
        </div>
    </div>
);


const SymptomAnalysis: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState<SymptomAnalysisResult | null>(null);
    const [selectedConcern, setSelectedConcern] = useState<string | null>(null);

    const handleAnalyze = async (concern: string) => {
        setIsLoading(true);
        setError(null);
        setAnalysisResult(null);
        setSelectedConcern(concern);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const prompt = `Provide health guidance, emergency first aid steps, a general fitness plan, and a diet plan for a person experiencing symptoms of a "${concern}". All information provided MUST be sourced from the World Health Organization (WHO), MoHFW India, or other verified government health agencies. Do not use unverified sources. The tone should be helpful and informative, but not alarming. Include a clear disclaimer that this is not a substitute for professional medical advice and to call emergency services for any real medical emergency.`;

            const responseSchema = {
                type: Type.OBJECT,
                properties: {
                    health_guidance: { type: Type.ARRAY, items: { type: Type.STRING } },
                    first_aid: { type: Type.ARRAY, items: { type: Type.STRING } },
                    fitness_plan: { type: Type.ARRAY, items: { type: Type.STRING } },
                    diet_plan: { type: Type.ARRAY, items: { type: Type.STRING } },
                    disclaimer: { type: Type.STRING }
                },
                required: ["health_guidance", "first_aid", "fitness_plan", "diet_plan", "disclaimer"]
            };

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: responseSchema
                }
            });

            const result = JSON.parse(response.text);
            setAnalysisResult(result);
        } catch (err) {
            console.error("Error analyzing symptom:", err);
            setError("Failed to generate guidance. The AI service may be temporarily unavailable.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button onClick={onBack} className="mb-6 text-sm font-semibold text-teal-400 hover:text-teal-300">&larr; Back to Pharmacy</button>
             <div className="bg-yellow-900/30 border border-yellow-500/50 text-yellow-300 p-4 rounded-lg mb-6 text-sm flex items-center">
                <AlertIcon />
                <div className="ml-3">
                    <p><strong>For informational purposes only.</strong> This tool does not provide medical advice.</p>
                    <p><strong>In case of a medical emergency, call 108 or your local emergency number immediately.</strong></p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                     <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                        <h3 className="text-xl font-bold text-white mb-4">Select a Concern</h3>
                        <div className="space-y-3">
                            <button onClick={() => handleAnalyze('Suspected Heart Attack')} disabled={isLoading} className="w-full text-left p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50">Suspected Heart Attack</button>
                            <button onClick={() => handleAnalyze('Asthma Attack')} disabled={isLoading} className="w-full text-left p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50">Asthma Attack</button>
                            <button onClick={() => handleAnalyze('Severe Allergic Reaction')} disabled={isLoading} className="w-full text-left p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50">Severe Allergic Reaction</button>
                            <button onClick={() => handleAnalyze('Minor Burn')} disabled={isLoading} className="w-full text-left p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50">Minor Burn</button>
                            <button onClick={() => handleAnalyze('Fever and Flu-like Symptoms')} disabled={isLoading} className="w-full text-left p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50">Fever and Flu-like Symptoms</button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        {selectedConcern ? `Guidance for ${selectedConcern}` : 'Wellness Guidance'}
                    </h2>
                    {isLoading && (
                        <div className="flex justify-center items-center h-full">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto"></div>
                                <p className="mt-4 text-gray-300">AI is generating guidance...</p>
                            </div>
                        </div>
                    )}
                    {error && <p className="text-center text-red-400 bg-red-500/20 p-4 rounded-lg">{error}</p>}
                    {analysisResult && <SymptomAnalysisResultDisplay result={analysisResult} />}
                    {!isLoading && !error && !analysisResult && <p className="text-center text-gray-500">Select a concern to see AI-powered guidance.</p>}
                </div>
            </div>
        </div>
    );
};

const pharmacyData: PharmacyInfo[] = [
  {
    "name": "Rewati Nursing Home",
    "link": "https://jsdl.in/DT-99UIQ2QUA62",
    "address": "94, Dharampur -1, Adarsh Nagar, Adarsh Nagar-248001 (Adarsh Nagar)",
    "contact": "08485920627"
  },
  {
    "name": "Pink Clinic - Best Gynecologist & Obstetrician Dehradun",
    "link": "https://jsdl.in/DT-99Q143AWGQP",
    "address": "Bhagwati Tower, Opp-Sky Garden, Ring Road, Jogiwala, KTY-248001 (Opp-Sky Garden)",
    "contact": "07041824029"
  },
  {
    "name": "Dr Rahul Vashistha (Raksheeta Child Care Clinic)",
    "link": "https://jsdl.in/DT-99UUQFXAIB2",
    "address": "138, Old Nehru Colony, Dharampur, Dehradun - 248001 (Near Indian Overseas Bank, Shiv Mandir)",
    "contact": null
  },
  {
    "name": "Vardan Child Health Clinic",
    "link": "https://jsdl.in/DT-99R5WR2EJGT",
    "address": "Officer Colony Gate Number 2, Opposite Rathi Sweet, Doon Officer Colony, Opposite Rathi Sweets Shop, Dehradun City-248001 (Opposite Rathi Sweet, Doon Officer Colony)",
    "contact": null
  },
  {
    "name": "Himalayan Hospital",
    "link": null,
    "address": "Jolly Grant, Swami Ram Nagar, Jolly Grant, Dehradun, Uttarakhand - 248016",
    "contact": null
  }
];

const FindPharmacyView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    return (
        <div>
            <button onClick={onBack} className="mb-6 text-sm font-semibold text-teal-400 hover:text-teal-300">&larr; Back to Pharmacy</button>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Find a Pharmacy or Clinic</h1>
                <p className="text-lg text-gray-400">Nearby healthcare providers in your area.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pharmacyData.map((pharm, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{pharm.name}</h3>
                            <div className="flex items-start text-gray-400 mb-4">
                                <LocationIcon />
                                <p className="ml-2 text-sm">{pharm.address}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4 border-t border-gray-700 pt-4">
                            {pharm.contact && (
                                <a href={`tel:${pharm.contact}`} className="flex-1 text-center py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm font-semibold">
                                    Call Now
                                </a>
                            )}
                            {pharm.link && (
                                <a href={pharm.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-500 text-sm font-semibold flex items-center justify-center">
                                    More Info <ExternalLinkIcon />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PharmacyPage: React.FC = () => {
    const [activeView, setActiveView] = useState<'main' | 'prescription' | 'symptom' | 'find_pharmacy'>('main');

    const PharmacyCard: React.FC<{ icon: React.ReactNode, title: string, description: string, onClick: () => void }> = ({ icon, title, description, onClick }) => (
        <div 
            onClick={onClick}
            className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:border-teal-500/80 hover:shadow-teal-900/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        >
            <div className="flex items-center text-teal-400 mb-4">
                {icon}
                <h3 className="text-xl font-bold text-white ml-4">{title}</h3>
            </div>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    );

    if (activeView === 'prescription') {
        return (
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                 <button onClick={() => setActiveView('main')} className="mb-6 text-sm font-semibold text-teal-400 hover:text-teal-300">&larr; Back to Pharmacy</button>
                 <PrescriptionAnalysis />
            </main>
        )
    }
    
    if (activeView === 'symptom') {
        return (
             <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <SymptomAnalysis onBack={() => setActiveView('main')} />
            </main>
        )
    }

    if (activeView === 'find_pharmacy') {
        return (
             <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <FindPharmacyView onBack={() => setActiveView('main')} />
            </main>
        )
    }

    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Pharmacy Services</h1>
                <p className="text-lg text-gray-400">Your one-stop destination for prescriptions, health products, and more.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <PharmacyCard
                    icon={<PrescriptionIcon />}
                    title="Analyze Prescription"
                    description="Upload a handwritten or printed prescription to get an AI-powered analysis of medicines and authenticity."
                    onClick={() => setActiveView('prescription')}
                />
                 <PharmacyCard
                    icon={<OtcIcon />}
                    title="OTC Products"
                    description="Browse and get information on over-the-counter health products. (Coming Soon)"
                    onClick={() => {}}
                />
                <PharmacyCard
                    icon={<WellnessIcon />}
                    title="Symptom Guidance"
                    description="Get AI-powered guidance for common health concerns, including first aid, diet, and fitness plans."
                    onClick={() => setActiveView('symptom')}
                />
                 <PharmacyCard
                    icon={<FindPharmacyIcon />}
                    title="Find a Pharmacy"
                    description="Locate nearby pharmacies and clinics to fulfill your prescription needs."
                    onClick={() => setActiveView('find_pharmacy')}
                />
            </div>
        </main>
    );
};

export const SchemesPage: React.FC = () => (
  <main className="container mx-auto p-4 sm:p-6 lg:p-8">
    <InfoCard title="Government Health Schemes">
      <p>Information about various government-sponsored health schemes and insurance programs designed to make healthcare more accessible and affordable for all citizens.</p>
      
      <div className="border-t border-gray-700 pt-4 mt-4 space-y-3">
        <h3 className="text-xl font-semibold text-white mb-2">Ayushman Bharat (PM-JAY)</h3>
        <p className="text-gray-400">A flagship scheme providing health coverage of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.</p>
        
        <h4 className="text-lg font-semibold text-gray-200 pt-2">1. Eligibility Criteria:</h4>
        <ul className="list-disc list-inside text-gray-400 pl-4 text-sm space-y-1">
          <li>Families identified under the Socio-Economic Caste Census (SECC) 2011.</li>
          <li>Families holding RSBY (Rashtriya Swasthya Bima Yojana) cards.</li>
          <li>Specific occupational categories of unorganized workers (e.g., ragpickers, domestic workers).</li>
          <li>Note: There is no age limit for eligibility.</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-200 pt-2">2. Documents Required for Ayushman Card Application:</h4>
        <p className="text-gray-400 text-sm">To apply for your Ayushman Card, you generally need:</p>
        <ul className="list-disc list-inside text-gray-400 pl-4 text-sm space-y-1">
          <li><strong>Identity Proof:</strong> Aadhaar card, Voter ID, PAN card, Passport, or Driving License.</li>
          <li><strong>Address Proof:</strong> Ration Card, Aadhaar card, Utility Bill, or any Government-issued address proof.</li>
          <li><strong>Family Details:</strong> Names and age of family members (usually from SECC or ration card).</li>
          <li><strong>Photographs:</strong> A recent passport-size photo may be required at some CSCs.</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-200 pt-2">3. How to Verify Eligibility &amp; Apply:</h4>
        <ul className="list-disc list-inside text-gray-400 pl-4 text-sm space-y-1">
          <li>
            Check your eligibility and apply for the Ayushman Card online through the official beneficiary portal:
            <a href="https://beneficiary.nha.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1 font-semibold inline-flex items-center">
              beneficiary.nha.gov.in <ExternalLinkIcon />
            </a>
          </li>
          <li>
            For detailed information about the scheme, visit the official PM-JAY website:
            <a href="https://nha.gov.in/PM-JAY" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1 font-semibold inline-flex items-center">
              nha.gov.in/PM-JAY <ExternalLinkIcon />
            </a>
          </li>
          <li>Alternatively, visit a Common Service Center (CSC) or a PM-JAY helpdesk at an empanelled hospital to get your card issued.</li>
        </ul>
      </div>

      <div className="border-t border-gray-700 pt-4 mt-4 space-y-3">
        <h3 className="text-xl font-semibold text-white mb-2">Empanelled Hospitals (PM-JAY / AAUY in Uttarakhand)</h3>
        <ul className="list-disc list-inside text-gray-400 pl-4 text-sm space-y-1">
          <li><strong>Coverage:</strong> All 13 districts of Uttarakhand have empanelled hospitals — 310 hospitals total (both govt & private), with an average of 6 specialties each.</li>
          <li><strong>Example:</strong> Medicare Hospital, Dehradun is an empanelled facility offering diverse services under Ayushman — doctor fees, diagnostics, and the full ₹5 lakh cover. You can verify at the hospital using your Ayushman Card.</li>
        </ul>
      </div>
      
      <div className="border-t border-gray-700 pt-4 mt-4">
        <h3 className="text-xl font-semibold text-white mb-4">Schemes at a Glance</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs text-gray-300 uppercase bg-gray-700/50">
                    <tr>
                        <th scope="col" className="px-4 py-3">Scheme</th>
                        <th scope="col" className="px-4 py-3">Launch Date</th>
                        <th scope="col" className="px-4 py-3">Eligibility</th>
                        <th scope="col" className="px-4 py-3">Benefits</th>
                        <th scope="col" className="px-4 py-3">How to Verify / Apply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-700 hover:bg-gray-800/60">
                        <td className="px-4 py-4 font-medium text-white">PM-JAY (central)</td>
                        <td className="px-4 py-4">23 Sept 2018</td>
                        <td className="px-4 py-4">SECC 2011 bottom 40% households</td>
                        <td className="px-4 py-4">₹5 lakh cashless, pre-existing cover, portable</td>
                        <td className="px-4 py-4">Through PM-JAY portal; ask PHC/CHC staff</td>
                    </tr>
                    <tr className="border-b border-gray-700 hover:bg-gray-800/60">
                        <td className="px-4 py-4 font-medium text-white">AAUY (state-level)</td>
                        <td className="px-4 py-4">Dec 2018</td>
                        <td className="px-4 py-4">Uttarakhand residents, SECC-listed, not in other schemes</td>
                        <td className="px-4 py-4">Same as PM-JAY plus wider coverage in UK</td>
                        <td className="px-4 py-4">Online via SHA site or offline via CSC/Aarogya Kendra</td>
                    </tr>
                    <tr className="hover:bg-gray-800/60">
                        <td className="px-4 py-4 font-medium text-white">Empanelled Hospitals</td>
                        <td className="px-4 py-4">Ongoing</td>
                        <td className="px-4 py-4">All eligible cardholders</td>
                        <td className="px-4 py-4">Free treatment in empanelled hospitals</td>
                        <td className="px-4 py-4">Identify vicinal hospital; show card, ID</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-4 mt-4">
        <div className="bg-blue-900/30 border border-blue-500/50 text-blue-300 p-4 rounded-lg text-sm flex items-center">
            <InfoIcon />
            <p className="ml-3"><strong>Verification Info:</strong> For awareness materials, always show official scheme names and launch dates for authenticity.</p>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 mt-4">
        <h3 className="text-xl font-semibold text-white mb-2">Janani Shishu Suraksha Karyakram (JSSK)</h3>
        <p>Entitles all pregnant women delivering in public health institutions to absolutely free and no-expense delivery, including Caesarean section.</p>
      </div>

    </InfoCard>
  </main>
);