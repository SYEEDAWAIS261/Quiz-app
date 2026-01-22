import { Box, Skeleton, CircularProgress, Typography } from '@mui/material';

const Loader = ({ type = "skeleton" }) => {
  if (type === "spinner") {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 5 }}>
        <CircularProgress size={60} thickness={4} />
        <Typography sx={{ mt: 2, color: 'text.secondary' }}>Loading Questions...</Typography>
      </Box>
    );
  }

  // Skeleton layout for the Quiz Card
  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Skeleton variant="text" width="40%" height={30} sx={{ mb: 2 }} />
      <Skeleton variant="rectangular" height={150} sx={{ borderRadius: 2, mb: 3 }} />
      <Skeleton variant="rectangular" height={50} sx={{ borderRadius: 1, mb: 1 }} />
      <Skeleton variant="rectangular" height={50} sx={{ borderRadius: 1, mb: 1 }} />
      <Skeleton variant="rectangular" height={50} sx={{ borderRadius: 1, mb: 1 }} />
    </Box>
  );
};

export default Loader;