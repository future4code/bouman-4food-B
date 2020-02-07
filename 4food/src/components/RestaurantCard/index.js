import React from 'react';
import styled from 'styled-components';


const ContainerCard = styled.div`
    width: 90vw;
    height: 188px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    :last-child{
        margin-bottom: 60px;
    }
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
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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

const Msg = styled.p`
    width: 100%;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
`



export function RestaurantCard(props) {
    return (
        <div>
            {props.restaurants.length === 0 ? <Msg>Não encontramos :(</Msg> :  null}
            {props.restaurants.map( restaurant => (
                <ContainerCard key={restaurant.id}>
                    <RestaurantImg src={restaurant.logoUrl}/>
                    <Content>
                        <ContainerTitle>
                            <Title>{restaurant.name}</Title>
                        </ContainerTitle>
                        <ContainerSubTitle>
                            <SubTitle>{restaurant.deliveryTime} min</SubTitle>
                            <SubTitle>Frete R${restaurant.shipping},00</SubTitle>
                        </ContainerSubTitle>
                    </Content>
                </ContainerCard>
            ))}
        </div>
    );
}



export default RestaurantCard;