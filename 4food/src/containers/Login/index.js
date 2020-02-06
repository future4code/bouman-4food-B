import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
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
<<<<<<< HEAD
  width: 90%;
=======
>>>>>>> igor
`;




class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
<<<<<<< HEAD
      password: "",
      showPassword: false,
=======
      password: ""
>>>>>>> igor
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
<<<<<<< HEAD
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
=======
>>>>>>> igor

  handleLEntrarButton = (event) =>{
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

<<<<<<< HEAD
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { email, password } = this.state;
    const { classes } = this.props;
=======
  render() {
    const { email, password } = this.state;
>>>>>>> igor

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
<<<<<<< HEAD
            placeholder="email@email.com"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
           <br/>
          <TextField
            variant="outlined"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Senha"
            value={password}
            onChange={this.handleChange('password')}
            placeholder="Mínimo 6 caracteres"
            pattern=".{6,}"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                 aria-label="Toggle password visibility"
                 onClick={this.handleClickShowPassword}
                >
                {this.state.showPassword ? <Visibility />  : <VisibilityOff/>}
               </IconButton>
              </InputAdornment>
           ),
           }} 
=======
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
>>>>>>> igor
          />
          <br/>
          <Button  type="submit" variant="contained" color="primary" >Entrar</Button>
        </FormLogin>
<<<<<<< HEAD
         <p>Não possui cadastro? <Button onClick={this.props.goToSingUp} size="small"> <h5>Clique aqui.</h5></Button> </p>
=======
        <p>Não possui cadastro? <a href= "#">Clique aqui.</a> </p>
>>>>>>> igor
      </DivContet>     
    );
  }
}

<<<<<<< HEAD
const mapDispatchToProps = (dispatch) =>({
  login: (email, password) => dispatch(postLoginUser(email, password)),
  // goToSingUp: () => dispatch(push(routes.ROTACADASTROUSER)),
})

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
=======

const mapDispatchToProps = (dispatch) =>({
  login: (email, password) => dispatch(postLoginUser(email, password)),
})



export default connect(null, mapDispatchToProps)(LoginPage);
>>>>>>> igor
