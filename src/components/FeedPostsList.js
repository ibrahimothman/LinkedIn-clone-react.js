import React from 'react'
import './FeedPostsList.css'
import FeedPost from './FeedPost'
import FlipMove from 'react-flip-move'

function FeedPostsList({ posts }) {
    return (
        <div className='feed__posts'>
            <FlipMove>
                {posts.map(post => <FeedPost key={post.id} post={post}/>)}
            </FlipMove>

        </div>
    )
}

export default FeedPostsList
