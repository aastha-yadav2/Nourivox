import React, { useState } from 'react';
import { InfoIcon, PhoneIcon, BookmarkIcon, CopyIcon, ExternalLinkIcon, AdvancedAITechnologyIcon, OurAimIcon, ScopeIcon, CalendarIcon } from '../constants';
import { useAppContext } from '../hooks/useAppContext';


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
                    <div key={index} className="bg-gray-800 border border-gray-700/50 p-6 rounded-xl shadow-lg flex flex-col transition-all duration-300 hover:border-teal-500/50 hover:shadow-teal-900/40 hover:-translate-y-1">
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-teal-400 mb-2">{doctor.name}</h3>
                          <p className="text-gray-300 font-medium mb-4">{doctor.specialty}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700">
                           <p className="text-sm text-gray-400">📍 {doctor.city}, {doctor.state}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};


const VaccineAccordion: React.FC<{ age: string; count: number; children: React.ReactNode }> = ({ age, count, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-700 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left bg-gray-800 hover:bg-gray-700/50 transition-colors"
      >
        <div>
          <h4 className="text-xl font-bold text-blue-400">{age}</h4>
          <p className="text-sm text-gray-400">{count} vaccines required</p>
        </div>
        <div className="flex items-center space-x-4">
            <CalendarIcon />
            <svg
            className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-5 bg-gray-800/50 border-t border-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

export const VaccinesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('schedule');
    
    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-white mb-3">Vaccination Schedule</h1>
                    <p className="text-lg text-gray-400">Complete vaccination schedule for babies and children according to Indian guidelines</p>
                </div>

                <div className="p-5 mb-8 bg-orange-900/20 border border-orange-800 rounded-lg flex items-start space-x-4">
                    <div className="text-orange-400 mt-1">
                        <InfoIcon />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-orange-300">Important Notice</h3>
                        <p className="text-orange-200/80 text-sm">
                            Always consult with your pediatrician before vaccinations. This schedule follows Indian Academy of Pediatrics guidelines. Visit your nearest government health center for free vaccinations under UIP.
                        </p>
                        <button className="mt-3 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gray-800/50 border border-gray-700 hover:bg-gray-700 text-gray-300">
                            <PhoneIcon /> Call National Health Helpline: 104
                        </button>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex justify-center p-1.5 bg-gray-800 rounded-lg">
                        <button onClick={() => setActiveTab('schedule')} className={`w-full py-2.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'schedule' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>Age-wise Schedule</button>
                        <button onClick={() => setActiveTab('centers')} className={`w-full py-2.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'centers' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>Vaccination Centers</button>
                        <button onClick={() => setActiveTab('tracker')} className={`w-full py-2.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'tracker' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>Vaccination Tracker</button>
                    </div>
                </div>

                {activeTab === 'schedule' && (
                    <div className="space-y-4">
                        <VaccineAccordion age="Birth" count={3}>
                            <p className="text-gray-300">BCG, Oral Polio Vaccine (OPV 0), Hepatitis B (Hep-B 1)</p>
                        </VaccineAccordion>
                         <VaccineAccordion age="6 Weeks" count={4}>
                            <p className="text-gray-300">DTwP / DTaP 1, IPV 1, Hib 1, Rotavirus 1, PCV 1</p>
                        </VaccineAccordion>
                        <VaccineAccordion age="10 Weeks" count={4}>
                            <p className="text-gray-300">DTwP / DTaP 2, IPV 2, Hib 2, Rotavirus 2, PCV 2</p>
                        </VaccineAccordion>
                        <VaccineAccordion age="14 Weeks" count={4}>
                            <p className="text-gray-300">DTwP / DTaP 3, IPV 3, Hib 3, Rotavirus 3, PCV 3</p>
                        </VaccineAccordion>
                    </div>
                )}
                 {activeTab === 'centers' && (
                    <InfoCard title="Vaccination Centers">
                        <p>Vaccination centers are available at government hospitals, primary health centers (PHCs), and private clinics. Visit the official Co-WIN portal to find a center near you and book an appointment.</p>
                    </InfoCard>
                )}
                {activeTab === 'tracker' && (
                     <InfoCard title="Vaccination Tracker">
                        <p>This feature is coming soon. You will be able to track your child's vaccination schedule, set reminders for upcoming shots, and maintain a digital record of all vaccinations received.</p>
                    </InfoCard>
                )}
            </div>
        </main>
    );
};


export const PharmacyPage: React.FC = () => (
  <main className="container mx-auto p-4 sm:p-6 lg:p-8">
    <InfoCard title="Pharmacy Guidance">
      <p>Ordering medicines online can be convenient, but it's important to do it safely.</p>
      <h3 className="text-xl font-semibold mt-4 text-gray-200">How to Order Safely Online:</h3>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Use Reputable Pharmacies:</strong> Choose well-known and licensed online pharmacies.</li>
        <li><strong>Require a Prescription:</strong> A legitimate online pharmacy will always ask for a valid prescription from a doctor for prescription medications.</li>
        <li><strong>Check for a License:</strong> Ensure the pharmacy is licensed and registered with the appropriate authorities in your country.</li>
        <li><strong>Verify Contact Information:</strong> The website should have a physical address and phone number for contact.</li>
        <li><strong>Consult Your Doctor:</strong> Always discuss with your doctor before purchasing any medication online.</li>
      </ul>
      <p className="mt-6">You can use our AI chatbot to upload a picture of your prescription to easily identify and list the names of the medicines you need to order.</p>

      <div className="border-t border-gray-700 my-8"></div>

      <h3 className="text-2xl font-semibold mt-6 text-gray-200">🏥 Pharmacy Centers (Jolly Grant & Dehradun Area)</h3>
      <p className="text-gray-400 mb-6">Here are some local pharmacy options. Please verify their hours and services before visiting.</p>
      <div className="space-y-6">
        <div>
          <p className="font-bold text-white">Naitik Medical Store</p>
          <p className="text-sm text-gray-400">📍 55P6+WJW, Joly Grant, Sangatiya Walakhur, Uttarakhand 248016</p>
        </div>
        <div>
          <p className="font-bold text-white">Sitaram Pharmacy</p>
          <p className="text-sm text-gray-400">📍 Himalayan Hospital Rd, Joly Grant, Baruwala Grant, Baksar Wala, Uttarakhand 248016</p>
        </div>
        <div>
          <p className="font-bold text-white">Medacart Pharmacy</p>
          <p className="text-sm text-gray-400">📍 Canal Road Upper, Tunwala, Dehradun, Uttarakhand 248005</p>
        </div>
        <div>
          <p className="font-bold text-white">Shivay Pharmacy</p>
          <p className="text-sm text-gray-400">📍 Joly Grant, Dehradun, Baksar Wala, Uttarakhand 248016</p>
        </div>
        <div>
          <p className="font-bold text-white">Panwar Medicare Pharmacy</p>
          <p className="text-sm text-gray-400">📍 Jolly Grant, Aadarsh Nagar, Dehradun, Uttarakhand</p>
        </div>
        <div>
          <p className="font-bold text-white">Neeraj Medicose</p>
          <p className="text-sm text-gray-400">📍 Adarsh Nagar Chowk, Joly Grant, Bhania Wala, Dehradun, Uttarakhand 248016</p>
        </div>
        <div>
          <p className="font-bold text-white">Taskar – India’s 1st Healthcare Mall</p>
          {/* Fix: Corrected the malformed img tag by properly terminating the src attribute's base64 string and ensuring the alt attribute is correctly formatted. */}
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAH5A+gDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1VWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX2B4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oADAMBAAIRAxEAPwA8/ooor6A8AKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiig" alt="Taskar Pharmacy" className="mt-2 rounded-lg max-w-sm" />
          <p className="text-sm text-gray-400">🕒 24 Hours | 🏠 Home Delivery Available</p>
        </div>
      </div>
    </InfoCard>
  </main>
);

const SchemeCard: React.FC<{
  title: string;
  description: string;
  eligibility: string;
  benefits: string[];
  link: string;
}> = ({ title, description, eligibility, benefits, link }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-900/40">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-teal-300 mb-2">{title}</h3>
        <button onClick={() => setIsBookmarked(!isBookmarked)} className={`p-2 rounded-full transition-colors ${isBookmarked ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-400 hover:bg-gray-700'}`}>
          <BookmarkIcon />
        </button>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="mb-4">
        <p className="font-semibold text-gray-200">Eligibility:</p>
        <p className="text-gray-400 text-sm">{eligibility}</p>
      </div>
      
      <div>
        <p className="font-semibold text-gray-200">Key Benefits:</p>
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mt-1">
          {benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
        </ul>
      </div>

      <div className="border-t border-gray-700 mt-4 pt-4 flex items-center justify-between">
         <div className="flex items-center space-x-2">
            <button onClick={handleCopy} className="flex items-center text-sm text-gray-400 hover:text-white">
                <CopyIcon />
                <span className="ml-1.5">{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
         </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300">
          Official Website <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
};


export const SchemesPage: React.FC = () => {
    const schemes = [
    {
      title: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
      description: "A flagship scheme of the Government of India to provide free access to healthcare for low-income earners in the country.",
      eligibility: "Based on Socio-Economic Caste Census (SECC) 2011 data. Covers poor and vulnerable families.",
      benefits: [
        "Health cover of Rs. 5 lakhs per family per year.",
        "Cashless access to health care services for the beneficiary at the point of service.",
        "Covers up to 3 days of pre-hospitalization and 15 days post-hospitalization expenses."
      ],
      link: "https://pmjay.gov.in/"
    },
    {
      title: "Janani Shishu Suraksha Karyakram (JSSK)",
      description: "An initiative to provide completely free and cashless services to pregnant women, including normal deliveries and caesarean sections and sick new-borns (up to 30 days after birth).",
      eligibility: "All pregnant women delivering in public health institutions.",
      benefits: [
        "Free and cashless delivery.",
        "Free drugs, consumables, and diet.",
        "Free transport from home to health institution."
      ],
      link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=841&lid=223"
    },
     {
      title: "Rashtriya Bal Swasthya Karyakram (RBSK)",
      description: "An initiative aiming at early identification and early intervention for children from birth to 18 years to cover 4 ‘D’s viz. Defects at birth, Deficiencies, Diseases, Development delays including disability.",
      eligibility: "Children aged 0-18 years in Anganwadis and government/government-aided schools.",
      benefits: [
        "Early screening for health conditions.",
        "Free treatment, including surgeries at tertiary level.",
        "Management of defects, deficiencies, and diseases."
      ],
      link: "https://rbsk.gov.in/"
    }
  ];

  return (
    <main className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Government Health Schemes</h1>
            <p className="text-lg text-gray-400">Information about major public health and insurance schemes available in India.</p>
        </div>

        <div className="space-y-8">
          {schemes.map((scheme, index) => (
            <SchemeCard key={index} {...scheme} />
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-900/20 border border-blue-800 rounded-lg text-center">
            <div className="flex items-center justify-center mb-3">
                <InfoIcon />
                <h3 className="text-lg font-semibold text-blue-300">Important Disclaimer</h3>
            </div>
            <p className="text-blue-200 text-sm">
                The information provided here is for general awareness and guidance only. Eligibility criteria and benefits are subject to change. Please visit the official government websites for the most accurate and up-to-date information.
            </p>
        </div>
      </div>
    </main>
  );
};