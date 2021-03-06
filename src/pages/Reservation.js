import React, {useContext, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DatePick from '../components/DatePick';
import TextField from '@mui/material/TextField';

//component
import MyButton from '../components/MyButtons';
import PhoneNumber from '../components/PhoneNumber';

//useContext
import {StylistStateContext, StylistDispatchContext} from "../App"
import {CustomerDispatchContext} from "../CustomerInfo"
import { ConstructionOutlined } from '@mui/icons-material';
export const GetInformation = React.createContext();


const Reservation = ({stylistData}) => {  
    const { id } = useParams();
    
    const { infoCreate } = useContext(CustomerDispatchContext);    
    
    const navigate = useNavigate();
    
    const [data, setData] = useState();
    const [phoneNumber, setphoneNumber] = useState();
    const [getDate, setDate] = useState();
    const [customerName, setCustomerName] = useState();               
    const getPhoneNumber = (number) => {
      setphoneNumber(number);
    }
    const getReservationDay = (date) => {
      setDate(date);
    }        
    
    const handleSubmit = () => {
      infoCreate(data, phoneNumber, getDate ,customerName);       
      navigate('/CustomerInfo/Customer');
    }
    
    useEffect(()=> {        
        if(stylistData.length >= 1){
            const targetStylist = stylistData.find(
              (it) => parseInt(it.id) === parseInt(id)
            );
                  
            if(targetStylist){
                setData(targetStylist.author);
            }else{
                alert("Not exist stylist")
                navigate('/Select', {replace:true})
            }
        }                
    },[id,stylistData])
    
    const handleChange = (e) => {
      setCustomerName(e.target.value);
    }
    
    return (
      <div>
        {data}
        <GetInformation.Provider
          value={{
            getPhoneNumber,
            getReservationDay,
          }}
        >
          
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            onChange={handleChange}
          />

          <PhoneNumber />

          <DatePick />

          <MyButton text={"????????????"} onClick={handleSubmit} />
        </GetInformation.Provider>
      </div>
    );
}
export default Reservation;