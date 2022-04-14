const StylistList = ({stylistList}) => {
    return (
        <div>
            {stylistList.map((it)=>(
                <div key={it.id}>{it.content}</div>
            ))}
        </div>
    );
};

export default StylistList;