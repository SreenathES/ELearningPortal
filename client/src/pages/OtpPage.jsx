import React from 'react';
import { Avatar, Box, Button, Card, CardContent, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

const theme = createTheme();

function OtpPage() {

    const mail = 'example@mail.com';

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />
                <Box
                    className='vh-100'
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    component="form"
                >
                    <Card sx={{ mx: 'auto', p: 2, borderRadius: 3 }} elevation={3}>
                        <CardContent>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', mx: 'auto' }}>
                                <SecurityIcon />
                            </Avatar>
                            <Typography
                                className='light-black'
                                fontWeight={'bold'}
                                variant='h5'
                                textAlign={'center'}
                                mb={2}
                            >
                                OTP Verification
                            </Typography>
                            <Typography textAlign={'center'} my={2} variant={'body2'} className={'otp otp-background'} p={2} px={3}>
                                We've sent a verification code to your <span className='d-block'>email - {mail}</span>
                            </Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="otp"
                                label="Enter verification code"
                                name="otp"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default OtpPage