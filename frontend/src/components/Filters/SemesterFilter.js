import React from "react";
import "./SemesterFilter.css";

const SemesterFilter = (props) => {
  const sectorRadioList = ["1", "2", "3", "4", "5"];
  return (
    <div className="semesterfilter">
      <h3>Semester</h3>
      <select className="semesterList" >
        {sectorRadioList.map((item, index) => {
          return <option value={item} key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default SemesterFilter;
