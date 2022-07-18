// Evaluacion a proveedores de acuerdo a 3 calificaciones. Puntualidad / Calidad / Cantidad
// Nota > 95% => Aprobado
// Nota 90 > 95% => Condicional
// Nota < 90% => Suspendido
// console.log(listaSuper)


let listaProveedores = ["nn","xx"];
let agregarProveedor = prompt("Agregar nuevo proveedor nuevo");
if (listaProveedores.indexOf(agregarProveedor == -1)) {
    listaProveedores.push(agregarProveedor);
} else{("El proveedor ya existe");
}

console.log(listaProveedores)


let proveedor = prompt("Cual es el nombre del proveedor");
    alert(`Cargue los datos del proveedor:  ${proveedor}`);

let piezasPedidas = parseInt(prompt("Cantidad de piezas pedidas"));
let piezasEntregadas = parseInt(prompt("Cantidad de piezas entregadas"));
let piezasAprobadas = parseInt(prompt("Cantidad de piezas sin defectos"));
let puntialidad = prompt("Entrego en fecha programada si o no?");


function cantidad(piezasEntregadas, piezasPedidas) {
    let cantidad = piezasPedidas / piezasEntregadas;
    console.log(cantidad);
    return resultado1 
}

function calidad(piezasEntregadas, piezasAprobadas) {
    let calidad = piezasAprobadas / piezasEntregadas;
    console.log(calidad);
    return resultado2 
}

function puntual() {
    if (entregaPuntual = si) {0.10}
    else {0.70}
    return resultado3 
}

function evaluacion(resultado1, resultado2, resultado3) {

    let  resultadoEvaluacion= resultado1*resultado2*resultado3*100

    if (resultadoEvaluacion < 90) {alert("el proveedor debe ser suspendido")}

    else if (resultadoEvaluacion > 95) {alert("el proveedor es condicional")}

    else if (resultadoEvaluacion < 95) {alert("el proveedor esta aprobado")}
    
    return resultadoEvaluacion
  }
let evaluacionProveedor = prompt("Ingresa el nombre del proveedor para conocer su ultima evaluacion");
alert("el resultado es: " + resultadoEvaluacion)  






