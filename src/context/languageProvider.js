import React, { useState } from 'react';
import context from './languageContext';
import languagesData from '../data/languageOptions.json';

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const text = languagesData[language];

  return (
    <context.Provider value={ {text, language, setLanguage} }>
      {children}
    </context.Provider>
  )
}

export default LanguageProvider;