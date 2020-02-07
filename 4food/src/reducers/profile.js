const initialState = {
    profileInfo: []
}

const profile = (state = initialState, action) => {
    switch(action.type){
        case "GET_PROFILE":
            return {...state, profileInfo: action.payload.profile}
        default:
            return state
    }
}

export default profile;