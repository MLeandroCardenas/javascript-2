/**
 * Indicaciones: A través de una lista desplegable, traer en la representación gráfica que se quiera 
 * (cuadros de color o imágenes), 
 * los colores de los uniformes de las selecciones nacionales de fútbol contenidas en dicha lista desplegable, 
 * a medida que cambie la opción en la lista desplegable , 
 * traiga el color de uniforme del país seleccionado y alguna especificación
 *  o característica de dicho equipo en un elemento HTML (texto,título,etc), 
 * y al final haya un botón submit que muestre en un mensaje la opción que se ha escogido finalmente.  
 */
let  texto;
function cambio(value) {
    const cuadro = document.querySelector('.cuadro');
    const span = document.querySelector('span');
    cuadro.style.backgroundColor = value;
    if(value === '#FCB508'){
        span.innerHTML = 'Debe seleccionar un pais';
    } 
    if(value === '#FFC300'){
        span.innerHTML = 'Colombia';
        texto = 'Colombia';
    } 
    if(value === '#900C3F'){
        span.innerHTML = 'Venezuela';
        texto = 'Venezuela';
    } 
    if(value === '#AC33FF') {
        span.innerHTML = 'Perú';
        texto = 'Peru';
    } 
    if(value === '#FF3346'){
        span.innerHTML = 'España';
        texto = 'España';
    } 
}

function verificar() {
    alert(`La opcion escojida es ${texto}`);
}