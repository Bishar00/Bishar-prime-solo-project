const postToEdit = (state = {}, action) => {
    switch (action.type) {
      case 'SET_POST_TO_EDIT':
        return action.payload;
      case 'SET_TITLE_CHANGE':
        return {
          ...state,
          title: action.payload
        };
      case 'SET_DESCRIPTION_CHANGE':
        return {
          ...state,
          description: action.payload
        };
      default:
        return state;
    }
  };

  export default postToEdit;