import React from "react"
import RestaurantLogo from "../resources/RestaurantLogo.png"
import styled from "styled-components"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const ImageLogo = styled.img`
    width: 100%;
    padding: 17px 16px 12px 16px;
`

const TitleRed = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
    grid-column: span 2;
    grid-row: 1;
`
const TextGrey = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin: 8px 0;
`

const Div = styled.div`
    margin: 0 18px;
`

function RestaurantDetails(props) {

    return (
        <Paper elevation={0}>
            <ImageLogo src={RestaurantLogo} />
            <Div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TitleRed>Bullguer Vila Madalena</TitleRed>
                    </Grid>
                    <Grid item xs={12}>
                        <TextGrey>Burger</TextGrey>
                    </Grid>
                    <Grid item xs={4}>
                        <TextGrey>50 - 60 min</TextGrey>
                    </Grid>
                    <Grid item xs={4}>
                        <TextGrey>Frete R$6,00</TextGrey>
                    </Grid>
                    <Grid item xs={12}>
                        <TextGrey>R. Fradique Coutinho, 1136 - Vila Madalena</TextGrey>
                    </Grid>
                </Grid>
            </Div>
        </Paper>
    );
}

export default RestaurantDetails