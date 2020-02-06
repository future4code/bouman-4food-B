import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const MainContainer = styled.div `
display:flex;
background-color: white;
height: 100vh;
align-items: center;
flex-direction: column;
`

const Title = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 100%;
height: 24px;
`

const UserName = styled.div `
width: 328px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
`

const UserEmail = styled.div `
width: 328px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
`

const Cpf = styled.div `
width: 328px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
`

const AddressBox = styled.div `
width: 100%;
height: 76px;
background-color: #eeeeee;
`

const AdressTitle = styled.div `
width: 328px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #b8b8b8;
`

const Address = styled.div `
width: 328px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
`

const OrderHistory = styled.div `
width: 328px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
`

const OrderCard = styled.div `
width: 100%;
height: 110px;
`

const Rectangle = styled.div `
width: 328px;
height: 102px;
border-radius: 8px;
border: solid 1px #b8b8b8;
`

const RestaurantName = styled.div `
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #e8222e;
`

const OrderDate = styled.div `
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 12px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.29px;
color: #000000;
`

const OrderPrice = styled.div `
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
`


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {

        return (
            <MainContainer>
                
                <Title>
                    <p>Meu perfil</p>
                </Title>
                <hr />
                <UserName>Nome aqui</UserName>
                <UserEmail>Email do cidadão</UserEmail>
                <Cpf>999.999.999-99</Cpf>
                <AddressBox>
                    <AdressTitle>Endereço cadastrado</AdressTitle>
                    <Address>Rua do Cara, 00 - Cidade</Address>
                </AddressBox>
                <OrderHistory>Histórico de pedidos</OrderHistory>
                <hr />
                <OrderCard />
                <Rectangle>
                    <RestaurantName>Nome do restaurante</RestaurantName>
                    <OrderDate>4 fevereiro 2020</OrderDate>
                    <OrderPrice>SUBTOTAL R$29,90</OrderPrice>
                </Rectangle>

            </MainContainer>
        )
    }
}









export default connect()(ProfilePage);