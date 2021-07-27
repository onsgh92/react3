import React from 'react'
import photo from './pic.jpg'
import './profile.css';

export default function ProfilePhoto() {
    return (
        <div>
            <img src={photo} alt="photo"/>
        </div>
    )
}
