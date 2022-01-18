import React, { useEffect, useState } from 'react';
import { Child } from '../models/reddit';
import fetchPosts from '../services/RedditApiService';

const Reddit = () => {
    const [posts, setPosts] = useState<Child[]>([])

    useEffect(() => {
        fetchPosts().then(posts => setPosts(posts))})
    
    return (
        <div>
            <ul>
                {posts.map((post,i) => <li key={i}>
                    <h3>{post.data.title}</h3>
                    <p>{post.data.name}</p>
                    <img src={post.data.thumbnail} alt="" />
                </li>
                )}
            </ul>
        </div>
    )
}

export default Reddit;