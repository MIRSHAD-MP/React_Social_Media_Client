import React from "react";
import "./PasswordAndSecurity.css";

function PasswordAndSecurity() {
  return (
    <div className="password">
      <div className="change-password">
        <p>Change Password</p>
      </div>
      <div className="password-input">
        <label htmlFor="">Current Password</label>
        <input type="text" name="" id="" />
      </div>
      <div className="password-input">
        <label htmlFor="">New Password</label>
        <input type="text" name="" id="" />
      </div>
      <div className="password-input">
        <label htmlFor="">Re-type new Password</label>
        <input type="text" name="" id="" />
      </div>
      <div className="forgot-password">
        <p>Forgot Password?</p>
      </div>
      <div className="save-button">
        <button>Save</button>
      </div>
    </div>
  );
}

export default PasswordAndSecurity;