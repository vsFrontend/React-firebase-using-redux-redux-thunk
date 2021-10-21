import { actionTypes } from "../constants/actionTypes";
import "../../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const authAction = (user) => {
  return {
    type: actionTypes.USER_AUTH,
    payload: user,
  };
};

export const thunkAction = (credentails) => async (dispatch) => {
  try {
    const auth = getAuth();
    const data = await signInWithEmailAndPassword(
      auth,
      credentails.email,
      credentails.password
    );

    dispatch({ type: actionTypes.USER_AUTH, payload: data });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const resetUserAction = (user) => {
  return { type: actionTypes.RESET_USER };
};
