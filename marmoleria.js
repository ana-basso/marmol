


alert("Bienvenidos a marmoleria Rocas Ornamentales")

let consulta = confirm("¿Te puedo ayudar con tu compra?")

if (consulta === true) {

    let producto = prompt("¿Que producto estarias necesitando?")
    let material = prompt("En que material necesitas tu " + producto + " , \n 1. Granitos  \n 2. Marmoles")

    while (material != 1 & material != 2) {
        alert("Numero invalido");
        material = prompt("Ingresa 1 para granitos y 2 para marmoles")
    }

    let color = prompt("Elegi el color de tu " + producto + " \n 1. BLANCO \n 2. NEGRO \n 3. GRIS")
    switch (color) {
        case "1": alert("Tenemos " + producto + " de color " + color)
            break;
        case "2": alert("Tenemos " + producto + " de color " + color)
            break;
        case "3": alert("Tenemos " + producto + " de color " + color)
            break;
        default:
            while (color != 1 & color != 2 & color != 3) {
                alert("Ese color no esta disponible");
                color = prompt("Ingresa 1 para color BLANCO, 2 para color NEGRO, 3 para color GRIS")
            }

    }
    let resta = (a, b) => a - b
    let precio = x => x * 50000
    let metro = prompt("Elegi el metro cuadrado")
    let descuento = 10000
    let resultado = resta(precio(metro), descuento)
    alert("El precio del producto elegido es " + resultado)


}
const Productos = function (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
let p1 = new Productos("pileta johnson", 50000, 10)
let p2 = new Productos("pileta mi pileta", 60000, 10)
let p3 = new Productos("canilla", 70000, 10)

let complementarios = [p1, p2, p3]

function filtrar() {
    let clave = prompt("Ingresa el producto que desea buscar").trim().toUpperCase()
    let filtro = complementarios.filter((x) => x.nombre.toUpperCase()).includes(clave.toUpperCase())
    if (filtro.length > 0) {

        console.table(filtro)
    }
    else {
        alert("No se encontro ninguna coincidencia con:" + clave)
    }
}
filtrar()
function agrego() {
    let nombre = prompt("Ingresa el  nombre del producto: ").trim()
    let precio = parseFloat(prompt("Ingresa el  precio del producto: "))
    let stock = parseInt(prompt("Ingresa el stock del producto:  "))

    if (isNaN(precio) || isNaN(stock) || nombre === "") {
        alert("valor invalido")
        return;
    }
    
    if (complementarios.some((x) => x.nombre === Productos.nombre)) {
        alert("El producto ya existe")
        return;
    }

    let Productos = new Productos(nombre, precio, stock);
    complementarios.push(Productos)
    console.table(complementarios)
}