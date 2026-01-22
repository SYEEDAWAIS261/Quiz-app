import { Drawer, Box, Typography, Stack, IconButton, Divider, Button } from '@mui/material';
import { 
  X, Trash2, History, Trophy, Clock,
  Code2,   // Web Dev icon
  Sigma,   // Math icon
  Globe2   // GK icon
} from 'lucide-react';
import { useQuiz } from '../../context/QuizContext';

const HistorySidebar = ({ open, onClose }) => {
  const { history, clearHistory } = useQuiz();

  // Aapki images ke specific icons aur colors
  const getCategoryIcon = (category) => {
    const cat = category?.toLowerCase() || '';
    
    if (cat.includes('web') || cat.includes('dev')) {
      return <Code2 size={22} color="#6366f1" strokeWidth={2.5} />;
    }
    if (cat.includes('math')) {
      return <Sigma size={22} color="#ec4899" strokeWidth={2.5} />;
    }
    if (cat.includes('gk') || cat.includes('general')) {
      return <Globe2 size={22} color="#10b981" strokeWidth={2.5} />;
    }
    
    return <History size={20} color="#64748b" />;
  };

  return (
    <Drawer 
      anchor="left" 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: { 
          width: { xs: '100%', sm: 380 }, 
          borderRadius: 0, 
          bgcolor: '#f8faff', // Light background jaisa images mein hai
          backgroundImage: 'none',
        }
      }}
    >
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box sx={{ 
              bgcolor: 'white', 
              p: 1, 
              borderRadius: '10px', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              display: 'flex' 
            }}>
              <History size={20} color="#6366f1" />
            </Box>
            <Typography variant="h6" fontWeight="900" color="#1e293b">
              Recent Activity
            </Typography>
          </Stack>
          <IconButton onClick={onClose} sx={{ bgcolor: 'white' }}><X size={20} /></IconButton>
        </Stack>
        
        <Divider sx={{ mb: 3, opacity: 0.5 }} />

        {/* Scrollable List */}
        <Box 
          sx={{ 
            flexGrow: 1, 
            overflowY: 'auto',
            pr: 1,
            '&::-webkit-scrollbar': { width: '4px' },
            '&::-webkit-scrollbar-thumb': { background: '#cbd5e1', borderRadius: '10px' },
          }}
        >
          {history.length === 0 ? (
            <Stack alignItems="center" justifyContent="center" sx={{ height: '70%', opacity: 0.4 }}>
              <Clock size={60} strokeWidth={1} color="#64748b" />
              <Typography mt={2} fontWeight={700} color="#64748b">No Recent Attempts</Typography>
            </Stack>
          ) : (
            <Stack spacing={2}>
              {history.map((attempt) => (
                <Box 
                  key={attempt.id} 
                  sx={{ 
                    p: 2, 
                    border: '1px solid',
                    borderColor: 'rgba(99, 102, 241, 0.15)',
                    bgcolor: 'white',
                    borderRadius: '16px', // Rounded corners jaisa images mein hai
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 10px 20px -5px rgba(0,0,0,0.05)',
                        borderColor: 'primary.main'
                    }
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    {/* Icon Container */}
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: 44, 
                      height: 44, 
                      borderRadius: '12px',
                      bgcolor: 'rgba(0,0,0,0.02)' 
                    }}>
                      {getCategoryIcon(attempt.category)}
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" fontWeight="800" sx={{ color: '#1e293b', lineHeight: 1.2 }}>
                        {attempt.category}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>
                        {attempt.date}
                      </Typography>
                    </Box>

                    {/* Score display */}
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="body1" fontWeight="900" color="primary.main">
                        {attempt.score}/{attempt.total}
                      </Typography>
                      <Stack direction="row" spacing={0.3} alignItems="center" justifyContent="flex-end">
                        <Trophy size={10} color="#f59e0b" />
                        <Typography sx={{ fontSize: '10px', fontWeight: 800, color: '#f59e0b' }}>
                          SCORE
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        {/* Clear Button */}
        {history.length > 0 && (
          <Box sx={{ pt: 2, mt: 'auto' }}>
            <Button 
              fullWidth 
              variant="text" 
              color="error" 
              startIcon={<Trash2 size={16} />}
              onClick={clearHistory}
              sx={{ 
                fontWeight: 800, 
                borderRadius: '12px',
                py: 1,
                '&:hover': { bgcolor: 'rgba(239, 68, 68, 0.05)' }
              }}
            >
              Clear All Logs
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default HistorySidebar;