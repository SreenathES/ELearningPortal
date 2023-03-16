import { ThemeProvider } from '@emotion/react';
import {
    Avatar,
    Box,
    Container,
    createTheme,
    CssBaseline,
    Link,
    Typography
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const theme = createTheme();

function UnauthorizedAccess() {
    return (
        <ThemeProvider theme={theme}>
            <Container component='main'>
                <CssBaseline />
                <Box
                    className='vh-100'
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    component='form'
                >
                    <Avatar
                        sx={{ m: 1, bgcolor: 'orange', mx: 'auto' }}
                        gutterBottom
                    >
                        <WarningAmberIcon />
                    </Avatar>
                    <Typography
                        className='light-black'
                        fontWeight={'bold'}
                        variant='h5'
                        textAlign={'center'}
                        gutterBottom
                    >
                        Unauthorized Access
                    </Typography>
                    <Typography
                        textAlign={'center'}
                        variant={'body2'}
                        color={'red'}
                        gutterBottom
                    >
                        This system or URL is monitored and any unauthorized
                        access will be{' '}
                        <span className='d-block'>
                            detected and reported to the appropriate
                            authorities.
                        </span>
                    </Typography>
                    <Link
                        component={RouterLink}
                        to={'/login'}
                        underline='hover'
                    >
                        Go back to login
                    </Link>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default UnauthorizedAccess;
