import React, { useEffect, useState, } from "react";
import "./Login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { hideLoading, showLoading } from "../../redux/alertSlice";
import { setUser } from "../../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      const load = { email, password };
      const config = {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      };
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/login`, load, config);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.user));
        localStorage.setItem("token", response.data.token);
        navigate("/discover");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    if(user){
      navigate("/discover");
    }
  }, [user, navigate]);

  return (
    <div className="login">
      <img
        src="https://res.cloudinary.com/saienterprises/image/upload/v1681553375/login_1_rrb4xr.jpg"
        className="login__img"
        alt="login"
      ></img>
      <form onSubmit={handleSubmit}>
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
              id="email"
              name="email"
              size="30"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              name="password"
              label="Password"
              minLength="6"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <div className="login__content__bottom">
              <button className="actionLogin">Login</button>
              <p className="login__txt">
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
