import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="container text-center mt-40">
      <div
        onClick={signInWithGoogle}
        className="btn btn-outline-primary text-white"
      >
        <img
          width="20px"
          className="img-fluid"
          src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
          alt="google icon"
        />
        <button className="btn">Sign in with Google</button>
      </div>
    </div>
  );
}
