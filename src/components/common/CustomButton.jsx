import { Button, CircularProgress } from '@mui/material';

const CustomButton = ({ children, loading, variant = "contained", color = "primary", ...props }) => {
  return (
    <Button
      variant={variant}
      color={color}
      disabled={loading}
      sx={{ 
        borderRadius: '8px', 
        textTransform: 'none', 
        fontWeight: 600,
        px: 4,
        py: 1.2
      }}
      {...props}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
};

export default CustomButton;