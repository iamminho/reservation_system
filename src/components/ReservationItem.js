import dayjs from "dayjs";
const ReservationItem = ({id, data, phoneNumber, getDate, customerName}) => {
    const dateFormat = dayjs(getDate).format("YYYY-MM-DD");

    return (
    <div>
        {id}
        {data}
        {phoneNumber}
        {dateFormat}
    </div>
    )
}

export default ReservationItem;