const initialState = {
    allRestaurants: [],
    selectedCategory: "",
}

const restaurant = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ALL_RESTAURANTS':
            const restaurantList = action.payload.allRestaurants;
            return {...state, allRestaurants: restaurantList};
        case 'SET_SELECTED_CATEGORY':
            const category = action.payload.category;
            return {...state, selectedCategory: category};
        default:
            return state
    }
}

export default restaurant;