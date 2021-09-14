import React from 'react'
import { Avatar } from '@material-ui/core'
import './FeedInput.css'
import { useState } from 'react'

function FeedInput({ onSubmitPost }) {
    const [postMessage, setPostMessage] = useState('')

    function changeHandler(event) {
        setPostMessage(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        onSubmitPost(postMessage)
        setPostMessage('')

    }
    return (
        <>
            <Avatar className='sidebar__avatar' src='https://media-exp1.licdn.com/dms/image/D5635AQFiD_SQTgo91A/profile-framedphoto-shrink_100_100/0/1631267379368?e=1631610000&v=beta&t=BpBYkun8caS9VSS2Xwr-N_TNjGP2qeFARyz-E4x4o68'/>
            <div className="feed__input">
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='write something' value={postMessage} onChange={changeHandler} />
                    <button>Send</button>
                </form>
            </div>
        </>
    )
}

export default FeedInput
