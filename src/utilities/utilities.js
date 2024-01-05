export function calculateTotal(cart, currency) {
  let totalUSD = 0;
  Object.keys(cart).forEach((itemName) => {
    totalUSD += cart[itemName].price * cart[itemName].quantity;
  });
  return totalUSD.toFixed(2);
}
  

  


