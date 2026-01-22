// import React from 'react';
// import { Box, Typography, Button, Stack, Paper, Container, Grid, Chip } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Trophy, Timer, Target, ShieldCheck, Rocket, Star, Users, Brain } from 'lucide-react';

// const QuizInstructions = ({ onStart, category = "Tech & Innovation", totalQuestions = 10 }) => {
  
//   const rules = [
//     { icon: <Timer size={22} />, title: "Quick Pace", desc: "15 seconds per question", color: "#6366f1" },
//     { icon: <Target size={22} />, title: "Precision", desc: "No room for second guesses", color: "#10b981" },
//     { icon: <Brain size={22} />, title: "Critical Thinking", desc: "Analyze before you click", color: "#f59e0b" }
//   ];

//   return (
//     <Box sx={{ 
//       minHeight: '100vh', 
//       width: '100vw',
//       background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       overflow: 'hidden',
//       position: 'relative'
//     }}>
//       {/* Decorative Circles for Background Depth */}
//       <Box sx={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(99, 102, 241, 0.05)' }} />
//       <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 300, height: 300, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.05)' }} />

//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
          
//           {/* Left Side: Visual & Stats */}
//           <Grid item xs={12} md={6}>
//             <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//               <Chip label="NEW CHALLENGE AVAILABLE" sx={{ bgcolor: '#6366f1', color: 'white', fontWeight: 900, mb: 2, px: 1 }} />
//               <Typography variant="h2" fontWeight="900" sx={{ color: '#1e293b', lineHeight: 1.1, mb: 2 }}>
//                 Master the <span style={{ color: '#6366f1' }}>{category}</span> Quiz
//               </Typography>
//               <Typography variant="h6" sx={{ color: '#64748b', mb: 4, fontWeight: 400 }}>
//                 Test your skills and compete with others. This quiz is designed to challenge your speed and accuracy.
//               </Typography>
              
//               <Stack direction="row" spacing={3}>
//                 <Box>
//                   <Typography variant="h4" fontWeight="900" color="#1e293b">{totalQuestions}</Typography>
//                   <Typography variant="caption" color="#94a3b8" fontWeight="700">QUESTIONS</Typography>
//                 </Box>
//                 <Box sx={{ width: 1, height: 40, bgcolor: '#cbd5e1', width: '2px' }} />
//                 <Box>
//                   <Typography variant="h4" fontWeight="900" color="#1e293b">15s</Typography>
//                   <Typography variant="caption" color="#94a3b8" fontWeight="700">PER SLIDE</Typography>
//                 </Box>
//                 <Box sx={{ width: 1, height: 40, bgcolor: '#cbd5e1', width: '2px' }} />
//                 <Box>
//                   <Typography variant="h4" fontWeight="900" color="#1e293b">Elite</Typography>
//                   <Typography variant="caption" color="#94a3b8" fontWeight="700">DIFFICULTY</Typography>
//                 </Box>
//               </Stack>
//             </motion.div>
//           </Grid>

//           {/* Right Side: Instructions Card */}
//           <Grid item xs={12} md={6}>
//             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
//               <Paper elevation={0} sx={{ 
//                 p: 4, 
//                 borderRadius: 8, 
//                 border: '1px solid rgba(255, 255, 255, 0.5)',
//                 bgcolor: 'rgba(255, 255, 255, 0.8)',
//                 backdropFilter: 'blur(20px)',
//                 boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)'
//               }}>
//                 <Typography variant="h5" fontWeight="900" mb={3} color="#1e293b">Game Rules</Typography>
                
//                 <Stack spacing={3} mb={4}>
//                   {rules.map((rule, i) => (
//                     <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                       <Box sx={{ 
//                         p: 1.5, borderRadius: 3, bgcolor: 'white', 
//                         boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
//                         color: rule.color, display: 'flex' 
//                       }}>
//                         {rule.icon}
//                       </Box>
//                       <Box>
//                         <Typography variant="subtitle1" fontWeight="800" color="#334155">{rule.title}</Typography>
//                         <Typography variant="body2" color="#64748b">{rule.desc}</Typography>
//                       </Box>
//                     </Box>
//                   ))}
//                 </Stack>

//                 <Divider sx={{ mb: 4 }} />

//                 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                   <Button 
//                     fullWidth 
//                     variant="contained" 
//                     onClick={onStart}
//                     endIcon={<Rocket size={22} />}
//                     sx={{ 
//                       py: 2.5, 
//                       borderRadius: 4, 
//                       bgcolor: '#6366f1', 
//                       fontSize: '1.2rem', 
//                       fontWeight: '900',
//                       textTransform: 'none',
//                       boxShadow: '0 15px 30px -5px rgba(99, 102, 241, 0.4)',
//                       '&:hover': { bgcolor: '#4f46e5' }
//                     }}
//                   >
//                     Enter the Arena
//                   </Button>
//                 </motion.div>

//                 <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} mt={3}>
//                   <Users size={16} color="#94a3b8" />
//                   <Typography variant="caption" color="#94a3b8" fontWeight="700">
//                     JOINED BY 12,400+ PLAYERS THIS WEEK
//                   </Typography>
//                 </Stack>
//               </Paper>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default QuizInstructions;