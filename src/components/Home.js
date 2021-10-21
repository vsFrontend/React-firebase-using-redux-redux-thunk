import React, { useState } from "react";
import "../App.css";
import "../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { resetUserAction } from "../redux/action/actions";

export default function Home() {
  const data = useSelector((state) => state.authenticate.user);
  const dispatch = useDispatch();
  let history = useHistory();
  const handleRoute = () => {
    history.push("/");
  };

  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(data).length !== 0 ? (
          <div>
            <h1>Welcome {data?.user?.email} </h1>
            <button
              className="btn btn-danger mt-3"
              onClick={() => {
                const auth = getAuth();
                signOut(auth)
                  .then(() => {
                    dispatch(resetUserAction());
                    history.push("/");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Signout
            </button>
          </div>
        ) : (
          handleRoute()
        )}
      </header>
    </div>
  );
}
