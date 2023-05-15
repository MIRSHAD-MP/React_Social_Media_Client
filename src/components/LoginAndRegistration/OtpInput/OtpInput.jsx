import React, { useRef, useEffect, useState } from "react";
import "./OtpInput.css";

function OtpInput({ numInputs = 4, maxLength = 1, otp, setOtp }) {

  const inputRefs = useRef([]);

  function handleInputChange(event, index) {
    setOtp((data) => {
      data[index] = event.target.value;
      return data;
    });
    const value = event.target.value;
    if (value.length > maxLength) {
      return;
    }
    if (value) {
      const nextIndex = Math.min(index + 1);
      const nextInput = inputRefs.current[nextIndex];
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  function handleKeyDown(event, index) {
    if (event.keyCode === 8 && index > 0) {
      setOtp((data) => {
        data[index] = "";
        return data;
      });
      event.preventDefault();
      event.target.value = "";
      const prevIndex = Math.max(index - 1);
      const prevInput = inputRefs.current[prevIndex];
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  useEffect(() => {
    const firstInput = inputRefs.current[0];
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  return (
    <div>
      <div className="otp-input">
        {Array(numInputs)
          .fill()
          .map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={maxLength}
              className="no-spinners"
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(event) => (inputRefs.current[index] = event)}
            />
          ))}
      </div>
    </div>
  );
}

export default OtpInput;
