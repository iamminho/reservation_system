import { useSearchParams, useNavigate } from "react-router-dom";
const Personalinfo = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  return (
    <div>
      <h1>개인정보</h1>
      <button onClick={() => setSearchParams({ who: "minho" })}>
        qs바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        nav
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Personalinfo;
