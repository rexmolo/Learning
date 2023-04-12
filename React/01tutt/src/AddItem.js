import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({newItem, setNewItem, handleAddItemSubmit}) => {
    const inputRef = useRef();
    return (
        <div>
            <form className="addForm" onSubmit={handleAddItemSubmit}>
                <label htmlFor="addForm">Add Item</label>
                <input type="text"
                    autoFocus
                    id="addForm"
                    ref={inputRef}
                    placeholder="Add Item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    
                />
                <button 
                type="submit"
                aria-label="Add Item"
                onClick={() => inputRef.current.focus()}
                >
                    <FaPlus />
                </button>
            </form>
        </div>
    );
};

export default AddItem;
