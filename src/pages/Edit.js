import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StylistStateContext } from "../App";

import New from './New';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const stylistList = useContext(StylistStateContext);
    
    const [originData, setOriginData] = useState();

    //edit이 mount됐을때 styllistList[id]를 사용하기 때문에 useEffect를 사용한다.
    useEffect(() => {
      if (stylistList.length >= 1) {
        const targetStylist = stylistList.find(
          (it) => parseInt(it.id) === parseInt(id)
        );
        if(targetStylist){
          setOriginData(targetStylist);
        }else{
          alert("존재하지 않는 페이지 입니다.")
          navigate('/',{replace: true});
        }      
      }
      
    }, [id, stylistList]); //id가 변하거나, stylistList가 변할때만 꺼내온다.
    
    return (
      <div>
        <h2>{`Edit${id}`}</h2>
        {originData && <New isEdit={true} originData = {originData} />}
      </div>
    );
}
export default Edit; 