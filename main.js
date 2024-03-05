import { agregarCarrito } from "./carrito.js"

const contenedorProductos = document.getElementById("contenedorProductos")

let productosDisponibles = []

function cargarProductosEnLocalStorage() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("productos", JSON.stringify(data));
      console.log("Productos cargados en localStorage:", data);
      productosDisponibles = data;
      mostrarProductos(data); 
    })
    .catch((error) => console.error("Error al cargar productos:", error));
}

function mostrarProductos(productos) {
  productos.forEach((item) => {
    let card = document.createElement("div");
      card.innerHTML = `
      <p class="nombre">${item.nombre}</p>
      <b class="precio">$${item.precio}</b>
      <img src="${item.img}" alt="Card image cap" height=200 width=150>
      <button class="agregarCarrito" id="btn${item.id}">Agregar al Carrito</button>
      `;
      card.className = "container";
      contenedorProductos.appendChild(card);

      const btnAgregarCarrito = document.getElementById(`btn${item.id}`)
      btnAgregarCarrito.addEventListener("click", () => agregarCarrito(item.id),);
  
  })
}

const productosGuardados = JSON.parse(localStorage.getItem("productos"));
  if (!productosGuardados) {
    cargarProductosEnLocalStorage();
  } else {
    productosDisponibles = productosGuardados;
    mostrarProductos(productosDisponibles);
  }

  export { productosDisponibles };
