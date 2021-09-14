import React from 'react'
import './Feed.css'
import FeedInputOption from './FeedInputOption'
import ImageIcon from '@material-ui/icons/Image'
import VideoIcon from '@material-ui/icons/Subscriptions'
import EventIcon from '@material-ui/icons/EventNote'
import ArticleIcon from '@material-ui/icons/CalendarViewDay'
import FeedPostsList from './FeedPostsList.js'
import FeedInput from './FeedInput'
import Card from '../ui/Card'
import { collection, addDoc, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
import db from '../Firebase'
import { useEffect, useState, useContext } from 'react'
import {UserContext} from '../store/UserContext'
import FlipMove from 'react-flip-move'

function Feed() {

    const {user} = useContext(UserContext)

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const loadedPosts = []
            querySnapshot.forEach((doc) => {
                loadedPosts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            console.log(loadedPosts)
            setPosts(loadedPosts)

        })

    }, [])

    async function submitHandler(postMessage) {
        const post = {
            name: user.name,
            description: user.email,
            photoUrl: user.photoUrl || '',
            message: postMessage,
            timestamp: serverTimestamp(),
        }


        try {
            const docRef = await addDoc(collection(db, "posts"), post);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    return (
        <div className='feed'>

            <Card>
                <div className="feed__inputContainer">
                    <div className="feed__inputTop">
                        <FeedInput onSubmitPost={submitHandler}/>
                    </div>
                    <div className="feed__inputOptions">
                            <FeedInputOption Icon={ImageIcon} iconColor='#70B5F9' text='photo'/>
                            <FeedInputOption Icon={VideoIcon} iconColor='#E7A33E' text='Video'/>
                            <FeedInputOption Icon={EventIcon} iconColor='#C0CBCD' text='Event'/>
                            <FeedInputOption Icon={ArticleIcon} iconColor='#75C15E' text='Write article'/>
                    </div>
                </div>
            </Card>

            <FeedPostsList posts={posts}/>

        </div>
    )
}

export default Feed
