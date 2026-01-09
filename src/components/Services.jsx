import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Icon } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const features = [
    {
        title: 'Almacenamiento en la Nube',
        description: 'Acceda a todos los expedientes y planos desde cualquier lugar y dispositivo. Sincronización en tiempo real y cero dependencia de servidores físicos.',
        icon: <CloudUploadIcon fontSize="large" color="secondary" />
    },
    {
        title: 'Gestión Automatizada',
        description: 'Reduzca tiempos de respuesta con flujos de trabajo inteligentes. Alertas de vencimiento y asignación automática de tareas al equipo.',
        icon: <SpeedIcon fontSize="large" color="secondary" />
    },
    {
        title: 'Generación de Documentos',
        description: 'Cree resoluciones y actas de observación en segundos con plantillas jurídicas pre-aprobadas y datos centralizados.',
        icon: <AssignmentTurnedInIcon fontSize="large" color="secondary" />
    },
    {
        title: 'Seguridad Bancaria',
        description: 'Sus datos protegidos con encriptación de última generación. Copias de seguridad diarias automáticas y auditoría de accesos.',
        icon: <SecurityIcon fontSize="large" color="secondary" />
    }
];

const Services = () => {
    return (
        <Box id="caracteristicas" sx={{ py: 7, bgcolor: 'background.paper' }}>
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
                        <Grid item size={{ xs: 12, md: 3, lg: 3 }} key={index}>
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
