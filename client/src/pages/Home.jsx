import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import intro_icon from '../assets/images/intro-icon.jpg';
import VideocamIcon from '@mui/icons-material/VideocamOutlined';

function Home() {
    return (
        <Box mt={3}>
            <Grid
                container
                spacing={2}
                sx={{
                    fontFamily: `Inter, "Open Sans", sans-serif !important`
                }}
            >
                <Grid item md={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={1}>
                    <Typography variant='body1' className='light-grey' gutterBottom textAlign={'center'}>Online courses in English.</Typography>
                    <Typography variant='h3' fontWeight={'bold'} className='light-black' gutterBottom textAlign={'center'}>
                        Learning Never Exhausts <span className='primary'>The Mind.</span>
                    </Typography>
                    <Typography variant='h6' className='light-grey' gutterBottom textAlign={'center'}>
                        Discover the endless possibilities of knowledge with,
                        <span className='d-block'>our online learning portal.</span>
                    </Typography>
                    <Button variant="contained" color="secondary" startIcon={<VideocamIcon />}>
                        Courses
                    </Button>
                </Grid>
                <Grid item md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} width={1}>
                    <img src={intro_icon} alt='MyLearn' />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home