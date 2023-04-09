import React, { useEffect, useState } from "react";
import "./Discover.css";
import DiscoverCard from "./DiscoverCard";
import CheckboxList from "../../components/Forms/CheckboxList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Discover = () => {
  const persons = [
    {
      id: "1",
      name: "Anjali Singh",
      branch: "CSE",
      sem: "5",
      skillList: ["ux", "ui", "c++", "java", "python"],
      facebookProfile: "url",
      linkedinProfile: "url",
      portfolio: "url",
      githubProfile: "url",
      whatsappContact: "91 720 XXXX 983",
    },
    {
      id: "2",
      name: "Pawan Pandey",
      branch: "BCA",
      sem: "7",
      skillList: ["ux2", "ui2", "c++2", "java2", "python2"],
      facebookProfile: "url",
      linkedinProfile: "url",
      portfolio: "url",
      githubProfile: "url",
      whatsappContact: "91 720 XXXX 983",
    },
    {
      id: "3",
      name: "Akshay Sai",
      branch: "Physics",
      sem: "8",
      skillList: ["python3", "java3", "c++3", "java3", "python3"],
      facebookProfile: "url",
      linkedinProfile: "url",
      portfolio: "url",
      githubProfile: "url",
      whatsappContact: "91 720 XXXX 983",
    },
  ];

  const sectorRadioList = [
    "Engineering",
    "Mediacal",
    "Commerce",
    "BioTechnology",
  ];
  const semesterList = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [uiux, setUIUX] = useState(false);
  const [webDev, setWebDev] = useState(false);
  const [androidDev, setAndroidDev] = useState(false);
  const [blockchain, setBlockchain] = useState(false);
  const [ethicalHacking, setEthicalHacking] = useState(false);
  const [softwareTesting, setSoftwareTesting] = useState(false);

  const [cse, setCSE] = useState(false);
  const [ece, setECE] = useState(false);
  const [mech, setMECH] = useState(false);
  const [civil, setCivil] = useState(false);
  const [eee, setEEE] = useState(false);
  const [chemical, setChemical] = useState(false);
  const [biotech, setBiotech] = useState(false);
  const [textile, setTextile] = useState(false);

  const [fromAmazon, setFromAmazon] = useState(false);
  const [fromFlipkart, setFromFlipkart] = useState(false);
  const [fromPaytm, setFromPaytm] = useState(false);
  const [fromGoogle, setFromGoogle] = useState(false);
  const [fromMicrosoft, setFromMicrosoft] = useState(false);
  const [fromApple, setFromApple] = useState(false);
  const [fromFacebook, setFromFacebook] = useState(false);
  const [fromOthers, setFromOthers] = useState(false);

  const [semester, setSemester] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {}, [user, navigate]);
  return (
    <div className="discover">
      <div className="discover__body">
        <div className="left-contents">
          <form onSubmit={submitHandler}>
            <div className="left__head">
              <h2>Filters</h2>
            </div>
            <div className="filter__container">
              <h3>Skills</h3>
              <div className="skillList">
                <div>
                  <input
                    value="ui/ux"
                    type="checkbox"
                    onChange={() => setUIUX(true)}
                  />
                  <span>UI/UX</span>
                </div>
                <div>
                  <input
                    value="Web-Dev"
                    type="checkbox"
                    onChange={() => setWebDev(true)}
                  />
                  <span>Web-Dev</span>
                </div>
                <div>
                  <input
                    value="Android-Dev"
                    type="checkbox"
                    onChange={() => setAndroidDev(true)}
                  />
                  <span>Android-Dev</span>
                </div>
                <div>
                  <input
                    value="Blockchain"
                    type="checkbox"
                    onChange={() => setBlockchain(true)}
                  />
                  <span>Blockchain</span>
                </div>
                <div>
                  <input
                    value="Ethical-Hacking"
                    type="checkbox"
                    onChange={() => setEthicalHacking(true)}
                  />
                  <span>Ethical-Hacking</span>
                </div>
                <div>
                  <input
                    value="Software-Testing"
                    type="checkbox"
                    onChange={() => setSoftwareTesting(true)}
                  />
                  <span>Software-Testing</span>
                </div>
              </div>
            </div>

            <div className="filter__container">
              <h3>Company</h3>
              <div className="companyList">
                <div>
                  <input
                    value="Amazon"
                    type="radio"
                    onChange={() => setFromAmazon(true)}
                  />
                  <span>Amazon</span>
                </div>
                <div>
                  <input
                    value="Flipkart"
                    type="radio"
                    onChange={() => setFromFlipkart(true)}
                  />
                  <span>Flipkart</span>
                </div>
                <div>
                  <input
                    value="Paytm"
                    type="radio"
                    onChange={() => setFromPaytm(true)}
                  />
                  <span>Paytm</span>
                </div>
                <div>
                  <input
                    value="Google"
                    type="radio"
                    onChange={() => setFromGoogle(true)}
                  />
                  <span>Google</span>
                </div>
                <div>
                  <input
                    value="Microsoft"
                    type="radio"
                    onChange={() => setFromMicrosoft(true)}
                  />
                  <span>Microsoft</span>
                </div>
                <div>
                  <input
                    value="Apple"
                    type="radio"
                    onChange={() => setFromApple(true)}
                  />
                  <span>Apple</span>
                </div>
                <div>
                  <input
                    value="Facebook"
                    type="radio"
                    onChange={() => setFromFacebook(true)}
                  />
                  <span>Facebook</span>
                </div>
                <div>
                  <input
                    value="Textile"
                    type="radio"
                    onChange={() => setFromOthers(true)}
                  />
                  <span>Any</span>
                </div>
              </div>
            </div>

            <div className="filter__container">
              <h3>Branch</h3>
              <div className="branchList">
                <div>
                  <input
                    id="branch1"
                    value="Computer Science"
                    type="radio"
                    name="branch"
                    onChange={() => setCSE(true)}
                   />
                  <label for="branch1">Computer Science</label>
                </div>
                <div>
                  <input
                    name="branch"
                    id="branch2"
                    value="Mechanical"
                    type="radio"
                    onChange={() => setMECH(true)}
                  />
                  <label for="branch2">Mechanical</label>
                </div>
                <div>
                  <input
                    name="branch"
                    id="branch3"
                    value="Electronics"
                    type="radio"
                    onChange={() => setECE(true)}
                  />
                  <label for="branch3">Electronics</label>
                </div>
                <div>
                  <input
                    name="branch"
                    id="branch4"
                    value="Electrical"
                    type="radio"
                    onChange={() => setEEE(true)}
                  />
                  <label for="branch4">Electrical</label>
                </div>
                <div>
                  <input
                    name="branch"
                    id="branch5"
                    value="Chemical"
                    type="radio"
                    onChange={() => setChemical(true)}
                  />
                  <label for="branch5">Chemical</label>
                </div>
                <div>
                  <input
                    name="branch"
                    id="branch6"
                    value="Biotech"
                    type="radio"
                    onChange={() => setBiotech(true)}
                  />
                  <label for="branch6">Biotech</label>
                </div>
                <div>
                  <input
                    name="branch"
                    id="branch7"
                    value="Textile"
                    type="radio"
                    onChange={() => setTextile(true)}
                  />
                  <label for="branch7">Textile</label>
                </div>
                <div>
                  <input
                    name="branch"
                    id="branch7"
                    value="Textile"
                    type="radio"
                    onChange={() => setTextile(true)}
                  />
                  <label for="branch7">Any</label>
                </div>
              </div>
            </div>

            <div className="filter__container">
              <h3>Semester</h3>
              <div>
                <input
                  id="semester1"
                  value="1"
                  type="radio"
                  name="semester"
                  onChange={() => setSemester(1)}
                />
                <label for="semester1">Sem 1</label>
              </div>
              <div>
                <input
                  id="semester2"
                  value="2"
                  type="radio"
                  name="semester"
                  onChange={() => setSemester(2)}
                />
                <label for="semester2">Sem 2</label>
              </div>
              <div>
                <input
                  id="semester3"
                  value="3"
                  type="radio"
                  name="semester"
                  onChange={() => setSemester(3)}
                />
                <label for="semester3">Sem 3</label>
              </div>
              <div>
                <input
                  id="semester4"
                  value="4"
                  type="radio"
                  name="semester"
                  onChange={() => setSemester(4)}
                />
                <label for="semester4">Sem 4</label>
              </div>
              <div>
                <input
                  id="semester5"
                  value="5"
                  type="radio"
                  name="semester"
                  onChange={() => setSemester(5)}
                />
                <label for="semester5">Sem 5</label>
              </div>
              <div>
                <input
                  id="semester6"
                  value="6"
                  type="radio"
                  name="semester"
                  onChange={() => setSemester(6)}
                />
                <label for="semester6">Sem 6</label>
              </div>
              <div>
                <input
                  id="semester7"
                  value="7"
                  type="radio"
                  name="semester"
                  onChange={() => setSemester(7)}
                />
                <label for="semester7">Sem 7</label>
              </div>
              <div>
                <input
                  id="semester8"
                  value="8"
                  type="radio"
                  name="semester"
                  onChange={() => setSemester(8)}
                />
                <label for="semester8">Sem 8</label>
              </div>
            </div>

            <button className="search-btn u-margin-top-medium " type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="right-contents">
          {persons.map((person, index) => {
            return (
              <DiscoverCard
                key={index}
                id={person.id}
                name={person.name}
                branch={person.branch}
                sem={person.sem}
                skill={person.skillList}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discover;
