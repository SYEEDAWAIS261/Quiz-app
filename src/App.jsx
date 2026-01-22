import { ThemeProvider, CssBaseline, Container, Box, IconButton } from '@mui/material';
import { History as HistoryIcon } from 'lucide-react'; // Sahi import yahan hai
import theme from './theme/theme';
import { QuizProvider, useQuiz } from './context/QuizContext';
import { useState } from 'react';
import StartScreen from './components/quiz/StartScreen';
import QuizCard from './components/quiz/QuizCard';
import ResultScreen from './components/quiz/ResultScreen';
import Loader from './components/common/Loader';
import ProgressBar from './components/quiz/ProgressBar';
import { mockQuestions } from './services/mockData';
import HistorySidebar from './components/quiz/HistorySidebar';
const QuizAppContent = () => {
  const { gameState, questions, currentIndex, score, nextQuestion, restartQuiz, startQuiz } = useQuiz();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // App.jsx ka handleStart ab simple ho jayega
  const handleStart = () => {
    startQuiz(); // Yeh Context wala function call karega
  };

  // App.jsx ke return statement ko isse replace karein
return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
      {/* Background color add kiya taake layout clear nazar aaye */}
      <Box sx={{ 
        minHeight: '100vh', 
  width: '100vw', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #f4f7fe 0%, #e0e7ff 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '140%',
    height: '140%',
    top: '-20%',
    left: '-20%',
    zIndex: 0,
    background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 50%)',
    backgroundPosition: '0% 0%, 100% 100%',
    animation: 'move 15s ease-in-out infinite alternate',
  },
  '@keyframes move': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(5deg) scale(1.1)' }
  }
}}>

  <HistorySidebar 
        open={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      {/* 2. Toggle Button (Left Side) */}
      <IconButton 
        onClick={() => setSidebarOpen(true)}
        sx={{ 
          position: 'absolute', 
          top: 20, 
          left: 20, 
          width:'7vh',
          height:'7vh',
          zIndex: 10, 
          bgcolor: 'background.paper', 
          boxShadow: 2,
          borderRadius: 0.5, // Square shape for button
          '&:hover': { bgcolor: 'background.paper' }
        }}
      >
        <HistoryIcon size={20} />
      </IconButton>

        <Container maxWidth="sm">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '100%',
            py: 4
          }}>
            {gameState === 'START' && <StartScreen onStart={handleStart} />}
            
            {gameState === 'LOADING' && <Loader type="spinner" />}
            
            {gameState === 'PLAYING' && questions.length > 0 && (
              <Box sx={{ width: '100%' }}> {/* Wrapper for Quiz logic */}
                <ProgressBar current={currentIndex} total={questions.length} />
                <QuizCard 
                  question={questions[currentIndex]} 
                  onAnswer={nextQuestion} 
                />
              </Box>
            )}
            
            {gameState === 'RESULT' && (
              <ResultScreen score={score} total={questions.length} onRestart={restartQuiz} />
            )}
          </Box>
        </Container>
      </Box>
  </ThemeProvider>
);
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuizProvider>
        <QuizAppContent />
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;