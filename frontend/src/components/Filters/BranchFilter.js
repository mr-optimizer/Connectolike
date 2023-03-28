import React from 'react'
import './BranchFilter.css'

const BranchFilter = () => {
  const branchRadioList = ["CSE", "Mechanical", "Electrical", "BioTechnology"];
    return (
      <div className='sectorfilter'>
        <h3>Branch</h3>
        <div className='sectorList'>
          {branchRadioList.map((item,index) => {
            return (
              <div>
                <input value={item} type="radio" />
                <span>{item}</span>
              </div>
            )
          })}
          {/* <CheckboxList checkList={skillsCheckList}/> */}
        </div>
      </div>
    )
}

export default BranchFilter