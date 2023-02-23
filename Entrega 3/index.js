const shopContent = document.getElementById("shopContent");

let carrito = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src = "${product.img}">
    <h3> ${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  comprar.className = "Comprar";

  content.append(comprar);
});
