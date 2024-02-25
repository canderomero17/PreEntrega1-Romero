import { agregarCarrito } from "./carrito.js"

const contenedorProductos = document.getElementById("contenedorProductos")

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => { 
    data.forEach((item) => {
      let card = document.createElement("div");
      card.innerHTML = `
      <p class="nombre">${item.nombre}</p>
      <b class="precio">$${item.precio}</b>
      <button class="agregarCarrito" id="btn${item.id}">Agregar al Carrito</button>
      `;
      card.className = "container";
      contenedorProductos.appendChild(card);

      const btnAgregarCarrito = document.getElementById(`btn${item.id}`)
      btnAgregarCarrito.addEventListener("click", () => agregarCarrito(item.id),);
  });
})