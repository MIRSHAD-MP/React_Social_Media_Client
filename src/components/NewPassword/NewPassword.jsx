import React, { useState } from "react";
import "./NewPassword.css";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

function NewPassword() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

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

  async function onSubmit(userData) {
    try {
      const { data } = await axios.put(`http://localhost:3001/new-password/${id}`, {
        ...userData,
      });
      setSuccess(data.message);
      setOpen(true);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setClose(true);
    }
  }


  return (
    <section className="newpage">
      <form onSubmit={handleSubmit(onSubmit)} className="newform-cover">
        <div className="newtop-section">
          <div className="newsection-heading">
            <h1>Enter new password</h1>
            <p>Enter your new password</p>
          </div>
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
            type={!isVisible ? "password" : "password"}
            placeholder="New password"
            onFocus={onFocus}
            onBlur={unFocus}
          />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </div>

        <div className="form-input">
          <LockIcon className="icon" />
          <input
            {...register("confirmPassword", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 8,
                message: "Password should have 8 characters",
              },
              validate: (value) => {
                if (value != watch("password")) {
                  return "password does not match";
                }
              },
            })}
            type={!isVisible ? "password" : "text"}
            placeholder="Re enter password"
            onFocus={onFocus}
            onBlur={unFocus}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword?.message}</p>
          )}
          <span onClick={toggle} className="visibility">
            {isVisible ? (
              <VisibilityIcon style={{ fontSize: ".95rem" }} />
            ) : (
              <VisibilityOffIcon style={{ fontSize: ".95rem" }} />
            )}
          </span>
        </div>

        <button type="submit" className="new">
          Change password
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
      </form>
    </section>
  );
}
export default NewPassword;
