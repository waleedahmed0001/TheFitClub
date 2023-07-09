import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'


const Footer = () => {
    const handleClick = (url) => {
        window.open(url, '_blank');
      };

  return (
<div className="Footer-container">
    <hr />
    <div className="footer">

        <div className="social-links">

        <img src={Github} onClick={() => handleClick('https://github.com/waleedahmed0001')}  alt="" />
        <img src={Instagram} onClick={() => handleClick('https://www.instagram.com/waleedahmed001/')} alt="" />
        <img src={Linkedin} onClick={() => handleClick('https://www.linkedin.com/in/waleed-ahmed-shahid-3298281b3/')} alt="" />
        </div>
    <div className="logo-f">
        <img src={Logo} alt="" />
    </div>

    <div className="blur blur-f-1"></div>
    <div className="blur blur-f-2"></div>

    </div>
</div>  )
}

export default Footer