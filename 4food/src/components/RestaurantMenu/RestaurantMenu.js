import React from "react"
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const Card = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 95.12%;
    height: 112px;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    margin: 8px 2.44%;
`

const ImageItem = styled.img`
    width: 96px;
    height: 112px;
`

const Title = styled.h1`
    height: 18px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
`

const Quantity = styled.p`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

const QuantityBorder = styled.div`
    display: flex;
    color: #e8222e;
    width: 100%;
    height: 33px;
    border-radius: 0 8px 0 8px;
    border: solid 1px #e8222e;
    justify-content: center;
    align-items: center;
`

const TextDescription = styled.p`
    height: 30px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    margin: 0;
`

const TextValue = styled.p`
    height: 19px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    margin: 0 0 15px 0;
`

const ButtonRemove = styled.button`
    border-radius: 8px 0 8px 0;
    border: solid 1px #e02020;
    background-color: #FFF;
    height: 32px;
    width: 100%;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: #e02020;
    margin: 0;
    :active{
        background-color: #e02020;
        color: #FFF;
    }
`
const ButtonAdd = styled.button`
    border-radius: 8px 0 8px 0;
    border: solid 1px black;
    background-color: #FFF;
    height: 32px;
    width: 100%;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: black;
    margin: 0;
    :active{
        background-color: black;
        color: #FFF;
    }
`

//MODAL



const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  whidth: 60%;
  min-width: 300px;
  padding: 40px;
  font-family: 'Roboto', sans-serif;
`

const Text = styled.h1`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
`

const Select = styled.select`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`

const Option = styled.option`
  height: 56px;
`

const ButtonDiv = styled.div`
  align-self: flex-end;
  margin-top: 28px;
`

class RestaurantMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "none",
            form: {},
        }
    }

    openModal = () => {
        this.setState({ status: "flex" })
    }

    closeModal = (event) => {
        if(event.target.id === "modal"){
         this.setState({status: "none"  })
        }
    }

    handleSelectChange = (event) => {
        const { name, value } = event.target;
        this.setState({ form: { ...this.state.form, [name]: value } });
        console.log(this.state.form)
    }

    removeQuantity = (event) => {
        const name = event.target
        const value = 0
        this.setState({ form: {[name]: value}  })
        console.log(this.state.form)
    }

    render() {

        const ModalContainer = styled.div`
            width: 100%;
            height: 100vh;
            background: rgba(0,0,0, .2);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2000;
            display: ${this.state.status};
            justify-content: center;
            align-items: center;
        `

        return (
            <Card>
                <Grid container>
                    <Grid item xs={4}>
                        <ImageItem src={this.props.product.photoUrl} />
                    </Grid>
                    <Grid item xs={8} container>
                        <Grid item xs={10}>
                            <Title>{this.props.product.name}</Title>
                        </Grid>
                        <Grid item xs={2}>
                            <QuantityBorder>
                                <Quantity>2</Quantity>
                            </QuantityBorder>
                        </Grid>
                        <Grid item xs={12}>
                            <TextDescription>{this.props.product.description}</TextDescription>
                        </Grid>
                        <Grid item xs={7}>
                            <TextValue>R${this.props.product.price}</TextValue>
                        </Grid>
                        <Grid item xs={5}>
                            {Object.keys(this.state.form).length === 0
                            ? <ButtonAdd onClick={ this.openModal }>adicionar</ButtonAdd>
                            : <ButtonRemove onClick={ this.removeQuantity }>remover</ButtonRemove>
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <ModalContainer id="modal" onClick={ this.closeModal }>
                    <StyledModal>
                        <Text>Selecione a quantidade desejada</Text>
                        <Select name={this.props.product.name} onChange={this.handleSelectChange}>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                        </Select>
                        <ButtonDiv>
                            <Button color="primary">Adicionar ao Carrinho</Button>
                        </ButtonDiv>
                    </StyledModal>
                </ModalContainer>
            </Card>
        )
    }
}

export default RestaurantMenu