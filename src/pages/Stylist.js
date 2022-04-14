import StylistItem from '../components/StylistItem';

const Stylist = ({ stylerList }) => {
  console.log("stylerList:", stylerList);
  return (
    <div className='Stylist'>
      <h2>스타일러 리스트</h2>
      <h4>{stylerList.length}명이 있습니다.</h4>
      <div>
        {stylerList.map((it) => (
          <StylistItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
  
};

export default Stylist;
