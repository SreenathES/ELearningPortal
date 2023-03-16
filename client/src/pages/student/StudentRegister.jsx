import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Container,
	createTheme,
	CssBaseline,
	Grid,
	TextField,
	ThemeProvider,
	Typography
} from '@mui/material';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import { studentRegistrationSchema } from '../../utils/validators/authValidator';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const theme = createTheme();

function StudentRegister() {
	const registration = (data) => {
		console.log(data);
	};

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(studentRegistrationSchema)
	});

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='sm'>
				<CssBaseline />
				<Box
					mt={10}
					display={'flex'}
					alignItems={'center'}
				>
					<Card>
						<CardContent>
							<Avatar sx={{ m: 1, bgcolor: 'secondary.main', mx: 'auto' }}>
								<SchoolIcon />
							</Avatar>
							<Typography
								className='light-black'
								fontWeight={'bold'}
								variant='h6'
								textAlign={'center'}
								mb={2}
							>
								Sign Up
							</Typography>
							<Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit(registration)}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											autoComplete="given-name"
											name="firstName"
											required
											fullWidth
											id="firstName"
											label="First Name"
											type={'text'}
											autoFocus
											{...register('firstName')}
											error={errors.firstName ? true : false}
											helperText={errors.firstName ? errors.firstName.message : null}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											required
											fullWidth
											id="lastName"
											label="Last Name"
											name="lastName"
											type={'text'}
											{...register('lastName')}
											error={errors.lastName ? true : false}
											helperText={errors.lastName ? errors.lastName.message : null}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="email"
											label="Email Address"
											name="email"
											type={'text'}
											{...register('email')}
											error={errors.email ? true : false}
											helperText={errors.email ? errors.email.message : null}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="phone"
											label="Phone"
											name="phone"
											type={'text'}
											{...register('phone')}
											error={errors.phone ? true : false}
											helperText={errors.phone ? errors.phone.message : null}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="password"
											label="Password"
											name="password"
											type={'password'}
											{...register('password')}
											error={errors.password ? true : false}
											helperText={errors.password ? errors.password.message : null}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="confirmPassword"
											label="Confirm Password"
											name="confirmPassword"
											type={'password'}
											{...register('confirmPassword')}
											error={errors.confirmPassword ? true : false}
											helperText={errors.confirmPassword ? errors.confirmPassword.message : null}
										/>
									</Grid>
								</Grid>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									Sign Up
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default StudentRegister;
