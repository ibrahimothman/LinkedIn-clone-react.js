import React, {useContext} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import HeaderOption from './HeaderOption'
import WorkIcon from '@material-ui/icons/Work'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import {UserContext} from '../store/UserContext'

function Header() {

    const { user, logout } = useContext(UserContext)

    const logoutHandler = async () => {
        await logout()
    }
    return (
        <div className='header'>

            <div className='header__left'>
                <img src="../../linkedin.svg" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={WorkIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messages'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption
                    onClick={logoutHandler}
                    avatar
                    title={user ? 'Me' : 'Sign In'}/>
            </div>
        </div>
    )
}

export default Header
