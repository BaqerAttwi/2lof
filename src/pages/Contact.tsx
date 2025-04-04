//done by mhmd attwi
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hello, I'm ${formData.firstName} ${formData.lastName}.%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
    
    // Create WhatsApp URL with the formatted message
    const whatsappUrl = `https://wa.me/96176744179?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSnackbar({
      open: true,
      message: 'Redirecting to WhatsApp...',
      severity: 'success',
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/share/1Gq12P16if/' },
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/2linesofjoy?igsh=MTZjamRyNW8yMTJnMg==' },
    { icon: <WhatsAppIcon />, url: 'https://wa.me/96176744179' },
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Contact Us
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph align="center">
            Get in touch with us through WhatsApp
          </Typography>
        </motion.div>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            gap: 3 
          }}>
            <Box sx={{ flex: 1 }}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Box>
          </Box>
          
          <Box sx={{ width: '100%' }}>
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Box>
          
          <Box sx={{ width: '100%' }}>
            <TextField
              required
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Box>
          
          <Box sx={{ width: '100%' }}>
            <TextField
              required
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            startIcon={<WhatsAppIcon />}
          >
            Send via WhatsApp
          </Button>
        </Box>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Follow Us on Social Media
          </Typography>
          <Box sx={{ mt: 2 }}>
            {socialLinks.map((link, index) => (
              <IconButton
                key={index}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mx: 1 }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 