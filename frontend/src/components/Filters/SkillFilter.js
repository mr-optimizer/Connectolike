import React from 'react'
import CheckboxList from '../Forms/CheckboxList'
import './SkillFilter.css'

const SkillFilter = () => {
  const skillsCheckList = ["UX/UI", "Figma", "Prototyping", "Wireframing"];
  return (
    <div className='skillfilter'>
      <h3>Skills</h3>
      <div className='skillList'>
        {skillsCheckList.map((item,index) => {
          return (
            <div>
              <input value={item} type="checkbox" />
              <span>{item}</span>
            </div>
          )
        })}
        <CheckboxList checkList={skillsCheckList}/>
      </div>
    </div>
  )
}

export default SkillFilter