import { createContext, useContext, useState, useEffect } from 'react';
import { mockQuestions } from '../services/mockData';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [gameState, setGameState] = useState('START');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  // 1. Load History from LocalStorage
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('quiz_history');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Auto-save history whenever it changes
  useEffect(() => {
    localStorage.setItem('quiz_history', JSON.stringify(history));
  }, [history]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const startQuiz = async (category, difficulty) => {
    setGameState('LOADING');
    setSelectedCategory(category);
    
    setTimeout(() => {
      const filteredQuestions = mockQuestions.filter(
        (q) => q.category === category && q.difficulty === difficulty
      );

      const randomizedQuestions = shuffleArray([...filteredQuestions]);

      if (randomizedQuestions.length > 0) {
        setQuestions(randomizedQuestions);
        setGameState('PLAYING');
        setCurrentIndex(0);
        setScore(0);
      } else {
        alert("Soon more questions will be added to this level!");
        setGameState('START');
      }
    }, 1500);
  };

  const nextQuestion = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentIndex]?.correctAnswer;
    
    // Yahan hum naya score calculate kar rahe hain taake history mein sahi jaye
    const newScore = isCorrect ? score + 1 : score;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      // FIX: Yahan newScore use karein na ke score state
      const newEntry = {
        id: Date.now(),
        score: newScore,
        total: questions.length,
        category: selectedCategory,
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
      };
      
      setHistory((prev) => [newEntry, ...prev].slice(0, 20));
      setGameState('RESULT');
    }
  };

  const restartQuiz = () => {
    setGameState('START');
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
  };

  // Naya Function: History clear karne ke liye
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <QuizContext.Provider value={{ 
      gameState, setGameState, questions, 
      currentIndex, score, startQuiz, nextQuestion, restartQuiz,
      history, clearHistory 
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);