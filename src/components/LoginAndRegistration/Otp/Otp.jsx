import React, { useEffect, useState } from "react";
import "./Otp.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { sendEmailOtp,checkOtp } from "../../../api";
import { Alert, Snackbar } from "@mui/material";
import OtpInput from "../OtpInput/OtpInput";

function Otp() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(Array(4).fill(""));

  function handleClose() {
    setOpen(false);
    setClose(false);
  }

  const navigate = useNavigate();
  const { id } = useParams();

  async function sendOtp() {
    const { data } = await sendEmailOtp(id);
    localStorage.setItem("otp", "true");
    console.log(data);
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

  async function onSubmit(event) {
    try {
      event.preventDefault();
      const { data } = await checkOtp(otp.join(""),id);
      setSuccess(data.message);
      navigate("/new-password/" + data.userId);
    } catch (error) {
      setError(error.response.data.message);
      setClose(true);
    }
  }

  return (
    <section className="otppage">
      <form className="otpform-cover" onSubmit={onSubmit}>
        <div className="otptop-section">
          <div className="otpsection-heading">
            <h1>Enter your OTP</h1>
            <p>Check your email for the OTP</p>
          </div>
        </div>

        <div>
          <OtpInput otp={otp} setOtp={setOtp} />
        </div>

        <div className="timer">
          <p>Didn't recieve code? </p>
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
          <button className="otpreg" onClick={sendOtp}>
            Resend
          </button>
        </div>
      </form>
    </section>
  );
}

export default Otp;
