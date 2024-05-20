export default function SearchBox ({ filter, handleFilterChange }) {
    return (
        <div>
            <label htmlFor="filter">Find contacts by name</label>
            <input type="text" id="filter" value={filter} onChange={handleFilterChange}/>
        </div>
    );
};
