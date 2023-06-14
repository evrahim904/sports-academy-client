

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useState } from "react";

const Main = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeStyles = {
    light: {
      backgroundColor: "#f2f2f2",
      color: "#333",
    },
    dark: {
      backgroundColor: "#333",
      color: "#f2f2f2",
    },
  };

  return (
    <div style={themeStyles[theme]}>
      <Navbar></Navbar>
      <input
        onChange={toggleTheme}
        type="checkbox"
        className="toggle toggle-md"
      />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
