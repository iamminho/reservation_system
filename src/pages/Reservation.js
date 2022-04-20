import React, {useContext, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DatePick from '../components/DatePick';
import TextField from '@mui/material/TextField';

//component
import MyButton from '../components/MyButtons';
import PhoneNumber from '../components/PhoneNumber';

//useContext
import {StylistStateContext} from "../App"
export const GetInformation = React.createContext();


const Reservation = () => {
    const { id } = useParams();
    const stylistList = useContext(StylistStateContext);
    const navigate = useNavigate();

    const [data, setData] = useState();
    const [phoneNumber, setphoneNumber] = useState();
    const [getDate, setDate] = useState();
    const [customerName, setCustomerName] = useState();      
    console.log(customerName);                
    const getPhoneNumber = (number) => {
      setphoneNumber(number);
    }
    const getReservationDay = (date) => {
      setDate(date);
    }        
                   
    useEffect(()=> {        
        if(stylistList.length >= 1){
            const targetStylist = stylistList.find(
              (it) => parseInt(it.id) === parseInt(id)
            );                        
            if(targetStylist){
                setData(targetStylist);
            }else{
                alert("Not exist stylist")
                navigate('/Select', {replace:true})
            }
        }                
    },[id,stylistList])
    
    const handleChange = (e) => {
      setCustomerName(e.target.value);
    }
    
    return (
      <div>
        <GetInformation.Provider
          value={{
            getPhoneNumber,
            getReservationDay,
          }}
        >
          {id}
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            onChange={handleChange}
          />
          <PhoneNumber />
          <DatePick />
          <MyButton text={"예약하기"} />
        </GetInformation.Provider>
      </div>
    );
}
export default Reservation;