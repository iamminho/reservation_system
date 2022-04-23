import React,{ useReducer, useRef } from "react";
import Home from "./Home";
import Reservation from './Reservation';




const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.value;
    }
    case "CREATE": {
      newState = [action.value, ...state];
      break; // break걸지 않으면 자동으로 default가 실행된다.
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.value.id ? { ...action.value } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const CustomerStateContext =React.createContext();
export const CustomerDispatchContext =React.createContext();


const Select = () => {
  const [value, dispatch] = useReducer(reducer, []);
  const valueId = useRef(0);

  // CREATE
  const customerCreate = (stylist, customerName, phoneNumber, getDate) => {
    dispatch({
      type: "CREATE",
      value: {
        id: valueId.current,
        stylist,
        customerName,
        phoneNumber,
        getDate,
      },
    });
    valueId.current += 1;
  };
  // REMOVE
  const customerDelete = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT
  const customerEdit = (targetId, stylist, customerName, phoneNumber, getDate) => {
    dispatch({
      type: "EDIT",
      value: {
        id: targetId,
        stylist,
        customerName,
        phoneNumber,
        getDate,
      },
    });
  };

  return (
    <CustomerStateContext.Provider value={value}>
      <CustomerDispatchContext.Provider
        value={{ customerCreate, customerDelete, customerEdit }}
      >
        <div>
          <Home isSelect={true} />
          
          
        </div>
      </CustomerDispatchContext.Provider>
    </CustomerStateContext.Provider>
  );
};

export default Select;
