import React , {useState} from "react";
import { ReactDOM } from "react-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ClassNames } from '@emotion/react';

const StylistItem = ({id, author, content, picture}) => {
  
  return (
    <div className = "StylistItem" >
        <Card>
        <CardActionArea>
            <CardMedia
            component={picture}
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {content}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </div>
  );
  
};

export default StylistItem;
