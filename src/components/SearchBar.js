const searchStyles = {
  check: {
    color: "red",
  },
};

function SearchBar({ filterText, inStockOnly, onChangeFilter, onChangeStock }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={onChangeFilter}
      />
      <p style={searchStyles.check}>
        <input type="checkbox" checked={inStockOnly} onChange={onChangeStock} />
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;
