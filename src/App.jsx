import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

import WhatsAppButton from './components/WhatsAppButton';

import DemoCallToAction from './components/DemoCallToAction';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <Hero />
                <Services />
                <About />
                <DemoCallToAction />
                <Contact />
                <WhatsAppButton />
            </Box>
        </ThemeProvider>
    );
}

export default App;
