//done by mhmd attwi
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import StarIcon from '@mui/icons-material/Star';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CelebrationIcon from '@mui/icons-material/Celebration';

const Vision = () => {
  const visionItems = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Quality Education',
      description: "Providing accessible, high-quality education tailored to each student's unique learning journey.",
      secondaryIcon: <LightbulbIcon sx={{ fontSize: 24, position: 'absolute', top: -10, right: -10, color: 'secondary.main' }} />
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: 'Inclusive Learning',
      description: 'Creating an environment where every student feels valued, supported, and empowered to succeed.',
      secondaryIcon: <Diversity3Icon sx={{ fontSize: 24, position: 'absolute', top: -10, right: -10, color: 'secondary.main' }} />
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Community Support',
      description: 'Building a strong network of educators, parents, and students working together for success.',
      secondaryIcon: <HandshakeIcon sx={{ fontSize: 24, position: 'absolute', top: -10, right: -10, color: 'secondary.main' }} />
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40 }} />,
      title: 'Innovation',
      description: 'Embracing new teaching methods and technologies to enhance the learning experience.',
      secondaryIcon: <RocketLaunchIcon sx={{ fontSize: 24, position: 'absolute', top: -10, right: -10, color: 'secondary.main' }} />
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: 'Compassion',
      description: 'Fostering a culture of understanding, empathy, and respect for all individuals.',
      secondaryIcon: <StarIcon sx={{ fontSize: 24, position: 'absolute', top: -10, right: -10, color: 'secondary.main' }} />
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: 'Excellence',
      description: 'Striving for excellence in education while maintaining a supportive and nurturing environment.',
      secondaryIcon: <CelebrationIcon sx={{ fontSize: 24, position: 'absolute', top: -10, right: -10, color: 'secondary.main' }} />
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2
          }}
        >
          <AutoAwesomeIcon sx={{ fontSize: 48, color: 'secondary.main' }} />
          Our Vision
          <AutoAwesomeIcon sx={{ fontSize: 48, color: 'secondary.main' }} />
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Empowering minds, building futures, and creating a world where every learner thrives
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {visionItems.map((item, index) => (
          <Grid key={index} sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                    '& .icon-container': {
                      transform: 'scale(1.1) rotate(5deg)',
                      backgroundColor: 'primary.light',
                      opacity: 0.2
                    }
                  }
                }}
              >
                <Box
                  className="icon-container"
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    p: 2,
                    borderRadius: '50%',
                    backgroundColor: 'primary.light',
                    opacity: 0.1,
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative'
                  }}
                >
                  {item.icon}
                  {item.secondaryIcon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Vision; 