import {FaTrash, FaTrashAlt} from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className='item'>
            <input type='checkbox' checked={item.checked} onChange={() => handleCheck(item.id)} />
            <label
            onDoubleClick={() => handleCheck(item.id)}
            style={{textDecoration: item.checked ? 'line-through' : 'none'}}
            >{item.item}</label>
            <FaTrashAlt role='button' tabIndex={0} onClick={() => handleDelete(item.id)}/>
        </li>
    );
}




export default LineItem;