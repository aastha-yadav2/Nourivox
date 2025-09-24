import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { CloseIcon, GoogleIcon } from '../constants';

const AuthModal: React.FC = () => {
    const { authModal, closeAuthModal, setAuthModal, login, t } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!authModal.isOpen) {
        return null;
    }

    const isLoginMode = authModal.mode === 'login';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a simulation. In a real app, you would handle authentication with a backend service.
        console.log({ email, password });
        login();
        closeAuthModal();
        setEmail('');
        setPassword('');
    };
    
    const handleGoogleAuth = () => {
        // This is a simulation. In a real app, you would trigger the Google OAuth flow.
        login();
        closeAuthModal();
    }

    const toggleMode = () => {
        setAuthModal({ ...authModal, mode: isLoginMode ? 'signup' : 'login' });
        setEmail('');
        setPassword('');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
            <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md relative border border-gray-700">
                <button onClick={closeAuthModal} className="absolute top-4 right-4 text-gray-400 hover:text-white" aria-label="Close">
                    <CloseIcon />
                </button>

                <h2 className="text-2xl font-bold text-white text-center mb-6">
                    {isLoginMode ? t('access_account') : t('create_account')}
                </h2>

                <button 
                  onClick={handleGoogleAuth}
                  className="w-full flex items-center justify-center py-3 px-4 mb-6 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                    <GoogleIcon />
                    <span className="ml-3">{isLoginMode ? t('login_with_google') : t('signup_with_google')}</span>
                </button>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-600" />
                    <span className="mx-4 text-gray-500 text-sm font-semibold">OR</span>
                    <hr className="flex-grow border-gray-600" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('email')}</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">{t('password')}</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                            minLength={6}
                        />
                    </div>
                    <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500">
                        {isLoginMode ? t('login') : t('signup')}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-400 mt-6">
                    {isLoginMode ? t('no_account') : t('have_account')}{' '}
                    <button onClick={toggleMode} className="font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:underline">
                        {isLoginMode ? t('signup') : t('login')}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthModal;
