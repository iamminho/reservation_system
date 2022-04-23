import ReservationItem from './ReservationItem';
const ReservationList = ({CustomerInfo}) => {    
    return (
        <div>
            {CustomerInfo.map((it) => (
                <ReservationItem key={it.id} {...it}/>
            ))}            
        </div>
    );
};

ReservationList.defaultProps = {
    ReservationList: [],
};

export default ReservationList;