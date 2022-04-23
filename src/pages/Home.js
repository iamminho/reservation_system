import { useContext } from 'react';
import { StylistStateContext } from "../App";
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/MyButtons';

import StylistList from '../components/StylistList';
import { render } from '@testing-library/react';

const Home = ({isSelect}) => {  
  const navigate = useNavigate();
  const stylistList = useContext(StylistStateContext);

  
  if(isSelect) {
    return (
      <div>
        <MyButton
          text={"뒤로가기"}
          onClick={() => {
            navigate(-1);
          }}
        />            
        <h1>select</h1>
        <StylistList stylistList={stylistList} isSelect={isSelect} />
      </div>
    );
  }else{
    return (
      <div>
        <MyButton
          text={"스타일리스트 추가하기"}
          onClick={() => {
            navigate("/New");
          }}
        />      
        <h1>Home</h1>
        <StylistList stylistList={stylistList} />
      </div>
    );
  }  
};

export default Home;
