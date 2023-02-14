const initialState = {
    error: null
};

const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                error: null
            };
        case DELETE_POST_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default deleteReducer;