import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.5)), url("/images/hero-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                pt: 8
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: 800 }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 800,
                            mb: 3
                        }}
                    >
                        Gestión Integral Inteligente para Curadurías Urbanas
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 5,
                            opacity: 0.9,
                            fontWeight: 400,
                            maxWidth: 700
                        }}
                    >
                        Centralice, controle y agilice todos los trámites urbanísticos desde la nube. Cumplimiento normativo garantizado y eficiencia operativa.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}
                            href="#caracteristicas"
                        >
                            Ver Características
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            size="large"
                            sx={{ py: 1.5, px: 4, fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.5)' }}
                            href="#contacto"
                        >
                            Solicitar Demo
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
