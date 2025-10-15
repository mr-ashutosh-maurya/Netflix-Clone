import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
          <img src={facebook_icon} alt="" />
          <img src={twitter_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help center</li>
        <li>Gifts cards</li>
        <li>Media center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>legal Notice</li>
        <li>Cookie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="cpr">1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer