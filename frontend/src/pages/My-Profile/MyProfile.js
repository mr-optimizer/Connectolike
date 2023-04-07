import React, { useState } from "react";
import "./MyProfile.css";
import cpic from "../../images/Why-Should-We-Hire-You.jpg";
import ppic from "../../images/swas_k.png";

const MyProfile = () => {
  const prevName = "Swastik";
  const prevEmail = "contactswask@gmail.com";
  const prevPhone = "9798 XXX XXX";
  const prevPassword = "Something";
  const prevInstitute = "Manas Vikas";
  const prevCourse = "B.E";
  const prevBranch = "CSE";
  const prevYear = "3";
  const prevSemseter = "6";
  const prevLinkedIn = "LinkedIn Link";
  const prevInstagram = "Instagram Link";
  const prevWhatsApp = "9798 XXX XXX";
  const prevFacebook = "Facebook Link";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [institute, setInstitue] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [facebook, setFacebook] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my__profile">
      <form onSubmit={submitHandler}>
        <div className="my__profile__images__and__buttons">
          <div className="cover__image">
            <img className="cover__img" src={cpic} alt="cover-page" />
          </div>
          <div className="profile__container">
            <div className="profile">
              <img className="profile__img" src={ppic} alt="profile-img" />
              <div className="profile__name__email">
                <h2 className="profile__name">Swastik Kumar</h2>
                <h3 className="profile__email">contactswask@gmail.com</h3>
              </div>
            </div>
            <div className="buttons">
              <button className="btn-cancle">Cancle</button>
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
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder={prevName}
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Email : </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  pattern=".+@globex\.com"
                  size="30"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder={prevEmail}
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Phone Number : </p>
                <input
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder={prevPhone}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Password : </p>
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  label="Password"
                  type="password"
                  minLength="8"
                  placeholder={prevPassword}
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
                  onChange={(e) => {
                    setInstitue(e.target.value);
                  }}
                  placeholder={prevInstitute}
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Course : </p>
                <input
                  id="course"
                  name="course"
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                  placeholder={prevCourse}
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Branch : </p>
                <input
                  id="branch"
                  name="branch"
                  value={branch}
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                  placeholder={prevBranch}
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Year : </p>
                <input
                  id="year"
                  name="year"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                  placeholder={prevYear}
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Semseter : </p>
                <input
                  id="semester"
                  name="semester"
                  value={semester}
                  onChange={(e) => {
                    setSemester(e.target.value);
                  }}
                  placeholder={prevSemseter}
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
                  onChange={(e) => {
                    setLinkedIn(e.target.value);
                  }}
                  placeholder={prevLinkedIn}
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Instagram : </p>
                <input
                  id="instagram"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => {
                    setInstagram(e.target.value);
                  }}
                  placeholder={prevInstagram}
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">WhatsApp Number : </p>
                <input
                  id="whatsApp"
                  name="whatsApp"
                  value={whatsApp}
                  onChange={(e) => {
                    setWhatsApp(e.target.value);
                  }}
                  placeholder={prevWhatsApp}
                  className="component__input"
                />
              </div>
              <div className="component">
                <p className="component__lable">Facebook : </p>
                <input
                  id="facebook"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => {
                    setFacebook(e.target.value);
                  }}
                  placeholder={prevFacebook}
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
