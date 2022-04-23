import { useContext } from "react";
import { CustomerStateContext } from "../App";
import ReservationList from "../components/ReservationList";
import {CustomerInfoContext} from "../CustomerInfo";
const Customer = ({yoga}) => {  
  const info = useContext(CustomerInfoContext);
  
  return (
    <div>
      {yoga}
      <p>Customer</p>
      <div className="ReservationList">
        <ReservationList info = {info} />
      </div>
    </div>
  );
};

export default Customer;
