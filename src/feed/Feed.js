import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import PostSender from './PostSender'
import Post from './Post'


function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <PostSender />
            <Post />
        </div>
    )
}

export default Feed
