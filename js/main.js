//-------------Proyecto de eComers-----------//

alert("Primer Desafio Obligatorio JS");
let ingresarNombre = prompt("Ingresa tu nombre: ");
let ingresaMail = prompt(" Bienbenido " + "Ingresa tu mail");
let creaTuClave = prompt("Ingresa tu clave");
console.log("Usuario Creado Exitosamente");

//-----------Carrito----------//

function agregarCarrito(producto, stock, precio) {
const tenemosStock = stockReal(stock);
if (tenemosStock == "tenemosStock") {
    console.log("Producto" + producto + " sumado al carrito");
    console.log("No te olvides de mirar nuestas ofertas");
} else {
    console.log("No tenemos stock de : " + producto);
    console.log("Cuando entre te avisamos");
}
}

//------------Stock------------//

function stockReal(stock) {
if (stock > 0) {
    return "tenemos stock";
} else {
    return "no tenemos stock";
}
}

//--------Producto-----------//

function Producto(tituloParametro, stockParametro, 
precioParametro) {
this.titulo = tituloParametro;
this.stock = stockParametro;
this.precio = precioParametro;
}
const producto0252 = new Producto("Almendras Non Pareil", 15, 3500);
const producto0161 = new Producto("Nueces con Cascara", 8, 1285);
const producto0043 = new Producto("Tomates Secos",0, 
2650);
const producto0025 = new Producto("Arandanos Rojos", 
0, 45200);
const producto0001 = new Producto("Ciruela President Grande", 125, 450);

//-------------Arrays------------//

const carrito = [];
carrito.push(producto0001);

console.log(" Este es mi carrito ", carrito);
console.log(producto0001);

function agregarAlCarrito(producto) {
  // validar.stock
carrito.push(producto);
console.log(carrito);
}

agregarAlCarrito("Nueces con cascara",);
agregarAlCarrito("Tomates Secos",);
agregarAlCarrito("Almendas Non Pareil",);

//--------------Funciones de Orden Superior--------------//

function borrarProductoDelCarrito(idDelproducto) {
const index = carrito.findIndex((producto) => 
producto.id === idDelproducto);
console.log(index);
if (index !== -1) carrito.splice(index, 1);
console.log(carrito);
}

borrarProductoDelCarrito(0043);

//const agregarAlCarrito = ['Almendras Non Pareil',
//];
//const total = agregarAlCarrito.reduce((acumulador,
//elemento) => acumulador + elemento, 0);console.log
//(total);
