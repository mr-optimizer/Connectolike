import React, { useState } from "react";
import "./pages/Login-Signup/Login.css";
import TextField from "@mui/material/TextField";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  const [shown, setShown] = useState(false);
  const [pwd, setPwd] = useState("");

  return (
    <div className="login">
      <div className="login__content">
        <h3>LOG IN</h3>
        <div className="login__content__form">
          <TextField
            sx={{
              width: { xs: 300, sm: 400, md: 400 },
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
            type="email"
            id="email"
            pattern=".+@globex\.com"
            size="30"
            label="Username"
          />
          <TextField
            sx={{
              width: { xs: 300, sm: 400, md: 400 },
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
            id="password"
            label="Password"
            minlength="8"
            type={shown ? "text" : "password"}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <FiEye className="reveal" onClick={() => setShown(!shown)} />

          <div className="login__content__btns">
            <button className="actionLogin">Login with G</button>
            <button className="actionLogin">Login</button>
          </div>
          <p className="para__small">
            Don't have an Account - <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
