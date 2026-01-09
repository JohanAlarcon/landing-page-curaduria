import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';

const About = () => {
    return (
        <Box id="nosotros" sx={{ py: 12 }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={12}
                            sx={{
                                borderRadius: 4,
                                overflow: 'hidden',
                                height: '500px',
                                backgroundImage: 'url("/images/about-us.jpg")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="overline" color="secondary" fontWeight={700} sx={{ letterSpacing: 2 }}>
                            POR QUÉ ELEGIRNOS
                        </Typography>
                        <Typography variant="h3" component="h2" color="primary" sx={{ my: 2, fontWeight: 700 }}>
                            La plataforma #1 en Colombia para Curadores Urbanos
                        </Typography>
                        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', mb: 3 }}>
                            Diseñado específicamente para cumplir con la Ley 388 de 1997, el Decreto 1077 de 2015 y demás normas vigentes. Nuestro software no es una adaptación genérica: es una herramienta especializada que entiende su lenguaje.
                        </Typography>
                        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', mb: 4 }}>
                            Olvídese de las tareas manuales repetitivas y minimice el riesgo jurídico con nuestras plantillas inteligentes y alertas tempranas. Únase a las curadurías líderes que ya digitalizaron su operación.
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
