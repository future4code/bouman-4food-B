import React, { Fragment } from "react"
import RestaurantLogo from "../../resources/RestaurantLogo.png"
import styled from "styled-components"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { routes } from "../Router";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button"
import ContainerFooter from "../../components/FooterNav"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu"


const AddressShipping = styled.div`
    width: 100%;
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
    margin: 5px 10px;
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
    margin: 5px 10px;
`

const TextBlack = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
    margin: 5px 10px;
`
const GridBackground = styled.div`
    background-color: #D3D3D3;
    height: 100px;
    padding-top: 5px;
`
const DivBoody = styled.div`
    display:flex;
    flex-direction: column;
`

const MainCont = styled.div`
margin: 10px;
`

const Pagamento = styled.div`
    display:flex;
    flex-direction: column;
    margin-left: 5px;
`

const Title = styled.h4`
    text-align: center;    
`
const FoodList = styled.div`
    padding: 10px;
    height: 112px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`


export function Cart(props) {

    return (
        <Paper elevation={0}>
            <DivBoody>
                <Title>Meu carrinho</Title>
                <GridBackground>
                    <Grid>
                        <TextGrey>Endereço de Entrega</TextGrey>
                    </Grid>
                    <TextBlack>Rua Alessandra Vieira, 42</TextBlack>
                </GridBackground>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TitleRed>Bullguer Vila Madalena</TitleRed>
                    </Grid>
                    <Grid item xs={12}>
                        <TextGrey>Burger</TextGrey>
                    </Grid>
                    <Grid item xs={12}>
                        <TextGrey>R. Fradique Coutinho, 1136 - Vila Madalena</TextGrey>
                    </Grid>
                    <Grid item xs={4}>
                        <TextGrey>50 - 60 min</TextGrey>
                    </Grid>
                </Grid>
                <MainCont>
                    <RestaurantMenu/>
                    <RestaurantMenu/>
                </MainCont>
                <Pagamento>
                    <Grid item xs={12}>
                        <TextBlack> Forma de Pagamento </TextBlack>
                    </Grid>
                    <FormControlLabel
                        value="cash"
                        control={<Checkbox color="primary" />}
                        label="Dinheiro"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="card"
                        control={<Checkbox color="primary" />}
                        label="Cartão de crédito"
                        labelPlacement="end"
                    />   
                </Pagamento>
                
                    <Button size="large" type="submit" variant="contained" color="primary" >Confirmar</Button>
                
                <ContainerFooter/>
            </DivBoody>
        </Paper>
    );
}

export default Cart