const MyHeader = ({ headText }) => {
  return (
    <header className="MyHeader">
      <h4>{headText}페이지</h4>
      <p>이곳은 {headText}페이지입니다.</p>
    </header>
  );
};
export default MyHeader;
