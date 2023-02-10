const editPostsReducer = (state = [], action) => {
    switch (action.type){
        case 'EDIT_POSTS':
            return action.payload;
    
        default:
            return state;
    }
}

export default editPostsReducer;