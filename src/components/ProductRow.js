function ProductRow(props) {
  return (
    <tr>
      <th>{props.name}</th>
      <th>{props.price}</th>
    </tr>
  );
}

export default ProductRow;
