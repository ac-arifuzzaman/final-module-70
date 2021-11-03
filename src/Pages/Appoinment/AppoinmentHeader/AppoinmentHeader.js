import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calander from '../../Shared/Calander/Calander';

const AppoinmentHeader = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Calander></Calander>
                </Grid>
                <Grid xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;