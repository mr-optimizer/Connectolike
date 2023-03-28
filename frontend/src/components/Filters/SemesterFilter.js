import React from "react";
import "./SemesterFilter.css";

const SemesterFilter = (props) => {
  const sectorRadioList = ["1", "2", "3", "4", "5"];
  // // const [sem, setSem] = useState();
  // const onChangeHandler = (event) => {
  // //   setSem(event.target.value)
  //   event.preventDefault()
  //   // console.log(event.target.value)
  //   props.filterVaueSelected(event.target.value)
  // }

  return (
    <div className="semesterfilter">
      <h3>Semester</h3>
      {/* <select className="semesterList" onChange={onChangeHandler}> */}
      <select className="semesterList" >
        {sectorRadioList.map((item, index) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default SemesterFilter;
