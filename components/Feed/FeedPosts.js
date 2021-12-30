import React from 'react'
import Post from '../Post/Post'

export default function FeedPosts() {
    return (
        <div className="col-span-3 h-[88.5vh] shadow-md shadow-[#4cd6373f] m-2 p-2 overflow-y-auto scroll-smooth snap-mandatory snap-y" >
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
