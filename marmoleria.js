


alert("Bienvenidos a marmoleria Rocas Ornamentales")

let consulta = confirm("¿te puedo ayudar con tu compra?")

if (consulta === true) {

    let producto = prompt("¿que producto estarias necesitando?")
    let material = prompt("En que material necesitas tu " + producto + ",ingresa 1 para granitos y 2 para marmoles")

    while (material != 1 & material != 2) {
        alert("numero invalido");
        material = prompt("ingresa 1 para granitos y 2 para marmoles")
    }

    let color = prompt("elegi el color de tu " + producto)
    switch (color) {
        case "blanco": alert("Tenemos " + producto + " de color " + color)
            break;
        case "negro": alert("Tenemos " + producto + " de color " + color)
            break;
        case "gris": alert("Tenemos " + producto + " de color " + color)
            break;
        default:
            alert("Ese color no esta disponible")
    }
    let resta=(a,b)=> a-b
    let precio = x => x * 50000
    let metro = prompt("elegi el metro cuadrado")
    let descuento = 10000
    let resultado = resta(precio(metro), descuento)
    alert("El precio del producto elegido es "+ resultado)


}