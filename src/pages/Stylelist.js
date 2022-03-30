import { useParams } from "react-router-dom";
const Stylelist = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>stylists</h1>
      <p>이곳은 스타일리스트 선택 페이지 입니다.</p>
    </div>
  );
};

export default Stylelist;
