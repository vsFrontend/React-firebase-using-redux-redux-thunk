import React, { useState } from "react";
import "./App.css";
import "./utils/firebase";
import { useHistory } from "react-router";
import { thunkAction } from "./redux/action/actions";
import { socialLogin } from "./utils/firebase/socialLogin";
// google
import { GoogleAuthProvider } from "firebase/auth";
// facebook
import { FacebookAuthProvider } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";

const providerFB = new FacebookAuthProvider();

// google
const provider = new GoogleAuthProvider();

function App() {
  const data = useSelector((state) => state.authenticate.user);

  const dispatch = useDispatch();
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesignInWithEmailAndPassword = async (email, password) => {
    let obj = { email, password };
    await dispatch(thunkAction(obj));
    history.push("/home");
  };

  const handleGoogle = () => {
    socialLogin(provider, GoogleAuthProvider, dispatch, history);
  };

  const handleFacebook = () => {
    socialLogin(providerFB, FacebookAuthProvider, dispatch, history);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <h1>React firebase with Redux </h1>

            <div className="col-md-3"></div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control mt-5"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mt-3"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-primary btn-lg btn-block mt-3 credentialsBtn"
                onClick={() =>
                  handlesignInWithEmailAndPassword(email, password)
                }
              >
                Login with credentials
              </button>
              <br />{" "}
              <button
                className="btn btn-primary btn-lg btn-block mt-3 thirdPartySignin"
                onClick={handleGoogle}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
                  alt="google_image"
                  width="40"
                  height="40"
                />
                <span className="p-20">Sign in with Google </span>
              </button>
              <button
                className="btn btn-primary btn-lg btn-block mt-3 thirdPartySignin"
                onClick={() => handleFacebook()}
              >
                <img
                  src="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/93173487_3388915277789490_1114510272048922624_n.png?_nc_cat=1&ccb=1-5&_nc_sid=973b4a&_nc_ohc=68ctFzAt9n4AX-9gOVA&_nc_ht=scontent.flhe5-1.fna&oh=63f786f6ab17c92265fe5992329bb752&oe=6194BF79"
                  alt="facebook_image"
                  width="40"
                  height="40"
                />
                <span className="p-20">Sign in with Facebook </span>
              </button>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
