import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import { hideLoading, showLoading } from "../../redux/alertSlice";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");

  const [uiux, setUIUX] = useState(false);
  const [webDev, setWebDev] = useState(false);
  const [androidDev, setAndroidDev] = useState(false);
  const [blockchain, setBlockchain] = useState(false);
  const [ethicalHacking, setEthicalHacking] = useState(false);
  const [softwareTesting, setSoftwareTesting] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const load = { name, email, phone, password, branch, sem, company };

      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      dispatch(showLoading());
      const response = await axios.post("/api/v1/register", load, config);

      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to login page...");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="signup">
      <img
        className="signup__img"
        src="https://res.cloudinary.com/saienterprises/image/upload/v1681553375/signup_1_1_oouwf9.jpg"
        alt="signup"
      ></img>
      <form onSubmit={handleSubmit}>
        <div className="signup__content">
          <h3 className="signup__title">SIGN UP</h3>
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
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setPhone(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              minLength="8"
              type="password"
            />
            <FormControl
              sx={{
                width: { xs: 300, sm: 400, md: 400 },
                "& .MuiInputBase-root": {
                  height: 50,
                },
              }}
            >
              <InputLabel id="company-label">Company</InputLabel>
              <Select
                labelId="company-label"
                id="company"
                value={company}
                label="company"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              >
                <MenuItem value={"AMAZON"}>Amazon</MenuItem>
                <MenuItem value={"APPLE"}>Apple</MenuItem>
                <MenuItem value={"FACEBOOK"}>Facebook</MenuItem>
                <MenuItem value={"FLIPKART"}>Flipkart</MenuItem>
                <MenuItem value={"GOOGLE"}>Google</MenuItem>
                <MenuItem value={"MICROSOFT"}>Microsoft</MenuItem>
                <MenuItem value={"PAYTM"}>Paytm</MenuItem>
                <MenuItem value={"ANY"}>Any</MenuItem>
              </Select>
            </FormControl>
            <div className="d-flex">
              <FormControl
                sx={{
                  width: { xs: 100, sm: 200, md: 200 },
                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                }}
              >
                <InputLabel id="branch-label">Branch</InputLabel>
                <Select
                  labelId="branch-label"
                  id="branch"
                  value={branch}
                  label="branch"
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                >
                  <MenuItem value={"CSE"}>Computer Science</MenuItem>
                  <MenuItem value={"ME"}>Mechanical</MenuItem>
                  <MenuItem value={"ECE"}>Electronics</MenuItem>
                  <MenuItem value={"EEE"}>Electrical</MenuItem>
                  <MenuItem value={"CHEM"}>Chemical</MenuItem>
                  <MenuItem value={"BIOTECH"}>Bio. Technology</MenuItem>
                  <MenuItem value={"TXT"}>Textile</MenuItem>
                  <MenuItem value={"ANY"}>Any</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  width: { xs: 100, sm: 200, md: 200 },
                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                }}
              >
                <InputLabel id="sem-label">Sem</InputLabel>
                <Select
                  labelId="sem-label"
                  id="sem"
                  value={sem}
                  label="sem"
                  onChange={(e) => {
                    setSem(e.target.value);
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>Pass Out</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="skills__container">
              <input
                id="skillUi"
                name="skill"
                value={uiux}
                type="checkbox"
                onChange={() => setUIUX(true)}
              />
              <label for="skillUi">UI/UX</label>
              <input
                id="skillWeb"
                name="skill"
                value={webDev}
                type="checkbox"
                onChange={() => setWebDev(true)}
              />
              <label for="skillWeb">Web-Dev</label>
              <input
                id="skillAndroid"
                name="skill"
                value={androidDev}
                type="checkbox"
                onChange={() => setAndroidDev(true)}
              />
              <label for="skillAndroid">Android-Dev</label>
              <input
                id="skillBlockchain"
                name="skill"
                value={blockchain}
                type="checkbox"
                onChange={() => setBlockchain(true)}
              />
              <label for="skillBlockchain">Blockchain</label>
              <input
                id="skillEthical"
                name="skill"
                value={ethicalHacking}
                type="checkbox"
                onChange={() => setEthicalHacking(true)}
              />
              <label for="skillEthical">Ethical-Hacking</label>
              <input
                id="skillSoftware"
                name="skill"
                value={softwareTesting}
                type="checkbox"
                onChange={() => setSoftwareTesting(true)}
              />
              <label for="skillSoftware">Software-Testing</label>
            </div>
          </div>
          <div className="signup__content__bottom">
            <button type="submit" className="actionsignup">
              Submit
            </button>
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
