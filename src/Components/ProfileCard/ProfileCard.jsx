import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './profileCard.css'

const ProfileCard = () => {
  return (
  <div className="ProfileCard">
    <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
    </div>

    <div className="ProfileName">
        <span>Naruto Uzamaki</span>
        <span>Senior Hokage/Leader Village</span>
    </div>


      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>3</span>
            <span>following</span>
          </div>
        <div className='vl'></div>  
          <div className="follow">
            <span>28.9m</span>
            <span>followers</span>
          </div>
        </div>
        <hr />
      </div>

     <span>
        My Profile
     </span>

  </div>
  )
}

export default ProfileCard