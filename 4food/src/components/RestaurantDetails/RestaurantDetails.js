import React from "react"
import styled from "styled-components"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const ImageLogo = styled.img`
    width: 100%;
    padding: 17px 16px 12px 16px;
    border-radius: 25px 25px 0 0;
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
    margin: 4px 0;
`

const Div = styled.div`
    margin: 0 18px;
`

function RestaurantDetails(props) {

    return (
        <Paper elevation={0}>
            <ImageLogo src={props.logo} />
            <Div>
                <Grid container>
                    <Grid item xs={12}>
                        <TitleRed>{props.title}</TitleRed>
                    </Grid>
                    <Grid item xs={12}>
                        <TextGrey>{props.category}</TextGrey>
                    </Grid>
                    <Grid item xs={4}>
                        <TextGrey>{props.deliveryTime} min</TextGrey>
                    </Grid>
                    <Grid item xs={4}>
                        <TextGrey>Frete: R${props.shipping}</TextGrey>
                    </Grid>
                    <Grid item xs={12}>
                        <TextGrey>{props.address}</TextGrey>
                    </Grid>
                </Grid>
            </Div>
        </Paper>
    );
}

export default RestaurantDetails