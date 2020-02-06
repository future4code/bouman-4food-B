import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../resources/logo-branco.svg";
import { routes } from "../Router/index";
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
    componentDidMount(dispatch) {
        const token = window.localStorage.getItem("token")
        if(token === null) {
            this.props.goToLogin()
        } else {
            this.props.goToPosts()
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
    goToPosts: () => dispatch(push(routes.postlist)),
})



export default connect(null, mapDispatchToProps)(Home);