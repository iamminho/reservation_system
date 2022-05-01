import "./App.css";
import React, { useReducer, useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Edit from "./pages/Edit";
import New from "./pages/New";
import Select from "./pages/Select";
import Home from "./pages/Home";
import Administrator from './pages/Administrator';
import CustomerInfo from './CustomerInfo';
import Day from './components/Day';
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
  localStorage.setItem("stylist", JSON.stringify(newState));
  return newState;   
};

export const StylistStateContext = React.createContext();
export const StylistDispatchContext = React.createContext();
export const CustomerStateContext = React.createContext();

function App() {
  const [data,dispatch] = useReducer(reducer,[]);
  const dataId = useRef(0);

  useEffect(() => {    
    const localData = localStorage.getItem("stylist");
    if(localData) {
      const stylelistList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      dataId.current = parseInt(stylelistList[0].id) + 1;
      dispatch({type:"INIT", data:stylelistList});
    }
  },[]);
  
  // CREATE
  const onCreate = (author, content) => {
    dispatch({type : "CREATE",
     data: {
      id: dataId.current,
      author,
      content,      
    }})
    dataId.current += 1;    
  };
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({type : "REMOVE", targetId});
  }
  // EDIT
  const onEdit = (targetId, author, content) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        author,
        content,        
      },
    });
  };
  
  return (
    <StylistStateContext.Provider value={data}>
      
        <StylistDispatchContext.Provider
          value={{
            onCreate,
            onRemove,
            onEdit,            
          }}
        >
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/New" element={<New />} />
                <Route path="/Edit/:id" element={<Edit />} />
                <Route path="/Select" element={<Select />} />                                
                <Route path="/Administrator" element={<Administrator />} />
                <Route path="/CustomerInfo/*" element={<CustomerInfo />} />
                <Route path="/Day" element={<Day />} />
              </Routes>            
            </div>
          </Router>
        </StylistDispatchContext.Provider>      
    </StylistStateContext.Provider>
  );
}

export default App;
