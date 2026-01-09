import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Icon } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const features = [
    {
        title: 'Radicación 100% Digital',
        description: 'Permita a sus usuarios radicar solicitudes desde cualquier lugar. Recepción de documentos en línea con validación previa.',
        icon: <CloudUploadIcon fontSize="large" color="secondary" />
    },
    {
        title: 'Flujos Automatizados',
        description: 'Control total de tiempos y movimientos. Semáforos de alerta para vencimiento de términos y gestión de tareas.',
        icon: <SpeedIcon fontSize="large" color="secondary" />
    },
    {
        title: 'Expedición de Actos',
        description: 'Generación automática de resoluciones, actas y licencias utilizando plantillas jurídicas actualizadas.',
        icon: <AssignmentTurnedInIcon fontSize="large" color="secondary" />
    },
    {
        title: 'Seguridad y Archivo',
        description: 'Repositorio digital seguro con copias de respaldo. Trazabilidad completa de cada modificación en el expediente.',
        icon: <SecurityIcon fontSize="large" color="secondary" />
    }
];

const Services = () => {
    return (
        <Box id="caracteristicas" sx={{ py: 12, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={8}>
                    <Typography variant="overline" color="secondary" fontWeight={700} sx={{ letterSpacing: 2 }}>
                        POTENCIA TU GESTIÓN
                    </Typography>
                    <Typography variant="h2" component="h2" color="primary" mt={1}>
                        Características del Software
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: 6
                                    }
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                                    <Box sx={{ mb: 2 }}>
                                        {feature.icon}
                                    </Box>
                                    <Typography gutterBottom variant="h6" component="h3" fontWeight={600}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
