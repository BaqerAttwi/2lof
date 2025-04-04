//done by mhmd attwi
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Courses', path: '/courses' },
    { text: 'Vision', path: '/vision' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.text}>
          <Link 
            to={item.path} 
            onClick={handleDrawerToggle}
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              width: '100%'
            }}
          >
            <ListItemText primary={item.text} />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="img"
                  src="/2lof/images/Logo.jpeg"
                  alt="2 Lines of Joy Logo"
                  sx={{
                    height: 50,
                    mr: 2,
                  }}
                />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  2 Lines of Joy
                </Typography>
              </Box>
            </Link>
          </Box>
        </motion.div>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <div style={{ marginLeft: 'auto' }}>
            {menuItems.map((item) => (
              <Button
                color="inherit"
                component={Link}
                to={item.path}
                key={item.text}
                sx={{ mx: 1 }}
              >
                {item.text}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 