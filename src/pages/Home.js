import { useContext } from 'react';
import { StylistStateContext } from "../App";
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/MyButtons';

import StylistList from '../components/StylistList';

const Home = () => {
  const navigate = useNavigate();
  const stylistList = useContext(StylistStateContext);
  
  return (
    <div>
      <MyButton text={'스타일리스트 추가하기'}
      onClick={() => {
        navigate('/New');
      }}/>
      <h1>Home</h1>
      <StylistList stylistList = {stylistList}/>

    </div>
  );
};

export default Home;
