const Productos = [ "Vaso", "tenedor", "cuchara", " cuchillo", "plato", "mantel"]

for ( let i=0; i< Productos.length; i++){
    console.log (Productos [i])

}

let numerodeventas = 4

for ( let i=0; i<numerodeventas; i++) {
    let productovendido= Productos.pop()

    console.log ( "producto vendido: " + productovendido);
    console.log ( " Stock depues de la venta: " + Productos.length);
}
