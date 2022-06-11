import React from 'react'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileSide from '../../Components/profileSide/ProfileSide'
import './Home.css'

const Home = () => {
  return (
   <div className="Home">
    <ProfileSide/>
    <PostSide/>
    <div className="rightside">Rightside</div>
   </div>
  )
}

export default Home