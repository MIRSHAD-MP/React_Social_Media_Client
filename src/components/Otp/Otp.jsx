import React, { useEffect, useState } from "react";
import "./Otp.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";
import { useForm } from "react-hook-form";

function Otp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  function handleClose() {
    setOpen(false);
    setClose(false);
  }

  const navigate = useNavigate();
  const { id } = useParams();

  async function sendOtp() {
    const { data } = await axios.post(`http://localhost:3001/otp/${id}`,{});
    localStorage.setItem("otp", "true");
  }

  useEffect(() => {
    const otp = localStorage.getItem("otp");
    if (otp) {
      return;
    }
    sendOtp();
    return () => {
      localStorage.removeItem("otp");
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  async function onSubmit(userData) {
    try {
      const otp = userData.otp1 + userData.otp2 + userData.otp3 + userData.otp4;
      const { data } = await axios.post("http://localhost:3001/check-otp", {
        otp: otp,
        userId: id
      });
      setSuccess(data.message);
      navigate("/new-password/" + data.userId)
    } catch (error) {
      setError(error.response.data.message);
      setClose(true);
    }
  }

  return (
    <section className="otppage">
      <form className="otpform-cover" onSubmit={handleSubmit(onSubmit)}>
        <div className="otptop-section">
          <div className="otpsection-heading">
            <h1>Enter your OTP</h1>
            <p>Check your email for the OTP</p>
          </div>
        </div>

        <div className="otp">
          <div className="otp-input">
            <input
              {...register("otp1", {
                required: {
                  value: true,
                },
              })}
              type="text"
              maxLength="1"
              autoFocus
            />
          </div>

          <div className="otp-input">
            <input
              {...register("otp2", {
                required: {
                  value: true,
                },
              })}
              type="text"
              maxLength="1"
            />
          </div>

          <div className="otp-input">
            <input
              {...register("otp3", {
                required: {
                  value: true,
                },
              })}
              type="text"
              maxLength="1"
            />
          </div>

          <div className="otp-input">
            <input
              {...register("otp4", {
                required: {
                  value: true,
                },
              })}
              type="text"
              maxLength="1"
            />
          </div>
        </div>

        <div className="timer">
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : (
            <p>Didn't recieve code? </p>
          )}
        </div>

        <button type="submit" className="otpverify">
          Verify
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

        <div className="otpmethod">
          <p>Didn't receive an email?</p>
          <button
           className="otpreg"
            disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#4169E1",
            }}
            onClick={resendOTP}>
            Resend
          </button>
        </div>
      </form>
    </section>
  );
}

export default Otp;
