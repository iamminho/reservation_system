import StylistItem from './StylistItem';
const StylistList = ({stylistList}) => {
    return (
        <div>
            {stylistList.map((it)=>(
                <StylistItem key={it.id} {...it}/>
            ))}
        </div>
    );
};

StylistList.defaultProps = {
    stylistList: [],
};
export default StylistList;