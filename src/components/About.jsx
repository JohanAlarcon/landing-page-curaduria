import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';

const About = () => {
    return (
        <Box id="nosotros">
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={12}
                            sx={{
                                borderRadius: 4,
                                overflow: 'hidden',
                                display: 'flex'
                            }}
                        >
                            <Box
                                component="img"
                                src="/images/engineer-tablet.png"
                                alt="Ingeniero Curaduría"
                                sx={{
                                    width: '100%',
                                    height: { xs: 'auto', md: '100%' },
                                    display: 'block',
                                    objectFit: 'cover'
                                }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="secondary" fontWeight={700} sx={{ letterSpacing: 2 }}>
                            POR QUÉ ELEGIRNOS
                        </Typography>
                        <Typography variant="h3" component="h2" color="primary" sx={{ my: 2, fontWeight: 700 }}>
                            La plataforma #1 en Colombia para Curadores Urbanos
                        </Typography>
                        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', mb: 3, lineHeight: 1.8 }}>
                            Desarrollamos tecnología especializada para el cumplimiento de la Ley 388 y el Decreto 1077. Nuestra plataforma en la nube elimina el caos del papel y centraliza su operación en un entorno digital seguro y eficiente.
                        </Typography>
                        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', mb: 4, lineHeight: 1.8 }}>
                            Más que un software, somos su aliado estratégico en la transformación digital. Garantizamos disponibilidad del 99.9% y soporte técnico experto para que su Curaduría nunca se detenga.
                        </Typography>
                        <Button variant="outlined" color="primary" size="large" href="#contacto">
                            Conocer más detalles
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
