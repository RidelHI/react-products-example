import CategoryProductRow from "./CategoryProductRow";
import ProductRow from "./ProductRow";

function ProductsTable({ filterText, inStockOnly, products }) {
  let lastCategory = "";

  const currentProducts = () => {
    const cp = [];
    products.forEach((p, i) => {
      if (p.name.indexOf(filterText) !== -1 || filterText === "") {
        if (!inStockOnly || (inStockOnly && p.stocked)) {
          if (lastCategory !== p.category) {
            lastCategory = p.category;
            cp.push(
              <CategoryProductRow
                key={i + "a"}
                category={lastCategory}
              ></CategoryProductRow>
            );
          }
          cp.push(
            <ProductRow
              key={i + "b"}
              name={p.name}
              price={p.price}
            ></ProductRow>
          );
        }
      }
    });
    return cp;
  };

  return (
    <table style={{ textAlign: "left" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{currentProducts()}</tbody>
    </table>
  );
}

export default ProductsTable;
