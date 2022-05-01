import React , {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const StylistItem = ({id, author, content, isSelect, onRemove}) => {
  const navigate = useNavigate();
  
  return (
    <div className="StylistItem">
      <Card>
        <CardActionArea>          
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
            onClick={() => {
              if(isSelect){
                navigate(`/CustomerInfo/Reservation/${id}`);                
              }else navigate(`Edit/${id}`)                            
            }}
          >
            {(isSelect) ? "예약하기" : "수정하기"}
          </Button>

          <Button size="small" color="primary" >
            삭제하기
          </Button>
        </CardActions>
      </Card>
    </div>
  );  
};

export default React.memo(StylistItem);
