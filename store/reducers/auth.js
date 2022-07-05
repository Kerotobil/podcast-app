const defaultState = {
  token: '',
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD': {
      state.token = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
export default authReducer;
