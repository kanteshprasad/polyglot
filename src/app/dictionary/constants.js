export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
  };
  
  export const snippet =  `//This is an example with multiple languages in a single execution \n//  Sample array of numbers \n\nಸ್ಥಿರ ಸಂಖ್ಯೆಗಳು = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// శ్రేణి ద్వారా పునరావృతం\nಪ್ರತಿ (ಆಗಿಸು i = 0; i < ಸಂಖ್ಯೆಗಳು.length; i++) {\n   // ਜਾਂਚ ਕਰੋ ਕਿ ਕੀ ਨੰਬਰ ਬਰਾਬਰ ਹੈ\n   ಇವಾಗ (ಸಂಖ್ಯೆಗಳು[i] % 2 === 0) {\n       எழுது(ಸಂಖ್ಯೆಗಳು[i] + \" ଏପରିକି , సమానంగా ఉంది, यह एक सम संख्या है\");\n       // शेष लूप बॉडी को छोड़ें और अगले पुनरावृत्ति पर जाएँ\n       ಮುಂದುವರಿಸಿ;\n   }\n\n   // ಸಂಖ್ಯೆ 5 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ\n   ಇವಾಗ (ಸಂಖ್ಯೆಗಳು[i] > 5) {\n       ಬರೆಯಿರಿ(ಸಂಖ್ಯೆಗಳು[i] + \" 5 ஐ விட அதிகமாக உள்ளது.\");\n       // ಸಂಖ್ಯೆ 5 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಲೂಪ್‌ನಿಂದ ನಿರ್ಗಮಿಸಿ\n       ನಿಲ್ಲಿಸು;\n   }\n\n   // ಯಾವುದೇ ಷರತ್ತುಗಳನ್ನು ಪೂರೈಸದಿದ್ದರೆ, ಸಂಖ್ಯೆಯನ್ನು ಮುದ್ರಿಸಿ\n   ಬರೆಯಿರಿ(ಸಂಖ್ಯೆಗಳು[i]);\n}\n\n`;
