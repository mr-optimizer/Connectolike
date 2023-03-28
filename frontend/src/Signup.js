import React, { useState } from "react";
import "./pages/Login-Signup/Signup.css";
import TextField from "@mui/material/TextField";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const Signup = () => {
  const [shown, setShown] = useState(false);
  const [pwd, setPwd] = useState("");

  return (
    <div className="signup">
      <div className="signup__content">
        <h3>SIGN UP</h3>
        <div className="signup__content__form">
          <TextField
            sx={{
              width: { xs: 300, sm: 400, md: 400 },
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
            id="name"
            label="Name"
          />
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
            label="Email"
          />
          <TextField
            sx={{
              width: { xs: 300, sm: 400, md: 400 },
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
            id="phone"
            label="Phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
        </div>

        <div className="signup__content__bottom">
          <div className="signup__content__btns">
            <button className="actionsignup">Signup with G</button>
            <button className="actionsignup">Next</button>
          </div>
          <p className="para__small">
            Already have an Account - <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
