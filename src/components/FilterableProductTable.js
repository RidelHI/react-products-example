import { useState } from "react";
import ProductsTable from "./ProductsTable";
import SearchBar from "./SearchBar";

function FilterableProductTable(props) {
  const layout = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100%",
  };

  const [filterText, setFilterState] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const onChangeFilter = (event) => setFilterState(event.target.value);
  const onChangeStock = () => setInStockOnly(!inStockOnly);

  const args = {
    ...props,
    filterText,
    inStockOnly,
    onChangeFilter,
    onChangeStock,
  };

  return (
    <div style={layout}>
      <div>
        <SearchBar {...args}></SearchBar>
        <ProductsTable {...args}></ProductsTable>
      </div>
    </div>
  );
}

export default FilterableProductTable;
