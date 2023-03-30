import React, { useState } from "react";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [shown, setShown] = useState(false);
  // const [pwd, setPwd] = useState("");
  // const [userReg, setUserReg] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   branch: "",
  //   year: ""
  // });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');

  const navigate = useNavigate()

  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);
  //   setUserReg({ ...userReg, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/discover')
  };

  return (
    <div className="signup">
      <form action="/discover" onSubmit={handleSubmit}>
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
              value={name}
              onChange={(e) => {setName(e.target.value)}}
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
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
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
              value={phone}
              onChange={(e) => {setPhone(e.target.value)}}
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
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              label="Password"
              minLength="8"
              type={shown ? "text" : "password"}
              // value={pwd}
              // onChange={(e) => setPwd(e.target.value)}
            />
            <FiEye className="reveal" onClick={() => setShown(!shown)} />
            <TextField
              sx={{
                width: { xs: 300, sm: 400, md: 400 },
                "& .MuiInputBase-root": {
                  height: 50,
                },
              }}
              id="branch"
              value={branch}
              onChange={(e) => {setBranch(e.target.value)}}
              label="Branch"
            />
            <TextField
              sx={{
                width: { xs: 300, sm: 400, md: 400 },
                "& .MuiInputBase-root": {
                  height: 50,
                },
              }}
              id="year"
              value={year}
              onChange={(e) => {setYear(e.target.value)}}
              label="Year"
            />
          </div>
          <div className="signup__content__bottom">
            <div className="signup__content__btns">
              <button className="actionsignup">Signup with G</button>
              <button type="submit" className="actionsignup">
                Submit
              </button>
            </div>
            <p className="para__small">
              Already have an Account - <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
