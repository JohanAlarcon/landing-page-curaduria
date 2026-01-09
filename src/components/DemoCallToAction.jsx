import React from 'react';
import { Box, Container, Typography, Button, Paper, Alert } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import LockIcon from '@mui/icons-material/Lock';

const DemoCallToAction = () => {
    return (
        <Box sx={{ py: 5, bgcolor: 'background.default' }}>
            <Container maxWidth="md">
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 8 },
                        textAlign: 'center',
                        borderRadius: 4,
                        background: 'linear-gradient(135deg, #0052cc 0%, #002a99 100%)',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative Circle */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: -50,
                            left: -50,
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            bgcolor: 'rgba(255,255,255,0.1)'
                        }}
                    />

                    <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8, fontWeight: 600 }}>
                        DEMOSTRACIÓN EN VIVO
                    </Typography>

                    <Typography variant="h3" component="h2" sx={{ my: 3, fontWeight: 700 }}>
                        Vea el Software en Acción
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 5, fontSize: '1.2rem', opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
                        Acceda a nuestro entorno de pruebas y explore todas las funcionalidades de gestión y control documental en tiempo real.
                    </Typography>

                    <Alert
                        severity="warning"
                        icon={<LockIcon fontSize="inherit" />}
                        sx={{
                            mb: 4,
                            mx: 'auto',
                            maxWidth: 500,
                            textAlign: 'left',
                            bgcolor: 'rgba(255, 167, 38, 0.15)',
                            color: '#fff',
                            '& .MuiAlert-icon': { color: '#ffcc80' }
                        }}
                    >
                        <strong>Importante:</strong> Este es un entorno privado. Para ingresar, debe solicitar sus credenciales de acceso previamente en la sección de contacto.
                    </Alert>

                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        endIcon={<LaunchIcon />}
                        href="https://demo-curaduria.site/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            py: 1.5,
                            px: 5,
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                        }}
                    >
                        Acceder al Demo
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};

export default DemoCallToAction;
