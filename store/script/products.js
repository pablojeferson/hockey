class Product {
  constructor(title, description, price, onsale,impuesto,images) {

    this.title = title;
    this.description= description;
    this.price = price;
    this.onsale = onsale;
    this.impuesto=impuesto;
    this.images = images;
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
