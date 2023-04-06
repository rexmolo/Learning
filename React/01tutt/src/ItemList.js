
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {

    return (
        <ul>
                {items.length !== 0 ? (
                    items.map((item) => (
                        
                        <LineItem 
                            key={item.id}
                            item={item}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                            />
                    ))
                ) : (
                    <li className='item'>No items</li>
                )}
                
            </ul>
    );
}

export default ItemList;