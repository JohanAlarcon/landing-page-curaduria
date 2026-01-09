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
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={5}>
                            <Typography variant="overline" color="secondary" fontWeight={700} sx={{ letterSpacing: 2 }}>
                                SOLICITAR DEMO
                            </Typography>
                            <Typography variant="h3" component="h2" color="primary" sx={{ my: 2, fontWeight: 700 }}>
                                Empiece su transformación digital
                            </Typography>
                            <Stack spacing={4} sx={{ mt: 4 }}>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                                    Deje sus datos y uno de nuestros expertos le contactará para agendar una demostración personalizada del software.
                                </Typography>
                                <Box display="flex" gap={2}>
                                    <EmailIcon color="secondary" fontSize="large" />
                                    <Box>
                                        <Typography variant="h6" fontWeight={600}>Correo Electrónico</Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            ventas@softwarecuraduria.com
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" gap={2}>
                                    <PhoneIcon color="secondary" fontSize="large" />
                                    <Box>
                                        <Typography variant="h6" fontWeight={600}>Soporte Comercial</Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            (+57) 300 123 4567
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Paper elevation={0} sx={{ p: 4, bgcolor: 'background.default', borderRadius: 2, border: '1px solid', borderColor: 'divider' }} component={Paper}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Nombre Completo" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Cargo / Curaduría" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Correo Corporativo" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Teléfono" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="¿Qué desafíos enfrenta actualmente?" multiline rows={4} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="secondary" size="large" fullWidth sx={{ py: 1.5, fontSize: '1rem' }}>
                                            Solicitar Demostración Gratis
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
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
