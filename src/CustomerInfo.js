import React, { useReducer, useState, useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Reservation from './pages/Reservation';
import ReservationList from './components/ReservationList'
import Customer from './pages/Customer';

const reducer = (state,action) => {
    let newState = [];
    switch(action.type){
      case 'INIT':{
        return action.data;
      }
      case 'CREATE':{
        newState = [action.data, ...state]; 
        break; // break걸지 않으면 자동으로 default가 실행된다.
      }
      case 'REMOVE':{
        newState = state.filter((it)=> it.id !== action.targetId);
        break;
      }
      case 'EDIT': {
        newState = state.map((it) =>
          it.id === action.data.id ? { ...action.data } : it
        );
        break;
      }
      default:
        return state;
    }
    localStorage.setItem("Customer", JSON.stringify(newState));
    return newState;   
  };
  

export const CustomerInfoContext = React.createContext();
export const CustomerDispatchContext = React.createContext();

const CustomerInfo = () => {
 const [info,dispatch] = useReducer(reducer,[]);
 const infoId = useRef(0);

 useEffect(() => {
    const localData = localStorage.getItem("Customer");       
    if(localData) {
      const CustomerList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      infoId.current = parseInt(CustomerList[0].id) + 1;
      dispatch({type:"INIT", data:CustomerList});
    }
 },[]);

    // CREATE
  const infoCreate = (data, phoneNumber, getDate, customerName) => {
    dispatch({type : "CREATE",
     data: {
      id: infoId.current,
      manager: data,
      phoneNumber,
      date: getDate,
      customerName        
    }})
    infoId.current += 1;    
  };
  // REMOVE
  const infoRemove = (targetId) => {
    dispatch({type : "REMOVE", targetId});
  }
  // EDIT
  const infoEdit = (targetId, data, phoneNumber, getDate, customerName) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        manager: data,
        phoneNumber,
        date: getDate,
        customerName,
      },
    });
  };
  
    return (
      <CustomerInfoContext.Provider value={info}>
        <CustomerDispatchContext.Provider
          value={{ infoCreate, infoRemove, infoEdit }}
        >
          <div>           
            <Routes>
                <Route path="/Reservation/:id" element={<Reservation />}/>
                <Route path="/Customer" element={<Customer/> }/>                                                                                   
            </Routes>            
          </div>
        </CustomerDispatchContext.Provider>
      </CustomerInfoContext.Provider>
    );
}

export default CustomerInfo;