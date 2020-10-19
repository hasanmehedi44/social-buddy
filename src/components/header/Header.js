import React, { useEffect, useState } from 'react';
import Posts from '../posts/Posts';
import  './Header.css';

const Header = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])


    return (
        <div>
            <div className='navbar'>
                <a href="/home">Home</a>
                <a href="/posts">Posts</a>
            </div>
            <div> 
                {
                    posts.map(post => <Posts post={post} ></Posts>)
                }
            </div>
        </div>
    );
};

export default Header;