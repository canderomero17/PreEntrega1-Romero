import { productosDisponibles } from "./main.js"

JSON.parse(localStorage.getItem("carrito")) === null && localStorage.setItem("carrito", JSON.stringify([]))

document.addEventListener("DOMContentLoaded", () => {
    cargarProductosEnLocalStorage();
    itemsCarrito();
})

let carrito = JSON.parse(localStorage.getItem("carrito"))
const productosCarrito = document.getElementById("items")
const footerTable = document.getElementById("footer")
const btnCarrito = document.getElementById("btnCarrito")
const carritoTable = document.getElementById("contenedorCarrito")

btnCarrito.addEventListener("click", () => {
    itemsCarrito()
    if(carritoTable.style.display === "block"){
        carritoTable.style.display = "none"
    } else {
        carritoTable.style.display = "block"
        itemsCarrito()
    }
    
})

export const agregarCarrito = (idProducto) => {
    const producto = productosDisponibles.find((producto) => producto.id === idProducto)
    const { nombre, precio, id } = producto
    const productoCarrito = carrito.find((producto) => producto.id === idProducto)

    if(productoCarrito === undefined){
        const nuevoProductoCarrito = {
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        }
        carrito.push(nuevoProductoCarrito)
    } else {
        const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto)
        carrito[indexProductoCarrito].cantidad++
        carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))
    carrito = JSON.parse(localStorage.getItem("carrito"))
    itemsCarrito();

    Swal.fire({
        title: "Buen trabajo!",
        text: `${nombre} agregado al carrito`,
        icon: "success",
      })
}

const itemsCarrito = () => {
        productosCarrito.innerHTML = ''
        carrito.forEach(producto => {
        const { nombre, cantidad, precio, id } = producto
        let body = document.createElement("tr")

        body.className = "producto__carrito"

        body.innerHTML = `
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio /cantidad}</td>
        <td>${precio}</td>
        <td>
        <button id="+${id}" class="masBtn">+</button>
        <button id="-${id}" class="menosBtn">-</button>
        </td>
        `

        productosCarrito.append(body)
        
        const btnAgregar = document.getElementById(`+${id}`)
        const btnRestar = document.getElementById(`-${id}`)

        btnAgregar.addEventListener("click", () => aumentarCantidad(id))
        btnRestar.addEventListener("click", () => restarCantidad(id))
        
    });

    footerCarrito()
}

const footerCarrito = () => {

    if(carrito.length > 0){
        footerTable.innerHTML = ""

        let footer = document.createElement("tr")

        footer.innerHTML = `
        <th class="th"><b>Totales:</b></th>
        <td></td>
        <td>${calcularTotales().cantidadTotal}</td>
        <td></td>
        <td>${calcularTotales().costoTotal}</td>
        `

        footerTable.append(footer)
    }else{
        footerTable.innerHTML = "<h3>Carrito vacio</h3>"
    }

}

const calcularTotales = () => {
    const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0)
    const cantidadTotal = carrito.reduce((total, {cantidad}) => total + cantidad, 0)

    return {
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal
    }
}

const aumentarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad++
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    localStorage.setItem("carrito", JSON.stringify(carrito))
    itemsCarrito()

}

const restarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad--
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    if(carrito[indexProductoCarrito].cantidad === 0){
        carrito.splice(indexProductoCarrito, 1)
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))
    itemsCarrito()
}