import React, { Component } from "react";
import { routes } from "../Router";
import styled from "styled-components";
import logo from "../../images/logo-future-eats-invert.png";

//Container para o fundo da página
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Setando os estados
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            cpf: "",
            password: "",
            confirmPassword: "",
        };
    }

    render() {
        return (
            <MainContainer>
                <img src={logo} alt="iFuture Logo" />
            </MainContainer>
        )
    }
}

export default SignUp;