import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comment = ({comment}) => {

    const url = `https://randomuser.me/api/portraits/med/men/9.jpg`;
    const commentStyle = {
        margin: '15px',
        padding: '15px', 
        border: '1px solid purple',
        borderRadius: '20px'
    }
    const {postId} = useParams()
    return (
        <div  style={commentStyle} >
            <h3> <Avatar alt="Remy Sharp" src={url} />  {comment.name} </h3>
            <h4>Email:{comment.email}</h4>
            <p> Comment : {comment.body}</p>
        </div>
    );
};

export default Comment;