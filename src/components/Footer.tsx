//done by mhmd attwi
import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.dark',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '10px',
          background: 'linear-gradient(90deg, #4CAF50, #81C784, #4CAF50)',
          transform: 'skewY(-3deg)',
          transformOrigin: 'top left',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '10px',
          background: 'linear-gradient(90deg, #388E3C, #4CAF50, #388E3C)',
          transform: 'skewY(3deg)',
          transformOrigin: 'bottom right',
          boxShadow: '0 -4px 8px rgba(0,0,0,0.2)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          flexWrap: 'wrap',
          gap: 4
        }}>
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 33.333%' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                2 Lines of Joy
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Providing quality education and support for students of all abilities.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton 
                  color="inherit" 
                  aria-label="Facebook"
                  component="a"
                  href="https://www.facebook.com/share/1Gq12P16if/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  aria-label="Instagram"
                  component="a"
                  href="https://www.instagram.com/2linesofjoy?igsh=MTZjamRyNW8yMTJnMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  aria-label="WhatsApp"
                  component="a"
                  href="https://wa.me/96176744179"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 33.333%' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Quick Links
              </Typography>
              <RouterLink to="/" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                Home
              </RouterLink>
              <RouterLink to="/courses" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                Courses
              </RouterLink>
              <RouterLink to="/vision" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                Vision
              </RouterLink>
              <RouterLink to="/contact" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                Contact
              </RouterLink>
            </motion.div>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 33.333%' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body2">2linesofjoy@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body2">+96176744179</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body2">Beirut, Mathaf, Museum Street, Raja Association Building, 1st floor</Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
        <Box sx={{ mt: 5, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} 2 Lines of Joy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 