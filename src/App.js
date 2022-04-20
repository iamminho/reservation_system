import "./App.css";
import React, { useReducer, useState, useRef } from "react";
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
  return newState;   
};

export const StylistStateContext = React.createContext();
export const StylistDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    author: "사람1",
    content: "내용1",
    picture: <img src={process.env.PUBLIC_URL + `assets/emotion1.png`} alt="" />,
  },
  {
    id: 2,
    author: "사람2",
    content: "내용2",
    picture: <img src={process.env.PUBLIC_URL + `assets/emotion2.png`} alt="" />,
  },
  {
    id: 3,
    author: "사람3",
    content: "내용3",
    picture: <img src={process.env.PUBLIC_URL + `assets/emotion3.png`} alt="" />,
  },
  {
    id: 4,
    author: "사람4",
    content: "내용4",
    picture: <img src={process.env.PUBLIC_URL + `assets/emotion4.png`} alt="" />,
  },
  {
    id: 5,
    author: "사람5",
    content: "내용5",
    picture: <img src={process.env.PUBLIC_URL + `assets/emotion5.png`} alt="" />,
  },
]

function App() {
  const [data,dispatch] = useReducer(reducer,dummyData);
  const dataId = useRef(0);
  
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
          onEdit 
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
              <Route path="/Select/Reservation/:id" element={<Reservation />} />
              <Route path="/Customer" element={<Customer />} />
              <Route path="/Personalinfo" element={<Personalinfo />} />
              <Route path="/Time" element={<Time />} />
              <Route path="/Administrator" element={<Administrator />} />
            </Routes>
            {/* <RouteTest /> */}
          </div>
        </Router>
      </StylistDispatchContext.Provider>
    </StylistStateContext.Provider>
  );
}

export default App;
