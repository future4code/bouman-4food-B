import axios from "axios";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodB"

export const setRestaurantDetails = restaurantId => ({
    type: "SET_RESTAURANT_DETAILS",
    payload: {
        restaurantId
    }
})

export const getPostDetails = restaurantId => async(dispatch) => {

    const id = restaurantId

    try{
        const response = await axios.get(`${baseURL}/restaurants/${id}`, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
        dispatch(setRestaurantDetails(response.data.restaurant))
    }
    catch(erro){
        console.log(erro)
    }
}


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


export const getActiveOrder = () => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    try {
        const response = await axios.get(`${baseURL}/active-order`,  axiosConfig );

        dispatch(setActiveOrder(response.data.order));
    } catch(error) {
        console.log(error)
    }
}

export const setActiveOrder = (order) => ({
    type: 'SET_ACTIVE_ORDER',
    payload: {
        order,
    }
}); 
