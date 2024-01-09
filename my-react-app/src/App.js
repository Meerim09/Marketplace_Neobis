import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./login/login";
import SignUp from "./signUp/signUp";
import Profile from "./profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />

        {/* <Route path="*" element={<Navigate to="/profile" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
