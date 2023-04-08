import React from "react";
import "./Discover.css";
import DiscoverCard from "./DiscoverCard";
import SkillFilter from "../../components/Filters/SkillFilter";
import SectorFilter from "../../components/Filters/SectorFilter";
import BranchFilter from "../../components/Filters/BranchFilter";
import SemesterFilter from "../../components/Filters/SemesterFilter";

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

  // const [newPersons, setNewPersons] = useState(persons)

  // const onFilterVaueSelected = (filteredValue) => {
  //   console.log(filteredValue)
  //   setNewPersons()
  // }

  return (
    <div className="discover">
      <div className="discover__body">
        <div className="left-contents">
          <form>
            <div className="left__head">
              <h2>Filters</h2>
            </div>
            
            <SkillFilter />
            <SectorFilter />
            <BranchFilter />
            <SemesterFilter />
            <button className="search-btn">Search</button>
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
