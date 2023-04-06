
const SearchItem = ({searchValue, setSearchValue}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchItem">Search</label>
            <input 
            type="text"
            id="searchItem"
            placeholder="Search"
            value={searchValue}
            onChange = {(e) => setSearchValue(e.target.value)}
            />
        </form>
    );
};

export default SearchItem;