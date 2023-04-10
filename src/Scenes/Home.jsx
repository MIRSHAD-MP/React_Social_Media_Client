import React from "react";
import Navbar from "../Pages/Navbar/Navbar";
import Aside from "../Pages/Aside/Aside";
import Settings from "../Pages/Settings/Settings";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Aside />
      <Settings />
    </div>
  );
}

export default Home;
