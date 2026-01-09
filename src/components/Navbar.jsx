import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navLinks = [
        { title: 'Inicio', path: '#' },
        { title: 'Características', path: '#caracteristicas' },
        { title: 'Software', path: '#nosotros' },
    ];

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
                boxShadow: scrolled ? 1 : 'none',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                transition: 'all 0.3s ease',
                color: scrolled ? 'text.primary' : 'white',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: 700,
                            color: scrolled ? 'primary.main' : 'white',
                            letterSpacing: 1
                        }}
                    >
                        CURADURÍA CLOUD
                    </Typography>

                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ color: scrolled ? 'primary.main' : 'white' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                    <List>
                                        {navLinks.map((link) => (
                                            <ListItem button key={link.title} component="a" href={link.path}>
                                                <ListItemText primary={link.title} />
                                            </ListItem>
                                        ))}
                                        <ListItem>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                fullWidth
                                                href="https://demo-curaduria.site/login"
                                                target="_blank"
                                            >
                                                Demo
                                            </Button>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {navLinks.map((link) => (
                                <Button
                                    key={link.title}
                                    color="inherit"
                                    href={link.path}
                                    sx={{
                                        fontWeight: 500,
                                        '&:hover': { color: 'secondary.main' }
                                    }}
                                >
                                    {link.title}
                                </Button>
                            ))}
                            <Button
                                variant={scrolled ? "outlined" : "outlined"}
                                color={scrolled ? "primary" : "inherit"}
                                href="https://demo-curaduria.site/login"
                                target="_blank"
                                sx={{
                                    ml: 2,
                                    borderRadius: 2,
                                    borderWidth: 2,
                                    fontWeight: 700,
                                    '&:hover': { borderWidth: 2 }
                                }}
                            >
                                Demo
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
