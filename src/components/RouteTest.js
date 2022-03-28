import { Link } from "react-router-dom";
const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/Stylists"}>Stylists</Link>
      <br />
      <Link to={"/Personalinfo"}>Personalinfo</Link>
      <br />
      <Link to={"/Time"}>Time</Link>
    </>
  );
};

export default RouteTest;
