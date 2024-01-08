let respuesta = prompt("Ya estás registrado en nuestra página?")
if (respuesta === "si" || "SI" || "Si") {

    bienvenida();

    let total = Number(prompt("Ingresar su costo total a pagar"));
    let cuotas = Number(prompt("Ingrese cantidad de cuotas que quiere consultar (1, 3 o 6)."))

    switch(cuotas) {
        case 1:
          alert("Total a pagar: "+ total)
          break;
        case 3:
          alert("10% de interes, total a pagar: " +(total + (total * 0.1)))
          break;
        case 6:
          alert("30% de interes, total a pagar: " + (total + (total * 0.3)))
          break;
        case 0:
            break;
        default:
          alert("Cantidad de cuotas no disponible")
          break;
       }
       
} else {
    alert('Debes estar registrado para utilizar las funcionalidades de la página');
}


function bienvenida() {
    let usuario = prompt("Ingrese su nombre")
    alert("Bienvenido " + usuario + "!")
} 
