import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


// For Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../comments/Comment';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });


const PostWithComment = () => {

    // For Material UI
    const classes = useStyles();

//Personal padding
const style = {
    padding: '80px'
}






    const {postId} = useParams();


    const [singlePost, setSinglePost] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setSinglePost(data))
    }, {})


    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data))
    }, [])


    return (
            <div>
                <Card style={style} className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {singlePost.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {singlePost.body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {
                    comments.map(comment => <Comment comment={comment} ></Comment>)
                }
            </div>
    );
};

export default PostWithComment;