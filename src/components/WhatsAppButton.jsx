import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
    const handleClick = () => {
        const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
        const message = 'Hola, estoy interesado en el software para Curadurías.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <Tooltip title="Chatea con nosotros" placement="left" arrow>
            <Fab
                color="success"
                aria-label="whatsapp"
                onClick={handleClick}
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    width: 64,
                    height: 64,
                    fontSize: '2rem',
                    zIndex: 1000,
                    boxShadow: '0px 4px 20px rgba(0, 200, 83, 0.4)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0px 6px 24px rgba(0, 200, 83, 0.6)',
                    },
                    animation: 'pulse 2s infinite'
                }}
            >
                <WhatsAppIcon sx={{ fontSize: 36, color: 'white' }} />
                <style>
                    {`
                        @keyframes pulse {
                            0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
                            70% { box-shadow: 0 0 0 20px rgba(76, 175, 80, 0); }
                            100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
                        }
                    `}
                </style>
            </Fab>
        </Tooltip>
    );
};

export default WhatsAppButton;
