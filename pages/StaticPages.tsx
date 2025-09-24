import React, { useState } from 'react';
import { 
    InfoIcon, PhoneIcon, BookmarkIcon, CopyIcon, ExternalLinkIcon, AdvancedAITechnologyIcon, 
    OurAimIcon, ScopeIcon, CalendarIcon, PrescriptionIcon, OtcIcon, WellnessIcon, FindPharmacyIcon, LocationIcon
} from '../constants';
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
                    <div key={index} className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:border-teal-500/80 hover:shadow-teal-900/40 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 font-bold text-2xl mr-4 border-2 border-teal-500/30">
                                {doctor.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
                                <p className="text-teal-400">{doctor.specialty}</p>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-400 border-t border-gray-700 pt-4 mt-4">
                            <LocationIcon />
                            <span className="ml-2">{doctor.city}, {doctor.state}</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export const VaccinesPage: React.FC = () => {
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
        </main>
    );
};

export const PharmacyPage: React.FC = () => {
    const pharmacyOptions = [
        { icon: <PrescriptionIcon />, title: 'Upload Prescription', description: 'Upload a valid prescription to order medicines.', link: '#' },
        { icon: <OtcIcon />, title: 'Over-the-Counter', description: 'Shop for common health and wellness products.', link: '#' },
        { icon: <WellnessIcon />, title: 'Wellness Products', description: 'Explore vitamins, supplements, and personal care items.', link: '#' },
        { icon: <FindPharmacyIcon />, title: 'Find Nearby Pharmacy', description: 'Locate partner pharmacies in your area for quick pickups.', link: '#' },
    ];

    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Nourivox Pharmacy</h1>
                <p className="text-lg text-gray-400">Your one-stop shop for all your healthcare needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pharmacyOptions.map((option, index) => (
                    <a href={option.link} key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center flex flex-col items-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/40 transition-all">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-400 mb-6">
                            {option.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                        <p className="text-gray-400 flex-grow">{option.description}</p>
                        <span className="mt-6 text-blue-400 font-semibold">Explore &rarr;</span>
                    </a>
                ))}
            </div>
        </main>
    );
};

export const SchemesPage: React.FC = () => {
    const { t } = useAppContext();
    const schemes = [
        { name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)", description: "Provides a health cover of Rs. 5 lakhs per family per year for secondary and tertiary care hospitalization across public and private empanelled hospitals.", officialLink: "https://pmjay.gov.in/" },
        { name: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)", description: "Aims to provide assured, comprehensive and quality antenatal care, free of cost, universally to all pregnant women on the 9th of every month.", officialLink: "https://pmsma.nhp.gov.in/" },
        { name: "National Health Mission (NHM)", description: "Envisages achievement of universal access to equitable, affordable & quality health care services, accountable and responsive to people's needs.", officialLink: "https://nhm.gov.in/" },
        { name: "Janani Shishu Suraksha Karyakram (JSSK)", description: "Entitles all pregnant women delivering in public health institutions to absolutely free and no expense delivery, including caesarean section.", officialLink: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=841&lid=23" }
    ];

    const [copied, setCopied] = useState('');
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(''), 2000);
    };

    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Government Health Schemes</h1>
                <p className="text-lg text-gray-400">Information on key health initiatives by the Government of India.</p>
            </div>
            <div className="space-y-6">
                {schemes.map((scheme, index) => (
                    <div key={index} className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl shadow-md">
                        <div className="flex items-start">
                            <InfoIcon />
                            <div>
                                <h3 className="text-xl font-bold text-teal-300">{scheme.name}</h3>
                                <p className="text-gray-400 mt-2">{scheme.description}</p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-end items-center space-x-4">
                            <button onClick={() => handleCopy(scheme.name)} className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                                <CopyIcon /> <span className="ml-1.5">{copied === scheme.name ? 'Copied!' : 'Copy Name'}</span>
                            </button>
                            <a href={scheme.officialLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300">
                                Official Site <ExternalLinkIcon />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export const HelplinePage: React.FC = () => {
    const helplines = [
        { name: "National Health Helpline", number: "1800-180-1104" },
        { name: "Medical Emergency", number: "108 / 102" },
        { name: "COVID-19 Helpline", number: "1075" },
        { name: "Mental Health Helpline (KIRAN)", number: "1800-599-0019" },
        { name: "Senior Citizen Helpline", number: "14567" },
        { name: "National AIDS Helpline", number: "1097" },
        { name: "Child Helpline", number: "1098" },
        { name: "Uttarakhand State Health Helpline", number: "1800180801" },
    ];

    const [copied, setCopied] = useState('');
    const handleCopy = (number: string) => {
        navigator.clipboard.writeText(number);
        setCopied(number);
        setTimeout(() => setCopied(''), 2000);
    };

    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">National Health Helplines</h1>
                <p className="text-lg text-gray-400">Important contact numbers for health-related emergencies and information.</p>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg">
                    <ul className="divide-y divide-gray-700">
                        {helplines.map((line, index) => (
                            <li key={index} className="p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <PhoneIcon />
                                    <span className="ml-3 text-white font-semibold">{line.name}</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <a href={`tel:${line.number}`} className="font-mono text-lg text-teal-300 tracking-wider">{line.number}</a>
                                    <button onClick={() => handleCopy(line.number)} className="p-2 text-gray-400 hover:text-white rounded-md bg-gray-700/50 hover:bg-gray-700 transition-colors" title="Copy number">
                                        {copied === line.number ? <BookmarkIcon /> : <CopyIcon />}
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};