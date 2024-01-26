class Producto {
  constructor(nombre, precio, stock, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
  }

  vender() {
    this.stock -= 1; 
  }

  agregar(cantidadIncremento){
    this.stock += cantidadIncremento; 
  }
}

const productos = []

productos.push(new Producto("gloss", 2000, 2, "Labiales"))
productos.push(new Producto("delineador liquido", 1200, 5, "Delineadores"))
productos.push(new Producto("labial rojo", 1200, 5, "Labiales"))
productos.push(new Producto("delineador lapiz", 1300, 4, "Delineadores"))
productos.push(new Producto("base liquida", 2000, 4, "Bases"))

productos[1].vender();
console.log(productos[1]);
productos[0].vender();
console.log(productos[0]);
productos[0].agregar(3)
console.log(productos[0]);

const buscarProducto = (nombre) => {
  let productoEncontrado;
  for (const producto of productos) {
    if (producto.nombre === nombre) {
      productoEncontrado = producto;
    }
  }

  if (productoEncontrado) {
    alert(`
      Nombre: ${productoEncontrado.nombre}
      Precio: ${productoEncontrado.precio}
      Tipo: ${productoEncontrado.categoria}
    `);
  } else {
    alert('Producto no disponible')
  }
};


let nombre = prompt("Ingrese el nombre para buscar el producto");
buscarProducto(nombre);

const filtrarPorCategoria = (categoria) => {
  const productosFiltrados = productos.filter(producto => producto.categoria == categoria);
  if (productosFiltrados.length > 0) {
    productosFiltrados.forEach((producto) => {
      alert(`
        Nombre: ${producto.nombre}
        Precio: ${producto.precio}
      `);
    })
  } else {
    alert('Categoria no disponible')
  }
};

let categoria = prompt("Ingrese la categoria de productos que desea ver");
filtrarPorCategoria(categoria);

alert("Tenemos el 15% off en toda la tienda!!")

const descuentos = (productos, funcion) => {
  for (const producto of productos) {
    funcion(producto);
    alert(`
    Los nuevos precios son:
    Nombre: ${producto.nombre}
    Precio: ${precioConDescuento}
  `)
  }
};

const aplicarDescuento = (producto) => {
  precioConDescuento = producto.precio - (producto.precio * 0.15)
  return precioConDescuento
}

descuentos(productos, aplicarDescuento)

