import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../../resources/homepage.svg';
import AvatarIcon from '../../resources/avatar.svg';
import CartIcon from '../../resources/shopping-cart.svg';


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

export function FooterNav(props) {
    return (
        <ContainerFooter>
            <buttom><img src={HomeIcon}/></buttom>
            <buttom><img src={CartIcon}/></buttom>
            <buttom><img src={AvatarIcon}/></buttom>
        </ContainerFooter>
    );
}



export default FooterNav;