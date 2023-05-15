import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { editProfile, fetchUserDetails } from "../../../api";
import Upload from "@mui/icons-material/CloudUploadOutlined";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import "./EditProfiles.css";

function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  async function fetchUserDetailsFromServer() {
    try {
      const { data } = await fetchUserDetails();
      setUser(data.user);
    } catch (error) {}
  }

  useEffect(() => {
    fetchUserDetailsFromServer();
  }, []);

  async function onSubmit(formData) {
    try {
      const { data } = await editProfile(formData);
      console.log(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form className="edit-profiles" onSubmit={handleSubmit(onSubmit)}>
        <div className="sub-section-1">
          <div className="edit-profile">
            <p>Edit Profile</p>
            <img src="Assets/MIRSHAD.jpeg" alt="" />
            <div className="edit-profile-upload" onClick={handleOpen}>
              <Upload className="edit-profile-upload-icon" />
            </div>
            <div className="edit-profile-btns">
              <button className="edit-profile-btn1" type="button">
                Edit
              </button>
              <button className="edit-profile-btn2" type="submit">
                Save
              </button>
            </div>
          </div>
          <div className="user-details">
            <div className="input-field">
              <label htmlFor="">Full Name</label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Name should have 3 characters",
                  },
                })}
                type="text"
                className="form-input"
                value={user.name ? user.name : ""}
              />
              {errors.name && (
                <p className="edit-profile-error">{errors.name?.message}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Birthday</label>
              <input
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "Date of birth is required",
                  },
                })}
                type="text"
                className="form-input"
                value={user.dateOfBirth ? user.dateOfBirth : ""}
              />
              {errors.dateOfBirth && (
                <p className="edit-profile-error">
                  {errors.dateOfBirth?.message}
                </p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Email</label>
              <input
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
                className="form-input"
                value={user.email ? user.email : ""}
              />
              {errors.email && (
                <p className="edit-profile-error">{errors.email?.message}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Bio</label>
              <input
                {...register("bio", {
                  maxLength: {
                    value: 150,
                    message: "Bio should not have 150 characters",
                  },
                })}
                type="text"
                className="form-input"
              />
              {errors.bio && (
                <p className="edit-profile-error">{errors.bio?.message}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Phone Number</label>
              <input
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                    message: "Please enter a valid mobile number",
                  },
                })}
                type="text"
                className="form-input"
              />
              {errors.phone && (
                <p className="edit-profile-error">{errors.phone?.message}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Location</label>
              <input
                {...register("location")}
                type="text"
                className="form-input"
              />
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
              <input
                {...register("facebook", {
                  pattern: {
                    value: /(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "Please enter a valid website URL",
                  },
                })}
                type="text"
                className="form-input"
              />
              {errors.facebook && (
                <p className="edit-profile-error">{errors.facebook?.message}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Twitter</label>
              <input
                {...register("twitter", {
                  pattern: {
                    value: /(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "Please enter a valid website URL",
                  },
                })}
                type="text"
                className="form-input"
              />
              {errors.twitter && (
                <p className="edit-profile-error">{errors.twitter?.message}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Instagram</label>
              <input
                {...register("instagram", {
                  pattern: {
                    value: /(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "Please enter a valid website URL",
                  },
                })}
                type="text"
                className="form-input"
              />
              {errors.instagram && (
                <p className="edit-profile-error">{errors.instagram?.message}</p>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">LinkedIn</label>
              <input
                {...register("linkedin", {
                  pattern: {
                    value: /(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "Please enter a valid website URL",
                  },
                })}
                type="text"
                className="form-input"
              />
              {errors.linkedin && (
                <p className="edit-profile-error">{errors.linkedin?.message}</p>
              )}
            </div>
          </div>
        </div>
      </form>
      <Modal open={open}>
        <Box className="edit-modal">
          <div className="modal-top">
            <p>Edit Photo</p>
            <CancelIcon onClick={handleClose} className="modal-close-icon" />
          </div>
          <div className="modal-center">
            <img src={selectedFile ? selectedFile : "" } alt="" />
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className="modal-slider">
            <Slider
              sx={{ width: 150 }}
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
            <button>Save</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EditProfile;
