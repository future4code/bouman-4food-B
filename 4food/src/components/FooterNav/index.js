import React from 'react';
import styled from 'styled-components';
import HomeIconGrey from '../../resources/homepage-cinza.png';
import HomeIconRed from '../../resources/homepage-vermelho.png';
import AvatarIconGrey from '../../resources/avatar-cinza.png';
import AvatarIconRed from '../../resources/avatar-vermelho.png';
import CartIconGrey from '../../resources/shopping-cart-cinza.png';
import CartIconRed from '../../resources/shopping-cart-vermelho.png';
import { routes } from '../../containers/Router'


const ContainerFooter = styled.div`
    width: 100vw;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
    background-color: #ffffff;
`

const Icon = styled.img`
    width: 27px;
    height: 27px;
`

export function FooterNav(props) {
    return ( 
        <ContainerFooter>
            <buttom onClick={props.changePage}><Icon name="Feed" src={routes.Feed ? HomeIconRed :  HomeIconGrey}/></buttom>
            <buttom onClick={props.changePage}><Icon name="Cart" src={routes.Cart ? CartIconRed :  CartIconGrey}/></buttom>
            <buttom onClick={props.changePage}><Icon name="Profile" src={routes.Profile ? AvatarIconRed :  AvatarIconGrey}/></buttom>
        </ContainerFooter>
    );
}



export default FooterNav;