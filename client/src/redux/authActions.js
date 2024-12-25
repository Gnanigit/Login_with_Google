export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";
export const setUser = (username, email, loginType, password) => {
  return {
    type: SET_USER,
    payload: { username, email, loginType, password },
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
