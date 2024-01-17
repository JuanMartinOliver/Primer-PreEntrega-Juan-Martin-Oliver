// comenzamos 

function bienvenida (){
    alert ("Bienvenido a Vissio Marroquineria")
}

bienvenida ()

let nombre = prompt ("Ingrese Su Nombre")
if (nombre == "") {
    alert ("Ingrese su nombre para continuar")
}
else {
    alert ("Estamos encantados con tu visita "+ nombre)
}
alert ("¡Registrate y ganá un cupón de descuento!")

let opcion = prompt ("Como quieres continuar: \n1-Cargar al Carrito \n2-Contactarme con un vendedor \n3-Consultar costos de envio \n4- Comprar \n5- Salir ")

while (opcion != "5"){
    switch (opcion) {
        case "1": alert("Productos para agregar al carrito")
        break
        case "2": alert("Podes mandar mail a asd@asd.com")
        break
        case "3": alert ("El costo de envio es de $5000")
        break
        case "4": alert ("productos para comprar")
        break
    }
    opcion = prompt ("Como quieres continuar: \n1-Cargar al Carrito \n2-Contactarme con un vendedor \n3-Consultar costos de envio \n4- Comprar \n5- Salir")
}