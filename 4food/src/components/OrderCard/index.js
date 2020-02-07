import React from 'react';
import styled from 'styled-components';
import ClockIcon from '../../resources/clock.svg'


const Card = styled.div`
    background-color: #e8222e;
    width: 100vw;
    height: 118px;
    position: fixed;
    bottom: 49px;
    display: flex;
    align-items: center;  
`



const ContainerIcon = styled.div`
    margin: 0 24px;
`

const ContainerMsg = styled.div`
    height: 100%;
`

const MessageTitle = styled.p`
    width: 256px;
    height: 18px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #ffffff;
    margin-top: 24px;
    margin-bottom: 8px;
`

const RestaurantName = styled.p`
    width: 256px;
    height: 18px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    margin: 0;
`

const Price = styled.p`
    width: 256px;
    height: 18px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    margin-top: 8px;
    margin-bottom: 24px;
`


export function OrderCard(props) {
    return (
        <Card>
            <ContainerIcon>
                <img src={ClockIcon}></img>
            </ContainerIcon>
            <ContainerMsg>
                <MessageTitle>Pedido em andamento</MessageTitle>
                <RestaurantName>{props.order.resturantName}</RestaurantName>
                <Price>SUBTOTAL R${props.order.totalPrice.toString().replace(".", ",")}</Price>
            </ContainerMsg>
        </Card>
    );
}



export default OrderCard;