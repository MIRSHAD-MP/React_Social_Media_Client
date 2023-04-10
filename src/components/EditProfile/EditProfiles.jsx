import React from "react";
import "./EditProfiles.css";

function EditProfile() {
  return (
    <div className="edit-profiles">
      <div className="sub-section-1">
        <div className="edit-profile">
          <p>Edit Profile</p>
          <img src="Assets/MIRSHAD.jpeg" alt="" />
        </div>
        <div className="user-details">
          <div className="input-field">
            <label htmlFor="">Full Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">Birthday</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">Email</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">Bio</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">Phone Number</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">Website</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">Gender</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">Location</label>
            <input type="text" className="form-input" />
          </div>
        </div>
      </div>

      <div className="sub-section-2">
        <div className="social-media">
          <p>Social link</p>
        </div>
        <div className="social-link">
          <div className="input-field">
            <label htmlFor="">Facebook</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">Twitter</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">Instagram</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-field">
            <label htmlFor="">LinkedIn</label>
            <input type="text" className="form-input" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
