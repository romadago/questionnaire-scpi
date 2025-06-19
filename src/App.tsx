// Fichier : src/App.tsx

import { useState } from 'react';
import MoteurQuestionnaire from './MoteurQuestionnaire';
// On importe UNIQUEMENT la configuration pour le questionnaire SCPI
import { configSCPI } from './configurations/SCPI.js'; 
import logoAeternia from './logo-aeternia.svg';
import './index.css';

function App() {
  const [email, setEmail] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  // On assigne directement la bonne configuration
  const config = configSCPI;

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setQuizStarted(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-fond-sombre text-white flex flex-col items-center justify-center p-4 sm:p-6">
      
      <img 
        src={logoAeternia} 
        alt="Logo Aeternia" 
        className="w-24 h-24 mb-6 object-contain" 
      />

      <div className="bg-bloc-sombre p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-3xl">
        
        {!quizStarted ? (
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl font-bold mb-4 text-center text-cyan-vif">
              {config.titre}
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Répondez à nos questions pour évaluer votre maîtrise de l'investissement en parts de SCPI.
            </p>
            <form onSubmit={handleStartQuiz} className="max-w-sm mx-auto">
              <label htmlFor="email-start" className="font-semibold text-gray-200 mb-2 block">Entrez votre e-mail pour commencer</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  id="email-start"
                  placeholder="votre.email@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-fond-sombre border border-gray-600 focus:ring-2 focus:ring-cyan-vif focus:outline-none transition"
                  required
                />
              </div>
              <button type="submit" className="w-full mt-4 px-8 py-3 rounded-lg font-semibold bg-cyan-vif text-fond-sombre hover:bg-opacity-80 transition-opacity">
                Commencer le questionnaire
              </button>
            </form>
          </div>
        ) : (
          <MoteurQuestionnaire config={config} email={email} />
        )}
      </div>
    </div>
  );
}

export default App;