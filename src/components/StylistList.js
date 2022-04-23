import StylistItem from './StylistItem';
const StylistList = ({stylistList, isSelect, getName}) => {
    
    return (
        <div>
            {stylistList.map((it)=>(
                <StylistItem key={it.id} {...it} isSelect={isSelect} getName={getName}/>
            ))}
        </div>
    );
};

StylistList.defaultProps = {
    stylistList: [],
};
export default StylistList;