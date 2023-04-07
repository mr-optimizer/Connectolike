import React, { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import { FiEye } from "react-icons/fi";
import { hideLoading, showLoading } from "../../redux/alertSlice";


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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);
  //   setUserReg({ ...userReg, [name]: value });
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // console.log(e.target.value);
      const load  = {name, email,phone, password, branch, year}
      // console.log(load)
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      dispatch(showLoading());
      // console.log(userData)
      // console.log(phone)
      const response = await axios.post("/api/v1/register",load,config);
      // console.log(response.data)
      dispatch(hideLoading());
      if(response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to login page...");
        navigate("/login");
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      // console.log(error.response)
      dispatch(hideLoading());
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
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
              name="name"
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
              name="email"
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
              name="phone"
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
              name="password"
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
              name="branch"
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
              name="year"
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
