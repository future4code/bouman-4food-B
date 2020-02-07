import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { connect } from "react-redux";
import logo from "../../resources/logo-vermelho.svg"
import { registerAddress } from "../../actions/user"


const DivContent = styled.div`
  display:flex;
  justify-content: center;
  background-color: white;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`

const Logo = styled.img`
  width: 104px;
  height: 58px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 90%;
`;



const addressForm = [
    {
        name: "street",
        type: "text",
        label: "Lagradouro",
        pattern: "^[a-zA-Z]$",
        placeholder: "Rua / Av",
        required: true,

    },
    {
        name: "number",
        type: "number",
        label: "Número",
        pattern: "[0-9]",
        placeholder: "Número",
        required: true,
    },
    {
        name: "complement",
        type: "text",
        label: "Complemento",
        pattern: "^[A-Za-z_][0-9]$", 
        placeholder: "Apto / Bloco",
        required: false,     
    },
    {
        name: "neighbourhood",
        type: "text",
        label: "Bairro",
        pattern: "^[A-Za-z_]$",
        placeholder: "Bairro",
        required: true,
    },
    {
        name: "city",
        type: "text",
        label: "Cidade",
        pattern: "^[A-Za-z_]$", 
        placeholder: "Cidade",
        required: true,     
    },
    {
        name: "state",
        type: "text",
        label: "Estado",
        pattern: "^[A-Za-z_]$",
        placeholder: "Estado",
        required: true,
    },
  ]



class AddressPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        form: {},
    };
  }


  handleFieldChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };


  handleOnSubmit = (event) =>{
    event.preventDefault()
    this.props.registerAddress(this.state.form)
  }



  render() {
    console.log(this.state.form)
    return (
        <DivContent>
            <div>
            <Logo src={logo}/>
            </div>
            <h4>Meu Endereço</h4>
            <Form onSubmit={this.handleOnSubmit}>
                { addressForm.map( input => (
                        <TextField
                            onChange={this.handleFieldChange}
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            value={this.state.form[input.name] || ""}
                            required={input.required}
                            placeholder={input.placeholder}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            variant="outlined"
                            margin='normal'
                        />  
                ))}
            <Button  type="submit" variant="contained" color="primary">Salvar</Button>
            </Form>
        </DivContent>     
    );
  }
}


const mapDispatchToProps = (dispatch) =>({
    registerAddress: (form) => dispatch(registerAddress(form))
})


export default connect(null, mapDispatchToProps)(AddressPage);