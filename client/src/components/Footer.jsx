import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer() {
    return (
        <Box
            component='footer'
            sx={{
                py: 3,
                mt: 3,
                backgroundColor: '#1F2937',
                color: '#FFFFFF'
            }}
        >
            <Container maxWidth="lg">
                <Typography variant='body1'>
                    Footer
                </Typography>
            </Container>
        </Box>
    );
}
