import {React, useState} from 'react'

import './Footer.css'

import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Footer = () => {
    const [email,setEmail] = useState('');

    const changeHandler = (e) => {
        setEmail(e.target.value);
    }

  return (
    <div className='footer'>
        <div className='left'>
            {/* <h2>Code Companion</h2> */}
            <div className='email-notify'>
                <h3>Be the first one to get the updates.</h3>
                <input className='input-email' name='email' onChange={changeHandler} value={email} placeholder='Your Email'/>
                <SendIcon className='sending' />
            </div>
            <div className='social__container'>
                <Button 
                    variant="link"
                    color="default"
                    className='facebook'
                    startIcon={<FacebookIcon />}
                    href="https://www.facebook.com/"
                    target="_blank"
                />
                <Button 
                    variant="link"
                    color="default"
                    className='facebook'
                    startIcon={<InstagramIcon />}
                    href="https://www.instagram.com/"
                    target="_blank"
                />
                <Button 
                    variant="link"
                    color="default"
                    className='facebook'
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/"
                    target="_blank"
                />
                <Button 
                    variant="link"
                    color="default"
                    className='facebook'
                    startIcon={<TelegramIcon />}
                    href="https://web.telegram.org/k/"
                    target="_blank"
                />
            </div>
        </div>

        <div className='right'>
            {/* <div className='about'>
                <h2>Code Companion</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Eu et in faucibus elit vulputate aliquam ut. Dui turpis est pellentesque aliquet. Lorem ipsum dolor sit amet consectetur. Eu et in faucibus elit vulputate aliquam ut. Dui turpis est pellentesque aliquet.
                </p>
            </div> */}

            {/* <div className='foot-explore-contact'> */}
                {/* <div className='explore'>
                    <h4>Explore</h4>
                    <li>
                        <KeyboardArrowRightIcon/> Link 1
                    </li>
                    <li>
                        <KeyboardArrowRightIcon/> Link 2
                    </li>
                    <li>
                        <KeyboardArrowRightIcon/> Link 3
                    </li>
                </div> */}
                <div className='contacts'>
                    <li>
                        <SupportAgentIcon/> 
                        <p>Support :- <a className='link' href="tel:5551234567">555 1234 567</a></p>
                    </li>

                    <li>
                        <MailOutlineOutlinedIcon/>
                        <p> Email :- <a className='link' href="mailto:willie.jennings@example.com">willie.jennings@example.com</a> </p>
                    </li>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Footer