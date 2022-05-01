import StylistItem from './StylistItem';
const StylistList = ({onRemove, stylistList, isSelect, getName}) => {
    
    return (
      <div>
        {stylistList.map((it) => (
          <StylistItem
            key={it.id}
            {...it}
            isSelect={isSelect}
            getName={getName}   
            onRemove = {onRemove}         
          />
        ))}
      </div>
    );
};

StylistList.defaultProps = {
    stylistList: [],
};
export default StylistList;