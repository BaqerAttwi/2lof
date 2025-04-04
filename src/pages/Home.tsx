//done by mhmd attwi
import React from 'react';
import { Container, Typography, Box, Paper, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to 2 Lines of Joy
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            A vibrant playground and educational hub designed to inspire creativity
            and support learning for kids and individuals with special needs.
          </Typography>
        </motion.div>
      </Box>

      {/* Mission Section */}
      <Box ref={ref} sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                We are committed to providing a joyful, accessible environment where
                learning is fun and every child feels empowered to succeed. Through
                our specialized programs and dedicated support, we help children
                understand their school material and develop their full potential.
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h5" gutterBottom align="center">
                  Partnership
                </Typography>
                
                {/* Partnership Logos with Handshake */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: 3,
                    position: 'relative',
                    height: { xs: '180px', sm: '120px' },
                    width: '100%',
                    px: 2,
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 2, sm: 0 }
                  }}
                >
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '120px',
                      height: '120px',
                      zIndex: 1,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid',
                      borderColor: theme.palette.primary.main,
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Box
                      component="img"
                      src="/images/Logo.jpeg"
                      alt="2 Lines of Joy Logo"
                      sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                        padding: '5px'
                      }}
                    />
                  </motion.div>
                  
                  {!isMobile && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      style={{ 
                        position: 'absolute',
                        zIndex: 2,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '50%',
                          p: 1,
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '60px',
                          height: '60px'
                        }}
                      >
                        <HandshakeIcon 
                          sx={{ 
                            fontSize: 40, 
                            color: 'primary.main',
                            filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))'
                          }} 
                        />
                      </Box>
                    </motion.div>
                  )}
                  
                  {/* Mobile-only handshake icon */}
                  {isMobile && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        p: 1,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        zIndex: 2
                      }}
                    >
                      <HandshakeIcon 
                        sx={{ 
                          fontSize: 40, 
                          color: 'primary.main',
                          filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))'
                        }} 
                      />
                    </Box>
                  )}
                  
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '120px',
                      height: '120px',
                      zIndex: 1,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid',
                      borderColor: theme.palette.primary.main,
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Box
                      component="img"
                      src="/images/btclogo.jpg"
                      alt="BTC Logo"
                      sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                        padding: '5px'
                      }}
                    />
                  </motion.div>
                </Box>
                
                {/* Video component */}
                <Box
                  sx={{
                    width: '100%',
                    height: '300px',
                    borderRadius: 1,
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'primary.light',
                  }}
                >
                  <video
                    width="100%"
                    height="100%"
                    controls
                    style={{ 
                      objectFit: 'cover',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                  >
                    <source src="/videos/partnership.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 