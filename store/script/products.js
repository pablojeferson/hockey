class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier; // Propiedad privada con guión bajo
  }
  sellUnits(units) {
    if (units <= this.stock) {
      this.stock -= units;
      console.log(`Se vendieron ${units} unidades. Stock actual: ${this.stock}`);
    } else {
      console.error(`No hay suficiente stock. Solo quedan ${this.stock} unidades.`);
    }
  }
  // Getter para obtener el proveedor
  get supplier() {
    return this._supplier;
  }

  // Setter para modificar el proveedor
  set supplier(newSupplier) {
    this._supplier = newSupplier;
  }
}

// Creamos una instancia de Product
const prod4 = new Product('prod4', 'Camiseta', 19.99, 10, ['imagen1.jpg', 'imagen2.jpg'], true, 'Nike');
// Modificamos el proveedor utilizando el setter
prod4.supplier = 'Adidas';

const prod5 = new Product('prod5', 'Camiseta', 19.99, 12, ['imagen1.jpg', 'imagen2.jpg'], true);

// Vendemos unidades
prod5.sellUnits(10);
prod5.sellUnits(1); // Intentará vender 5 unidades más, pero no hay suficiente stock

// Imprimimos el proveedor utilizando el getter
console.log(prod4.supplier); // Esto imprimirá 'Adidas'