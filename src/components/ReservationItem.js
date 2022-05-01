import dayjs from "dayjs";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );
  
const ReservationItem = ({id, manager, phoneNumber, getDate, customerName}) => {
  
    const dateFormat = dayjs(getDate).format("YYYY-MM-DD");
    

    return (
      <div className="ReservationItem">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              예약날짜:{dateFormat}
            </Typography>
            <Typography sx={{ fontSize: 14 }} component="div">
              고객명:{customerName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              담당:{manager}
            </Typography>
            <Typography variant="body2">
              전화번호:{phoneNumber}                            
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>      
    );
}

export default ReservationItem;