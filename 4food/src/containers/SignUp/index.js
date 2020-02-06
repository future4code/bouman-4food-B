import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../action/signUp";
import styled from "styled-components";
import logo from "../../images/logo-future-eats-invert.png";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { routes } from '../Router'


//Container para o fundo da página
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10%;
`;

const Logo = styled.img`
  margin: 1%;
  display: flex;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 1%;
  justify-content: space-between;
`;

//Setando os estados
export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            cpf: "",
            password: "",
            confirmPassword: "",
            showPassword: false,
        };
    }

    handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };

      handleSignUpTextField = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      handleSignUpButton = () => {
        const { username, email, password } = this.state;
        this.props.signUp(username, email, password)
      }

    render() {
        const { username, email, cpf } = this.state;
        return (
            <MainContainer>
                
                <Logo src={logo} alt="iFuture Logo" />
              
              <FormContainer>
                <TextField
                    required
                    onChange={this.handleSignUpTextField}
                    label="Nome"
                    margin="normal"
                    variant="outlined"
                    value={username}
                />

                <TextField
                    required
                    onChange={this.handleSignUpTextField}
                    label="E-mail"
                    margin="normal"
                    variant="outlined"
                    value={email}
                />

                <TextField
                    required
                    onChange={this.handleSignUpTextField}
                    label="CPF"
                    margin="normal"
                    variant="outlined"
                    value={cpf}

                />

                <TextField
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Senha"
                    margin="normal"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                    >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                    ),
                    }}
                />
                <TextField
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'confirmPassword'}
                    label="Confirme"
                    margin="normal"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange('confirmPassword')}
                    InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                    >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                    ),
                    }}
                />

                <Button 
                  onClick= {this.handleSignUpButton} 
                  variant="contained" 
                  color="primary"
                  margin="normal">
                    Criar
                </Button>
              </FormContainer>
            </MainContainer>
        );
    }
}

//Função para dar dispatch
const mapDispatchToProps = (dispatch) => ({
    signUp: (username, email, cpf, password, confirmPassword) => 
    dispatch(signUp(username, email, cpf, password, confirmPassword)),
});

//Deixei o primeiro null porque não temos mapStateToProps até agora 
export default
connect(
null,
mapDispatchToProps
)(SignUp);