import { getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { authAction } from "../../redux/action/actions";

export const socialLogin = async (
  provider,
  authProvider,
  dispatch,
  history
) => {
  const auth = getAuth();
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = authProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result;
      dispatch(authAction(user));
      history.push("/home");

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = authProvider.credentialFromError(error);
      console.log({ errorCode, errorMessage, email });
      // ...
    });
};
