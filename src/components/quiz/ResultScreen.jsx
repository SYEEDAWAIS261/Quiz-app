import { useEffect, useState } from 'react';
import { Box, Typography, Card, Stack, useTheme, CircularProgress } from '@mui/material';
import confetti from 'canvas-confetti';
import CustomButton from '../common/CustomButton';
import { RefreshCcw, Trophy, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';

const ResultScreen = ({ score, total, onRestart }) => {
  const theme = useTheme();
  const { history } = useQuiz(); 
  
  const percentage = Math.round((score / total) * 100);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animatedScore < percentage) {
        setAnimatedScore(prev => prev + 1);
      }
    }, 15);
    return () => clearTimeout(timer);
  }, [animatedScore, percentage]);

  useEffect(() => {
    if (score > total / 2) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: [theme.palette.primary.main, '#fbbf24', '#f43f5e']
      });
    }
  }, [score, total, theme.palette.primary.main]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ 
        width: '100%', 
        maxWidth: 480, 
        p: 2,
        mt: 2, // Top margin taake badge ke liye jagah ban jaye
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Card
        sx={{
          p: { xs: 3, md: 5 },
          width: '100%',
          textAlign: 'center',
          borderRadius: 1, // Border radius bilkul khatam (0) kar di
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
          position: 'relative',
          overflow: 'visible', // Taake badge bahar nikal sake
        }}
      >
        {/* TOP BADGE FIX - Card ke upar floating position */}
        <Box
          sx={{
            position: 'absolute',
            top: -5, 
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: percentage >= 50 ? '#fbbf24' : '#94a3b8',
            color: 'white',
            width: 70,
            height: 70,
            borderRadius: '50%', // Badge hamesha round hi acha lagta hai
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
            zIndex: 10
          }}
        >
          {percentage === 100 ? <Trophy size={38} strokeWidth={2.5} /> : <Award size={38} strokeWidth={2.5} />}
        </Box>

        <Box sx={{ mt: 3, mb: 3 }}>
          <Typography variant="h4" fontWeight="900" sx={{ color: '#1e293b', letterSpacing: '-0.02em', paddingTop:'10px' }}>
            Quiz Results
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
            {percentage === 100 ? "Pure brilliance! You mastered it." : 
             percentage >= 50 ? "Great job! You're almost there." : 
             "Don't give up. Practice makes perfect."}
          </Typography>
        </Box>

        {/* Accuracy Circle */}
        <Box sx={{ position: 'relative', display: 'inline-flex', mb: 0 }}>
          <CircularProgress variant="determinate" value={100} size={130} thickness={2} sx={{ color: '#f1f5f9' }} />
          <CircularProgress
            variant="determinate"
            value={animatedScore}
            size={130}
            thickness={2}
            strokeLinecap="round"
            sx={{
              position: 'absolute',
              left: 0,
              color: percentage >= 50 ? theme.palette.primary.main : theme.palette.error.main,
            }}
          />
          <Box sx={{ inset: 0, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4" fontWeight="700">{animatedScore}%</Typography>
            <Typography variant="caption" fontWeight="800" color="text.secondary">ACCURACY</Typography>
          </Box>
        </Box>

        {/* History Section */}
        <Box sx={{ mb: 4, textAlign: 'left' }}>
          <Typography variant="caption" fontWeight="800" color="text.secondary" sx={{ ml: 0.5, textTransform: 'uppercase' }}>
            Recent Attempts
          </Typography>
          <Stack spacing={1.5} sx={{ mt: 1.5 }}>
            {history.slice(0, 2).map((attempt, index) => (
              <Box 
                key={attempt.id}
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  p: 2, 
                  bgcolor: index === 0 ? 'rgba(99, 102, 241, 0.05)' : '#f8fafc', 
                  borderRadius: 1, // Yahan bhi history cards ka radius khatam
                  border: index === 0 ? `1px solid ${theme.palette.primary.light}` : '1px solid #f1f5f9'
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                   <Clock size={16} color="#94a3b8" />
                   <Box>
                     <Typography variant="subtitle2" fontWeight="700">{attempt.category}</Typography>
                     <Typography variant="caption" color="text.secondary">{attempt.date}</Typography>
                   </Box>
                </Stack>
                <Typography variant="body2" fontWeight="800" color="primary.main">
                  {attempt.score}/{attempt.total}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <CustomButton
          onClick={onRestart}
          fullWidth
          size="large"
          startIcon={<RefreshCcw size={20} />}
          sx={{
            py: 2,
            borderRadius: 3, // Button ka radius bhi khatam
            fontWeight: 800,
            textTransform: 'none',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          }}
        >
          Retake Challenge
        </CustomButton>
      </Card>
    </Box>
  );
};

export default ResultScreen;