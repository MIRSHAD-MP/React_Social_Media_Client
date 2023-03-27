import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Signin from "./components/Signin/Signin";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Otp from "./components/Otp/Otp";
import NewPassword from "./components/NewPassword/NewPassword";

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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;