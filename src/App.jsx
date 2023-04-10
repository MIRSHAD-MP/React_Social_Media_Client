import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Signin from "./Pages/Signin/Signin";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Otp from "./components/Otp/Otp";
import NewPassword from "./components/NewPassword/NewPassword";
import Home from "./Scenes/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />}/>
        <Route path="/login" element={<Signin />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/otp/:id" element={<Otp />}/>
        <Route path="/new-password/:id" element={<NewPassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;