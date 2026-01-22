import { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Chip, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb, Timer } from 'lucide-react';

const QuizCard = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15); // 15 Seconds Timer

  // Timer Logic
  useEffect(() => {
    // Jab naya question aaye to timer reset karein
    setTimeLeft(15);
    setSelected(null);
  }, [question.id]);

  useEffect(() => {
    if (selected !== null) return; // Agar answer select ho gaya to timer rok do

    if (timeLeft === 0) {
      handleSelect(null); // Time up hone par automatically trigger karein
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, selected]);

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option || 'TIMEOUT'); // Agar null hai to matlab time up hua
    
    setTimeout(() => {
      onAnswer(option);
    }, 1500); 
  };

  const optionLetters = ['A', 'B', 'C', 'D'];
  const progress = (timeLeft / 15) * 100;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Box sx={{ p: { xs: 2 }, display: 'flex', flexDirection: 'column', gap: 1 }}>
          
          {/* Circular Countdown Section */}
<Box sx={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  mb: 4, 
  position: 'relative' 
}}>
  {/* Background Circle (Gray Track) */}
  <CircularProgress
    variant="determinate"
    value={100}
    size={80}
    thickness={4}
    sx={{ color: '#f1f5f9', position: 'absolute' }}
  />
  
  {/* Active Moving Circle */}
  <CircularProgress
    variant="determinate"
    value={(timeLeft / 15) * 100} // Countdown logic
    size={80}
    thickness={4}
    sx={{
      color: timeLeft <= 5 ? '#ef4444' : '#6366f1',
      strokeLinecap: 'round',
      transition: 'all 1s linear', // Smooth winding effect
      '& .MuiCircularProgress-circle': {
        transition: 'all 1s linear',
      },
    }}
  />

  {/* Time Text in Center */}
  <Box
    sx={{
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography
      variant="h6"
      fontWeight="700"
      sx={{ 
        color: timeLeft <= 5 ? '#ef4444' : '#1e293b',
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      {timeLeft}
    </Typography>
    <Typography 
      variant="caption" 
      fontWeight="500" 
      sx={{ color: '#64748b', fontSize: '0.6rem', textTransform: 'uppercase' }}
    >
      sec
    </Typography>
  </Box>
</Box>

          {/* Question Category/Hint Chip */}
          <Stack direction="row" spacing={1} mb={1}>
            <Chip 
              icon={<Lightbulb size={14} />} 
              label="Brain Teaser" 
              size="small" 
              sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', fontWeight: 700, fontSize: '0.7rem' }} 
            />
          </Stack>

          <Typography 
            variant="h4" 
            fontWeight="800" 
            mb={2} 
            sx={{ 
              color: '#1e293b', 
              lineHeight: 1.3,
              fontSize: { xs: '1.5rem', md: '2rem' },
              letterSpacing: '-0.02em'
            }}
          >
            {question.questionText}
          </Typography>

          <Stack spacing={2}>
            {question.options.map((option, index) => {
              const isSelected = selected === option;
              const isCorrect = option === question.correctAnswer;
              const showResult = selected !== null;

              let borderColor = 'rgba(0,0,0,0.06)';
              let bgColor = 'rgba(255,255,255,0.6)';
              let textColor = '#475569';
              let letterBg = '#f1f5f9';

              if (showResult) {
                if (isCorrect) {
                  bgColor = '#ecfdf5';
                  borderColor = '#10b981';
                  textColor = '#065f46';
                  letterBg = '#10b981';
                } else if (isSelected && !isCorrect) {
                  bgColor = '#fef2f2';
                  borderColor = '#ef4444';
                  textColor = '#991b1b';
                  letterBg = '#ef4444';
                }
              }

              return (
                <motion.div
                  key={option}
                  whileHover={!showResult ? { scale: 1.01, x: 5 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                >
                  <Button
                    variant="outlined"
                    fullWidth
                    disabled={showResult}
                    onClick={() => handleSelect(option)}
                    sx={{
                      py: 2,
                      px: 3,
                      borderRadius: 4,
                      textTransform: 'none',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      border: '2px solid',
                      borderColor: borderColor,
                      backgroundColor: bgColor,
                      backdropFilter: 'blur(10px)',
                      color: textColor,
                      transition: 'all 0.2s ease',
                      '&.Mui-disabled': {
                        border: '2px solid',
                        borderColor: borderColor,
                        color: textColor,
                      }
                    }}
                  >
                    <Box sx={{ 
                      width: 28, height: 28, borderRadius: '50%', 
                      bgcolor: (showResult && (isCorrect || isSelected)) ? 'white' : letterBg,
                      color: (showResult && (isCorrect || isSelected)) ? borderColor : '#64748b',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: '0.75rem', mr: 2,
                    }}>
                      {optionLetters[index]}
                    </Box>

                    <Typography fontWeight="600" sx={{ flexGrow: 1, textAlign: 'left', fontSize: '0.95rem' }}>
                      {option}
                    </Typography>
                    
                    <AnimatePresence>
                      {showResult && isCorrect && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          <CheckCircle2 size={20} color="#10b981" />
                        </motion.div>
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          <XCircle size={20} color="#ef4444" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              );
            })}
          </Stack>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizCard;