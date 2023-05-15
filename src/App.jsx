import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Registration from "./Pages/Registration/Registration";
import ForgotPassword from "./components/LoginAndRegistration/ForgotPassword/ForgotPassword";
import Otp from "./components/LoginAndRegistration/Otp/Otp";
import NewPassword from "./components/LoginAndRegistration/NewPassword/NewPassword";
import "./App.css";

const Home = lazy(() => import("./Scenes/Home"))

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp/:id" element={<Otp />} />
            <Route path="/new-password/:id" element={<NewPassword />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
