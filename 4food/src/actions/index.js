import axios from "axios";


const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodB"


const loginUser = (login) => ({
    type: "LOGIN_USER",
     payload:{
         login,
     }
})

const getProfile = (profile) => ({
    type: "GET_PROFILE",
    payload:{
        profile
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
                
                    // dispatch(push(rotes.ROTADOFEED))
    }catch(error){
        window.alert("Email ou senha incorreta.")
    }
}

export const getProfileInfo = () => async (dispatch) => {
    try {
        const token = window.localStorage.getItem("token")
        const config = {
            headers: {
                auth: token
            }
        }
        const response = await axios.get(`${baseURL}/profile`, config)
        dispatch(getProfile(response.data.profile))
    } catch(error) {
        console.log(error)
        window.alert("Não foi possível acessar o perfil")
    }
}