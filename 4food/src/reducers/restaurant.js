const initialState = {
    allDetailsRestaurant: {},
    allRestaurants: [],
    selectedCategory: "",
    activeOrder: null,
}

const restaurant = (state = initialState, action) => {
    switch(action.type){
        case "SET_RESTAURANT_DETAILS":
            return { ...state, allDetailsRestaurant: action.payload.restaurantId }
        case 'SET_ALL_RESTAURANTS':
            const restaurantList = action.payload.allRestaurants;
            return {...state, allRestaurants: restaurantList};
        case 'SET_SELECTED_CATEGORY':
            const category = action.payload.category;
            return {...state, selectedCategory: category};
        case 'SET_ACTIVE_ORDER':
            const order = action.payload.order;
            return {...state, activeOrder: order};
        default:
            return state
    }
}

export default restaurant
