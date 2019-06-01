const authReducer = (state = [], action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        user: action.user
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
