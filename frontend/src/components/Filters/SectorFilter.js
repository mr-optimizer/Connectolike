import React from 'react'
import './SectorFilter.css'
const SectorFilter = () => {
    const sectorRadioList = ["Engineering", "Mediacal", "Commerce", "BioTechnology"];
    return (
      <div className='sectorfilter'>
        <h3>Sector</h3>
        <div className='sectorList'>
          {sectorRadioList.map((item,index) => {
            return (
              <div key={index}>
                <input value={item} type="radio" />
                <span>{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default SectorFilter