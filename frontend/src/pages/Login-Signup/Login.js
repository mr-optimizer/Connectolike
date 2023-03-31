import React, { useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [shown, setShown] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/discover')
  }

  return (
    <div className="login">
      <form action="" onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              label="Username"
            />
            <FiEye className="reveal" onClick={() => setShown(!shown)} />
            <TextField
              sx={{
                width: { xs: 300, sm: 400, md: 400 },
                "& .MuiInputBase-root": {
                  height: 50,
                },
              }}
              id="password"
              label="Password"
              minlength="6"
              type={shown ? "text" : "password"}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />

            <div className="login__content__bottom">
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
      </form>
    </div>
  );
};

export default Login;
