import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { connect } from "react-redux";
import { postLoginUser } from "../../actions/user";
import logo from "../../resources/logo-vermelho.svg"



const DivContet = styled.div`
  display:flex;
  justify-content: center;
  background-color: white;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`

const LogoLogin = styled.img`
  width: 104px;
  height: 58px;
`;


const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;




class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLEntrarButton = (event) =>{
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    const { email, password } = this.state;

    return (
      <DivContet>
        <div>
          <LogoLogin src={logo}/>
        </div>
        <h4>Entrar</h4>
        <FormLogin onSubmit={this.handleLEntrarButton}>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            required="true"
            variant="outlined"
          />
           <br/>
          <TextField 
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
            required="true"
            variant="outlined"
          />
          <br/>
          <Button  type="submit" variant="contained" color="primary" >Entrar</Button>
        </FormLogin>
        <p>Não possui cadastro? <a href= "#">Clique aqui.</a> </p>
      </DivContet>     
    );
  }
}


const mapDispatchToProps = (dispatch) =>({
  login: (email, password) => dispatch(postLoginUser(email, password)),
})



export default connect(null, mapDispatchToProps)(LoginPage);