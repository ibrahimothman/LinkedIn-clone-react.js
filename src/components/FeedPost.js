import React, {forwardRef} from 'react'
import './FeedPost.css'
import { Avatar } from '@material-ui/core'
import Card from '../ui/Card'
import FeedInputOption from './FeedInputOption'
import LikePostIcon from '@material-ui/icons/ThumbUpAltOutlined'
import CommentPostIcon from '@material-ui/icons/ChatOutlined'
import SharePostIcon from '@material-ui/icons/ShareOutlined'
import SendPostIcon from '@material-ui/icons/SendOutlined'

const FeedPost = forwardRef(({ post }, ref) => {
    return (
        <Card>
            <div className='feed__post' ref={ref}>
                <div className="post__header">
                    <Avatar className='sidebar__avatar' src={post.photoUrl}>
                        {post.name[0]}
                    </Avatar>
                    <div className="post__info">
                        <h2>{post.name}</h2>
                        <p>{post.description}</p>
                    </div>
                </div>

                <div className="post__body">
                    <p>{post.message}</p>
                </div>

                <div className="post__actions">
                    <FeedInputOption Icon={LikePostIcon} iconColor='gray' text='Like'/>
                    <FeedInputOption Icon={CommentPostIcon} iconColor='gray' text='Comment'/>
                    <FeedInputOption Icon={SharePostIcon} iconColor='gray' text='Share'/>
                    <FeedInputOption Icon={SendPostIcon} iconColor='gray' text='Send'/>
                </div>

            </div>
        </Card>
    )
})

export default FeedPost
