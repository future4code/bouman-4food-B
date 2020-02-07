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
