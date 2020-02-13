import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/user";
import styled from "styled-components";
import logo from "../../resources/logo-future-eats-invert.png";
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
            showConfirmPassword: false,
        };
    }

  handleChangePassword = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleChangeConfirmPassword = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowConfirmPassword = () => {
    this.setState(state => ({ showConfirmPassword: !state.showConfirmPassword }));
  };

  handleSignUpTextField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
    
  handleSignUpButton = () => {
    const { name, email, cpf, password } = this.state;
      this.props.signUp(name, email, cpf, password)
  }

    render() {
        const { name, email, cpf } = this.state;
        return (
            <MainContainer>
                
                <Logo src={logo} alt="iFuture Logo" />
                <h4> Cadastrar </h4>
              <FormContainer>
                
                <TextField
                    required="true"
                    onChange={this.handleSignUpTextField}
                    name="name"
                    label="Nome"
                    placeholder="Nome e sobrenome"
                    InputLabelProps={{
                      shrink: true,
                      }}
                    margin="normal"
                    variant="outlined"
                    value={name}
                />

                <TextField
                    required="true"
                    onChange={this.handleSignUpTextField}
                    name="email"
                    label="E-mail"
                    placeholder="email@email.com.br"
                    InputLabelProps={{
                      shrink: true,
                      }}
                    margin="normal"
                    variant="outlined"
                    value={email}
                />

                <TextField
                    required="true"
                    onChange={this.handleSignUpTextField}
                    name="cpf"
                    label="CPF"
                    placeholder="000.000.000-00"
                    InputLabelProps={{
                      shrink: true,
                      }}
                    margin="normal"
                    variant="outlined"
                    value={cpf}

                />

                <TextField
                    required="true"
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Senha"
                    name="password"
                    placeholder="Mínimo 6 caracteres"
                    InputLabelProps={{
                      shrink: true,
                      }}
                    margin="normal"
                    value={this.state.password}
                    onChange={this.handleChangePassword('password')}
                    InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                    >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff /> }
                    </IconButton>
                    </InputAdornment>
                    ),
                    }}
                />
                <TextField
                    required="true"
                    variant="outlined"
                    type={this.state.showConfirmPassword ? 'text' : 'password'}
                    label="Confirmar"
                    placeholder="Confirme a senha anterior"
                    InputLabelProps={{
                      shrink: true,
                      }}
                    margin="normal"
                    value={this.state.confirmPassword}
                    onChange={this.handleChangeConfirmPassword('confirmPassword')}
                    InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowConfirmPassword}
                    >
                        {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
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
    signUp: (name, email, cpf, password) => 
    dispatch(signUp(name, email, cpf, password)),
});

//Deixei o primeiro null porque não temos mapStateToProps até agora 
export default
connect(
null,
mapDispatchToProps
)(SignUp);