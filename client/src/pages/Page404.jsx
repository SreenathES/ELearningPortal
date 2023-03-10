import { Box, Container, Link, Typography } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

function Page404() {
    return (
        <Container>
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{ height: '95vh' }}
            >
                <ReportProblemIcon
                    fontSize='large'
                    color='error'
                    gutterBottom
                />
                <Typography gutterBottom>404 - Page Not Found</Typography>
                <Typography gutterBottom>
                    The page you are looking for could not be found.
                </Typography>
                <Link
                    component={RouterLink}
                    to='/'
                    color={'inherit'}
                    underline='none'
                    variant='body2'
                    gutterBottom
                    sx={[
                        {
                            '&:hover': {
                                color: '#9C27B0'
                            }
                        }
                    ]}
                >
                    Go back to home page
                </Link>
            </Box>
        </Container>
    );
}

export default Page404;
