// REQUIRING MODULES
import axios from "axios";

//AXIOS INSTANCE WITH DEFAULT HEADERS
const API = axios.create({
  baseURL: "http://localhost:3001/api",
});

//REQUEST INTERCEPTOR
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//RESPONSE INTERCEPTOR
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const login = (formData) => API.post("/", formData);
export const signIn = (formData) => API.post("/login", formData);
export const forgotPassword = (formData) => API.post("/forgot-password", formData);
export const sendEmailOtp = (id) => API.post(`/otp/${id}`);
export const checkOtp = (otp, id) => API.post("/check-otp", { userId: id, otp });
export const newPassword = (id, userData) => API.put(`/new-password/${id}`, { ...userData });

export const changePassword = (userData) => API.put('/settings', { ...userData });
export const fetchUserDetails = () => API.get('/settings/edit-profile')
export const editProfile = (userData) => API.put('/settings/edit-profile', {...userData})