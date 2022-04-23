import "./App.css";
import React, { useReducer, useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import RouteTest from "./components/RouteTest";

//Pages
import Edit from "./pages/Edit";
import New from "./pages/New";
import Select from "./pages/Select";
import Reservation from "./pages/Reservation"
import Stylist from "./pages/Stylist";
import Personalinfo from "./pages/Personalinfo";
import Time from "./pages/Time";
import Home from "./pages/Home";
import Administrator from './pages/Administrator';
import Customer from './pages/Customer';
import CustomerInfo from './CustomerInfo';

//Components
// import MyButton from "./components/MyButtons";
import MyHeader from "./components/MyHeader";
import StylistItem from "./components/StylistItem";

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
 
  const [info, setInfo] = useState([]);
  const infoId = useRef(0);

  const customerCreate = (data, phoneNumber, getDate, customerName) => {    
    const newInfo = {
      id: infoId.current,
      data,
      phoneNumber,
      getDate,
      customerName
    }
    infoId.current += 1;
    setInfo([newInfo, ...info]);    
  };
 



  
  return (
    <StylistStateContext.Provider value={data}>
      <CustomerStateContext.Provider value={info}>
        <StylistDispatchContext.Provider
          value={{
            onCreate,
            onRemove,
            onEdit,
            customerCreate,
          }}
        >
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Stylist" />
                <Route path="/New" element={<New />} />
                <Route path="/Edit/:id" element={<Edit />} />
                <Route path="/Select" element={<Select />} />
                <Route
                  path="/Reservation/:id"
                  element={<Reservation />}
                />
                <Route path="/Customer" element={<Customer />} />
                <Route path="/Personalinfo" element={<Personalinfo />} />
                <Route path="/Time" element={<Time />} />
                <Route path="/Administrator" element={<Administrator />} />
                <Route path="/CustomerInfo/*" element={<CustomerInfo />} />
              </Routes>
              {/* <RouteTest /> */}
            </div>
          </Router>
        </StylistDispatchContext.Provider>
      </CustomerStateContext.Provider>
    </StylistStateContext.Provider>
  );
}

export default App;
