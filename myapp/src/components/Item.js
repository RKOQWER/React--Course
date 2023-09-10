import './Item.css';

function Item(props)
{
    const itemName=props.itemName;
    return (
        <>
        <p className='nirma'>{itemName}</p>
        {props.children}
        </>
    );
}

export default Item;