const TotalCost = ({ cartProducts }) => {
  const totlaPrice = cartProducts.reduce((total, product) => {
    return total + product.price;
  }, 0);
  const fixedPrice = totlaPrice.toFixed(2);
  return (
    <div className="p-4 mb-1.5">
      <span className="text-2xl mr-1">Total Cost:</span>
      <span className="font-bold text-2xl text-gray-800">{fixedPrice}$</span>
    </div>
  );
};

export default TotalCost;
