const profileReducer = (state = [], action) => {
    switch (action.type){
        case 'SET_PROFILE':
            return action.payload;
        case 'FETCH_PROFILE':
            return action.payload
        default:
            return state;
    }
}

export default profileReducer;