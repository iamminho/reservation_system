import ReservationItem from './ReservationItem';
const ReservationList = ({info}) => {          
    return (
        <div>            
            {info.map((it) => (
                <ReservationItem key={it.id} {...it}/>
            ))}            
        </div>
    );
};

ReservationList.defaultProps = {
    ReservationList: [],
};

export default ReservationList;