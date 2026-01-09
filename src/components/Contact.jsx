import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Stack, Link, IconButton, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    return (
        <Box id="contacto" sx={{ bgcolor: 'secondary.main', color: 'primary.dark' }}>
            <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={8} textAlign="center">
                            <Typography variant="overline" color="secondary" fontWeight={700} sx={{ letterSpacing: 2 }}>
                                CONTÁCTENOS
                            </Typography>
                            <Typography variant="h3" component="h2" color="primary" sx={{ my: 2, fontWeight: 700 }}>
                                Estamos para ayudarle
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', mb: 6, maxWidth: 600, mx: 'auto' }}>
                                ¿Tiene preguntas sobre el software? Nuestro equipo de expertos está listo para resolver sus dudas.
                            </Typography>

                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={4}
                                justifyContent="center"
                                alignItems="center"
                                sx={{ mt: 4 }}
                            >
                                <Paper elevation={3} sx={{ p: 4, width: { xs: '100%', sm: 300 }, textAlign: 'center', borderRadius: 4 }}>
                                    <EmailIcon color="secondary" sx={{ fontSize: 40, mb: 2 }} />
                                    <Typography variant="h6" fontWeight={600} gutterBottom>Correo</Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {import.meta.env.VITE_CONTACT_EMAIL}
                                    </Typography>
                                </Paper>

                                <Paper elevation={3} sx={{ p: 4, width: { xs: '100%', sm: 300 }, textAlign: 'center', borderRadius: 4 }}>
                                    <PhoneIcon color="secondary" sx={{ fontSize: 40, mb: 2 }} />
                                    <Typography variant="h6" fontWeight={600} gutterBottom>Línea Directa</Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {import.meta.env.VITE_CONTACT_PHONE}
                                    </Typography>
                                </Paper>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" fontWeight={700}>CURADURÍA CLOUD</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                                © {new Date().getFullYear()} Software para Curadurías. Todos los derechos reservados.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
                            <IconButton color="inherit" aria-label="facebook">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="twitter">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="linkedin">
                                <LinkedInIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                            <Link href="#" color="inherit" sx={{ mx: 1, textDecoration: 'none', opacity: 0.8, '&:hover': { opacity: 1 } }}>Política de Privacidad</Link>
                            <Link href="#" color="inherit" sx={{ mx: 1, textDecoration: 'none', opacity: 0.8, '&:hover': { opacity: 1 } }}>Términos de Uso</Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Contact;
