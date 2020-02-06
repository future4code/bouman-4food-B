const initialState = {
    allProfile: []
}

const profile = (state = initialState, action) => {
    switch(action.type){
        case "GET_PROFILE":
            return {...state, allProfile: action.payload.profile}
        default:
            return state
    }
}

export default profile;