import React, { useState } from 'react';
import { Chatbot } from '../components/Chatbot';
import Footer from '../components/Footer';
import { useAppContext } from '../hooks/useAppContext';
import { Logo, HeroRobot, SmartAiChatIcon, DoctorConnectIcon, PersonalizedCareIcon, SecurePrivateIcon } from '../constants';
import { NavLink } from 'react-router-dom';
import { RevolutionizingSection } from './StaticPages';
import TrendingArticles from '../components/TrendingArticles';

const FeaturesSection = () => {
    const { t } = useAppContext();
    const features = [
        {
            icon: <SmartAiChatIcon />,
            title: t('feature_smart_ai_title'),
            description: t('feature_smart_ai_desc'),
            color: 'bg-blue-500/20 text-blue-400',
        },
        {
            icon: <DoctorConnectIcon />,
            title: t('feature_doctor_connect_title'),
            description: t('feature_doctor_connect_desc'),
            color: 'bg-green-500/20 text-green-400',
        },
        {
            icon: <PersonalizedCareIcon />,
            title: t('feature_personalized_care_title'),
            description: t('feature_personalized_care_desc'),
            color: 'bg-indigo-500/20 text-indigo-400',
        },
        {
            icon: <SecurePrivateIcon />,
            title: t('feature_secure_private_title'),
            description: t('feature_secure_private_desc'),
            color: 'bg-emerald-500/20 text-emerald-400',
        },
    ];

    return (
      <div className="py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">{t('why_choose_title')}</h2>
          <p className="text-lg text-gray-400">{t('why_choose_subtitle')}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-800 text-center flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${feature.color} mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};


const CtaSection = ({ onStartJourney }: { onStartJourney: () => void }) => {
    const { t } = useAppContext();
    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">{t('transform_title')}</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">{t('transform_subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={onStartJourney}
                    className="px-8 py-3 font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white"
                >
                    {t('get_started_free')}
                </button>
                <button className="px-8 py-3 font-semibold rounded-lg bg-gray-700/80 border border-gray-600 hover:bg-gray-700 transition-colors text-gray-300">
                    {t('schedule_demo')}
                </button>
            </div>
        </div>
    );
};


const LandingPage = ({ onStartJourney }: { onStartJourney: () => void }) => {
  const { t } = useAppContext();
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center text-white p-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <Logo />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onStartJourney}
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-90 transition-opacity"
              >
                {t('start_journey')} &rarr;
              </button>
              <NavLink
                to="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 hover:bg-gray-600 transition-colors"
              >
                {t('learn_more')}
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center">
              <div className="relative p-4">
                  <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-3xl"></div>
                  <div className="relative bg-gray-800/20 p-2 rounded-2xl shadow-[0_0_80px_-20px_rgba(59,130,246,0.6)]">
                      <HeroRobot />
                  </div>
              </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-3">{t('trusted_by')}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center items-center text-gray-400 font-semibold">
            <span>24/7 Available</span>
            <span className="text-gray-600">&bull;</span>
            <span className="text-teal-400">HIPAA Compliant</span>
            <span className="text-gray-600">&bull;</span>
            <span>AI+ Real Doctors</span>
          </div>
        </div>

        <FeaturesSection />
        <CtaSection onStartJourney={onStartJourney} />
        <RevolutionizingSection />
        <TrendingArticles />

      </div>
    </div>
  );
};


const HomePage: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {showChat ? <Chatbot /> : <LandingPage onStartJourney={() => setShowChat(true)} />}
      </main>
      {!showChat && <Footer />}
    </>
  );
};

export default HomePage;