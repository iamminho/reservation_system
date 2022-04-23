import { useContext } from "react";
import { CustomerStateContext } from "../App";
import ReservationList from "../components/ReservationList";
const Customer = () => {
  const CustomerInfo = useContext(CustomerStateContext);
  return (
    <div>
      <p>Customer</p>
      <div className="ReservationList">
        <ReservationList CustomerInfo={CustomerInfo} />
      </div>
    </div>
  );
};

export default Customer;
