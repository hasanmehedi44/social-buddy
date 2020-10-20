import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

//  Own css file
import './Posts.css'
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });


const Posts = ({post}) => {
    const {title, body, id} = post;

    const classes = useStyles();
    const padding = {
        padding: '50px'
    }


    const history = useHistory();
    const handlePostClicked = (postId) => {
        history.push(`/postWithComment/${postId}`)
    }

    return (
        <Card style={padding} className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Tooltip title="Click for showing comment" interactive>
        <Button onClick={() => handlePostClicked(id)} variant="outlined" color="secondary">
          See More
        </Button>
      </Tooltip>
      </CardActions>
    </Card>
    );
};

export default Posts;