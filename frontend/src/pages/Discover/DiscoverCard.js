import React from 'react'
import './DiscoverCard.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import dp1 from '../../images/pic1.png'
import Skills from './Skills'


const DiscoverCard = (props) => {
  const skillList = props.skill;
  return (
    <div className='discover__card'>

      <div className='discover__card__image'>
        <img src={dp1} alt="display_img" className="discover__card__img"/>
      </div>

      <div className='discover__card__infos'>
        <div>
        <p className='discover__card__infos__name'>{props.name}</p></div>
        <div className='discover__card__infos--branch__sem'>
          <p className='discover__card__infos--branch'>{props.branch}</p>
          <p className='discover__card__infos--sem'>{props.sem}<span className='small'>th Sem</span></p>
        </div>
      </div>
      
      <div className='discover__card__skills'>
        {skillList.map((skill, index) => {
          return <Skills key={index} skill={skill}/>
        })}
      </div>
      
      <div className='discover__card__social'>
        <div className='discover__card__social__public'>
          <FacebookIcon className='discover__card__social__public--icons'/>
          <LinkedInIcon className='discover__card__social__public--icons'/>
          <LanguageIcon className='discover__card__social__public--icons'/>
          <GitHubIcon className='discover__card__social__public--icons'/>
        </div>
        <div className='discover__card__social__private'>
          <button className='discover__card__social__private--message'><WhatsAppIcon className='discover__card__social__private--icon'/> Message</button>
        </div>
      </div>
    </div>
  )
}

export default DiscoverCard