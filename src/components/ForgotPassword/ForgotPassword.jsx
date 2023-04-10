import React, { useState } from "react";
import "./ForgotPassword.css"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { useEffect } from "react";

function ForgotPassword() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const [open,setOpen] = useState(false)
  const [close,setClose] = useState(false)
  const [success,setSuccess] = useState("")
  const [error,setError] = useState("")

  useEffect(() => {
    localStorage.removeItem("otp")
  },[])

  function handleClose () {
    setOpen(false)
    setClose(false)
  }

  const onFocus = (e) => {
    e.target.previousElementSibling.style.color = "blue";
  };

  const unFocus = (e) => {
    e.target.previousElementSibling.style.color = "gray";
  };

  async function onSubmit(userData) {
    try {
     const {data} =  await axios.post("http://localhost:3001/api/forgot-password", {
      ...userData
      })
      setSuccess(data.message)
      setOpen(true)
      navigate("/otp/" + data.userId)
    } catch (error) {
      setError(error.response.data.message)
      setClose(true)
    }
  }

  return (
    <section className="forgotpage">
      <form onSubmit={handleSubmit(onSubmit)} className="forgotform-cover">
        <div className="forgottop-section">
          <div className="forgotsection-heading">
            <h1>Forgot password?</h1>
            <p>Enter your details to receive a rest link</p>
          </div>
        </div>

        <div className="forgotform-input">
          <AlternateEmailIcon className="icon" />
          <input className="forgot-input"
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
            placeholder="Your Email"
            onFocus={onFocus}
            onBlur={unFocus}
          />
          {errors.email && <p className="error">{errors.email?.message}</p>}
        </div>

        <button type="submit" className="forgot">
          Send
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

        <div className="forgotmethod">
          <button className="forgotreg" onClick={() => {
            navigate("/login")
          }}>Back to sign in</button>
        </div>
      </form>
    </section>
  );
}
export default ForgotPassword;