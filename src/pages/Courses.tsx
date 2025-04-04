//done by mhmd attwi
import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const courses = [
  {
    title: 'What we offer',
    description: 'What we offer',
    image: '/2lof/flyers/flyer-1.jpeg',
  },
  {
    title: 'English courses',
    description: 'English courses',
    image: '/2lof/flyers/flyer-2.jpeg',
  },
  {
    title: 'Shadow teacher training',
    description: 'Shadow teacher training',
    image: '/2lof/flyers/flyer-3.jpeg',
  },
];

const flyers = [
  { title: 'What we offer', image: '/2lof/flyers/flyer-1.jpeg' },
  { title: 'English courses', image: '/2lof/flyers/flyer-2.jpeg' },
  { title: 'Shadow teacher training', image: '/2lof/flyers/flyer-3.jpeg' },
  { title: 'Special Needs Support ', image: '/2lof/flyers/flyer-4.jpeg' },
];

const examHelpVideos = [
  { title: 'Official Exam Support', video: '/2lof/videos/Official-Exam-Support.mp4' },
  { title: 'After-School  Support', video: '/2lof/videos/afterschool.mp4' },
  { title: 'Exam Support', video: '/2lof/videos/Examsupport.mp4' },
];

const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Our Courses
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph align="center">
            Discover our specialized educational programs designed for every learner
          </Typography>
        </motion.div>

        <Box ref={ref} sx={{ mt: 6 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)' 
            }, 
            gap: 4 
          }}>
            {courses.map((course, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6
                      },
                    }}
                  >
                    <Box sx={{ 
                      height: 200, 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      overflow: 'hidden',
                      width: '100%',
                      bgcolor: 'transparent'
                    }}>
                      <Box
                        component="img"
                        sx={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'fill',
                          maxWidth: '100%',
                          maxHeight: '100%'
                        }}
                        src={course.image}
                        alt={course.title}
                      />
                    </Box>
                    <CardContent sx={{ 
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      py: 2
                    }}>
                      <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                        {course.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {course.description}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 'auto' }}
                        component="a"
                        href="https://wa.me/96176744179"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Exam Help Videos Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom align="center">
            Exam Help Videos
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)' 
            }, 
            gap: 4, 
            mt: 2 
          }}>
            {examHelpVideos.map((video, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}>
                    <Box sx={{ 
                      height: 200, 
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      bgcolor: 'transparent',
                      width: '100%'
                    }}>
                      <video
                        width="100%"
                        height="100%"
                        controls
                        style={{ 
                          objectFit: 'fill',
                          maxWidth: '100%',
                          maxHeight: '100%'
                        }}
                      >
                        <source src={video.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </Box>
                    <CardContent sx={{ 
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      py: 2
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {video.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Flyers Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom align="center">
            Course Flyers
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(2, 1fr)' 
            }, 
            gap: 4, 
            mt: 2 
          }}>
            {flyers.map((flyer, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}>
                    <Box sx={{ 
                      height: 300, 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      overflow: 'hidden',
                      width: '100%',
                      bgcolor: 'transparent'
                    }}>
                      <Box
                        component="img"
                        sx={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'fill',
                          maxWidth: '100%',
                          maxHeight: '100%'
                        }}
                        src={flyer.image}
                        alt={flyer.title}
                      />
                    </Box>
                    <CardContent sx={{ 
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      py: 2
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {flyer.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Courses; 