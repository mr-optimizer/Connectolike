import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./MyProfile.css";
import avatarImg from "../../images/MyProfile/avatar.png";
import coverImg from "../../images/MyProfile/cover.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../../redux/alertSlice";
const MyProfile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [institute, setInstitute] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [facebook, setFacebook] = useState("");

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async(e) => {
    e.preventDefault();
    try{
      const load = {
        id : user._id,
        name,
        email,
        phone,
        institute,
        course,
        branch,
        year,
        semester,
        linkedIn,
        instagram,
        whatsApp,
        facebook,
      };
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      dispatch(showLoading());
      const response = await axios.put("/api/v1/me/update",load,config);

      dispatch(hideLoading());
      if(response.data.success) {
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    }catch(error){
      dispatch(hideLoading());
      toast.error(error.response.data.message);
    }
  };
  
  useEffect(() => {
    if(!user){
      navigate("/login");
    }else{
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setInstitute(user.institute);
      setCourse(user.course);
      setBranch(user.branch);
      setYear(user.year);
      setSemester(user.semester);
      setLinkedIn(user.linkedIn);
      setInstagram(user.instagram);
      setWhatsApp(user.whatsApp);
      setFacebook(user.facebook);
    }
  }, [user, navigate]);

  return (
    <div className="my__profile">
      <form onSubmit={submitHandler}>
        <div className="my__profile__images__and__buttons">
          <div className="cover__image">
            <img className="cover__img" src={coverImg} alt="cover-page" />
          </div>
          <div className="profile__container">
            <div className="profile">
              <img className="profile__img" src={avatarImg} alt="profile-img" />
              <div className="profile__name__email">
                <h2 className="profile__name">{user.name}</h2>
                <h3 className="profile__email">{user.email}</h3>
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
            <h2 className="heading__section">Personal Details</h2>
            <div className="personal__details__component">
              <div className="component">
                <p className="component__lable">Name : </p>
                <input
                  id="name"
                  name="name"
                  value={name}
                  size="30"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Email : </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  // pattern=".+@globex\.com"
                  size="30"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Phone Number : </p>
                <input
                  id="phone"
                  name="phone"
                  value={phone}
                  size="30"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Phone Number"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Password : </p>
                <input
                  id="password"
                  name="password"
                  value={password}
                  size="30"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  label="Password"
                  type="password"
                  minLength="8"
                  placeholder="********"
                  className="component__input"
                />
              </div>
            </div>
          </div>
          <div className="professional__details">
            <h2 className="heading__section">Professional Details</h2>
            <div className="professional__details__component">
              <div className="component">
                <p className="component__lable">Institute Name : </p>
                <input
                  id="institute"
                  name="institute"
                  value={institute}
                  size="30"
                  onChange={(e) => {
                    setInstitute(e.target.value);
                  }}
                  placeholder="Institute Name"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Course : </p>
                <input
                  id="course"
                  name="course"
                  value={course}
                  size="30"
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                  placeholder="Course"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Branch : </p>
                <input
                  id="branch"
                  name="branch"
                  value={branch}
                  size="30"
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                  placeholder="Branch"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Year : </p>
                <input
                  id="year"
                  name="year"
                  value={year}
                  size="30"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                  placeholder="Year"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Semseter : </p>
                <input
                  id="semester"
                  name="semester"
                  size="30"
                  value={semester}
                  onChange={(e) => {
                    setSemester(e.target.value);
                  }}
                  placeholder="Semester"
                  className="component__input"
                />
              </div>
            </div>
          </div>
          <div className="social__details">
            <h2 className="heading__section">Social Details</h2>
            <div className="social__details__component">
              <div className="component">
                <p className="component__lable">LinkedIn : </p>
                <input
                  id="linkedIn"
                  name="linkedIn"
                  value={linkedIn}
                  size="30"
                  onChange={(e) => {
                    setLinkedIn(e.target.value);
                  }}
                  placeholder="LinkedIn"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Instagram : </p>
                <input
                  id="instagram"
                  name="instagram"
                  value={instagram}
                  size="30"
                  onChange={(e) => {
                    setInstagram(e.target.value);
                  }}
                  placeholder="Instagram"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">WhatsApp Number : </p>
                <input
                  id="whatsApp"
                  name="whatsApp"
                  value={whatsApp}
                  size="30"
                  onChange={(e) => {
                    setWhatsApp(e.target.value);
                  }}
                  placeholder="WhatsApp Number"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Facebook : </p>
                <input
                  id="facebook"
                  name="facebook"
                  value={facebook}
                  size="30"
                  onChange={(e) => {
                    setFacebook(e.target.value);
                  }}
                  placeholder="Facebook"
                  className="component__input"
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
