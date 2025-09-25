import React from 'react';
import type { Translations, LanguageCode } from './types';

export const languages: { code: LanguageCode; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'mr', name: 'मराठी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'gu', name: 'ગુજરાતી' },
];

export const translations: Translations = {
  // Header
  home: { en: 'Home', hi: 'होम', mr: 'मुख्यपृष्ठ', bn: 'হোম', ta: 'முகப்பு', te: 'హోమ్', gu: 'ઘર' },
  about: { en: 'About', hi: 'हमारे बारे में', mr: 'माहिती', bn: 'সম্পর্কে', ta: 'பற்றி', te: 'గురించి', gu: 'વિશે' },
  doctors: { en: 'Doctors', hi: 'डॉक्टर', mr: 'डॉक्टर', bn: 'ডাক্তার', ta: ' மருத்துவர்கள்', te: 'వైద్యులు', gu: 'ડોકટરો' },
  vaccines: { en: 'Vaccines', hi: 'टीके', mr: 'लस', bn: 'টিকা', ta: 'தடுப்பூசிகள்', te: 'వ్యాక్సిన్లు', gu: 'રસીઓ' },
  pharmacy: { en: 'Pharmacy', hi: 'फार्मेसी', mr: 'फार्मसी', bn: 'ফার্মেসি', ta: 'மருந்தகம்', te: 'ఫార్మసీ', gu: 'ફાર્મસી' },
  schemes: { en: 'Schemes', hi: 'योजनाएं', mr: 'योजना', bn: 'স্কিম', ta: 'திட்டங்கள்', te: 'పథకాలు', gu: 'યોજનાઓ' },
  outbreaks: { en: 'Outbreak Alerts', hi: 'प्रकोप अलर्ट', mr: 'प्रकोप सूचना', bn: 'প্রাদুর্ভাব সতর্কতা', ta: 'நோய் பரவல் எச்சரிக்கைகள்', te: 'వ్యాధి హెచ్చరికలు', gu: 'રોગચાળાની ચેતવણીઓ' },
  helplines: { en: 'Helplines', hi: 'हेल्पलाइन', mr: 'हेल्पलाइन', bn: 'হেল্পলাইন', ta: 'உதவி எண்கள்', te: 'హెల్ప్‌లైన్‌లు', gu: 'હેલ્પલાઇન' },
  dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड', mr: 'डॅशबोर्ड', bn: 'ড্যাশবোর্ড', ta: 'டாஷ்போர்டு', te: 'డాష్‌బోర్డ్', gu: 'ડેશબોર્ડ' },
  login: { en: 'Login', hi: 'लॉग इन', mr: 'लॉग इन', bn: 'লগইন', ta: 'உள்நுழை', te: 'లాగిన్', gu: 'લોગિન' },
  signup: { en: 'Sign Up', hi: 'साइन अप', mr: 'साइन अप', bn: 'নিবন্ধন করুন', ta: 'பதிவு செய்க', te: 'నమోదు చేయండి', gu: 'સાઇન અપ કરો' },
  logout: { en: 'Logout', hi: 'लॉग आउट', mr: '로그 아웃', bn: 'লগআউট', ta: 'வெளியேறு', te: 'లాగ్అవుట్', gu: 'લૉગ આઉટ' },
  profile: { en: 'Profile', hi: 'प्रोफ़ाइल', mr: 'प्रोफाइल', bn: 'প্রোফাইল', ta: 'சுயவிவரம்', te: 'ప్రొఫైల్', gu: 'પ્રોફાઇલ' },
  // Auth Modal
  email: { en: 'Email', hi: 'ईमेल', mr: 'ईमेल', bn: 'ইমেল', ta: 'மின்னஞ்சல்', te: 'ఇమెయిల్', gu: 'ઈમેલ' },
  password: { en: 'Password', hi: 'पासवर्ड', mr: 'पासवर्ड', bn: 'পাসওয়ার্ড', ta: 'கடவுச்சொல்', te: 'పాస్వర్డ్', gu: 'પાસવર્ડ' },
  login_with_google: { en: 'Login with Google', hi: 'Google के साथ लॉगिन करें', mr: 'Google सह लॉगिन करा', bn: 'Google দিয়ে লগইন করুন', ta: 'Google உடன் உள்நுழையவும்', te: 'Googleతో లాగిన్ చేయండి', gu: 'Google સાથે લોગિન કરો' },
  signup_with_google: { en: 'Sign Up with Google', hi: 'Google के साथ साइन अप करें', mr: 'Google सह साइन अप करा', bn: 'Google দিয়ে সাইন আপ করুন', ta: 'Google உடன் பதிவு செய்யவும்', te: 'Googleతో సైన్ అప్ చేయండి', gu: 'Google સાથે સાઇન અપ કરો' },
  no_account: { en: "Don't have an account?", hi: 'खाता नहीं है?', mr: 'खाते नाही?', bn: 'অ্যাকাউন্ট নেই?', ta: 'கணக்கு இல்லையா?', te: 'ఖాతా లేదా?', gu: 'ખાતું નથી?' },
  have_account: { en: 'Already have an account?', hi: 'पहले से ही एक खाता श्रेष्ठ?', mr: 'आधीपासूनच एक खाते आहे?', bn: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে?', ta: 'ஏற்கனவே கணக்கு உள்ளதா?', te: 'ఇప్పటికే ఖాతా ఉందా?', gu: 'પહેલેથી જ એકાન્ટ છે?' },
  create_account: { en: 'Create Your Account', hi: 'अपना खाता बनाएं', mr: 'तुमचे खाते तयार करा', bn: 'আপনার অ্যাকাউন্ট তৈরি করুন', ta: 'உங்கள் கணக்கை உருவாக்கவும்', te: 'మీ ఖాతాను సృష్టించండి', gu: 'તમારું એકાઉન્ટ બનાવો' },
  access_account: { en: 'Access Your Account', hi: 'अपने खाते तक पहुंचें', mr: 'तुमच्या खात्यात प्रवेश करा', bn: 'আপনার অ্যাকাউন্টে প্রবেশ করুন', ta: 'உங்கள் கணக்கை அணுகவும்', te: 'మీ ఖాతాను యాక్సెస్ చేయండి', gu: 'તમારા એકાઉન્ટને ઍક્સેસ કરો' },
  // Landing Page
  hero_title: { en: 'Nourivox - Your Health Companion', hi: 'नौरिवॉक्स - आपका स्वास्थ्य साथी', mr: 'नौरिवॉक्स - तुमचा आरोग्य साथी', bn: 'নুরিভক্স - আপনার স্বাস্থ্য সঙ্গী', ta: 'நூரிவோக்ஸ் - உங்கள் சுகாதார துணை', te: 'నౌరివాక్స్ - మీ ఆరోగ్య సహచరుడు', gu: 'નૌરીવોક્સ - તમારા આરોગ્ય સાથી' },
  hero_subtitle: { en: 'A voice that nurtures your health with intelligent AI conversations about your wellbeing', hi: 'एक आवाज़ जो आपकी भलाई के बारे में बुद्धिमान AI बातचीत के साथ आपके स्वास्थ्य का पोषण करती है', mr: 'एक आवाज जी तुमच्या आरोग्याबद्दल बुद्धिमान AI संभाषणांनी तुमचे आरोग्य जपते', bn: 'একটি কণ্ঠ যা আপনার সুস্থতা সম্পর্কে বুদ্ধিমান এআই কথোপকথনের মাধ্যমে আপনার স্বাস্থ্যকে লালন করে', ta: 'உங்கள் நல்வாழ்வு பற்றிய அறிவார்ந்த AI உரையாடல்களுடன் உங்கள் ஆரோக்கியத்தை வளர்க்கும் ஒரு குரல்', te: 'మీ శ్రేయస్సు గురించి తెలివైన AI సంభాషణలతో మీ ఆరోగ్యాన్ని పెంచే స్వరం', gu: 'એક અવાજ જે તમારી સુખાકારી વિશે બુદ્ધિશાળી AI વાર્તાલાપ સાથે તમારા સ્વાસ્થ્યને પોષે છે' },
  start_journey: { en: 'Start Your Health Journey', hi: 'अपनी स्वास्थ्य यात्रा शुरू करें', mr: 'तुमचा आरोग्य प्रवास सुरू करा', bn: 'আপনার স্বাস্থ্য যাত্রা শুরু করুন', ta: 'உங்கள் சுகாதார பயணத்தைத் தொடங்குங்கள்', te: 'మీ ఆరోగ్య ప్రయాణాన్ని ప్రారంభించండి', gu: 'તમારી આરોગ્ય યાત્રા શરૂ કરો' },
  learn_more: { en: 'Learn More', hi: 'और जानें', mr: 'अधिक जाणून घ्या', bn: 'আরও জানুন', ta: 'மேலும் அறிக', te: 'మరింత తెలుసుకోండి', gu: 'વધુ શીખો' },
  trusted_by: { en: 'Trusted by thousands worldwide', hi: 'दुनिया भर में हजारों लोगों द्वारा विश्वसनीय', mr: 'जगभरातील हजारो लोकांद्वारे विश्वसनीय', bn: 'বিশ্বজুড়ে হাজার হাজার দ্বারা বিশ্বস্ত', ta: 'உலகெங்கிலும் ஆயிரக்கணக்கானோரால் நம்பப்படுகிறது', te: 'ప్రపంచవ్యాప్తంగా వేలాది మందిచే విశ్వసించబడింది', gu: 'વિશ્વભરમાં હજારો લોકો દ્વારા વિશ્વસનીય' },
  // Features Section
  why_choose_title: { en: 'Why Choose Nourivox?', hi: 'नौरिवॉक्स क्यों चुनें?', mr: 'नौरिवॉक्स का निवडावे?', bn: 'কেন নুরিভক্স বেছে নেবেন?', ta: 'ஏன் நூரிவோக்ஸைத் தேர்ந்தெடுக்க வேண்டும்?', te: 'నౌరివాక్స్‌ను ఎందుకు ఎంచుకోవాలి?', gu: 'શા માટે નૌરીવોક્સ પસંદ કરો?' },
  why_choose_subtitle: { en: 'Advanced AI technology meets human expertise for comprehensive healthcare support', hi: 'उन्नत एआई तकनीक व्यापक स्वास्थ्य सेवा सहायता के लिए मानव विशेषज्ञता से मिलती है', mr: 'प्रगत AI तंत्रज्ञान सर्वसमावेशक आरोग्यसेवा समर्थनासाठी मानवी कौशल्याशी मिळते', bn: 'উন্নত এআই প্রযুক্তি ব্যাপক স্বাস্থ্যসেবা সহায়তার জন্য মানুষের দক্ষতার সাথে মিলিত হয়', ta: 'மேம்பட்ட AI தொழில்நுட்பம் விரிவான சுகாதார ஆதரவிற்காக மனித நிபுணத்துவத்தை சந்திக்கிறது', te: 'అధునాతన AI సాంకేతికత సమగ్ర ఆరోగ్య సంరక్షణ మద్దతు కోసం మానవ నైపుణ్యంతో కలుస్తుంది', gu: 'અદતન AI ટેકનોલોજી વ્યાપક હેલ્થકેર સપોર્ટ માટે માનવ કુશળતાને પૂર્ણ કરે છે' },
  feature_smart_ai_title: { en: 'Smart AI Chat', hi: 'स्मार्ट एआई चैट', mr: 'स्मार्ट এआय चॅट', bn: 'স্মার্ট এআই চ্যাট', ta: 'ஸ்மார்ட் AI அரட்டை', te: 'స్మార్ట్ AI చాట్', gu: 'સ્માર્ટ AI ચેટ' },
  feature_smart_ai_desc: { en: 'Get instant responses to your health questions with our advanced AI trained on medical knowledge', hi: 'चिकित्सा ज्ञान पर प्रशिक्षित हमारे उन्नत एआई के साथ अपने स्वास्थ्य प्रश्नों के त्वरित उत्तर प्राप्त करें', mr: 'आमच्या वैद्यकीय ज्ञानावर प्रशिक्षित प्रगत AI सह तुमच्या आरोग्य प्रश्नांची त्वरित उत्तरे मिळवा', bn: 'চিকিৎসা জ্ঞানে প্রশিক্ষিত আমাদের উন্নত এআই দিয়ে আপনার স্বাস্থ্য প্রশ্নের তাত্ক্ষণিক প্রতিক্রিয়া পান', ta: 'மருத்துவ அறிவில் பயிற்சி பெற்ற எங்கள் மேம்பட்ட AI மூலம் உங்கள் சுகாதார கேள்விகளுக்கு உடனடி பதில்களைப் பெறுங்கள்', te: 'వైద్య పరిజ్ఞానంపై శిక్షణ పొందిన మా అధునాతన AIతో మీ ఆరోగ్య ప్రశ్నలకు తక్షణ ప్రతిస్పందనలను పొందండి', gu: 'તબીબી જ્ઞાન પર પ્રશિક્ષિત અમારા અદતન AI સાથે તમારા સ્વાસ્થ્ય પ્રશ્નોના ત્વરિત જવાબો મેળવો' },
  feature_doctor_connect_title: { en: 'Doctor Connect', hi: 'डॉक्टर कनेक्ट', mr: 'डॉक्टर कनेक्ट', bn: 'ডাক্তার কানেক্ট', ta: 'டாக்டர் இணைப்பு', te: 'డాక్టర్ కనెక్ట్', gu: 'ડૉક્ટર કનેક્ટ' },
  feature_doctor_connect_desc: { en: 'Connect with licensed physicians for professional medical consultations when you need expert care', hi: 'जब आपको विशेषज्ञ देखभाल की आवश्यकता हो तो पेशेवर चिकित्सा परामर्श के लिए लाइसेंस प्राप्त चिकित्सकों से जुड़ें', mr: 'जेव्हा तुम्हाला तज्ञ काळजीची आवश्यकता असेल तेव्हा व्यावसायिक वैद्यकीय सल्ल्यासाठी परवानाधारक डॉक्टராंशी संपर्क साधा', bn: 'আপনার যখন বিশেষজ্ঞ যত্নের প্রয়োজন তখন পেশাদার চিকিৎসা পরামর্শের জন্য লাইসেন্সপ্রাপ্ত চিকিৎসকদের সাথে সংযোগ করুন', ta: 'உங்களுக்கு நிபுணர் பராமரிப்பு தேவைப்படும்போது தொழில்முறை மருத்துவ ஆலோசனைகளுக்கு உரிமம் பெற்ற மருத்துவர்களுடன் இணையுங்கள்', te: 'మీకు నిపుణుల సంరక్షణ అవసరమైనప్పుడు వృత్తిపరమైన వైద్య సంప్రదింపుల కోసం లైసెన్స్ పొందిన వైద్యులతో కనెక్ట్ అవ్వండి', gu: 'જ્યારે તમને નિષ્ણાત સંભાળની જરૂર હોય ત્યારે વ્યાવસાયિક તબીબી પરામર્શ માટે લાઇસન્સ પ્રાપ્ત ચિકિત્સકો સાથે જોડાઓ' },
  feature_personalized_care_title: { en: 'Personalized Care', hi: 'व्यक्तिगत देखभाल', mr: 'वैयक्तिकृत काळजी', bn: 'ব্যক্তিগতকৃত যত্ন', ta: 'தனிப்பயனாக்கப்பட்ட பராமரிப்பு', te: 'వ్యక్తిగతీకరించిన సంరక్షణ', gu: 'વ્યક્તિગત સંભાળ' },
  feature_personalized_care_desc: { en: 'Receive tailored health recommendations based on your medical history and current symptoms', hi: 'अपने चिकित्सा इतिहास और वर्तमान लक्षणों के आधार पर अनुरूप स्वास्थ्य सिफारिशें प्राप्त करें', mr: 'तुमच्या वैद्यकीय इतिहासावर आणि सध्याच्या लक्षणांवर आधारित तयार केलेल्या आरोग्य शिफारसी मिळवा', bn: 'আপনার চিকিৎসার ইতিহাস এবং বর্তমান লক্ষণগুলির উপর ভিত্তি করে উপযুক্ত স্বাস্থ্য সুপারিশ গ্রহণ করুন', ta: 'உங்கள் மருத்துவ வரலாறு மற்றும் தற்போதைய அறிகுறிகளின் அடிப்படையில் வடிவமைக்கப்பட்ட சுகாதார பரிந்துரைகளைப் பெறுங்கள்', te: 'మీ వైద్య చరిత్ర మరియు ప్రస్తుత లక్షణాల ఆధారంగా రూపొందించిన ఆరోగ్య సిఫార్సులను స్వీకరించండి', gu: 'તમારા તબીબી ઇતિહાસ અને વર્તમાન લક્ષણોના આધારે અનુરૂપ આરોગ્ય ભલામણો મેળવો' },
  feature_secure_private_title: { en: 'Secure & Private', hi: 'सुरक्षित और निजी', mr: 'सुरक्षित आणि खाजगी', bn: 'সুরক্ষিত এবং ব্যক্তিগত', ta: 'பாதுகாப்பான மற்றும் தனிப்பட்ட', te: 'సురక్షితమైన & ప్రైవేట్', gu: 'સુરક્ષિત અને ખાનગી' },
  feature_secure_private_desc: { en: 'Your health data is protected with enterprise-grade security and HIPAA compliance', hi: 'आपका स्वास्थ्य डेटा एंटरप्राइज़-ग्रेड सुरक्षा और HIPAA अनुपालन के साथ सुरक्षित है', mr: 'तुमचा आरोग्य डेटा एंटरप्राइझ-ग्रेड सुरक्षा आणि HIPAA अनुपालनाने संरक्षित आहे', bn: 'আপনার স্বাস্থ্য ডেটা এন্টারপ্রাইজ-গ্রেড সুরক্ষা এবং HIPAA সম্মতির সাথে সুরক্ষিত', ta: 'உங்கள் சுகாதாரத் தரவு நிறுவன-தர பாதுகாப்பு மற்றும் HIPAA இணக்கத்துடன் பாதுகாக்கப்படுகிறது', te: 'మీ ఆరోగ్య డేటా ఎంటర్‌ప్రైజ్-గ్రేడ్ భద్రత మరియు HIPAA వర్తింపుతో రక్షించబడింది', gu: 'તમારો સ્વાસ્થ્ય ડેટા એન્ટરપ્રાઇઝ-ગ્રેડ સુરક્ષા અને HIPAA અનુપાલન સાથે સુરક્ષિત છે' },
  transform_title: { en: 'Ready to Transform Your Healthcare Experience?', hi: 'अपने स्वास्थ्य सेवा अनुभव को बदलने के लिए तैयार हैं?', mr: 'तुमचा आरोग्यसेवा अनुभव बदलण्यासाठी तयार आहात?', bn: 'আপনার স্বাস্থ্যসেবা অভিজ্ঞতা রূপান্তর করতে প্রস্তুত?', ta: 'உங்கள் சுகாதார அனுபவத்தை மாற்றத் தயாரா?', te: 'మీ ఆరోగ్య సంరక్షణ అనుభవాన్ని మార్చడానికి సిద్ధంగా ఉన్నారా?', gu: 'તમારા હેલ્થકેર અનુભવને બદલવા માટે તૈયાર છો?' },
  transform_subtitle: { en: 'Join thousands of patients who trust Nourivox for their medical needs', hi: 'उन हजारों रोगियों में शामिल हों जो अपनी चिकित्सा आवश्यकताओं के लिए नौरिवॉक्स पर भरोसा करते हैं', mr: 'हजारो रुग्णांमध्ये सामील व्हा जे त्यांच्या वैद्यकीय गरजांसाठी नौरिवॉक्सवर विश्वास ठेवतात', bn: 'হাজার হাজার রোগীদের সাথে যোগ দিন যারা তাদের চিকিৎসার প্রয়োজনে নুরিভক্সকে বিশ্বাস করেন', ta: 'தங்கள் மருத்துவத் தேவைகளுக்காக நூரிவோக்ஸை நம்பும் ஆயிரக்கணக்கான நோயாளிகளுடன் சேருங்கள்', te: 'వారి వైద్య అవసరాల కోసం నౌరివాక్స్‌ను విశ్వసించే వేలాది మంది రోగులతో చేరండి', gu: 'હજારો દર્દીઓ સાથે જોડાઓ જેઓ તેમની તબીબી જરૂરિયાતો માટે નૌરીવોક્સ પર વિશ્વાસ કરે છે' },
  get_started_free: { en: 'Get Started Free', hi: 'मुफ्त में शुरू करें', mr: 'विनामूल्य प्रारंभ करा', bn: 'বিনামূল্যে শুরু করুন', ta: 'இலவசமாகத் தொடங்குங்கள்', te: 'ఉచితంగా ప్రారంభించండి', gu: 'મફત પ્રારંભ કરો' },
  schedule_demo: { en: 'Schedule Demo', hi: 'डेमो शेड्यूल करें', mr: 'डेμο शेड्यूल करा', bn: 'ডেমো নির্ধারণ করুন', ta: 'டெமோவைத் திட்டமிடுங்கள்', te: 'డెమోని షెడ్యూల్ చేయండి', gu: 'ડેમો શેડ્યૂલ કરો' },
  // About Page - New Section
  about_rev_title: { en: 'Revolutionizing Healthcare with AI', hi: 'एआई के साथ स्वास्थ्य सेवा में क्रांति', mr: 'एआयसह आरोग्यसेवेत क्रांती', bn: 'এআই দিয়ে স্বাস্থ্যসেবায় বিপ্লব', ta: 'AI மூலம் சுகாதாரப் புரட்சி', te: 'AIతో ఆరోగ్య సంరక్షణలో విప్లవం', gu: 'AI સાથે આરોગ્યસંભાળમાં ક્રાંતિ' },
  about_rev_subtitle: { en: 'Making quality healthcare accessible to everyone, everywhere', hi: 'गुणवत्तापूर्ण स्वास्थ्य सेवा को सभी के लिए, हर जगह सुलभ बनाना', mr: 'गुणवत्तेची आरोग्यसेवा प्रत्येकासाठी, सर्वत्र उपलब्ध करून देणे', bn: 'সকলের জন্য, সর্বত্র মানসম্মত স্বাস্থ্যসেবা সহজলভ্য করা', ta: 'தரமான சுகாதாரத்தை அனைவருக்கும், எல்லா இடங்களிலும் அணுகக்கூடியதாக மாற்றுதல்', te: 'నాణ్యమైన ఆరోగ్య సంరక్షణను అందరికీ, ప్రతిచోటా అందుబాటులో ఉంచడం', gu: 'ગુણવત્તાયુક્ત આરોગ્યસંભાળ દરેક માટે, દરેક જગ્યાએ સુલભ બનાવવી' },
  about_tech_title: { en: 'Advanced AI Technology', hi: 'उन्नत एआई प्रौद्योगिकी', mr: 'प्रगत एआय तंत्रज्ञान', bn: 'উন্নত এআই প্রযুক্তি', ta: 'மேம்பட்ட AI தொழில்நுட்பம்', te: 'అధునాతన AI టెక్నాలజీ', gu: 'અદ્યતન AI ટેકનોલોજી' },
  about_tech_expert_team_title: { en: 'Expert Medical Team', hi: 'विशेषज्ञ चिकित्सा दल', mr: 'तज्ञ वैद्यकीय पथक', bn: 'বিশেষজ্ঞ মেডিকেল টিম', ta: 'நிபுணர் மருத்துவக் குழு', te: 'నిపుణుల వైద్య బృందం', gu: 'નિષ્ણાત મેડિકલ ટીમ' },
  about_tech_expert_team_desc: { en: 'Licensed physicians and specialists available for consultations and complex medical questions', hi: 'परामर्श और जटिल चिकित्सा प्रश्नों के लिए लाइसेंस प्राप्त चिकित्सक और विशेषज्ञ उपलब्ध हैं', mr: 'सल्लामसलत आणि जटिल वैद्यकीय प्रश्नांसाठी परवानाधारक चिकित्सक आणि विशेषज्ञ उपलब्ध आहेत', bn: 'লাইসেন্সপ্রাপ্ত চিকিৎসক এবং বিশেষজ্ঞরা পরামর্শ এবং জটিল চিকিৎসা প্রশ্নের জন্য উপলব্ধ', ta: 'ஆலோசனைகள் மற்றும் சிக்கலான மருத்துவக் கேள்விகளுக்கு உரிமம் பெற்ற மருத்துவர்கள் மற்றும் நிபுணர்கள் உள்ளனர்', te: 'సంప్రదింపులు మరియు సంక్లిష్టమైన వైద్య ప్రశ్నల కోసం లైసెన్స్ పొందిన వైద్యులు మరియు నిపుణులు అందుబాటులో ఉన్నారు', gu: 'પરામર્શ અને જટિલ તબીબી પ્રશ્નો માટે લાઇસન્સ પ્રાપ્ત ચિકિત્સકો અને નિષ્ણાતો ઉપલબ્ધ છે' },
  about_tech_patient_first_title: { en: 'Patient-First Approach', hi: 'रोगी-प्रथम दृष्टिकोण', mr: 'रुग्ण-प्रथम दृष्टिकोन', bn: 'রোগী-প্রথম পদ্ধতি', ta: 'நோயாளி-முதல் அணுகுமுறை', te: 'రోగి-మొదటి విధానం', gu: 'દર્દી-પ્રથમ અભિગમ' },
  about_tech_patient_first_desc: { en: 'Every interaction is designed with patient safety, privacy, and satisfaction as our top priorities', hi: 'प्रत्येक बातचीत को रोगी सुरक्षा, गोपनीयता और संतुष्टि को हमारी सर्वोच्च प्राथमिकता के रूप में डिज़ाइन किया गया है', mr: 'प्रत्येक संवाद रुग्ण सुरक्षा, गोपनीयता आणि समाधान या आमच्या सर्वोच्च प्राधान्यांसह तयार केले आहे', bn: 'প্রতিটি মিথস্ক্রিয়া রোগীর নিরাপত্তা, গোপনীয়তা এবং সন্তুষ্টিকে আমাদের সর্বোচ্চ অগ্রাধিকার হিসাবে ডিজাইন করা হয়েছে', ta: 'ஒவ்வொரு தொடர்பும் நோயாளி பாதுகாப்பு, தனியுரிமை மற்றும் திருப்தியை எங்கள் முதன்மை முன்னுரிமைகளாகக் கொண்டு வடிவமைக்கப்பட்டுள்ளது', te: 'ప్రతి పరస్పర చర్య రోగి భద్రత, గోప్యత మరియు సంతృప్తి మా ప్రధాన ప్రాధాన్యతలుగా రూపొందించబడింది', gu: 'દરેક ક્રિયાપ્રતિક્રિયા દર્દીની સલામતી, ગોપનીયતા અને સંતોષને અમારી ટોચની પ્રાથમિકતાઓ તરીકે ડિઝાઇન કરવામાં આવી છે' },
  about_tech_advanced_ai_title: { en: 'Advanced AI Technology', hi: 'उन्नत एआई प्रौद्योगिकी', mr: 'प्रगत এआय तंत्रज्ञान', bn: 'উন্নত এআই প্রযুক্তি', ta: 'மேம்பட்ட AI தொழில்நுட்பம்', te: 'అధునాతన AI టెక్నాలజీ', gu: 'અદ્યતન AI ટેકનોલોજી' },
  about_tech_advanced_ai_desc: { en: 'Our AI is trained on vast medical databases and continuously updated with the latest healthcare knowledge', hi: 'हमारा एआई विशाल चिकित्सा डेटाबेस पर प्रशिक्षित है और नवीनतम स्वास्थ्य सेवा ज्ञान के साथ लगातार अपडेट किया जाता है', mr: 'आमचे एआय विशाल वैद्यकीय डेटाबेसवर प्रशिक्षित आहे आणि नवीनतम आरोग्यसेवा ज्ञानाने सतत अद्यतनित केले जाते', bn: 'আমাদের এআই বিশাল মেডিকেল ডাটাবেসগুলিতে প্রশিক্ষিত এবং সর্বশেষ স্বাস্থ্যসেবা জ্ঞান দিয়ে ক্রমাগত আপডেট করা হয়', ta: 'எங்கள் AI பரந்த மருத்துவ தரவுத்தளங்களில் பயிற்சி பெற்றது மற்றும் சமீபத்திய சுகாதார அறிவுடன் தொடர்ந்து புதுப்பிக்கப்படுகிறது', te: 'మా AI విస్తారమైన వైద్య డేటాబేస్‌లపై శిక్షణ పొందింది మరియు తాజా ఆరోగ్య సంరక్షణ పరిజ్ఞానంతో నిరంతరం నవీకరించబడుతుంది', gu: 'અમારું AI વિશાળ તબીબી ડેટાબેસેસ પર પ્રશિક્ષિત છે અને નવીનતમ આરોગ્યસંભાળ જ્ઞાન સાથે સતત અપડેટ થાય છે' },
  about_aim_title: { en: 'Our Aim', hi: 'हमारा उद्देश्य', mr: 'आमचे ध्येय', bn: 'আমাদের লক্ষ্য', ta: 'எங்கள் நோக்கம்', te: 'మా లక్ష్యం', gu: 'અમારો હેતુ' },
  about_aim_desc: { en: 'To bridge the gap between people and healthcare knowledge, promoting awareness, healthy living, and informed decisions.', hi: 'लोगों और स्वास्थ्य सेवा ज्ञान के बीच की खाई को पाटना, जागरूकता, स्वस्थ जीवन और सूचित निर्णयों को बढ़ावा देना।', mr: 'लोक आणि आरोग्यसेवा ज्ञान यांच्यातील दरी कमी करणे, जागरूकता, निरोगी जीवन आणि माहितीपूर्ण निर्णयांना प्रोत्साहन देणे।', bn: 'মানুষ এবং স্বাস্থ্যসেবা জ্ঞানের মধ্যে ব্যবধান পূরণ করা, সচেতনতা, স্বাস্থ্যকর জীবনযাপন এবং জ্ঞাত সিদ্ধান্ত গ্রহণকে উৎসাহিত করা।', ta: 'மக்கள் மற்றும் சுகாதார அறிவுக்கும் இடையிலான இடைவெளியைக் குறைத்தல், விழிப்புணர்வு, ஆரோக்கியமான வாழ்க்கை மற்றும் தகவலறிந்த முடிவுகளை ஊக்குவித்தல்.', te: 'ప్రజలు మరియు ఆరోగ్య సంరక్షణ జ్ఞానం మధ్య అంతరాన్ని తగ్గించడం, అవగాహన, ఆరోగ్యకరమైన జీవనం మరియు సమాచారంతో కూడిన నిర్ణయాలను ప్రోత్సహించడం.', gu: 'લોકો અને આરોગ્યસંભાળ જ્ઞાન વચ્ચેના અંતરને દૂર કરવા, જાગૃતિ, સ્વસ્થ જીવન અને માહિતગાર નિર્ણયોને પ્રોત્સાહન આપવું.' },
  about_scope_title: { en: 'Scope', hi: 'दायरा', mr: 'व्याप्ती', bn: 'সুযোগ', ta: 'நோக்கம்', te: 'పరిధి', gu: 'કાર્યક્ષેત્ર' },
  about_scope_current_title: { en: 'Current Focus', hi: 'वर्तमान फोकस', mr: 'सध्याचे लक्ष', bn: 'বর্তমান ফোকাস', ta: 'தற்போதைய கவனம்', te: 'ప్రస్తుత దృష్టి', gu: 'વર્તમાન ફોકસ' },
  about_scope_current_desc: { en: 'Authentic health resources and tips. Simple, user-friendly platform', hi: 'प्रामाणिक स्वास्थ्य संसाधन और युक्तियाँ। सरल, उपयोगकर्ता-अनुकूल मंच', mr: 'अस्सल आरोग्य संसाधने आणि टिपा. सोपे, वापरकर्ता-अनुकूल प्लॅटफॉर्म', bn: 'প্রামাণিক স্বাস্থ্য সম্পদ এবং টিপস। সহজ, ব্যবহারকারী-বান্ধব প্ল্যাটফর্ম', ta: 'உண்மையான சுகாதார ஆதாரங்கள் மற்றும் குறிப்புகள். எளிய, பயனர் நட்பு தளம்', te: 'ప్రామాణికమైన ఆరోగ్య వనరులు మరియు చిట్కాలు. సరళమైన, వినియోగదారు-స్నేహపూర్వక వేదిక', gu: 'પ્રમાણિક આરોગ્ય સંસાધનો અને ટિપ્સ. સરળ, વપરાશકર્તા મૈત્રીપૂર્ણ પ્લેટફોર્મ' },
  about_scope_future_title: { en: 'Future Scope', hi: 'भविष्य का दायरा', mr: 'भविष्यातील व्याप्ती', bn: 'ভবিষ্যতের সুযোগ', ta: 'எதிர்கால நோக்கம்', te: 'భవిష్యత్ పరిధి', gu: 'ભવિષ્યનો અવકાશ' },
  about_scope_future_desc: { en: 'AI tools, teleconsultation, and personalized health guidance', hi: 'एआई उपकरण, टेलीконсуल्टेशन, और व्यक्तिगत स्वास्थ्य मार्गदर्शन', mr: 'एआय साधने, टेलिकन्सल्टेशन, आणि वैयक्तिकृत आरोग्य मार्गदर्शन', bn: 'এআই সরঞ্জাম, টেলিকনসালটেশন, এবং ব্যক্তিগতকৃত স্বাস্থ্য নির্দেশিকা', ta: 'AI கருவிகள், தொலை ஆலோசனை மற்றும் தனிப்பயனாக்கப்பட்ட சுகாதார வழிகாட்டுதல்', te: 'AI సాధనాలు, టెలికన్సల్టేషన్ మరియు వ్యక్తిగతీకరించిన ఆరోగ్య మార్గదర్శకత్వం', gu: 'AI સાધનો, ટેલિકન્સલ્ટેશન અને વ્યક્તિગત આરોગ્ય માર્ગદર્શન' },
  join_revolution_title: { en: 'Join Our Healthcare Revolution', hi: 'हमारी स्वास्थ्य सेवा क्रांति में शामिल हों', mr: 'आमच्या आरोग्यसेवा क्रांतीमध्ये सामील व्हा', bn: 'আমাদের স্বাস্থ্যসেবা বিপ্লবে যোগ দিন', ta: 'எங்கள் சுகாதாரப் புரட்சியில் சேரவும்', te: 'మా ఆరోగ్య సంరక్షణ విప్లవంలో చేరండి', gu: 'અમારી આરોગ્યસંભાળ ક્રાંતિમાં જોડાઓ' },
  join_revolution_subtitle: { en: "Together, we're making healthcare knowledge accessible to everyone, everywhere.", hi: 'साथ मिलकर, हम स्वास्थ्य सेवा ज्ञान को सभी के लिए, हर जगह सुलभ बना रहे हैं।', mr: 'एकत्रितपणे, आम्ही आरोग्यसेवा ज्ञान प्रत्येकासाठी, सर्वत्र उपलब्ध करून देत आहोत.', bn: 'একসাথে, আমরা স্বাস্থ্যসেবা জ্ঞানকে সকলের জন্য, সর্বত্র সহজলভ্য করছি।', ta: 'ஒன்றாக, நாங்கள் சுகாதார அறிவை அனைவருக்கும், எல்லா இடങ്ങളിലും அணுகக்கூடியதாக மாற்றுகிறோம்.', te: 'కలిసి, మేము ఆరోగ్య సంరక్షణ పరిజ్ఞానాన్ని అందరికీ, ప్రతిచోటా అందుబాటులో ఉంచుతున్నాము.', gu: 'સાથે મળીને, અમે આરોગ્યસંભાળ જ્ઞાનને દરેક માટે, દરેક જગ્યાએ સુલભ બનાવી રહ્યા છીએ.' },
  // Chatbot
  chatbot_placeholder: { en: 'Ask a health question or upload an image...', hi: 'स्वास्थ्य प्रश्न पूछें या एक छवि अपलोड करें...', mr: 'आरोग्य प्रश्न विचारा किंवा एक प्रतिमा अपलोड करा...', bn: 'একটি স্বাস্থ্য প্রশ্ন জিজ্ঞাসা করুন বা একটি ছবি আপলোড করুন...', ta: 'சுகாதாரக் கேள்வியைக் கேட்கவும் அல்லது படத்தைப் பதிவேற்றவும்...', te: 'ఆరోగ్య ప్రశ్న అడగండి లేదా చిత్రాన్ని అప్‌లోడ్ చేయండి...', gu: 'આરોગ્ય પ્રશ્ન પૂછો અથવા છબી અપલોડ કરો...' },
  send: { en: 'Send', hi: 'भेजें', mr: 'पाठवा', bn: 'পাঠান', ta: 'அனுப்பு', te: 'పంపండి', gu: 'મોકલો' },
  upload_image: { en: 'Upload Image', hi: 'छवि अपलोड करें', mr: 'प्रतिमा अपलोड करा', bn: 'ছবি আপলোড করুন', ta: 'படத்தை பதிவேற்றவும்', te: 'చిత్రాన్ని అప్‌లోడ్ చేయండి', gu: 'છબી અપલોડ કરો' },
  new_chat: { en: 'New Chat', hi: 'नई चैट', mr: 'नवीन गप्पा', bn: 'নতুন চ্যাট', ta: 'புதிய அரட்டை', te: 'కొత్త చాట్', gu: 'નવી ચેટ' },
  chat_history: { en: 'Chat History', hi: 'चैट इतिहास', mr: 'गप्पांचा इतिहास', bn: 'চ্যাট ইতিহাস', ta: 'அரட்டை வரலாறு', te: 'చాట్ చరిత్ర', gu: 'ચેટ ઇતિહાસ' },
  // Dashboard
  my_appointments: { en: 'My Appointments', hi: 'मेरी नियुक्तियाँ', mr: 'माझ्या भेटी', bn: 'আমার অ্যাপয়েন্টমেন্ট', ta: 'எனது சந்திப்புகள்', te: 'నా అపాయింట్‌మెంట్లు', gu: 'મારી નિમણૂంકો' },
  book_appointment: { en: 'Book a new appointment', hi: 'एक नई नियुक्ति बुक करें', mr: 'नवीन भेट बुक करा', bn: 'একটি নতুন অ্যাপয়েন্টমেন্ট বুক করুন', ta: 'புதிய சந்திப்பை பதிவு செய்யுங்கள்', te: 'కొత్త అపాయింట్‌మెంట్ బుక్ చేయండి', gu: 'નવી એપોઇન્ટમેન્ટ બુક કરો' },
  doctor_name: { en: "Doctor's Name", hi: 'डॉक्टर का नाम', mr: 'डॉक्टरांचे नाव', bn: 'ডাক্তারের নাম', ta: 'மருத்துவர் பெயர்', te: 'డాక్టర్ పేరు', gu: 'ડૉક્ટરનું નામ' },
  date: { en: 'Date', hi: 'दिनांक', mr: 'तاريخ', bn: 'তারিখ', ta: 'தேதி', te: 'తేదీ', gu: 'તારીખ' },
  time: { en: 'Time', hi: 'समय', mr: 'वेळ', bn: 'সময়', ta: 'நேரம்', te: 'సమయం', gu: 'સમય' },
  my_reminders: { en: 'My Reminders', hi: 'मेरे अनुस्मारक', mr: 'माझे स्मरणपत्र', bn: 'আমার অনুস্মারক', ta: 'எனது நினைவூட்டல்கள்', te: 'నా రిమైండర్‌లు', gu: 'મારા રીમાઇન્ડર્સ' },
  add_reminder: { en: 'Add a new reminder', hi: 'एक नया अनुस्मारक जोड़ें', mr: 'नवीन स्मरणपत्र जोडा', bn: 'একটি নতুন অনুস্মারক যোগ করুন', ta: 'புதிய நினைவூட்டலைச் சேர்க்கவும்', te: 'కొత్త రిమైండర్‌ని జోడించండి', gu: 'નવું રીમાઇન્ડર ઉમેરો' },
  reminder_text: { en: 'Reminder (e.g., Take medicine)', hi: 'अनुस्मारक (उदा., दवा लें)', mr: 'स्मरणपत्र (उदा., औषध घ्या)', bn: 'অনুস্মারক (যেমন, ওষুধ খান)', ta: 'நினைவூட்டல் (எ.கா., மருந்து எடுத்துக் கொள்ளுங்கள்)', te: 'రిమైండర్ (ఉదా., మందులు తీసుకోండి)', gu: 'રીમાઇન્ડર (દા.ત., દવા લો)' },
  login_prompt: { en: 'Please log in to view your dashboard.', hi: 'अपना डैशबोर्ड देखने के लिए कृपया लॉग इन करें।', mr: 'तुमचा डॅशबोर्ड पाहण्यासाठी कृपया लॉग इन करा.', bn: 'আপনার ড্যাশবোর্ড দেখতে লগইন করুন.', ta: 'உங்கள் டாஷ்போர்டைக் காண உள்நுழையவும்.', te: 'మీ డాష్‌బోర్డ్‌ను వీక్షించడానికి దయచేసి లాగిన్ చేయండి.', gu: 'તમારું ડેશબોર્ડ જોવા માટે કૃપા કરીને લોગિન કરો.' },
   // Footer
  footer_tagline: { en: 'Transforming healthcare through AI-powered assistance and seamless doctor consultations.', hi: 'एआई-संचालित सहायता और निर्बाध डॉक्टर परामर्श के माध्यम से स्वास्थ्य सेवा को बदलना।', mr: 'एआय-चालित सहाय्य आणि अखंड डॉक्टर सल्लामसलतांद्वारे आरोग्यसेवेमध्ये परिवर्तन घडवणे.', bn: 'এআই-চালিত সহায়তা এবং নির্বিঘ্ন ডাক্তার পরামর্শের মাধ্যমে স্বাস্থ্যসেবা রূপান্তরিত করা।', ta: 'AI-இயங்கும் உதவி மற்றும் தடையற்ற மருத்துவர் ஆலோசனைகள் மூலம் சுகாதாரத்தை மாற்றுதல்.', te: 'AI-ఆధారిత సహాయం మరియు అతుకులు లేని డాక్టర్ సంప్రదింపుల ద్వారా ఆరోగ్య సంరక్షణను మార్చడం.', gu: 'AI-સંચાલિત સહાય અને સીમલેસ ડૉક્ટર પરામર્શ દ્વારા આરોગ્યસંભાળને પરિવર્તિત કરવું.' },
  quick_links: { en: 'Quick Links', hi: 'त्वरित लिंक्स', mr: 'द्रुत दुवे', bn: 'দ্রুত লিঙ্ক', ta: 'விரைவு இணைப்புகள்', te: 'త్వరిత లింకులు', gu: 'ઝડપી લિંક્સ' },
  footer_home: { en: 'Home', hi: 'होम', mr: 'मुख्यपृष्ठ', bn: 'হোম', ta: 'முகப்பு', te: 'హోమ్', gu: 'ઘર' },
  footer_about: { en: 'About Us', hi: 'हमारे बारे में', mr: 'आमच्याबद्दल', bn: 'আমাদের সম্পর্কে', ta: 'எங்களை பற்றி', te: 'మా గురించి', gu: 'અમારા વિશે' },
  footer_doctors: { en: 'Our Doctors', hi: 'हमारे डॉक्टर', mr: 'आमचे डॉक्टर', bn: 'আমাদের ডাক্তার', ta: 'எங்கள் மருத்துவர்கள்', te: 'మా వైద్యులు', gu: 'અમારા ડોકટરો' },
  footer_how_it_works: { en: 'How It Works', hi: 'यह कैसे काम करता है', mr: 'हे कसे कार्य करते', bn: 'এটা কিভাবে কাজ করে', ta: 'எப்படி இது செயல்படுகிறது', te: 'ఇది ఎలా పని చేస్తుంది', gu: 'તે કેવી રીતે કામ કરે છે' },
  footer_pricing: { en: 'Pricing', hi: 'मूल्य निर्धारण', mr: 'किंमत', bn: 'মূল্য নির্ধারণ', ta: 'விலை நிர்ணயம்', te: 'ధర', gu: 'કિંમત' },
  legal: { en: 'Legal', hi: 'कानूनी', mr: 'कायदेशीर', bn: 'আইনি', ta: 'சட்டபூர்வமான', te: 'చట్టపరమైన', gu: 'કાનૂની' },
  privacy_policy: { en: 'Privacy Policy', hi: 'गोपनीयता नीति', mr: 'गोपनीयता धोरण', bn: 'গোপনীয়তা নীতি', ta: 'தனியுரிமைக் கொள்கை', te: 'గోప్యతా విధానం', gu: 'ગોપનીયતા નીતિ' },
  terms_of_service: { en: 'Terms of Service', hi: 'सेवा की शर्तें', mr: 'सेवा अटी', bn: 'সেবার শর্তাবলী', ta: 'சேவை விதிமுறைகள்', te: 'సేవా నిబంధనలు', gu: 'સેવાની શરતો' },
  hipaa_compliance: { en: 'HIPAA Compliance', hi: 'HIPAA अनुपालन', mr: 'HIPAA अनुपालन', bn: 'HIPAA সম্মতি', ta: 'HIPAA இணக்கம்', te: 'HIPAA వర్తింపు', gu: 'HIPAA પાલન' },
  cookie_policy: { en: 'Cookie Policy', hi: 'कुकी नीति', mr: 'कुकी धोरण', bn: 'কুকি নীতি', ta: 'குக்கீ கொள்கை', te: 'కుకీ విధానం', gu: 'કૂકી નીતિ' },
  contact_us: { en: 'Contact Us', hi: 'हमसे संपर्क करें', mr: 'आमच्याशी संपर्क साधा', bn: 'যোগাযোগ করুন', ta: 'எங்களை தொடர்பு கொள்ள', te: 'మమ్మల్ని సంప్రదించండి', gu: 'અમારો સંપર્ક કરો' },
  get_in_touch: { en: 'Get in Touch', hi: 'संपर्क में रहें', mr: 'संपर्कात रहा', bn: 'যোগাযোগ করুন', ta: 'தொடர்பில் இருங்கள்', te: 'సంప్రదించండి', gu: 'સંપર્કમાં રહો' },
  phone_number: { en: '1-800-HEALTH-AI', hi: '1-800-हेल्थ-एआई', mr: '१-८००-हेल्थ-एआय', bn: '১-৮০০-হেলথ-এআই', ta: '1-800-ஹெல்த்-ஏஐ', te: '1-800-హెల్త్-AI', gu: '1-800-હેલ્થ-એઆઈ' },
  email_address: { en: 'support@nourivox.ai', hi: 'support@nourivox.ai', mr: 'support@nourivox.ai', bn: 'support@nourivox.ai', ta: 'support@nourivox.ai', te: 'support@nourivox.ai', gu: 'support@nourivox.ai' },
  availability: { en: 'Available 24/7 Worldwide', hi: 'दुनिया भर में 24/7 उपलब्ध', mr: 'जगभरात २४/७ उपलब्ध', bn: 'বিশ্বব্যাপী ২৪/৭ উপলব্ধ', ta: 'உலகளவில் 24/7 கிடைக்கும்', te: 'ప్రపంచవ్యాప్తంగా 24/7 అందుబాటులో ఉంది', gu: 'વિશ્વભરમાં 24/7 ઉપલબ્ધ' },
  emergency_title: { en: 'Emergency?', hi: 'आपातकालीन?', mr: 'आणीबाणी?', bn: 'জরুরী?', ta: 'அவசர?', te: 'అత్యవసరమా?', gu: 'કટોકટી?' },
  emergency_desc: { en: 'Call 108 or your local emergency number', hi: '108 या अपने स्थानीय आपातकालीन नंबर पर कॉल करें', mr: '१०८ किंवा तुमच्या स्थानिक आपत्कालीन क्रमांकावर कॉल करा', bn: '১০৮ বা আপনার স্থানীয় জরুরি নম্বরে কল করুন', ta: '108 அல்லது உங்கள் உள்ளூர் அவசர எண்ணை அழைக்கவும்', te: '108 లేదా మీ స్థానిక అత్యవసర నంబర్‌కు కాల్ చేయండి', gu: '108 અથવા તમારા સ્થાનિક ઇમરજન્સી નંબર પર કૉલ કરો' },
  copyright: { en: '© 2024 Nourivox AI. All rights reserved.', hi: '© 2024 नौरिवॉक्स एआई। सर्वाधिकार सुरक्षित।', mr: '© २०२४ नौरिवॉक्स एआय. सर्व हक्क राखीव.', bn: '© ২০২৪ নুরিভক্স এআই। সর্বস্বত্ব সংরক্ষিত।', ta: '© 2024 நூரிவோக்ஸ் AI. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.', te: '© 2024 నౌరివాక్స్ AI. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.', gu: '© 2024 નૌરીવોક્સ AI. સર્વાધિકાર સુરક્ષિત.' },
  disclaimer: { en: 'Not a replacement for professional medical advice. Always consult your doctor.', hi: 'पेशेवर चिकित्सा सलाह का प्रतिस्थापन नहीं। हमेशा अपने डॉक्टर से सलाह लें।', mr: 'व्यावसायिक वैद्यकीय सल्ल्यासाठी पर्याय नाही. नेहमी आपल्या डॉक्टरांचा सल्ला घ्या.', bn: 'পেশাদার চিকিৎসা পরামর্শের বিকল্প নয়। সর্বদা আপনার ডাক্তারের সাথে পরামর্শ করুন।', ta: 'தொழில்முறை மருத்துவ ஆலோசனைக்கு மாற்றாக இல்லை. எப்போதும் உங்கள் மருத்துவரை அணுகவும்.', te: 'వృత్తిపరమైన వైద్య సలహాకు ప్రత్యామ్నాయం కాదు. ఎల్లప్పుడూ మీ వైద్యుడిని సంప్రదించండి.', gu: 'વ્યાવસાયિક તબીબી સલાહનો વિકલ્પ નથી. હંમેશા તમારા ડૉક્ટરની સલાહ લો.' },
};

// SVG Icons

export const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path fill="#3b82f6" d="M83.43,45.13c-2.31-13.45-13.73-23.77-27.18-23.77H43.75c-13.45,0-24.87,10.32-27.18,23.77H12.5v28h4.07c2.31,13.45,13.73,23.77,27.18,23.77h12.5c13.45,0,24.87-10.32,27.18-23.77H87.5v-28H83.43Z"></path>
            <circle fill="#fff" cx="43.75" cy="46.88" r="5"></circle>
            <circle fill="#fff" cx="62.5" cy="46.88" r="5"></circle>
            <path fill="#fff" d="M43.75,62.5s6.25,5,18.75,0c0,0-6.25-2.5-18.75,0Z"></path>
        </svg>
        <span className="text-2xl font-bold text-white">Nourivox</span>
    </div>
);

export const CloseIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.904,36.213,44,30.606,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

export const UserIcon = () => (
    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    </div>
);

export const AiIcon = () => (
    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.152 0l-1.414 1.414M5.636 18.364l-1.414 1.414m15.152 0l-1.414-1.414M9 12a3 3 0 116 0 3 3 0 01-6 0z" /></svg>
    </div>
);

export const SendIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
);

export const PaperClipIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
);

export const MicrophoneIcon: React.FC<{ isListening?: boolean }> = ({ isListening }) => (
    <svg className={`w-6 h-6 ${isListening ? 'text-red-500 animate-pulse' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
);

export const SpeakerOnIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
);

export const SpeakerOffIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l-4-4m0 4l4-4" /></svg>
);

export const HeroRobot = () => (
  <svg className="w-64 h-64 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" />
    <rect x="4" y="12" width="16" height="8" rx="2" />
    <path d="M4 14H2" />
    <path d="M20 14H22" />
    <path d="M15 12V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6" />
    <path d="M9 12h6" />
  </svg>
);

export const SmartAiChatIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
);

export const DoctorConnectIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

export const PersonalizedCareIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);

export const SecurePrivateIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.606 11.955 11.955 0 019 2.606 12.02 12.02 0 00-2.382-9.988z" /></svg>
);

export const InfoIcon = () => (
    <svg className="w-6 h-6 mr-3 text-teal-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const PhoneIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);

export const BookmarkIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
);

export const CopyIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
);

export const ExternalLinkIcon = () => (
    <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
);

export const AdvancedAITechnologyIcon = () => (
    <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M4 17v4M2 19h4M17 3v4M15 5h4M19 17v4M17 19h4M12 9v4m3-2l-3 3-3-3" /></svg>
);

export const OurAimIcon = () => (
    <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

export const ScopeIcon = () => (
    <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);

export const CalendarIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);

export const PrescriptionIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);

export const OtcIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
);

export const WellnessIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l1.414-1.414a1 1 0 011.414 0l1.414 1.414M12 11v9M5 21h14" /></svg>
);

export const FindPharmacyIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

export const LocationIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657l-5.657 5.657-5.657-5.657a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>
);

export const HeartIcon = () => (
    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
);

export const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
);

export const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.62 1.924 2.413 3.32 4.545 3.359-1.85 1.455-4.18 2.23-6.72 2.23-.42 0-.84-.025-1.25-.074 2.39 1.536 5.23 2.43 8.31 2.43 9.96 0 15.41-8.25 15.41-15.41 0-.235 0-.468-.015-.7a11.022 11.022 0 002.7-2.79z" /></svg>
);

export const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

export const EmailIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

export const AlertIcon = () => (
    <svg className="w-6 h-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const CasesIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
);

export const SeverityIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

export const PreventionIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.606 11.955 11.955 0 019 2.606 12.02 12.02 0 00-2.382-9.988z" /></svg>
);

export const UploadCloudIcon = () => (
    <svg className="w-12 h-12 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
);

export const CheckCircleIcon = () => (
    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const XCircleIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const QuestionMarkCircleIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const FirstAidIcon = () => (
    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v6m-3-3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const FitnessIcon = () => (
    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h2.5l2-4 3 6 2-4 1.5 2H20" /></svg>
);

export const DietIcon = () => (
    <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10a5 5 0 11-10 0 5 5 0 0110 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a1 1 0 011 1v1a1 1 0 01-1 1" /></svg>
);

export const MenuIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);

export const NewChatIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const TrashIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
);