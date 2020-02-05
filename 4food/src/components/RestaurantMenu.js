import React from "react"
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Image from "../resources/ImageItem.png"

const Card = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 95.12%;
    height: 112px;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    margin: 0 2.44%;
`

const ImageItem = styled.img`
    width: 96px;
    height: 112px;
`

const Title = styled.h1`
    height: 18px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
`
const Quantity = styled.p`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`
const QuantityBorder = styled.div`
    display: flex;
    color: #e8222e;
    width: 100%;
    height: 33px;
    border-radius: 0 8px 0 8px;
    border: solid 1px #e8222e;
    justify-content: center;
    align-items: center;
`

const TextDescription = styled.p`
    height: 30px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    margin: 0;
`

const TextValue = styled.p`
    height: 19px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    margin: 0 0 15px 0;
`

const ButtonAdd = styled.button`
    border-radius: 8px 0 8px 0;
    border: solid 1px #e02020;
    background-color: #FFF;
    height: 32px;
    width: 100%;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: #e02020;
    margin: 0;
    :active{
        background-color: #e02020;
        color: #FFF;
    }
`

function RestaurantMenu(props) {

    return (
        <Card>
            <Grid container>
                <Grid item xs={4}>
                    <ImageItem src={Image} />
                </Grid>
                <Grid item xs={8} container>
                    <Grid item xs={10}>
                        <Title>Bullger</Title>
                    </Grid>
                    <Grid item xs={2}>
                        <QuantityBorder>
                            <Quantity>2</Quantity>
                        </QuantityBorder>
                    </Grid>
                    <Grid item xs={12}>
                        <TextDescription>Pão, carne, queijo, picles e molho</TextDescription>
                    </Grid>
                    <Grid item xs={7}>
                        <TextValue>R$23,00</TextValue>
                    </Grid>
                    <Grid item xs={5}>
                        <ButtonAdd>remover</ButtonAdd>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default RestaurantMenu