import React from 'react';
import { Box, Typography, Button } from '@mui/material';

class ErrorBound extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Quiz App Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ textAlign: 'center', py: 10, px: 2 }}>
          <Typography variant="h4" color="error" gutterBottom>
            Oops! Something went wrong.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We encountered an unexpected error. Please try refreshing the page.
          </Typography>
          <Button 
            variant="outlined" 
            onClick={() => window.location.reload()}
          >
            Reload Quiz
          </Button>
        </Box>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBound;