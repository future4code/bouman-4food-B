import React, { Component } from "react";
import styled from "styled-components";
import { routes } from "../Router";
import logo from "../../resources/logo-branco.svg";
import { connect } from "react-redux";
import { push } from "connected-react-router";


const MainDiv = styled.div`
    display:flex;
    flex-direction: column;
    padding: 10%;
    background-color: #e8222e;
    height: 100vh;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoHome = styled.img`
    display:flex;
    margin-top: 288px;
    margin-bottom: 100px;
    max-width: 350px;
`;

export class Home extends Component {

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if(token === null) {
            this.props.goToLogin()
        } else {
            this.props.goToFeed()
        }
    }

  render(){
        return(
         <MainDiv>
            <MainContent>
                <LogoHome src={logo}/>
            </MainContent>
         </MainDiv>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    goToLogin: () => dispatch(push(routes.Login)),
    goToFeed: () => dispatch(push(routes.Feed)),
})



export default connect(null, mapDispatchToProps)(Home);
