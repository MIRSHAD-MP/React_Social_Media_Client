import React, { useState } from "react";
import "./Signin.css"
import AltLogin from "../AltLogin/AltLogin";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

function Signin() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open,setOpen] = useState(false)
  const [close,setClose] = useState(false)
  const [success,setSuccess] = useState("")
  const [error,setError] = useState("")

  function handleClose () {
    setOpen(false)
    setClose(false)
  }

  const [isVisible, setVisible] = useState(false);

  const onFocus = (e) => {
    e.target.previousElementSibling.style.color = "blue";
  };

  const unFocus = (e) => {
    e.target.previousElementSibling.style.color = "gray";
  };

  const toggle = () => {
    setVisible(!isVisible);
  };

  async function onSubmit(userData) {
    try {
     const {data} =  await axios.post("http://localhost:3001/login", {
      ...userData
      })
      setSuccess(data.message)
      setOpen(true)
    } catch (error) {
      setError(error.response.data.message)
      setClose(true)
    }
  }

  return (
    <section className="signinpage">
      <form onSubmit={handleSubmit(onSubmit)} className="signinform-cover">
        <div className="signintop-section">
          <div className="signinsection-heading">
            <h1>Sign in</h1>
            <p>Welcome back, you've been missed!</p>
          </div>
          <div className="signinalt-login">
            <AltLogin icon={GoogleIcon} info="Login in with Google" />
            <AltLogin icon={AppleIcon} info="Login in with Apple" />
          </div>
        </div>

        <div className="signindivider">
          <hr />
          OR
          <hr />
        </div>

        <div className="signinform-input">
          <AlternateEmailIcon className="icon" />
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid email",
              },
            })}
            type="text"
            placeholder="Email"
            onFocus={onFocus}
            onBlur={unFocus}
          />
          {errors.email && <p className="error">{errors.email?.message}</p>}
        </div>

        <div className="form-input">
          <LockIcon className="icon" />
          <input
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 8,
                message: "Password should have 8 characters",
              },
            })}
            type={!isVisible ? "password" : "text"}
            placeholder="Password"
            onFocus={onFocus}
            onBlur={unFocus}
          />
          <span onClick={toggle} className="visibility">
            {isVisible ? (
              <VisibilityIcon style={{ fontSize: ".95rem" }} />
            ) : (
              <VisibilityOffIcon style={{ fontSize: ".95rem" }} />
            )}
          </span>
          {errors.password && <p className="error">{errors.password?.message}</p>}
        </div>

        <div className="signinforgot">
            <p onClick={() => {
              navigate("/forgot-password")
            }}>Forgot Password?</p>
        </div>

        <button type="submit" className="signin">
          Sign up
        </button>

        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}>
            {success}
          </Alert>
        </Snackbar>

        <Snackbar open={close} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>

        <div className="signinmethod">
          <p>You haven't any account?</p>
          <button className="signinreg" onClick={() => {
            navigate("/")
          }}>Sign Up</button>
        </div>
      </form>
    </section>
  );
}
export default Signin;
