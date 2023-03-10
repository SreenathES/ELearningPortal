import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    createTheme,
    CssBaseline,
    Link,
    TextField,
    ThemeProvider,
    Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const theme = createTheme();

function Login() {
    const login = (data) => {
        console.log(data);
    };

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required')
            .matches(
                /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Invalid email'
            ),
        password: yup.string().required('Password is required')
    });

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    mt={10}
                    display={'flex'}
                    alignItems={'center'}
                    component="form"
                    onSubmit={handleSubmit(login)}
                >
                    <Card>
                        <CardContent>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', mx: 'auto' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography
                                className='light-black'
                                fontWeight={'bold'}
                                variant='h5'
                                textAlign={'center'}
                                mb={2}
                            >
                                Login
                            </Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                {...register('email')}
                                error={errors.email}
                                helperText={errors.email ? errors.email.message : null}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register('password')}
                                error={errors.password}
                                helperText={errors.password ? errors.password.message : null}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Log In
                            </Button>
                            <Link href="#" variant="body2" display={'block'} textAlign={'center'}>
                                Forgot password?
                            </Link>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;