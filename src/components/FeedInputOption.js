import React from 'react'
import './FeedInputOption.css'

function FeedInputOption({ Icon, iconColor,  text }) {
    return (
        <div className='inputOption'>
            {Icon && <Icon style={{color: iconColor}} className='inputOption__icon'/>}
            <h4 className='inputOption__text'>{text}</h4>
        </div>
    )
}

export default FeedInputOption
