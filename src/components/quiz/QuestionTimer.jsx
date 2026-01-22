import React, { useState, useEffect } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { Timer } from 'lucide-react';

const QuestionTimer = ({ questionIndex, onTimeUp, duration = 15 }) => {
  const [timeLeft, setLeft] = useState(duration);

  useEffect(() => {
    setLeft(duration);
  }, [questionIndex, duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const isLowTime = timeLeft <= 5;

  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      spacing={1} 
      sx={{ 
        bgcolor: isLowTime ? 'rgba(239, 68, 68, 0.1)' : 'rgba(99, 102, 241, 0.1)',
        px: 2, 
        py: 0.8, 
        borderRadius: '12px',
        border: '1px solid',
        borderColor: isLowTime ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)',
        width: 'fit-content',
        transition: 'all 0.3s ease'
      }}
    >
      <Timer 
        size={18} 
        color={isLowTime ? '#ef4444' : '#6366f1'} 
        style={{ animation: isLowTime ? 'pulse 1s infinite' : 'none' }}
      />
      
      <Typography
        variant="h6"
        sx={{ 
          color: isLowTime ? '#ef4444' : '#6366f1',
          fontWeight: '900',
          fontSize: '1.2rem',
          fontVariantNumeric: 'tabular-nums', // Isse numbers jump nahi karenge
          minWidth: '25px'
        }}
      >
        {timeLeft < 10 ? `0${timeLeft}` : timeLeft}
      </Typography>

      <Typography 
        variant="caption" 
        sx={{ 
          color: isLowTime ? '#ef4444' : '#64748b', 
          fontWeight: '700', 
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        sec
      </Typography>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </Stack>
  );
};

export default QuestionTimer;