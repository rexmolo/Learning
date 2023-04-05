
import LineItem from "./LineItem";

const ItemList = ({ items, handelCheck, handelDelete }) => {

    return (
        <ul>
                {items.length !== 0 ? (
                    items.map((item) => (
                        
                        <LineItem 
                            key={item.id}
                            item={item}
                            handleCheck={handelCheck}
                            handleDelete={handelDelete}
                            />
                    ))
                ) : (
                    <li className='item'>No items</li>
                )}
                
            </ul>
    );
}

export default ItemList;