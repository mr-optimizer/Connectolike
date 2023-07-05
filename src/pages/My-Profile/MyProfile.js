import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./MyProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../../redux/alertSlice";
import { setUser } from "../../redux/userSlice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const MyProfile = () => {
  const defaultAvatar =
    "https://res.cloudinary.com/saienterprises/image/upload/v1681550747/avatar_qepxas.png";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  const [institute, setInstitute] = useState("");
  const [company, setCompany] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [facebook, setFacebook] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [uiux, setUIUX] = useState(false);
  const [webDev, setWebDev] = useState(false);
  const [androidDev, setAndroidDev] = useState(false);
  const [blockchain, setBlockchain] = useState(false);
  const [ethicalHacking, setEthicalHacking] = useState(false);
  const [softwareTesting, setSoftwareTesting] = useState(false);

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(defaultAvatar);
  const imageUploadHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        //readyState 2 means filw read is done
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.set("id", user._id);
      formData.set("name", name);
      formData.set("email", email);
      // formData.set("password", password);
      formData.set("avatar", avatar);
      formData.set("phone", phone);
      if (institute) formData.set("institute", institute);
      formData.set("company", company);
      formData.set("branch", branch);
      if (year) formData.set("year", year);
      formData.set("sem", semester);
      if (linkedIn) formData.set("linkedIn", linkedIn);
      if (instagram) formData.set("instagram", instagram);
      if (whatsApp) formData.set("whatsApp", whatsApp);
      if (facebook) formData.set("facebook", facebook);
      if (github) formData.set("github", github);
      if (portfolio) formData.set("portfolio", portfolio);
      formData.set("uiux", uiux);
      formData.set("webDev", webDev);
      formData.set("androidDev", androidDev);
      formData.set("blockchain", blockchain);
      formData.set("ethicalHacking", ethicalHacking);
      formData.set("softwareTesting", softwareTesting);

      const config = {
        headers: {
          "content-type": "multipart/form-data;",
        },
        withCredentials: true,
      };
      dispatch(showLoading());
      const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/me/update`, formData, config);

      dispatch(hideLoading());
      if (response.data.success) {
        dispatch(setUser(response.data.user));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      setAvatarPreview(user?.avatar?.url);
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setInstitute(user.institute);
      setCompany(user.company);
      setBranch(user.branch);
      setYear(user.year);
      setSemester(user.sem);
      setLinkedIn(user.linkedIn);
      setInstagram(user.instagram);
      setWhatsApp(user.whatsApp);
      setFacebook(user.facebook);
      setGithub(user.github);
      setPortfolio(user.portfolio);
      setUIUX(user.uiux);
      setWebDev(user.webDev);
      setAndroidDev(user.androidDev);
      setBlockchain(user.blockchain);
      setEthicalHacking(user.ethicalHacking);
      setSoftwareTesting(user.softwareTesting);
    }
  }, [user, navigate, dispatch]);

  return (
    <div className="my__profile">
      <form onSubmit={submitHandler}>
        <div className="my__profile__images__and__buttons">
          <div className="profile__container">
            <div className="profile">
              <img
                className="profile__img"
                src={avatarPreview}
                alt="profile-img"
              />
              <div className="profile__name__email">
                <h2 className="profile__name">{user?.name}</h2>
                <h3 className="profile__email">{user?.email}</h3>
              </div>
            </div>
            <div className="buttons">
              <button className="btn-cancle">Cancel</button>
              <button type="submit" className="btn-save">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="details__container">
          <div className="personal__details">
            <div className="heading__section">Personal Details</div>
            <div className="personal__details__component">
              <div className="component">
                <p className="component__lable">Image : </p>
                <div className="cover__img__input">
                  <input
                    type="file"
                    name="cover__img"
                    id="cover__img"
                    accept="images/*"
                    onChange={imageUploadHandler}
                  />
                </div>
              </div>
              <div className="component">
                <p className="component__lable">Name : </p>
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
              </div>
              <div className="component">
                <p className="component__lable">Email : </p>
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
              </div>
              <div className="component">
                <p className="component__lable">Phone : </p>
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
              </div>
              {/* <div className="component">
                <p className="component__lable">Password : </p>
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
              </div> */}
            </div>
          </div>
          <div className="professional__details">
            <div className="heading__section">Professional Details</div>
            <div className="professional__details__component">
              <div className="component">
                <p className="component__lable">Institute Name : </p>
                <FormControl
                  sx={{
                    width: { xs: 200, sm: 300, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                >
                  <InputLabel id="institute-label">Institute</InputLabel>
                  <Select
                    labelId="institute-label"
                    id="institute"
                    value={institute}
                    label="Institute"
                    onChange={(e) => {
                      setInstitute(e.target.value);
                    }}
                  >
                    <MenuItem value={"CU"}>Chandigarh University</MenuItem>
                    <MenuItem value={"NITJ"}>
                      National Institute of Technolgy Jalandhar
                    </MenuItem>
                    <MenuItem value={"ANY"}>Any</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="component">
                <p className="component__lable">Company : </p>
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
              </div>
              <div className="component">
                <p className="component__lable">Branch : </p>
                <FormControl
                  sx={{
                    width: { xs: 200, sm: 300, md: 400 },
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
              </div>
              <div className="component">
                <p className="component__lable">Year : </p>
                <FormControl
                  sx={{
                    width: { xs: 100, sm: 300, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                >
                  <InputLabel id="year-label">Year</InputLabel>
                  <Select
                    labelId="year-label"
                    id="year"
                    value={year}
                    label="year"
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>Pass Out</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="component">
                <p className="component__lable">Semseter : </p>
                <FormControl
                  sx={{
                    width: { xs: 100, sm: 300, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                >
                  <InputLabel id="sem-label">Sem</InputLabel>
                  <Select
                    labelId="sem-label"
                    id="sem"
                    value={semester}
                    label="sem"
                    onChange={(e) => {
                      setSemester(e.target.value);
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
              <div className=" u-margin-top-small component">
                <p className="component__lable">Skills : </p>
                <div className="skills__container__my__profile">
                  <input
                    id="skillWeb"
                    name="skill"
                    value={webDev}
                    checked={webDev}
                    type="checkbox"
                    onChange={(e) => setWebDev(e.target.checked)}
                  />
                  <label for="skillWeb">WebDev</label>
                  <input
                    id="skillAndroid"
                    name="skill"
                    value={androidDev}
                    type="checkbox"
                    checked={androidDev}
                    onChange={(e) => setAndroidDev(e.target.checked)}
                  />
                  <label for="skillAndroid">Android</label>
                  <input
                    id="skillSoftware"
                    name="skill"
                    value="Software-Testing"
                    type="checkbox"
                    checked={softwareTesting}
                    onChange={(e) => setSoftwareTesting(e.target.checked)}
                  />
                  <label for="skillSoftware">SoftwareTesting</label>
                </div>
              </div>
              <div className="component">
                <p className="component__lable"></p>
                <div className="skills__container__my__profile">
                  <input
                    id="skillUi"
                    name="skill"
                    value="ui/ux"
                    type="checkbox"
                    checked={uiux}
                    onChange={(e) => setUIUX(e.target.checked)}
                  />
                  <label for="skillUi">UI/UX</label>
                  <input
                    id="skillBlockchain"
                    name="skill"
                    value="Blockchain"
                    type="checkbox"
                    checked={blockchain}
                    onChange={(e) => setBlockchain(e.target.checked)}
                  />
                  <label for="skillBlockchain">Blockchain</label>
                  <input
                    id="skillEthical"
                    name="skill"
                    value={ethicalHacking}
                    type="checkbox"
                    checked={ethicalHacking}
                    onChange={(e) => setEthicalHacking(e.target.checked)}
                  />
                  <label for="skillEthical">Ethical-Hacking</label>
                </div>
              </div>
            </div>
          </div>
          <div className="social__details">
            <div className="heading__section">Social Details</div>
            <div className="social__details__component">
              <div className="component">
                <p className="component__lable">LinkedIn : </p>
                <TextField
                  sx={{
                    width: { xs: 300, sm: 400, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                  id="linkedIn"
                  name="linkedIn"
                  value={linkedIn}
                  onChange={(e) => {
                    setLinkedIn(e.target.value);
                  }}
                  label="LinkedIn"
                />
              </div>
              <div className="component">
                <p className="component__lable">Instagram : </p>
                <TextField
                  sx={{
                    width: { xs: 300, sm: 400, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                  id="instagram"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => {
                    setInstagram(e.target.value);
                  }}
                  label="Instagram"
                />
              </div>
              <div className="component">
                <p className="component__lable">WhatsApp : </p>
                <TextField
                  sx={{
                    width: { xs: 300, sm: 400, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                  id="whatsApp"
                  name="whatsApp"
                  value={whatsApp}
                  onChange={(e) => {
                    setWhatsApp(e.target.value);
                  }}
                  label="WhatsApp"
                />
              </div>
              <div className="component">
                <p className="component__lable">Facebook : </p>
                <TextField
                  sx={{
                    width: { xs: 300, sm: 400, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                  id="facebook"
                  name="facebook"
                  value={facebook}
                  // type={'url'}
                  onChange={(e) => {
                    setFacebook(e.target.value);
                  }}
                  label="Facebook"
                />
              </div>
              <div className="component">
                <p className="component__lable">Github : </p>
                <TextField
                  sx={{
                    width: { xs: 300, sm: 400, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                  id="github"
                  name="github"
                  value={github}
                  onChange={(e) => {
                    setGithub(e.target.value);
                  }}
                  label="Github"
                />
              </div>
              <div className="component">
                <p className="component__lable">Portfolio : </p>
                <TextField
                  sx={{
                    width: { xs: 300, sm: 400, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                  id="portfolio"
                  name="portfolio"
                  value={portfolio}
                  onChange={(e) => {
                    setPortfolio(e.target.value);
                  }}
                  label="Portfolio"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
