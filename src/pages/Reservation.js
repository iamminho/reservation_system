import {useContext, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {StylistStateContext} from "../App"

const Reservation = () => {
    const { id } = useParams();
    const stylistList = useContext(StylistStateContext);
    const navigate = useNavigate();
    const [data, setData] = useState();

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

    return (
        <div>
            {id}
        </div>
        );
}
export default Reservation;