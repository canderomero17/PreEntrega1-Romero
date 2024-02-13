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


// class Producto {
//   constructor(id, nombre, precio, stock, categoria) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//     this.categoria = categoria;
//   }

//   vender() {
//     this.stock -= 1; 
//   }

//   agregar(cantidadIncremento){
//     this.stock += cantidadIncremento; 
//   }
// }

// const productos = []

// productos.push(new Producto(1, "gloss transparente", 2000, 2, "Labiales"))
// productos.push(new Producto(2, "delineador liquido", 1200, 5, "Delineadores"))
// productos.push(new Producto(3, "labial rojo", 1200, 5, "Labiales"))
// productos.push(new Producto(4, "delineador lapiz", 1300, 4, "Delineadores"))
// productos.push(new Producto(5, "base liquida", 2000, 4, "Bases"))
// productos.push(new Producto(6, "base compacta", 2000, 1, "Bases"))
// productos.push(new Producto(7, "gloss rosado", 1500, 7, "Labiales"))
// productos.push(new Producto(8, "delineador gel", 3000, 9, "Delineadores"))
// productos.push(new Producto(9, "labial rosado", 4500, 1, "Labiales"))
// productos.push(new Producto(10, "labial beige", 2000, 4, "Labiales"))

// let contenedor = document.getElementById("contenedor");

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <p class="nombre">Nombre: ${item.nombre}</p>
//     <b class="precio">$${item.precio}</b>
//     <button id="botonEliminar">Eliminar del carrito</button>
//     <button id="botonAgregar">Agregar al carrito</button>
//   `;  
//   div.className = "container";
//   contenedor.append(div);
// });



// productos[1].vender();
// console.log(productos[1]);
// productos[0].vender();
// console.log(productos[0]);
// productos[0].agregar(3)
// console.log(productos[0]);

// const buscarProducto = (nombre) => {
//   let productoEncontrado;
//   for (const producto of productos) {
//     if (producto.nombre === nombre) {
//       productoEncontrado = producto;
//     }
//   }

// //   if (productoEncontrado) {
// //     alert(`
// //       Nombre: ${productoEncontrado.nombre}
// //       Precio: ${productoEncontrado.precio}
// //       Tipo: ${productoEncontrado.categoria}
// //     `);
// //   } else {
// //     alert('Producto no disponible')
// //   }
// // };


// //let nombre = prompt("Ingrese el nombre para buscar el producto");
// buscarProducto(nombre);

// // const filtrarPorCategoria = (categoria) => {
// //   const productosFiltrados = productos.filter(producto => producto.categoria == categoria);
// //   if (productosFiltrados.length > 0) {
// //     productosFiltrados.forEach((producto) => {
// //       alert(`
// //         Nombre: ${producto.nombre}
// //         Precio: ${producto.precio}
// //       `);
// //     })
// //   } else {
// //     alert('Categoria no disponible')
// //   }
// // };

// //let categoria = prompt("Ingrese la categoria de productos que desea ver");
// filtrarPorCategoria(categoria);

// //alert("Tenemos el 15% off en toda la tienda!!")

// // const descuentos = (productos, funcion) => {
// //   for (const producto of productos) {
// //     funcion(producto);
// //     alert(`
// //     Los nuevos precios son:
// //     Nombre: ${producto.nombre}
// //     Precio: ${precioConDescuento}
// //   `)
// //   }
// };

// const aplicarDescuento = (producto) => {
//   precioConDescuento = producto.precio - (producto.precio * 0.15)
//   return precioConDescuento
// }

// descuentos(productos, aplicarDescuento)

