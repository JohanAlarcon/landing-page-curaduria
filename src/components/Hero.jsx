import React from 'react';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: 'linear-gradient(rgba(15, 44, 76, 0.9), rgba(15, 44, 76, 0.85)), url("/images/hero-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                pt: { xs: 12, md: 0 }
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ maxWidth: 600 }}>
                            <Typography
                                variant="h1"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 800,
                                    mb: 3,
                                    lineHeight: 1.1,
                                    background: 'linear-gradient(45deg, #ffffff 30%, #a5c8ff 90%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Control Documental en la Nube para Curadurías Urbanas
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 4,
                                    opacity: 0.95,
                                    fontWeight: 400,
                                    fontSize: '1.25rem',
                                    color: 'grey.100',
                                    lineHeight: 1.6
                                }}
                            >
                                Gestione expedientes, licencias y actas con la máxima seguridad. Acceso remoto 24/7, copias de seguridad automáticas y cumplimiento normativo garantizado.
                            </Typography>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{ py: 1.5, px: 3, fontSize: '1rem' }}
                                    href="#caracteristicas"
                                >
                                    Ver Características
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    size="large"
                                    sx={{ py: 1.5, px: 3, fontSize: '1rem', borderColor: 'rgba(255,255,255,0.3)', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' } }}
                                    href="#contacto"
                                >
                                    Solicitar Demo
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="/images/hero-bg_2.png"
                            alt="Software Dashboard Curaduría"
                            sx={{
                                width: '100%',
                                maxWidth: 500,
                                height: 'auto',
                                filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.3))',
                                animation: 'float 6s ease-in-out infinite',
                                borderRadius: 4,
                                display: { xs: 'none', md: 'block' }
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                        100% { transform: translateY(0px); }
                    }
                `}
            </style>
        </Box>
    );
};

export default Hero;
