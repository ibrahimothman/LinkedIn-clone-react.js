import React, {useContext} from 'react'
import { Avatar } from '@material-ui/core'
import './Sidebar.css'
import { UserContext } from '../store/UserContext'

function Sidebar() {

    const { user, } = useContext(UserContext)
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="../../sidebar-bg.jpg" alt="" />
                <Avatar className='sidebar__avatar' src={user.photoUrl}>
                    {user.email[0]}
                </Avatar>
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">1,254</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">2,523</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
