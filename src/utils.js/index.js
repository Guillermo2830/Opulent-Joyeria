/**
 * Esta funcion calcula el precio total de la
 * @param {Array} products cartProduct : es un array de objetos
 * @returns {number} total price
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {
      // Quitar el formato de moneda y convertirlo a número
      const rawPrice = typeof product.price === 'string'
        ? Number(product.price.replace(/[^0-9.-]+/g, "")) // Eliminar cualquier carácter que no sea número, punto o guion
        : product.price;
  
      sum += rawPrice * product.quantity;
    });
    return sum;
  }