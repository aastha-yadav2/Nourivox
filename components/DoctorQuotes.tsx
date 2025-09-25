import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const doctors = [
    {
      name: "Dr. Randeep Guleria",
      specialization: "Pulmonology & Critical Care",
      designation: "Former Director, AIIMS New Delhi",
      quote: "Preparedness, prevention, and awareness are the strongest tools in building a healthy nation.",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    },
    {
      name: "Dr. Devi Shetty",
      specialization: "Cardiac Surgery",
      designation: "Founder & Chairman, Narayana Health",
      quote: "Affordable healthcare is every citizen’s right, and compassion is the foundation of medicine.",
      imageUrl: "https://images.unsplash.com/photo-1537368910025-70035079f32d?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    },
    {
      name: "Dr. Naresh Trehan",
      specialization: "Cardiothoracic Surgery",
      designation: "Chairman & Managing Director, Medanta - The Medicity",
      quote: "Technology and empathy together can heal not just the body but also the soul.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    }
];

const DoctorQuoteCard: React.FC<{ doctor: typeof doctors[0] }> = ({ doctor }) => (
    <a 
        href={doctor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg hover:border-teal-500/80 hover:shadow-teal-900/40 transition-all duration-300 transform hover:-translate-y-1 group animate-fade-in"
    >
        <div className="flex flex-col md:flex-row items-center p-6">
            <img 
                src={doctor.imageUrl}
                alt={`Photo of ${doctor.name}`}
                className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-2 border-gray-600 group-hover:border-teal-500 transition-colors"
            />
            <div className="text-center md:text-left">
                <blockquote className="text-lg italic text-gray-300 mb-4">
                    “{doctor.quote}”
                </blockquote>
                <div className="font-bold text-white group-hover:text-teal-400 transition-colors">{doctor.name}</div>
                <div className="text-sm text-gray-400">{doctor.specialization}</div>
                <div className="text-xs text-gray-500">{doctor.designation}</div>
            </div>
        </div>
    </a>
);


const DoctorQuotes = () => {
    const { t } = useAppContext();
    return (
        <div className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{t('doctor_quotes_title')}</h2>
                <p className="text-lg text-gray-400">{t('doctor_quotes_subtitle')}</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
                {doctors.map((doctor, index) => (
                    <DoctorQuoteCard key={index} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default DoctorQuotes;