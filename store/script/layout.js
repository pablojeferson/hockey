const navSelector = document.getElementById("nav");

const options1 = [
      { title: "Ofertas de la semana", linkTo: "./outlet.html" },
      { title: "Cómo comprar", linkTo: "./how.html" },
      { title: "Costos y tarifas", linkTo: "./taxs.html" },
      { title: "Mis pedidos", linkTo: "./orders.html" },
      { title: "Garantia", linkTo: "./warranty.html" },
    ];

    for (let option of options1) {
          const anchor = document.createElement("a");
          anchor.className = "nav-button"
          anchor.textContent = option.title
          anchor.href = option.linkTo
          navSelector.appendChild(anchor)
        }

const footerSelector = document.getElementById("footer");

    const options = [
          { title: "Información", linkTo: "./about.html", opts: ["Sobre nosotros", "Contacto", "FAQ"] },
          { title: "Productos", linkTo: "#", opts: ["Laptops", "Audio", "Auticulares"] },
          { title: "Ayuda", linkTo: "#", opts: ["Formas de pago", "Envío", "Devoluciones"] },
          { title: "Legal", linkTo: "#", opts: ["Términos y condiciones", "Política de privacidad"] },
        ];
        
        options.forEach(option => {
          const column = document.createElement('div');
          column.classList.add('footer-column');
        
          const title = document.createElement('h3');
          title.textContent = option.title;
          const link = document.createElement('a');
          link.href = option.linkTo;
          link.appendChild(title);
          column.appendChild(link);
        
          const list = document.createElement('ul');
          option.opts.forEach(opt => {
            const listItem = document.createElement('li');
            listItem.textContent = opt;
            list.appendChild(listItem);
          });
          column.appendChild(list);
        
          footerSelector.appendChild(column);
        });