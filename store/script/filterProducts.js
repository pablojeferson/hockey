
const products = [
    // Aquí va tu array de productos
    { id: 1, name: "iPad Pro 12.9", description: "El último iPhone", price: 1000, image: "iphone14.jpg" },
    // ... más productos
  ];
  
  const productContainer = document.getElementById('products'); // Suponiendo que tienes un elemento con id "products" para mostrar los productos
  
  function captureText(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm);
    });
  
    // Limpiar el contenedor de productos antes de agregar los nuevos
    productContainer.innerHTML = '';
  
    // Crear y agregar las tarjetas de los productos filtrados
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      // ... Aquí construyes el HTML de la tarjeta, utilizando product.name, product.price, etc.
      productContainer.appendChild(productCard);
    });
  }