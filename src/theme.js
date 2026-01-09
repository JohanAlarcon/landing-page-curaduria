import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc', // Tech Blue
            light: '#4b82ff',
            dark: '#002a99',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#00b8d4', // Cyan Accent
            light: '#62ebff',
            dark: '#0088a3',
            contrastText: '#000000',
        },
        background: {
            default: '#f4f6f8', // Soft Cool Gray
            paper: '#ffffff',
        },
        text: {
            primary: '#172b4d',
            secondary: '#5e6c84',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
        },
        button: {
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 24px',
                    boxShadow: 'none',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        transform: 'translateY(-1px)',
                    },
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #0052cc 30%, #0065ff 90%)',
                },
                containedSecondary: {
                    background: 'linear-gradient(45deg, #00b8d4 30%, #00e5ff 90%)',
                    color: '#003344',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
                elevation1: {
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                },
                elevation3: {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
