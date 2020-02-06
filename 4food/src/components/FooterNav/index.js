import React from 'react';
import styled from 'styled-components';
import HomeIconGrey from '../../resources/homepage-cinza.png';
import HomeIconRed from '../../resources/homepage-vermelho.png';
import AvatarIconGrey from '../../resources/avatar-cinza.png';
import AvatarIconRed from '../../resources/avatar-vermelho.png';
import CartIconGrey from '../../resources/shopping-cart-cinza.png';
import CartIconRed from '../../resources/shopping-cart-vermelho.png';


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
    return ( // Precisa adicionar um ternario para a cor do icone
        <ContainerFooter>
            <buttom><Icon src={HomeIconRed}/></buttom>
            <buttom><Icon src={CartIconGrey}/></buttom>
            <buttom><Icon src={AvatarIconGrey}/></buttom>
        </ContainerFooter>
    );
}



export default FooterNav;