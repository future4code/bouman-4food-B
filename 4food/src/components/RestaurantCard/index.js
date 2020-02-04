import React from 'react';
import styled from 'styled-components';
import Image from '../../resources/image.png'


const ContainerCard = styled.div`
    width: 90vw;
    height: 188px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    height: 100%;
`

const ContainerTitle = styled.div`
    width: 90%;
    margin: 0 auto;
`

const ContainerSubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`

const RestaurantImg = styled.img`
  width: 100%;
  height: 120px;
`

const Title = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
    margin: 0;
    margin-top: 16px;
`

const SubTitle = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin: 0;
    margin-top: 4px;
`



export function RestaurantCard(props) {
    return (
        <ContainerCard>
            <RestaurantImg src={Image}/>
            <Content>
                <ContainerTitle>
                    <Title>Vinil Butantã</Title>
                </ContainerTitle>
                <ContainerSubTitle>
                    <SubTitle>50 - 60 min</SubTitle>
                    <SubTitle>Frete R$6,00</SubTitle>
                </ContainerSubTitle>
            </Content>
        </ContainerCard>
    );
}



export default RestaurantCard;