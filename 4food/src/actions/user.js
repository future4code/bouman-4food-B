import axios from "axios";


const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodB"


const loginUser = (login) => ({
    type: "LOGIN_USER",
    payload:{
        login,
    }
})


export const postLoginUser = (email, password) => async (dispatch) =>{

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