const deleteReducer = (state = [], action) => {
    switch (action.type) {
      case 'DELETE_POST':
        return state.filter(post => post.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default deleteReducer;
  
  
  
  
  