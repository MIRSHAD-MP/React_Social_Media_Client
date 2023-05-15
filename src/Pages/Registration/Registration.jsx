import React, { useState } from "react";
import AltLogin from "../../components/LoginAndRegistration/AltLogin/AltLogin";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import LockIcon from "@mui/icons-material/Lock";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import { Alert, Snackbar } from "@mui/material";
import { motion } from "framer-motion";
import { login } from "../../api";
import "./Registration.css";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleClose() {
    setOpen(false);
    setClose(false);
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

  async function onSubmit(formData) {
    try {
      const { data } = await login(formData);
      setSuccess(data.message);
      setOpen(true);
    } catch (error) {
      setError(error.response.data.message);
      setClose(true);
    }
  }

  return (
    <div className="page">
      <form onSubmit={handleSubmit(onSubmit)} className="form-cover">
        <div className="top-section">
          <div className="section-heading">
            <h1>Getting Started</h1>
            <p>Create an account to continue and connect with the people</p>
          </div>

          <div className="alt-login">
            <AltLogin icon={GoogleIcon} info="Login in with Google" />
            <AltLogin icon={AppleIcon} info="Login in with Apple" />
          </div>
        </div>

        <div className="divider">
          <hr />
          OR
          <hr />
        </div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0, ease: "easeOut" }}
          className="form-input">
          <AlternateEmailIcon className="icon" />
          <input
            className="registration-input"
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
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, ease: "easeOut" }}
          className="form-input">
          <SentimentSatisfiedIcon className="icon" />
          <input
            className="registration-input"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: { value: 3, message: "Name should have 3 characters" },
            })}
            type="text"
            placeholder="Your Name"
            onFocus={onFocus}
            onBlur={unFocus}
          />
          {errors.name && <p className="error">{errors.name?.message}</p>}
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, ease: "easeOut" }}
          className="form-input">
          <LockIcon className="icon" />
          <input
            className="registration-input"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 8,
                message: "Password should have 8 characters",
              },
            })}
            type={!isVisible ? "password" : "text"}
            placeholder="Create Password"
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
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, ease: "easeOut" }}
          className="form-input">
          <DateRangeIcon className="icon" />
          <input
            className="registration-input"
            {...register("dateOfBirth", {
              required: { value: true, message: "Date of birth is required" },
            })}
            type="text"
            placeholder="Date of birth"
            onFocus={(e) => {
              onFocus(e);
              e.target.type = "date";
            }}
            onBlur={(e) => {
              unFocus(e);
              e.target.type = "text";
            }}
          />
          {errors.dateOfBirth && (
            <p className="error">{errors.dateOfBirth?.message}</p>
          )}
        </motion.div>

        <button type="submit" className="signup">
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
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>

        <div className="method">
          <p>Already have an account?</p>
          <button
            className="reg"
            type="button"
            onClick={() => {
              navigate("/login");
            }}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
