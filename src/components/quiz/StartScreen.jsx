import React, { useState } from 'react';
import { 
  Box, Typography, Card, MenuItem, TextField, 
  Stack, useTheme, Divider, CircularProgress 
} from '@mui/material';
import CustomButton from '../common/CustomButton';
// Updated Icons: Code2, Sigma, Globe2
import { PlayCircle, GraduationCap, Code2, Sigma, Globe2, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';

const StartScreen = () => {
  const theme = useTheme();
  const { startQuiz, gameState } = useQuiz();
  
  const [category, setCategory] = useState('Web Dev');
  const [difficulty, setDifficulty] = useState('Easy');

  // Icons aur Professional descriptions add kar di hain
  const categoryDetails = {
    'Web Dev': { 
      icon: <Code2 size={22} strokeWidth={2.5} />, 
      color: '#6366f1', 
      desc: 'React, JS & Frontend' // Professional text
    },
    'Math': { 
      icon: <Sigma size={22} strokeWidth={2.5} />, 
      color: '#ec4899', 
      desc: 'Logic & Arithmetic' // Professional text
    },
    'GK': { 
      icon: <Globe2 size={22} strokeWidth={2.5} />, 
      color: '#10b981', 
      desc: 'World & Geography' // Professional text
    },
  };

  const handleStart = () => {
    startQuiz(category, difficulty);
  };

  const isLoading = gameState === 'LOADING';

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '80vh',
        p: 2,
      }}
    >
      <Card
          elevation={0}
          sx={{
          p: { xs: 4 },
          pt: { xs: 8 },
          width: '100%', 
          maxWidth: 500,
          maxHeight: '120vh',
          overflowY: 'auto',
          py: 4,
          px: 2,
          textAlign: 'center',
          borderRadius: 1,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        {/* Floating Logo */}
        <Box
          sx={{
            position: 'absolute',
            top: -7,
            left: '50%',
            marginTop:'4px',
            transform: 'translateX(-50%)',
            bgcolor: theme.palette.primary.main,
            color: 'white',
            width: 70,
            height: 70,
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 10px 30px ${theme.palette.primary.main}66`,
            zIndex: 10,
          }}
        >
          <GraduationCap size={40} strokeWidth={2.5} />
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" fontWeight="900" sx={{ color: '#1e293b', letterSpacing: '-0.02em' }}>
            Quiz<span style={{ color: theme.palette.primary.main }}>Master</span>
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b', fontWeight: 500, marginTop:'18px' }}>
            Master your skills through interactive challenges.
          </Typography>
        </Box>

        <Stack spacing={4}>
          {/* Category Picker */}
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="caption" sx={{ ml: 1, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
              Subject Area
            </Typography>
            <TextField
              select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
              disabled={isLoading}
              sx={{ mt: 1, '& .MuiOutlinedInput-root': { borderRadius: 4, bgcolor: '#f8fafc' } }}
            >
              {Object.keys(categoryDetails).map((cat) => (
                <MenuItem key={cat} value={cat} sx={{ py: 1.5 }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ color: categoryDetails[cat].color, display: 'flex' }}>
                      {categoryDetails[cat].icon}
                    </Box>
                    <Box>
                      <Typography fontWeight={700} variant="body2">{cat}</Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: -0.5 }}>
                        {categoryDetails[cat].desc}
                      </Typography>
                    </Box>
                  </Stack>
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Difficulty Selection */}
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="caption" sx={{ ml: 1, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
              Complexity
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
              {['Easy', 'Medium', 'Hard'].map((lvl) => {
                const isSelected = difficulty === lvl;
                return (
                  <Box
                    component={motion.div}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    key={lvl}
                    onClick={() => !isLoading && setDifficulty(lvl)}
                    sx={{
                      flex: 1,
                      py: 2,
                      cursor: isLoading ? 'default' : 'pointer',
                      borderRadius: 4,
                      textAlign: 'center',
                      border: '2px solid',
                      borderColor: isSelected ? 'primary.main' : '#f1f5f9',
                      bgcolor: isSelected ? `${theme.palette.primary.main}08` : '#f8fafc',
                      transition: 'border-color 0.2s, background-color 0.2s',
                      '&:hover': { 
                        borderColor: isSelected ? 'primary.main' : theme.palette.primary.light,
                      }
                    }}
                  >
                    <Typography variant="body2" fontWeight={700} color={isSelected ? 'primary.main' : '#64748b'}>
                      {lvl}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Box>

          <Divider sx={{ borderStyle: 'dashed', my: 1 }} />

          {/* Action Button */}
          <Box>
            <CustomButton
              onClick={handleStart}
              disabled={isLoading}
              size="large"
              startIcon={!isLoading && <PlayCircle size={22} />}
              fullWidth
              sx={{
                py: 2.5,
                fontSize: '1.1rem',
                fontWeight: 800,
                borderRadius: 4,
                textTransform: 'none',
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)',
              }}
            >
              {isLoading ? <CircularProgress size={26} color="inherit" /> : 'Enter The Arena'}
            </CustomButton>
            
            <Stack direction="row" justifyContent="center" spacing={3} sx={{ mt: 4, opacity: 0.6 }}>
               <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Zap size={16} color={theme.palette.warning.main} /> 
                  <Typography variant="caption" fontWeight={600}>Fast Paced</Typography>
               </Stack>
               <Stack direction="row" alignItems="center" spacing={0.5}>
                  <BarChart3 size={16} color={theme.palette.info.main} /> 
                  <Typography variant="caption" fontWeight={600}>Leaderboards</Typography>
               </Stack>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default StartScreen;