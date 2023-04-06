import { FaPlus } from "react-icons/fa";

const AddItem = ({newItem, setNewItem, handleAddItemSubmit}) => {
    return (
        <div>
            <form className="addForm" onSubmit={handleAddItemSubmit}>
                <label htmlFor="addForm">Add Item</label>
                <input type="text"
                    autoFocus
                    id="addForm"
                    placeholder="Add Item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type="submit">
                    <FaPlus />
                </button>
            </form>
        </div>
    );
};

export default AddItem;
