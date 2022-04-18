import React , {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const StylistItem = ({id, author, content, picture, isSelect}) => {
    const navigate = useNavigate();
  return (
    <div className="StylistItem">
      <Card>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100"
            image={picture}
            title="Contemplative Reptile"
            /> */}
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
          <Button                       
            size="small"
            color="primary"
            onClick={(isSelect) => {
              isSelect ? navigate(`Reservation/${id}`) : navigate(`Edit/${id}`);              
            }}
          >
            {(isSelect) ? "예약하기" : "수정하기"}
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
