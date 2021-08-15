import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../../Assets/logo.png";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import firebase from "firebase";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    number: "",
    error: "",
    success: "",
  });

  const [src, selectedFile] = useState(null);

  const handleFileChange = (e) => {
    selectedFile(URL.createObjectURL(e.target.files[0]));
  };
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const [crop, setCrop] = useState({ aspect: 1 / 1 });

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const base64Image = canvas.toDataURL("image/jpeg");
    setResult(base64Image);
    setValues({ ...values, photo: base64Image });
  }

  const { name, email, password, number, photo, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .firestore()
          .collection("users")
          .add({
            name: name,
            email: email,
            number: number,
            photo: photo,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            role: 0,
            orders: 0,
          })
          .then(() => {
            setValues({ ...values, success: true });
            return <Redirect to='/signin' />;
          });
      })
      .catch((error) => {
        setValues({ ...values, error: error.message });
        if (error && error.code == "auth/email-already-in-use") {
          return <Redirect to='/signin' />;
        }
      });
  };

  const signUpForm = () => {
    return (
      <div className='login'>
        <Link to='/'>
          <img className='login__logo' src={logo} />
        </Link>

        <div className='login__container'>
          <h1>Create Account</h1>
          <div className='signup__profile__pic'>
            {src ? (
              <div className='addpost__image'>
                {src && (
                  <div className='addpost__src'>
                    <div className='addpost__pic'>
                      <ReactCrop
                        src={src}
                        onImageLoaded={setImage}
                        crop={crop}
                        onChange={setCrop}
                        className='addpost__photo'
                      />
                    </div>
                    <div className='addpost__crop'>
                      <button
                        className='btn btn-block btn-warning'
                        onClick={getCroppedImg}
                      >
                        Crop Image
                      </button>
                    </div>
                  </div>
                )}
                {result && (
                  <div className='addpost__result text-center pb-2'>
                    <h1>Selected image</h1>
                    <img src={photo} alt='' className='addpost__photo' />
                    {/* {console.log(imageUrl)} */}
                  </div>
                )}
              </div>
            ) : (
              <div className=''>
                <div className=''>
                  <div className=''>
                    <input
                      type='file'
                      accept='/image/*'
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <form>
            <h5>Name</h5>
            <input type='text' value={name} onChange={handleChange("name")} />
            <h5>Mobile number</h5>
            <input
              type='tel'
              value={number}
              onChange={handleChange("number")}
            />
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={handleChange("email")} />

            <h5>Password</h5>
            <input
              type='password'
              value={password}
              onChange={handleChange("password")}
            />

            <button
              type='submit'
              onClick={onSubmit}
              disabled={src && !result}
              className='btn btn-block btn-primary'
            >
              Register
            </button>
          </form>

          <p className="text-center">
            Already have an account? <Link to='/signin'>Sign in</Link>
          </p>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className=''>
        <div className=''>
          <div
            className='message__error'
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div className=''>
        <div className=''>
          <div
            className='message__success'
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please{" "}
            <Link to='/signin'>Login here</Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {/* <Header/> */}
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {/* <p className="text-light text-center">{JSON.stringify(values)}</p> */}
    </div>
  );
};

export default Signup;
