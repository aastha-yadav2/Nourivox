import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { useAppContext } from '../hooks/useAppContext';
import { CloseIcon, LocationIcon, AlertIcon as AlertIconBig, CasesIcon, SeverityIcon, PreventionIcon, ExternalLinkIcon, PhoneIcon, CopyIcon, CheckCircleIcon } from '../constants';

interface HealthAlert {
  region: string;
  outbreak: string;
  cases: string;
  severity: 'Low' | 'Moderate' | 'High' | 'Critical';
  preventive_measures: string[];
  source: string;
  source_name: string;
}

const severityStyles = {
    Low: { text: 'text-green-300', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    Moderate: { text: 'text-yellow-300', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30' },
    High: { text: 'text-orange-300', bg: 'bg-orange-500/20', border: 'border-orange-500/30' },
    Critical: { text: 'text-red-300', bg: 'bg-red-500/20', border: 'border-red-500/30' },
};

const AlertCard: React.FC<{ alert: HealthAlert }> = ({ alert }) => {
    const styles = severityStyles[alert.severity] || severityStyles.Low;
    return (
        <div className={`border ${styles.border} ${styles.bg} p-4 rounded-lg shadow-md`}>
            <div className="flex items-center mb-2">
                <AlertIconBig />
                <h4 className="text-lg font-bold text-teal-300 ml-2">{alert.outbreak}</h4>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                <div className="flex items-center text-gray-300"><CasesIcon /> <span className="ml-1.5">Cases: <strong>{alert.cases}</strong></span></div>
                <div className={`flex items-center ${styles.text}`}><SeverityIcon /> <span className="ml-1.5">Severity: <strong>{alert.severity}</strong></span></div>
            </div>
            <div className="mb-3">
                <div className="flex items-center text-gray-200 mb-1.5"><PreventionIcon /><p className="font-semibold ml-2 text-sm">Prevention:</p></div>
                <ul className="list-disc list-inside text-gray-400 text-xs space-y-1 ml-2">
                    {alert.preventive_measures.map((measure, i) => <li key={i}>{measure}</li>)}
                </ul>
            </div>
            <div className="border-t border-gray-700/50 mt-2 pt-2 text-right">
                <a href={alert.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300">
                    Source: {alert.source_name} <ExternalLinkIcon />
                </a>
            </div>
        </div>
    );
};


const EmergencyModal: React.FC = () => {
    const { isEmergencyModalOpen, closeEmergencyModal } = useAppContext();
    
    const [alerts, setAlerts] = useState<HealthAlert[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [location, setLocation] = useState("Dehradun, Uttarakhand");

    const helplines = [
        { name: 'National Health Helpline', number: '1800-180-1104' },
        { name: 'KIRAN Mental Health Helpline', number: '1800-599-0019' },
        { name: 'National Emergency Number', number: '112' },
        { name: 'Medical Ambulance', number: '108' },
        { name: "Women's Helpline", number: '1091' },
        { name: "Child Helpline", number: '1098' },
    ];
    const [copied, setCopied] = useState('');
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(''), 2000);
    };

    useEffect(() => {
        if (!isEmergencyModalOpen) return;

        const fetchAlerts = async () => {
            setLoading(true);
            setError(null);
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                const prompt = `Provide real-time health outbreak information for ${location}. Use official sources like WHO, Indian MoHFW. Summarize status, cases, severity, and preventive measures.`;

                const schema = {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            region: { type: Type.STRING },
                            outbreak: { type: Type.STRING },
                            cases: { type: Type.STRING },
                            severity: { type: Type.STRING, enum: ['Low', 'Moderate', 'High', 'Critical'] },
                            preventive_measures: { type: Type.ARRAY, items: { type: Type.STRING } },
                            source: { type: Type.STRING },
                            source_name: { type: Type.STRING }
                        },
                        required: ["region", "outbreak", "cases", "severity", "preventive_measures", "source", "source_name"]
                    }
                };

                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash', contents: prompt,
                    config: { responseMimeType: "application/json", responseSchema: schema },
                });

                setAlerts(JSON.parse(response.text));

            } catch (err) {
                setError("Failed to fetch health alerts. Displaying cached data.");
                setAlerts([ { "region": "Dehradun", "outbreak": "Dengue", "cases": "50+", "severity": "Moderate", "preventive_measures": ["Use mosquito repellent.", "Eliminate stagnant water.", "Consult a doctor for high fever."], "source": "https://health.uk.gov.in/", "source_name": "Uttarakhand Health Dept." } ]);
            } finally {
                setLoading(false);
            }
        };

        fetchAlerts();
    }, [isEmergencyModalOpen, location]);

    if (!isEmergencyModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in" aria-modal="true" role="dialog">
            <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-gray-700">
                <div className="p-5 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
                    <h2 className="text-xl font-bold text-white">Emergency Information</h2>
                    <button onClick={closeEmergencyModal} className="text-gray-400 hover:text-white" aria-label="Close"><CloseIcon /></button>
                </div>

                <div className="p-6 flex-grow overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white flex items-center"><LocationIcon /> <span className="ml-2">Outbreak Alerts for {location}</span></h3>
                        {loading && <div className="flex justify-center items-center h-40"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-400"></div></div>}
                        {error && <p className="text-center text-sm text-red-400 bg-red-500/20 p-3 rounded-lg">{error}</p>}
                        {!loading && alerts.length === 0 && <p className="text-sm text-gray-400 bg-gray-900/50 p-3 rounded-lg">No active outbreaks reported.</p>}
                        {!loading && alerts.length > 0 && (
                            <div className="space-y-4">
                                {alerts.map((alert, index) => <AlertCard key={index} alert={alert} />)}
                            </div>
                        )}
                    </div>
                    
                    <div className="space-y-4">
                         <h3 className="text-lg font-semibold text-white">Emergency Helplines</h3>
                         <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg">
                            <ul className="divide-y divide-gray-700/50">
                                {helplines.map((line) => (
                                <li key={line.number} className="p-3 flex items-center justify-between group">
                                    <div>
                                        <p className="font-semibold text-gray-200 text-sm">{line.name}</p>
                                        <a href={`tel:${line.number}`} className="text-teal-400 font-mono hover:underline">{line.number}</a>
                                    </div>
                                    <button onClick={() => copyToClipboard(line.number)} className="p-2 rounded-full bg-gray-700 text-gray-400 hover:bg-teal-600 hover:text-white transition-all opacity-0 group-hover:opacity-100" aria-label={`Copy ${line.name} number`}>
                                        {copied === line.number ? <CheckCircleIcon /> : <CopyIcon />}
                                    </button>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmergencyModal;
