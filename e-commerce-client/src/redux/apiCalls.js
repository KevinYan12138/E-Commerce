import { loginFailure, loginStart, loginSuccess, logoutProcess } from "./userRedux";
import { publicRequest } from "../RequestMethods";

 const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
}; 

const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

const logout = async (dispatch) => {
  dispatch(logoutProcess());
};



export {login, register, logout}