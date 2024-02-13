import { agregarCarrito } from "./carrito.js"

const contenedorProductos = document.getElementById("contenedorProductos")

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
  cardsProductos(productosDisponibles)
})

const cardsProductos = (productos) => {
  productos.forEach((producto) => {
    const { nombre, precio, id } = producto
    let card = document.createElement("div");
    card.innerHTML = `
      <p class="nombre">${nombre}</p>
      <b class="precio">$${precio}</b>
      <button class="agregarCarrito" id="btn${id}">Agregar al Carrito</button>
    `;  
    card.className = "container";
    contenedorProductos.appendChild(card);

    const btnAgregarCarrito = document.getElementById(`btn${id}`)
    btnAgregarCarrito.addEventListener("click", () => agregarCarrito(id))
  });
}