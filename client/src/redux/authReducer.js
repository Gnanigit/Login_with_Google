import { SET_USER, LOGOUT } from "./authActions";

const initialState = {
  username: "",
  email: "",
  password: "",
  loginType: "",
  isLoggedIn: false,
};

const persistedUser = JSON.parse(localStorage.getItem("user"));

const authReducer = (state = persistedUser || initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        loginType: action.payload.loginType,
        isLoggedIn: true,
      };
    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
