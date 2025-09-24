import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { HeartIcon, FacebookIcon, TwitterIcon, LinkedInIcon, PhoneIcon, EmailIcon, LocationIcon } from '../constants';

const Footer: React.FC = () => {
    const { t } = useAppContext();

    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <HeartIcon />
                            <span className="text-2xl font-bold text-white">Nourivox AI</span>
                        </div>
                        <p className="text-sm">{t('footer_tagline')}</p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-white"><FacebookIcon /></a>
                            <a href="#" className="hover:text-white"><TwitterIcon /></a>
                            <a href="#" className="hover:text-white"><LinkedInIcon /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 mb-4">{t('quick_links')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><NavLink to="/" className="hover:text-white">{t('footer_home')}</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-white">{t('footer_about')}</NavLink></li>
                            <li><NavLink to="/doctors" className="hover:text-white">{t('footer_doctors')}</NavLink></li>
                            <li><a href="#" className="hover:text-white">{t('footer_how_it_works')}</a></li>
                            <li><a href="#" className="hover:text-white">{t('footer_pricing')}</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 mb-4">{t('legal')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">{t('privacy_policy')}</a></li>
                            <li><a href="#" className="hover:text-white">{t('terms_of_service')}</a></li>
                            <li><a href="#" className="hover:text-white">{t('hipaa_compliance')}</a></li>
                            <li><a href="#" className="hover:text-white">{t('cookie_policy')}</a></li>
                            <li><a href="#" className="hover:text-white">{t('contact_us')}</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Get in Touch */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 mb-4">{t('get_in_touch')}</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center"><PhoneIcon /><span className="ml-3">{t('phone_number')}</span></li>
                            <li className="flex items-center"><EmailIcon /><span className="ml-3">{t('email_address')}</span></li>
                            <li className="flex items-center"><LocationIcon /><span className="ml-3">{t('availability')}</span></li>
                        </ul>
                        <div className="mt-6 p-4 bg-emerald-900/50 border border-emerald-800 rounded-lg">
                            <p className="font-semibold text-emerald-300">{t('emergency_title')}</p>
                            <p className="text-sm text-emerald-200/80">{t('emergency_desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm flex flex-col sm:flex-row justify-between items-center text-center">
                    <p>{t('copyright')}</p>
                    <p className="mt-2 sm:mt-0">{t('disclaimer')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
