import React from 'react';
import styled from 'styled-components';



const Menu = styled.div`
    background-color: none;
    overflow: auto;
    white-space: nowrap;
    width: 100vw;
    height: auto;
`

const Item = styled.span`
    display: inline-block;
    color: black;
    text-align: center;
    text-decoration: none;
    :hover{
        color: #e8222e;
    }
    width: 87px;
    height: auto;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    margin: 20px 5px;
    :first-child{
        margin-left: 4vw;
    }
`


export function NavMenu(props) {
    return (
        <div>
            <Menu>
                <Item>Burger</Item>
                <Item>Asiática</Item>
                <Item>Massas</Item>
                <Item>Saudáveis</Item>
                <Item>Burger</Item>
                <Item>Asiática</Item>
                <Item>Massas</Item>
                <Item>Saudáveis</Item>
            </Menu>
        </div>
    );
}



export default NavMenu;