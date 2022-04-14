import { useContext } from 'react';
import { StylistStateContext } from "../App";

import StylistList from '../components/StylistList';
const Home = () => {
  const stylistList = useContext(StylistStateContext);
  console.log(stylistList);
  return (
    <div>
      <h1>Home</h1>
      <StylistList stylistList = {stylistList}/>
    </div>
  );
};

export default Home;
