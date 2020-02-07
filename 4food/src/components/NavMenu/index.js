import React from 'react';
import styled from 'styled-components';



const Menu = styled.div`
    background-color: none;
    overflow: auto;
    white-space: nowrap;
    width: 100vw;
    height: auto;
`

const Item = styled.p`
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
    margin: 20px 0px;
    :first-child{
        margin-left: 4vw;
    }
`


export function NavMenu(props) {
    return (
        <div>
            <Menu>
                <Item name={null} onClick={props.selectCategory}>Todas</Item>
                <Item name='Árabe' onClick={props.selectCategory}>Árabe</Item>
                <Item name='Asiática' onClick={props.selectCategory}>Asiática</Item>
                <Item name='Hamburguer' onClick={props.selectCategory}>Hamburguer</Item>
                <Item name='Italiana' onClick={props.selectCategory}>Italiana</Item>
                <Item name='Sorvetes' onClick={props.selectCategory}>Sorvetes</Item>
                <Item name='Carnes' onClick={props.selectCategory}>Carnes</Item>
                <Item name='Baiana' onClick={props.selectCategory}>Baiana</Item>
                <Item name='Petiscos' onClick={props.selectCategory}>Petiscos</Item>
                <Item name='Mexicana' onClick={props.selectCategory}>Mexicana</Item>
            </Menu>
        </div>
    );
}



export default NavMenu;