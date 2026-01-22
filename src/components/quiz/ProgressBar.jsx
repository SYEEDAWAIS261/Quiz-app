import { Box, LinearProgress, Typography } from '@mui/material';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Question {current + 1} of {total}
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          {Math.round(progress)}%
        </Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ height: 8, borderRadius: 5 }} 
      />
    </Box>
  );
};

export default ProgressBar;