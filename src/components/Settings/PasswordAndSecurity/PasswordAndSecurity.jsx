import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import { changePassword } from "../../../api";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import "./PasswordAndSecurity.css";

function PasswordAndSecurity() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleClose() {
    setClose(false);
    setOpen(false)
  }

  const [isVisible, setVisible] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const onFocus = (e) => {
    e.target.previousElementSibling.style.color = "blue";
  };

  const onBlur = (e) => {
    e.target.previousElementSibling.style.color = "gray";
  };

  const toggle = () => {
    setVisible(!isVisible);
  };

  async function onSubmit(userData) {
    try {
      const { data } = await changePassword(userData);
      console.log(data);
      setSuccess(data.message)
      setOpen(true)
      reset();
    } catch (error) {
      setError(error.response.data.message);
      setClose(true);
    }
  }

  return (
    <div className="password">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="change-password">
          <p>Change Password</p>
        </div>

        <div className="password-input">
          <label htmlFor="">Current Password</label>
          <LockIcon className="password-input-icon" />
          <input
            {...register("currentPassword", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 8,
                message: "Password should have 8 characters",
              },
            })}
            type="password"
            onFocus={onFocus}
            onBlur={onBlur}
            onPaste={(event) => event.preventDefault()}
          />
          {errors.currentPassword && (
            <p className="error">{errors.currentPassword?.message}</p>
          )}
        </div>

        <div className="password-input">
          <label htmlFor="">New Password</label>
          <LockIcon className="password-input-icon" />
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 8,
                message: "Password should have 8 characters",
              },
            })}
            type="password"
            onFocus={onFocus}
            onBlur={onBlur}
            onPaste={(event) => event.preventDefault()}
          />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </div>

        <div className="password-input">
          <label htmlFor="">Re-type new Password</label>
          <LockIcon className="password-input-icon" />
          <input
            {...register("newPassword", {
              required: {
                value: true,
                message: "Password is required",
              },
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
            type={isVisible ? "text" : "password"}
            onFocus={onFocus}
            onBlur={onBlur}
            onPaste={(event) => event.preventDefault()}
          />
          {errors.newPassword && (
            <p className="error">{errors.newPassword?.message}</p>
          )}
          <span onClick={toggle} className="password-visibility">
            {isVisible ? (
              <VisibilityIcon style={{ fontSize: ".80rem" }} />
            ) : (
              <VisibilityOffIcon style={{ fontSize: ".80rem" }} />
            )}
          </span>
        </div>

        <div className="forgot-password">
          <p
            onClick={() => {
              navigate("/forgot-password");
            }}>
            Forgot Password?
          </p>
        </div>
        <div className="save-button">
          <button>Save</button>
        </div>
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
    </div>
  );
}

export default PasswordAndSecurity;
