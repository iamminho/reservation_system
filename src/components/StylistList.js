import StylistItem from './StylistItem';
const StylistList = ({stylistList, isSelect}) => {
    return (
        <div>
            {stylistList.map((it)=>(
                <StylistItem key={it.id} {...it} isSelect={isSelect}/>
            ))}
        </div>
    );
};

StylistList.defaultProps = {
    stylistList: [],
};
export default StylistList;