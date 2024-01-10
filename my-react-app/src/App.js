import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./login/login";
import SignUp from "./signUp/signUp";
import Profile from "./profile/profile";
import MainPage from "./main/main";

function App() {
  return (
    <Provider store={store}>
      {" "}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
