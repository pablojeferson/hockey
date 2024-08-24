const productContainer = document.getElementById("products");

const productsTemplate = `
  <a class="product-card" href="./details.html">
    <img class="product-img" src="{{image}}" alt="{{title}}">
    <div class="product-info">
      <span class="product-title">{{title}}</span>
      <span class="product-description">{{description}}</span>
      <div class="product-price-block">
        <span class="product-price">{{price}}</span>
        <span class="product-discount">{{discount}}</span>
      </div>
      <div class="product-tax-policy">
        {{taxPolicy}}
      </div>
    </div>
  </a>
`;

const products = [];

products.push(
  new Product("MacBook Pro 13'4","Space Gray",750.000,"70% Off ","Incluye impuesto País y percepción IGV","https://i.postimg.cc/HxGQcrcp/mock1.jpg"),
  new Product("MacBook Pro 11'4","Space Gray",650.000,"80% Off ","Incluye impuesto País y percepción IGV","https://i.postimg.cc/HxGQcrcp/mock1.jpg"),
  new Product("MacBook Pro 12'4","Space Gray",650.000,"20% Off ","Incluye impuesto País y percepción IGV","https://i.postimg.cc/HxGQcrcp/mock1.jpg"),
  new Product("MacBook Pro 10'4","Space Gray",450.000,"50% Off ","Incluye impuesto País y percepción IGV","https://i.postimg.cc/HxGQcrcp/mock1.jpg"),
  new Product("MacBook Pro 9'4","Space Gray",350.000,"50% Off ","Incluye impuesto País y percepción IGV","https://i.postimg.cc/HxGQcrcp/mock1.jpg"),
  new Product("MacBook Pro 8'4","Space Gray",250.000,"50% Off ","Incluye impuesto País y percepción IGV","https://i.postimg.cc/HxGQcrcp/mock1.jpg"),
);