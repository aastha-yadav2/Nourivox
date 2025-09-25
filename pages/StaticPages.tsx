
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { 
    InfoIcon, PhoneIcon, BookmarkIcon, CopyIcon, ExternalLinkIcon, AdvancedAITechnologyIcon, 
    OurAimIcon, ScopeIcon, CalendarIcon, PrescriptionIcon, OtcIcon, WellnessIcon, FindPharmacyIcon, LocationIcon,
    UploadCloudIcon, CloseIcon, CheckCircleIcon, XCircleIcon, QuestionMarkCircleIcon
} from '../constants';
import { useAppContext } from '../hooks/useAppContext';
import type { PrescriptionAnalysisResult, AnalysisHistoryItem } from '../types';


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
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {result.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
            </ul>
         </div>
      </div>
      <div className="p-4 bg-red-900/50 border border-red-800 rounded-lg text-red-200 text-sm">
        <p className="font-bold">IMPORTANT DISCLAIMER</p>
        <p>{result.disclaimer}</p>
      </div>
    </div>
);


const PrescriptionAnalysis: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentResult, setCurrentResult] = useState<PrescriptionAnalysisResult | null>(null);
  const [history, setHistory] = useState<AnalysisHistoryItem[]>([]);
  const [viewingHistoryItem, setViewingHistoryItem] = useState<AnalysisHistoryItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem('prescriptionHistory');
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (e) {
      console.error("Failed to parse history from localStorage", e);
      setHistory([]);
    }
  }, []);

  const resetUploader = () => {
    setFile(null);
    setPreview(null);
    setError(null);
    setCurrentResult(null);
    setViewingHistoryItem(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      resetUploader();
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
          setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  
  const handleAnalyze = async () => {
    if (!file || !preview) return;

    setIsLoading(true);
    setError(null);
    setCurrentResult(null);
    setViewingHistoryItem(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const imagePart = { inlineData: { data: preview.split(',')[1], mimeType: file.type } };
      const textPart = { text: "Analyze this medical prescription. Extract the medicines, check for authenticity markers, and provide general recommendations." };
      
      const systemInstruction = `You are an AI assistant specializing in analyzing handwritten and printed medical prescriptions.
- **Core Directive:** Your analysis and any provided information must strictly adhere to data from verified sources like the WHO, MoHFW India, and official drug information databases. You are a tool for digitizing and offering general guidance, NOT a medical professional.
- **Task 1: Extract Medicines:**
    - Carefully read the prescription image.
    - Identify each medicine name, its dosage (e.g., 500mg), and the frequency (e.g., 1-0-1, twice a day).
    - If any part is unreadable, state it clearly (e.g., "Dosage not clear"). Do not guess.
- **Task 2: Authenticity Checklist:**
    - Check for the presence of the following common markers on a valid prescription: Doctor's Name & Signature, Date of Prescription, Patient's Name.
    - For each item, report its status as 'Present', 'Not Clear', or 'Missing'.
    - This is a simple visual check, not a forensic verification.
- **Task 3: Recommendations:**
    - Provide general, safe recommendations based on standard medical practices (e.g., "Always complete the full course of antibiotics," "Do not share your medication," "Consult your doctor if you experience side effects.").
    - These recommendations should be sourced from public health guidelines (e.g., from WHO or MoHFW).
- **Task 4: Disclaimer:**
    - ALWAYS include a disclaimer stating that this AI analysis is not a substitute for professional medical advice, the interpretation may contain errors, and the user must consult their doctor and pharmacist before taking any medication.`;

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
              required: ['name', 'dosage', 'frequency'],
            }
          },
          authenticity_checks: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                item: { type: Type.STRING },
                status: { type: Type.STRING, enum: ['Present', 'Not Clear', 'Missing'] },
              },
              required: ['item', 'status'],
            }
          },
          recommendations: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          disclaimer: { type: Type.STRING },
        },
        required: ['medicines', 'authenticity_checks', 'recommendations', 'disclaimer'],
      };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: [imagePart, textPart] },
        config: { 
            systemInstruction: systemInstruction,
            responseMimeType: "application/json",
            responseSchema: responseSchema,
        },
      });

      const parsedResult = JSON.parse(response.text) as PrescriptionAnalysisResult;
      setCurrentResult(parsedResult);

      const newHistoryItem: AnalysisHistoryItem = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        imagePreview: preview,
        result: parsedResult
      };

      const updatedHistory = [newHistoryItem, ...history].slice(0, 10); // Keep last 10
      setHistory(updatedHistory);
      localStorage.setItem('prescriptionHistory', JSON.stringify(updatedHistory));

    } catch (err) {
      console.error("Analysis Error:", err);
      setError("Sorry, I was unable to analyze the prescription. Please try again with a clearer image.");
    } finally {
      setIsLoading(false);
    }
  };

  const currentViewResult = viewingHistoryItem ? viewingHistoryItem.result : currentResult;

  return (
    <div>
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Prescription Analysis</h1>
            <button onClick={onBack} className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-md">&larr; Back to Pharmacy</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-full">
                {currentViewResult ? (
                    <div>
                        <AnalysisResultDisplay result={currentViewResult} />
                        <div className="text-center pt-6 mt-6 border-t border-gray-700">
                             <button onClick={resetUploader} className="px-6 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">Analyze a New Prescription</button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col h-full">
                        <h2 className="text-xl font-semibold text-white mb-4">Upload Prescription</h2>
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className="flex-grow border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-gray-700/50 flex flex-col justify-center items-center"
                        >
                          {preview ? (
                            <img src={preview} alt="Prescription Preview" className="max-h-64 w-auto rounded-lg" />
                          ) : (
                            <>
                              <UploadCloudIcon />
                              <p className="mt-2 text-gray-300">Click to upload or drag & drop</p>
                              <p className="text-sm text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                            </>
                          )}
                        </div>
                         {error && <p className="text-center text-red-400 bg-red-500/20 p-3 mt-4 rounded-lg">{error}</p>}
                        <div className="mt-6 text-center">
                            <button onClick={handleAnalyze} className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed" disabled={isLoading || !file}>
                                {isLoading ? 'Analyzing...' : 'Submit for Analysis'}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="lg:col-span-2 bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Analysis History</h2>
                {history.length > 0 ? (
                    <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                        {history.map(item => (
                            <li key={item.id} className="bg-gray-800 p-3 rounded-lg border border-gray-600 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-300 font-semibold">Analyzed on:</p>
                                    <p className="text-xs text-gray-400">{new Date(item.timestamp).toLocaleString()}</p>
                                </div>
                                <button onClick={() => setViewingHistoryItem(item)} className="px-3 py-1 text-xs font-semibold text-teal-300 bg-teal-500/20 hover:bg-teal-500/40 rounded-full">View</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center text-gray-500 py-10">
                        <p>No past analyses found.</p>
                        <p className="text-sm">Your analysis history will appear here.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};


export const PharmacyPage: React.FC = () => {
    const [view, setView] = useState<'main' | 'analysis'>('main');
    
    const pharmacyOptions = [
        { id: 'upload', icon: <PrescriptionIcon />, title: 'Upload Prescription', description: 'AI-powered analysis of your prescription.' },
        { id: 'otc', icon: <OtcIcon />, title: 'Over-the-Counter', description: 'Shop for common health and wellness products.' },
        { id: 'wellness', icon: <WellnessIcon />, title: 'Wellness Products', description: 'Explore vitamins, supplements, and personal care items.' },
        { id: 'find', icon: <FindPharmacyIcon />, title: 'Find Nearby Pharmacy', description: 'Locate partner pharmacies in your area.' },
    ];

    const handleCardClick = (id: string) => {
        if (id === 'upload') {
            setView('analysis');
        } else {
            console.log(`Card clicked: ${id}`);
        }
    };

    if (view === 'analysis') {
        return (
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <PrescriptionAnalysis onBack={() => setView('main')} />
            </main>
        );
    }

    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Nourivox Pharmacy</h1>
                <p className="text-lg text-gray-400">Your one-stop shop for all your healthcare needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pharmacyOptions.map((option, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleCardClick(option.id)}
                        className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center flex flex-col items-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/40 transition-all text-left"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-400 mb-6">
                            {option.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                        <p className="text-gray-400 flex-grow">{option.description}</p>
                        <span className="mt-6 text-blue-400 font-semibold self-center">
                            {option.id === 'upload' ? 'Start Analysis' : 'Explore'} &rarr;
                        </span>
                    </button>
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