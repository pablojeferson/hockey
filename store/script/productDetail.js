const products = [
    {
      id: 1,
      name: "Camiseta",
      description: "Camiseta de algodón",
      price: 20,
      colors: [
        { name: "Rojo", code: "#FF0000" },
        { name: "Azul", code: "#0000FF" },
        { name: "Verde", code: "#00FF00" }
      ]
    },
    // ... otros productos
  ];

  function printDetails(id) {
    // Encuentra el producto por su ID
    const product = products.find((each) => each.id === id);
  
    // Crea las opciones del select a partir de los colores del producto
    const colorOptions = product.colors.map(color => {
      return `<option value="${color.code}">${color.name}</option>`;
    }).join('');
    
    const imageThumbnails = productImages.map(image => {
        return `<img src="${image.url}" class="thumbnail" onclick="changeMini(event)">`;
      }).join('');

    // Crea la plantilla del detalle del producto
    const detailsTemplate = `
      <h2>${product.name}</h2>
      <p>Descripción: ${product.description}</p>
      <p>Precio: $${product.price}</p>
      <label for="quantity">Cantidad:</label>
      <input type="number" id="quantity" value="1" onchange="changeSubtotal(event, ${product.id}, ${product.price})">
      <p>Subtotal: $<span id="subtotal">0</span></p>
      <label for="color-select">Selecciona un color:</label>
      <select id="color-select">
        ${colorOptions}
      </select>
      <div class="thumbnails">${imageThumbnails}</div>
      <img id="main-image" src="${productImages[0].url}" alt="Imagen principal">
      <button onclick="saveProduct(${id})">Añadir al carrito</button>
    `;
  
    // Selecciona el elemento donde se mostrará el detalle
    const detailsSelector = document.getElementById('product-details');
  
    // Actualiza el contenido del elemento
    detailsSelector.innerHTML = detailsTemplate;
  }

  function changeMini(event) {
    const selectedSrc = event.target.src;
    const bigSelector = document.querySelector("#bigImg");
    bigSelector.src = selectedSrc;
  }

  function changeSubtotal(event, productId, productPrice) {
    const quantity = event.target.value;
    const subtotal = quantity * productPrice;
    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = subtotal;
  }
  function saveProduct(id) {
      const found = products.find((each) => each.id === id);
      const product = {
        id: id,
        title: found.title,
        price: found.price,
        image: found.images[0],
        color: document.querySelector("#color-" + id).value,
        quantity: document.querySelector("#quantity-" + id).value,
      };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
   // Guardar el carrito actualizado en el localStorage
   localStorage.setItem('cart', JSON.stringify(cart));
    }
    
  printDetails(id)