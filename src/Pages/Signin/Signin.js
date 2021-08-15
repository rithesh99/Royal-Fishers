import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../../Assets/logo.png";
import './styles.css'
import firebase from "firebase";
import { authenticate } from "../../RouteHelper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
  });


  const { email, password, error } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async data => {
          await firebase.firestore().collection("users").onSnapshot((snapshot) =>
            performRedirect(snapshot.docs.map((doc) => doc.data()).filter(user => user.email===email))
        );
      })
      .catch(err => {
        setValues({ ...values, error: err.message });
      });
  };

  const performRedirect = (user) => {
    authenticate(user[0])
    if (user[0].role === 1) {
      return <Redirect to={{ pathname: "/admin", state: window.location.href.slice(21) }} />;
    } else {
      return <Redirect to={{ pathname: "/", state: window.location.href }}/>;
    }
  };


  const errorMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="message__error"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };


  const signInForm = () => {
    return (
      <div className="login ">
        <Link to="/">
          <img
            className="login__logo"
            src={logo}
            alt=""
          />
        </Link>

        <div className="login__container">
          <h1>Login</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={handleChange("email")}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={handleChange("password")}
            />

            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-block btn-primary"
            >
              Sign In
            </button>
          </form>

          <p>
            By continuing, you agree to Royal Fisher's Conditions of Use and Privacy Notice.
          </p>

          <p className="text-center">
            Not a user? <Link to="/signup">Register here</Link>
          </p>
          <Link to="/signup">
            <button className="login__registerButton">
              Create your Account here
            </button>
          </Link>
        </div>
      </div>);
  };

  return (
    <div>
      {errorMessage()}
      {signInForm()}
    </div>
  );
};

export default Signin;