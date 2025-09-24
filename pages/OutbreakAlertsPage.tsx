import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { LocationIcon, AlertIcon, CasesIcon, SeverityIcon, PreventionIcon, ExternalLinkIcon } from '../constants';

interface HealthAlert {
  region: string;
  outbreak: string;
  cases: string; // Using string to accommodate formats like "50+"
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
        <div className={`border ${styles.border} ${styles.bg} p-6 rounded-xl shadow-lg flex flex-col`}>
            <div className="flex items-center mb-3">
                <AlertIcon />
                <h3 className="text-xl font-bold text-teal-300 ml-2">{alert.outbreak}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center text-gray-300">
                    <CasesIcon /> <span className="ml-2">Cases: <strong>{alert.cases}</strong></span>
                </div>
                 <div className={`flex items-center ${styles.text}`}>
                    <SeverityIcon /> <span className="ml-2">Severity: <strong>{alert.severity}</strong></span>
                </div>
            </div>

            <div className="mb-4 flex-grow">
                <div className="flex items-center text-gray-200 mb-2">
                    <PreventionIcon />
                    <p className="font-semibold ml-2">Preventive Measures:</p>
                </div>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1.5 ml-2">
                    {alert.preventive_measures.map((measure, i) => <li key={i}>{measure}</li>)}
                </ul>
            </div>

            <div className="border-t border-gray-700 mt-4 pt-4 text-right">
                <a href={alert.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300">
                    Source: {alert.source_name} <ExternalLinkIcon />
                </a>
            </div>
        </div>
    );
};

const OutbreakAlertsPage: React.FC = () => {
    const [alerts, setAlerts] = useState<HealthAlert[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [location, setLocation] = useState("Dehradun, Uttarakhand"); // Simulated location

    useEffect(() => {
        const fetchAlerts = async () => {
            setLoading(true);
            setError(null);
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                
                const prompt = `
                    Provide real-time health outbreak information for the user's location: ${location}.
                    Use publicly available verified data sources like WHO, Indian MoHFW, State Health Departments.
                    Summarize outbreak status, number of cases, severity, and key preventive measures.
                    Keep responses factual and non-alarming.
                    Example: "Alert: Dengue outbreak in Dehradun. 50+ cases reported this week. Use mosquito repellent, cover water containers, and consult a doctor if fever develops."
                `;

                const responseSchema = {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            region: { type: Type.STRING },
                            outbreak: { type: Type.STRING },
                            cases: { type: Type.STRING, description: "Number of cases, can be a string like '50+'" },
                            severity: { type: Type.STRING, enum: ['Low', 'Moderate', 'High', 'Critical'] },
                            preventive_measures: { type: Type.ARRAY, items: { type: Type.STRING } },
                            source: { type: Type.STRING, description: "The URL of the official source." },
                            source_name: { type: Type.STRING, description: "The name of the source, e.g., 'MoHFW India'." }
                        },
                        required: ["region", "outbreak", "cases", "severity", "preventive_measures", "source", "source_name"]
                    }
                };
                
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                    config: {
                        responseMimeType: "application/json",
                        responseSchema: responseSchema,
                    },
                });

                const parsedAlerts = JSON.parse(response.text);
                setAlerts(parsedAlerts);

            } catch (err) {
                console.error("Error fetching outbreak alerts:", err);
                setError("Failed to fetch health alerts. The AI service may be temporarily unavailable.");
                // Add dummy data on error for demonstration
                setAlerts([
                  {
                    "region": "Dehradun",
                    "outbreak": "Dengue",
                    "cases": "50+",
                    "severity": "Moderate",
                    "preventive_measures": ["Use mosquito repellent and wear long sleeves.", "Eliminate stagnant water sources around your home.", "Consult a doctor immediately if you develop a high fever with body aches."],
                    "source": "https://health.uk.gov.in/",
                    "source_name": "Uttarakhand Health Dept."
                  }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchAlerts();
    }, [location]);

    return (
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-4">Health Outbreak Alerts</h1>
                    <div className="inline-flex items-center justify-center bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-full">
                        <LocationIcon />
                        <p className="ml-2">Showing alerts for: <span className="font-semibold text-white">{location}</span></p>
                    </div>
                </div>

                {loading && (
                     <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400"></div>
                     </div>
                )}
                {error && <p className="text-center text-red-400 bg-red-500/20 p-4 rounded-lg">{error}</p>}
                
                {!loading && !error && alerts.length === 0 && (
                    <p className="text-center text-gray-400 bg-gray-800 p-6 rounded-lg">No active outbreaks reported for your area based on available data.</p>
                )}

                {!loading && alerts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {alerts.map((alert, index) => (
                            <AlertCard key={index} alert={alert} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default OutbreakAlertsPage;