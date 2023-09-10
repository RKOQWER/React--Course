import './ItemDate.css';

function ItemDate()
{
    const day=20;
    const month='june';
    const year=1998;
    return (
        <>
        <span>{day} </span>
        <span> {month} </span>
        <span>{year} </span>
        </>
    );
}

export default ItemDate;