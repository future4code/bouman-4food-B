const initialState = {
    allDetailsRestaurant: {},
}

const restaurant = (state = initialState, action) => {
    switch(action.type) {
        case "SET_RESTAURANT_DETAILS":
            return { ...state, allDetailsRestaurant: action.payload.restaurantId }
        default:
            return state
    }
}

export default restaurant