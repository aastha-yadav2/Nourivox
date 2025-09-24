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
  have_account: { en: 'Already have an account?', hi: 'पहले से ही एक खाता श्रेष्ठ?', mr: 'आधीपासूनच एक खाते आहे?', bn: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে?', ta: 'ஏற்கனவே கணக்கு உள்ளதா?', te: 'ఇప్పటికే ఖాతా ఉందా?', gu: 'પહેલેથી જ એકાઉન્ટ છે?' },
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
  why_choose_subtitle: { en: 'Advanced AI technology meets human expertise for comprehensive healthcare support', hi: 'उन्नत एआई तकनीक व्यापक स्वास्थ्य सेवा सहायता के लिए मानव विशेषज्ञता से मिलती है', mr: 'प्रगत AI तंत्रज्ञान सर्वसमावेशक आरोग्यसेवा समर्थनासाठी मानवी कौशल्याशी मिळते', bn: 'উন্নত এআই প্রযুক্তি ব্যাপক স্বাস্থ্যসেবা সহায়তার জন্য মানুষের দক্ষতার সাথে মিলিত হয়', ta: 'மேம்பட்ட AI தொழில்நுட்பம் விரிவான சுகாதார ஆதரவிற்காக மனித நிபுணத்துவத்தை சந்திக்கிறது', te: 'అధునాతన AI సాంకేతికత సమగ్ర ఆరోగ్య సంరక్షణ మద్దతు కోసం మానవ నైపుణ్యంతో కలుస్తుంది', gu: 'અદ્યતન AI ટેકનોલોજી વ્યાપક હેલ્થકેર સપોર્ટ માટે માનવ કુશળતાને પૂર્ણ કરે છે' },
  feature_smart_ai_title: { en: 'Smart AI Chat', hi: 'स्मार्ट एआई चैट', mr: 'स्मार्ट एआय चॅट', bn: 'স্মার্ট এআই চ্যাট', ta: 'ஸ்மார்ட் AI அரட்டை', te: 'స్మార్ట్ AI చాట్', gu: 'સ્માર્ટ AI ચેટ' },
  feature_smart_ai_desc: { en: 'Get instant responses to your health questions with our advanced AI trained on medical knowledge', hi: 'चिकित्सा ज्ञान पर प्रशिक्षित हमारे उन्नत एआई के साथ अपने स्वास्थ्य प्रश्नों के त्वरित उत्तर प्राप्त करें', mr: 'आमच्या वैद्यकीय ज्ञानावर प्रशिक्षित प्रगत AI सह तुमच्या आरोग्य प्रश्नांची त्वरित उत्तरे मिळवा', bn: 'চিকিৎসা জ্ঞানে প্রশিক্ষিত আমাদের উন্নত এআই দিয়ে আপনার স্বাস্থ্য প্রশ্নের তাত্ক্ষণিক প্রতিক্রিয়া পান', ta: 'மருத்துவ அறிவில் பயிற்சி பெற்ற எங்கள் மேம்பட்ட AI மூலம் உங்கள் சுகாதார கேள்விகளுக்கு உடனடி பதில்களைப் பெறுங்கள்', te: 'వైద్య పరిజ్ఞానంపై శిక్షణ పొందిన మా అధునాతన AIతో మీ ఆరోగ్య ప్రశ్నలకు తక్షణ ప్రతిస్పందనలను పొందండి', gu: 'તબીબી જ્ઞાન પર પ્રશિક્ષિત અમારા અદ્યતન AI સાથે તમારા સ્વાસ્થ્ય પ્રશ્નોના ત્વરિત જવાબો મેળવો' },
  feature_doctor_connect_title: { en: 'Doctor Connect', hi: 'डॉक्टर कनेक्ट', mr: 'डॉक्टर कनेक्ट', bn: 'ডাক্তার কানেক্ট', ta: 'டாக்டர் இணைப்பு', te: 'డాక్టర్ కనెక్ట్', gu: 'ડૉક્ટર કનેક્ટ' },
  feature_doctor_connect_desc: { en: 'Connect with licensed physicians for professional medical consultations when you need expert care', hi: 'जब आपको विशेषज्ञ देखभाल की आवश्यकता हो तो पेशेवर चिकित्सा परामर्श के लिए लाइसेंस प्राप्त चिकित्सकों से जुड़ें', mr: 'जेव्हा तुम्हाला तज्ञ काळजीची आवश्यकता असेल तेव्हा व्यावसायिक वैद्यकीय सल्ल्यासाठी परवानाधारक डॉक्टरांशी संपर्क साधा', bn: 'আপনার যখন বিশেষজ্ঞ যত্নের প্রয়োজন তখন পেশাদার চিকিৎসা পরামর্শের জন্য লাইসেন্সপ্রাপ্ত চিকিৎসকদের সাথে সংযোগ করুন', ta: 'உங்களுக்கு நிபுணர் பராமரிப்பு தேவைப்படும்போது தொழில்முறை மருத்துவ ஆலோசனைகளுக்கு உரிமம் பெற்ற மருத்துவர்களுடன் இணையுங்கள்', te: 'మీకు నిపుణుల సంరక్షణ అవసరమైనప్పుడు వృత్తిపరమైన వైద్య సంప్రదింపుల కోసం లైసెన్స్ పొందిన వైద్యులతో కనెక్ట్ అవ్వండి', gu: 'જ્યારે તમને નિષ્ણાત સંભાળની જરૂર હોય ત્યારે વ્યાવસાયિક તબીબી પરામર્શ માટે લાઇસન્સ પ્રાપ્ત ચિકિત્સકો સાથે જોડાઓ' },
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
  about_tech_advanced_ai_title: { en: 'Advanced AI Technology', hi: 'उन्नत एआई प्रौद्योगिकी', mr: 'प्रगत एआय तंत्रज्ञान', bn: 'উন্নত এআই প্রযুক্তি', ta: 'மேம்பட்ட AI தொழில்நுட்பம்', te: 'అధునాతన AI టెక్నాలజీ', gu: 'અદ્યતન AI ટેકનોલોજી' },
  about_tech_advanced_ai_desc: { en: 'Our AI is trained on vast medical databases and continuously updated with the latest healthcare knowledge', hi: 'हमारा एआई विशाल चिकित्सा डेटाबेस पर प्रशिक्षित है और नवीनतम स्वास्थ्य सेवा ज्ञान के साथ लगातार अपडेट किया जाता है', mr: 'आमचे एआय विशाल वैद्यकीय डेटाबेसवर प्रशिक्षित आहे आणि नवीनतम आरोग्यसेवा ज्ञानाने सतत अद्यतनित केले जाते', bn: 'আমাদের এআই বিশাল মেডিকেল ডাটাবেসগুলিতে প্রশিক্ষিত এবং সর্বশেষ স্বাস্থ্যসেবা জ্ঞান দিয়ে ক্রমাগত আপডেট করা হয়', ta: 'எங்கள் AI பரந்த மருத்துவ தரவுத்தளங்களில் பயிற்சி பெற்றது மற்றும் சமீபத்திய சுகாதார அறிவுடன் தொடர்ந்து புதுப்பிக்கப்படுகிறது', te: 'మా AI విస్తారమైన వైద్య డేటాబేస్‌లపై శిక్షణ పొందింది మరియు తాజా ఆరోగ్య సంరక్షణ పరిజ్ఞానంతో నిరంతరం నవీకరించబడుతుంది', gu: 'અમારું AI વિશાળ તબીબી ડેટાબેસેસ પર પ્રશિક્ષિત છે અને નવીનતમ આરોગ્યસંભાળ જ્ઞાન સાથે સતત અપડેટ થાય છે' },
  about_aim_title: { en: 'Our Aim', hi: 'हमारा उद्देश्य', mr: 'आमचे ध्येय', bn: 'আমাদের লক্ষ্য', ta: 'எங்கள் நோக்கம்', te: 'మా లక్ష్యం', gu: 'અમારો હેતુ' },
  about_aim_desc: { en: 'To bridge the gap between people and healthcare knowledge, promoting awareness, healthy living, and informed decisions.', hi: 'लोगों और स्वास्थ्य सेवा ज्ञान के बीच की खाई को पाटना, जागरूकता, स्वस्थ जीवन और सूचित निर्णयों को बढ़ावा देना।', mr: 'लोक आणि आरोग्यसेवा ज्ञान यांच्यातील दरी कमी करणे, जागरूकता, निरोगी जीवन आणि माहितीपूर्ण निर्णयांना प्रोत्साहन देणे।', bn: 'মানুষ এবং স্বাস্থ্যসেবা জ্ঞানের মধ্যে ব্যবধান পূরণ করা, সচেতনতা, স্বাস্থ্যকর জীবনযাপন এবং জ্ঞাত সিদ্ধান্ত গ্রহণকে উৎসাহিত করা।', ta: 'மக்கள் மற்றும் சுகாதார அறிவுக்கும் இடையிலான இடைவெளியைக் குறைத்தல், விழிப்புணர்வு, ஆரோக்கியமான வாழ்க்கை மற்றும் தகவலறிந்த முடிவுகளை ஊக்குவித்தல்.', te: 'ప్రజలు మరియు ఆరోగ్య సంరక్షణ జ్ఞానం మధ్య అంతరాన్ని తగ్గించడం, అవగాహన, ఆరోగ్యకరమైన జీవనం మరియు సమాచారంతో కూడిన నిర్ణయాలను ప్రోత్సహించడం.', gu: 'લોકો અને આરોગ્યસંભાળ જ્ઞાન વચ્ચેના અંતરને દૂર કરવા, જાગૃતિ, સ્વસ્થ જીવન અને માહિતગાર નિર્ણયોને પ્રોત્સાહન આપવું.' },
  about_scope_title: { en: 'Scope', hi: 'दायरा', mr: 'व्याप्ती', bn: 'সুযোগ', ta: 'நோக்கம்', te: 'పరిధి', gu: 'કાર્યક્ષેત્ર' },
  about_scope_current_title: { en: 'Current Focus', hi: 'वर्तमान फोकस', mr: 'सध्याचे लक्ष', bn: 'বর্তমান ফোকাস', ta: 'தற்போதைய கவனம்', te: 'ప్రస్తుత దృష్టి', gu: 'વર્તમાન ફોકસ' },
  about_scope_current_desc: { en: 'Authentic health resources and tips. Simple, user-friendly platform', hi: 'प्रामाणिक स्वास्थ्य संसाधन और युक्तियाँ। सरल, उपयोगकर्ता-अनुकूल मंच', mr: 'अस्सल आरोग्य संसाधने आणि टिपा. सोपे, वापरकर्ता-अनुकूल प्लॅटफॉर्म', bn: 'প্রামাণিক স্বাস্থ্য সম্পদ এবং টিপস। সহজ, ব্যবহারকারী-বান্ধব প্ল্যাটফর্ম', ta: 'உண்மையான சுகாதார ஆதாரங்கள் மற்றும் குறிப்புகள். எளிய, பயனர் நட்பு தளம்', te: 'ప్రామాణికమైన ఆరోగ్య వనరులు మరియు చిట్కాలు. సరళమైన, వినియోగదారు-స్నేహపూర్వక వేదిక', gu: 'પ્રમાણિક આરોગ્ય સંસાધનો અને ટિપ્સ. સરળ, વપરાશકર્તા મૈત્રીપૂર્ણ પ્લેટફોર્મ' },
  about_scope_future_title: { en: 'Future Scope', hi: 'भविष्य का दायरा', mr: 'भविष्यातील व्याप्ती', bn: 'ভবিষ্যতের সুযোগ', ta: 'எதிர்கால நோக்கம்', te: 'భవిష్యత్ పరిధి', gu: 'ભવિષ્યનો અવકાશ' },
  about_scope_future_desc: { en: 'AI tools, teleconsultation, and personalized health guidance', hi: 'एआई उपकरण, टेलीконсуल्टेशन, और व्यक्तिगत स्वास्थ्य मार्गदर्शन', mr: 'एआय साधने, टेलिकन्सल्टेशन, आणि वैयक्तिकृत आरोग्य मार्गदर्शन', bn: 'এআই সরঞ্জাম, টেলিকনসালটেশন, এবং ব্যক্তিগতকৃত স্বাস্থ্য নির্দেশিকা', ta: 'AI கருவிகள், தொலை ஆலோசனை மற்றும் தனிப்பயனாக்கப்பட்ட சுகாதார வழிகாட்டுதல்', te: 'AI సాధనాలు, టెలికన్సల్టేషన్ మరియు వ్యక్తిగతీకరించిన ఆరోగ్య మార్గదర్శకత్వం', gu: 'AI સાધનો, ટેલિકન્સલ્ટેશન અને વ્યક્તિગત આરોગ્ય માર્ગદર્શન' },
  join_revolution_title: { en: 'Join Our Healthcare Revolution', hi: 'हमारी स्वास्थ्य सेवा क्रांति में शामिल हों', mr: 'आमच्या आरोग्यसेवा क्रांतीमध्ये सामील व्हा', bn: 'আমাদের স্বাস্থ্যসেবা বিপ্লবে যোগ দিন', ta: 'எங்கள் சுகாதாரப் புரட்சியில் சேரவும்', te: 'మా ఆరోగ్య సంరక్షణ విప్లవంలో చేరండి', gu: 'અમારી આરોગ્યસંભાળ ક્રાંતિમાં જોડાઓ' },
  join_revolution_subtitle: { en: "Together, we're making healthcare knowledge accessible to everyone, everywhere.", hi: 'साथ मिलकर, हम स्वास्थ्य सेवा ज्ञान को सभी के लिए, हर जगह सुलभ बना रहे हैं।', mr: 'एकत्रितपणे, आम्ही आरोग्यसेवा ज्ञान प्रत्येकासाठी, सर्वत्र उपलब्ध करून देत आहोत.', bn: 'একসাথে, আমরা স্বাস্থ্যসেবা জ্ঞানকে সকলের জন্য, সর্বত্র সহজলভ্য করছি।', ta: 'ஒன்றாக, நாங்கள் சுகாதார அறிவை அனைவருக்கும், எல்லா இடங்களிலும் அணுகக்கூடியதாக மாற்றுகிறோம்.', te: 'కలిసి, మేము ఆరోగ్య సంరక్షణ పరిజ్ఞానాన్ని అందరికీ, ప్రతిచోటా అందుబాటులో ఉంచుతున్నాము.', gu: 'સાથે મળીને, અમે આરોગ્યસંભાળ જ્ઞાનને દરેક માટે, દરેક જગ્યાએ સુલભ બનાવી રહ્યા છીએ.' },
  // Chatbot
  chatbot_placeholder: { en: 'Ask a health question or upload an image...', hi: 'स्वास्थ्य प्रश्न पूछें या एक छवि अपलोड करें...', mr: 'आरोग्य प्रश्न विचारा किंवा एक प्रतिमा अपलोड करा...', bn: 'একটি স্বাস্থ্য প্রশ্ন জিজ্ঞাসা করুন বা একটি ছবি আপলোড করুন...', ta: 'சுகாதாரக் கேள்வியைக் கேட்கவும் அல்லது படத்தைப் பதிவேற்றவும்...', te: 'ఆరోగ్య ప్రశ్న అడగండి లేదా చిత్రాన్ని అప్‌లోడ్ చేయండి...', gu: 'આરોગ્ય પ્રશ્ન પૂછો અથવા છબી અપલોડ કરો...' },
  send: { en: 'Send', hi: 'भेजें', mr: 'पाठवा', bn: 'পাঠান', ta: 'அனுப்பு', te: 'పంపండి', gu: 'મોકલો' },
  upload_image: { en: 'Upload Image', hi: 'छवि अपलोड करें', mr: 'प्रतिमा अपलोड करा', bn: 'ছবি আপলোড করুন', ta: 'படத்தை பதிவேற்றவும்', te: 'చిత్రాన్ని అప్‌లోడ్ చేయండి', gu: 'છબી અપલોડ કરો' },
  // Dashboard
  my_appointments: { en: 'My Appointments', hi: 'मेरी नियुक्तियाँ', mr: 'माझ्या भेटी', bn: 'আমার অ্যাপয়েন্টমেন্ট', ta: 'எனது சந்திப்புகள்', te: 'నా అపాయింట్‌మెంట్లు', gu: 'મારી નિમણૂંકો' },
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
  emergency_desc: { en: 'Call 911 or your local emergency number', hi: '911 या अपने स्थानीय आपातकालीन नंबर पर कॉल करें', mr: '९११ किंवा तुमच्या स्थानिक आपत्कालीन क्रमांकावर कॉल करा', bn: '৯১১ বা আপনার স্থানীয় জরুরি নম্বরে কল করুন', ta: '911 அல்லது உங்கள் உள்ளூர் அவசர எண்ணை அழைக்கவும்', te: '911 లేదా మీ స్థానిక అత్యవసర నంబర్‌కు కాల్ చేయండి', gu: '911 અથવા તમારા સ્થાનિક ઇમરજન્સી નંબર પર કૉલ કરો' },
  copyright: { en: '© 2024 Nourivox AI. All rights reserved.', hi: '© 2024 नौरिवॉक्स एआई। सर्वाधिकार सुरक्षित।', mr: '© २०२४ नौरिवॉक्स एआय. सर्व हक्क राखीव.', bn: '© ২০২৪ নুরিভক্স এআই। সর্বস্বত্ব সংরক্ষিত।', ta: '© 2024 நூரிவோக்ஸ் AI. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.', te: '© 2024 నౌరివాక్స్ AI. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.', gu: '© 2024 નૌરીવોક્સ AI. સર્વાધિકાર સુરક્ષિત.' },
  disclaimer: { en: 'Not a replacement for professional medical advice. Always consult your doctor.', hi: 'पेशेवर चिकित्सा सलाह का प्रतिस्थापन नहीं। हमेशा अपने डॉक्टर से सलाह लें।', mr: 'व्यावसायिक वैद्यकीय सल्ल्यासाठी पर्याय नाही. नेहमी आपल्या डॉक्टरांचा सल्ला घ्या.', bn: 'পেশাদার চিকিৎসা পরামর্শের বিকল্প নয়। সর্বদা আপনার ডাক্তারের সাথে পরামর্শ করুন।', ta: 'தொழில்முறை மருத்துவ ஆலோசனைக்கு மாற்றாக இல்லை. எப்போதும் உங்கள் மருத்துவரை அணுகவும்.', te: 'వృత్తిపరమైన వైద్య సలహాకు ప్రత్యామ్నాయం కాదు. ఎల్లప్పుడూ మీ వైద్యుడిని సంప్రదించండి.', gu: 'વ્યાવસાયિક તબીબી સલાહનો વિકલ્પ નથી. હંમેશા તમારા ડૉક્ટરની સલાહ લો.' },
};

// SVG Icons

export const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="h-10 w-10 text-cyan-400" viewBox="0 0 165 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M110.791 43.7135C110.298 43.639 109.815 43.5869 109.322 43.5246C109.815 43.5869 110.298 43.639 110.791 43.7135Z" />
            <path d="M129.584 104.282C123.635 125.323 103.82 140 80.8284 140H60.1659C37.174 140 17.3589 125.323 11.4101 104.282H0V63.2818H11.4101C17.3589 42.2408 37.174 27.5639 60.1659 27.5639H80.8284C103.82 27.5639 123.635 42.2408 129.584 63.2818H141V104.282H129.584Z" />
            <path d="M114.391 8.875C114.391 13.7779 110.435 17.75 105.55 17.75C100.666 17.75 96.7099 13.7779 96.7099 8.875C96.7099 3.97211 100.666 0 105.55 0C110.435 0 114.391 3.97211 114.391 8.875Z" />
            <path d="M105.55 17.75V34" stroke="currentColor" strokeWidth="8" />
            <path d="M149 84.875H165" stroke="currentColor" strokeWidth="8" />
            <ellipse cx="60.1659" cy="66.125" rx="7.05" ry="7.125" fill="white" />
            <ellipse cx="87.8784" cy="66.125" rx="7.05" ry="7.125" fill="white" />
            <path d="M60.1659 88.25C60.1659 88.25 68.9659 95.375 87.8784 88.25C87.8784 88.25 79.0784 84.75 60.1659 88.25Z" fill="white" />
            <path d="M135.093 83.136C135.093 98.412 122.993 110.563 107.788 110.563C92.583 110.563 80.4834 98.412 80.4834 83.136C80.4834 78.4323 81.7146 74.0538 83.8549 70.25H80.8284L80.4834 69.875V63.2818L107.788 47.5L135.093 63.2818V83.136Z" />
            <path d="M116.205 83.136H99.3711" stroke="white" strokeWidth="8" />
            <path d="M107.788 91.5526V74.7192" stroke="white" strokeWidth="8" />
        </svg>
        <span className="text-2xl font-bold text-white">Nourivox</span>
    </div>
);


export const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white bg-blue-500 rounded-full p-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

export const AiIcon = () => (
    <div className="h-8 w-8 text-white bg-blue-800 rounded-full p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M83.43,45.13c-2.31-13.45-13.73-23.77-27.18-23.77H43.75c-13.45,0-24.87,10.32-27.18,23.77H12.5v28h4.07c2.31,13.45,13.73,23.77,27.18,23.77h12.5c13.45,0,24.87-10.32,27.18-23.77H87.5v-28H83.43Z"/>
            <circle cx="43.75" cy="46.88" r="5" fill="white"/>
            <circle cx="62.5" cy="46.88" r="5" fill="white"/>
            <path d="M43.75,62.5s6.25,5,18.75,0c0,0-6.25-2.5-18.75,0Z" fill="white"/>
        </svg>
    </div>
);


export const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

export const PaperClipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
);

export const MicrophoneIcon = ({ isListening }: { isListening: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isListening ? 'text-red-500' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {isListening && <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" className="animate-ping absolute opacity-75" />}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

export const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

export const HeroRobot = () => (
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAADz8/P8/Pzx8fHl5eXn5+f39/fq6ur09PTt7e3a2trg4ODT09PMzMzIyMjDw8Pe3t7X19c222ZTAAADJklEQVR4nO3d25KiMBiGYQoKiuAG3v9dD1JBkECIZDIz55x778A/VdqkG2wBAAAAAAAAAAAAAAAAAAAAAAAA/sA/1s5eB9uA0YAAAAAASUVORK5CYII=" alt="Nourivox Robot" className="w-full h-auto max-w-sm mx-auto" />
);

export const SpeakerOnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
);

export const SpeakerOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l-4-4m0 4l4-4" />
    </svg>
);

export const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


// Icons for Schemes Page
export const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

export const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

export const BookmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
);

export const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

// Icons for Vaccines Page
export const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

// Icons for Features Section
export const SmartAiChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const DoctorConnectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export const PersonalizedCareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const SecurePrivateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.318 1.58C9.553 21.84 10.74 22 12 22s2.447-.16 3.682-.477L21 20.417c0-3.61-2.235-6.837-5.382-8.433z" />
  </svg>
);

// Icons for About Page - New Section
export const AdvancedAITechnologyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="#22d3ee" strokeWidth="1.5"/>
    <path d="M12 6L12 12L16 14" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 12C7 9.23858 9.23858 7 12 7" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 18C14.7614 18 17 15.7614 17 13" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const OurAimIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="#34d399" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="#34d399" strokeWidth="1.5" strokeDasharray="1 3"/>
    <circle cx="12" cy="12" r="2" fill="#34d399"/>
  </svg>
);

export const ScopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24">
    <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#34d399" strokeWidth="1.5"/>
    <path d="M14.5 14.5L18 18" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="10" r="3" stroke="#38bdf8" strokeWidth="1.5"/>
  </svg>
);


// Footer Icons
export const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white bg-teal-500 rounded-lg p-1.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

export const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
  </svg>
);

export const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.638 4.218 3.82 4.652-.756.205-1.555.26-2.353.085.61 1.956 2.373 3.376 4.47 3.415-1.885 1.477-4.266 2.359-6.86 2.04 2.189 1.407 4.795 2.229 7.623 2.229 9.141 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

export const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

export const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);