import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodB"


const loginUser = (login) => ({
    type: "LOGIN_USER",
    payload:{
        login,
    }
})


export const postLoginUser = (email, password) => async (dispatch) => {

    const newLoginUser = {
        email,
        password,
    }

    try{
        const response = await axios.post(`${baseURL}/login`, newLoginUser)
        window.localStorage.setItem("token", response.data.token);

        dispatch(loginUser())
        window.alert("Login realizado com sucesso!!");
    }catch(error){
        window.alert("Email ou senha incorreta.")
    }
}


export const signUp = (username, email, cpf, password, confirmPassword) => async (dispatch) => {
    const signUpInfo = {
        username: username,
        email: email,
        cpf: cpf,
        password: password,
        confirmPassword: confirmPassword,
    };

    try {
        const response = await axios.post (`${baseURL}/signup`, signUpInfo)
        window.localStorage.getItem("token", response.data.token);
        dispatch(push(routes.root))
    } catch (error) {
        window.alert("Não foi possível realizar o cadastro")
    }
}