import { LOGIN, REGISTER } from "../../actions/UserAction";

const initialState = {
  loginResult: false,
  loginLoading: false,
  loginError: false,

  registerResult: false,
  registerLoading: false,
  registerError: false,
};

const Login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginResult: action.payload.data,
        loginLoading: action.payload.loading,
        loginError: action.payload.errorMessage,
      };

    case REGISTER:
      return {
        ...state,
        registerResult: action.payload.data,
        registerLoading: action.payload.loading,
        registerError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Login;
