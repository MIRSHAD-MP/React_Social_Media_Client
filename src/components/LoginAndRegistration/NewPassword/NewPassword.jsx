import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { newPassword } from "../../../api";
import "./NewPassword.css"

function NewPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [isVisible, setVisible] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

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
      const { data } = await newPassword(id,userData);
      navigate("/login");
    } catch (error) {
      console.log(error);
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
            className="new-input"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 8,
                message: "Password should have 8 characters",
              },
            })}
            type="password"
            placeholder="New password"
            onFocus={onFocus}
            onBlur={unFocus}
            onPaste={(e) => e.preventDefault()}
          />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </div>

        <div className="form-input">
          <LockIcon className="icon" />
          <input
            className="new-input"
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
            onPaste={(e) => e.preventDefault()}
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
      </form>
    </section>
  );
}
export default NewPassword;
