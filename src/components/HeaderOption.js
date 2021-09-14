import React, {useContext} from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'
import {UserContext} from '../store/UserContext'

function HeaderOption({ avatar, Icon, title, onClick }) {

    const {user} = useContext(UserContext)
    return (
        <div className='headerOption' onClick={onClick}>
            {Icon && <Icon className='headerOption__icon'/>}
            {avatar && (
                <Avatar className='headerOption__icon' src={user?.email}>
                    { user?.email[0] }
                </Avatar>
            )}
            <h6 className='headerOption__title'>{title}</h6>
        </div>
    )
}

export default HeaderOption
