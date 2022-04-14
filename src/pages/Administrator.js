import { useNavigate } from 'react-router-dom';

import MyButton from '../components/MyButtons';

const Administrator = () => {
    const navigate = useNavigate();
    return (
      <div>
        <h4>관리자 페이지</h4>
        <MyButton
          text={"뒤로가기"}
          onClick={() => {
            navigate(-1);
          }}
        />
        <MyButton
          text={"스타일리스트 추가"}
          onClick={() => {
            navigate("/New");
          }}
        />
      </div>
    );
}

export default Administrator;