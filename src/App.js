import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./component/loginPage/loginPage";
import Dashboard from "./component/dashBoardPage/dashBoard";
import Configuration from "./component/configuration/configuration";
import NavBar from "./component/navBar/navbar";
import Contact from "./component/contactPage/contact";
import About from "./component/aboutPage/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/configuration"
          element={
            <ProtectedRoute>
              <Configuration />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

const ProtectedRoute = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default App;
