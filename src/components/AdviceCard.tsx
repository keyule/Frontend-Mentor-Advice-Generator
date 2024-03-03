import React, { useState, useEffect } from 'react';
import diceIcon from '../assets/images/icon-dice.svg'; // Ensure you have a dice icon in your src folder

const AdviceCard: React.FC = () => {
  const [advice, setAdvice] = useState({ id: '71', advice: 'It is easy to sit up and take notice, what\'s difficult is getting up and taking action.' });

  useEffect(() => {
    // Fetch the specific advice when the component mounts
    fetchAdviceById('71');
  }, []);

  const fetchAdviceById = async (id: string) => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
      const data = await response.json();
      setAdvice({ id: data.slip.id, advice: data.slip.advice });
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  
  const fetchRandomAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache" });
      const data = await response.json();
      setAdvice({ id: data.slip.id, advice: data.slip.advice });
    } catch (error) {
      console.error('Error fetching random advice:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-xs sm:max-w-md">
        <div className="mb-4">
          <div className="text-gray-400 text-sm">ADVICE #{advice.id}</div>
        </div>
        <div className="text-white text-lg text-center mb-4">
          "{advice.advice}"
        </div>
        <div className="flex justify-center">
          <button
            onClick={fetchRandomAdvice}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center w-12 h-12"
          >
            <img src={diceIcon} alt="Dice" className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdviceCard;