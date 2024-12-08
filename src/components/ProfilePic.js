import React from "react";

import './css/ProfilePic.css'
import profilePic from './images/profile_pic_example.jpg'

const ProfilePic = (props) => {
    if (props.default) {
        return (
            <i className={`fa-solid fa-user profile-pic ${props.className}`}></i>
        )
    }

    return (
        <div className={`profile-pic-not-default ${props.className}`} style={{
            backgroundImage: `url(${profilePic})`
        }}></div>
    )
}

export default ProfilePic