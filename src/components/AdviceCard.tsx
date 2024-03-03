import React, { useState, useEffect } from 'react';
import diceIcon from '../assets/images/icon-dice.svg';
import dividerDesktop from '../assets/images/pattern-divider-desktop.svg'; 
import dividerMobile from '../assets/images/pattern-divider-mobile.svg'; 
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const AdviceCard: React.FC = () => {
  const [advice, setAdvice] = useState({ id: '71', advice: 'It is easy to sit up and take notice, what\'s difficult is getting up and taking action.' });
  const [effectKey, setEffectKey] = useState(0);

  useEffect(() => {
    // Fetch the specific advice when the component mounts
    fetchAdviceById('71');
  }, []);

  const fetchAdviceById = async (id: string) => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
      const data = await response.json();
      setAdvice({ id: data.slip.id, advice: data.slip.advice });
      setEffectKey(prevKey => prevKey + 1); 
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  
  const fetchRandomAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache" });
      const data = await response.json();
      setAdvice({ id: data.slip.id, advice: data.slip.advice });
      setEffectKey(prevKey => prevKey + 1); 
    } catch (error) {
      console.error('Error fetching random advice:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-dark-blue">
      <div className="bg-dark-grayish-blue p-12 rounded-xl shadow-xl max-w-sm sm:max-w-lg">
        <div className = "mb-6">
          <div className="text-neon-green text-sm text-center font-Manrope tracking-5 font-bold">ADVICE #{advice.id}</div>
        </div>
        <div className="text-light-cyan text-3xl text-center font-Manrope font-semi-bold">
          <TextGenerateEffect key= {effectKey} words={`"${advice.advice}"`} />
        </div>
        <div className="translate-y-12">
          <picture>
            <source srcSet={dividerDesktop} media="(min-width: 768px)" />
            <img src={dividerMobile} alt="Divider" style={{ width: '100%', display: 'block' }} />
          </picture>
        </div>
        <div className="flex justify-center translate-y-20">
          <button
            onClick={fetchRandomAdvice}
            className="bg-neon-green hover:bg-green-400 py-2 px-4 rounded-full flex items-center justify-center w-16 h-16"
          >
            <img src={diceIcon} alt="Dice" className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdviceCard;