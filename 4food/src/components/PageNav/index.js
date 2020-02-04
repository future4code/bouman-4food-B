import React from 'react';
import styled from 'styled-components';


const Title = styled.p`
    width: 45px;
    height: 19px;
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

const ContainerTitle = styled.div`
    width: 100vw;
    height: 44px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.8px 0 0 rgba(0, 0, 0, 0.25);
`

export function PageNav(props) {
    return (
        <ContainerTitle>
            <Title>Ifuture</Title>
        </ContainerTitle>
    );
}



export default PageNav;