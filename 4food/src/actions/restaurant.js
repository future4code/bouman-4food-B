import axios from "axios";


const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodB"


export const getAllRestaurants = () => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    try {
        const response = await axios.get(`${baseURL}/restaurants`,  axiosConfig );

        dispatch(setAllRestaurants(response.data.restaurants));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar acessar os restaurantes.");
    }
}


export const setAllRestaurants = (allRestaurants) => ({
    type: 'SET_ALL_RESTAURANTS',
    payload: {
        allRestaurants,
    }
}); 


export const setSelectedCategory = (category) => ({
    type: 'SET_SELECTED_CATEGORY',
    payload: {
        category,
    }
})