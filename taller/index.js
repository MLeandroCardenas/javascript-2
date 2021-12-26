const body = document.body;
const formularioPago = document.querySelector('#formPagos');
const nombres = document.querySelector('.txtNombres');
const pagoTotal = document.querySelector('.txtPago');
const descripcionPago = document.querySelector('.txtDescripcion');
const fechaNacimiento = document.querySelector('.txtDate');
const genero = document.querySelector('.genero');
const titular = document.querySelector('.isTitular');
const tipoCredito = formularioPago.tipoCredito;

const registrar = function () {
    if (confirm('¿Esta seguro de registrar la compra?')) {
        validarCampos();
        generarTabla();
    }
}

const validarCampos = ()=> {
    if(!nombres.value) {
        alert('Nombres requeridos');
        throw "Error validación";
    }
    if(!pagoTotal.value) {
        alert('Pago requerido');
        throw "Error validación";
    } 
    if(!descripcionPago.value){
        alert('pago requerido');
        throw "Error validación";
    } 
    if(!fechaNacimiento.value) {
        alert('fecha requerida');
        throw "Error validación";
    } 
    if(!tipoCredito.value) {
        alert('tipo credito requerido');
        throw "Error validación";
    } 
}

const generarTabla = () => {
    const tablaHtml = `
    <h3>Resumen de pagos</h3>    
    <br>
            <table>
                <tr>
                    <th>Nombres</th>
                    <th>Total</th>
                    <th>Descripción</th>
                    <th>Fecha de nacimiento</th>
                    <th>Género</th>
                    <th>Titular</th>
                    <th>Tipo crédito</th>
                </tr>
                <tr>
                    <td>${nombres.value}</td>
                    <td>${pagoTotal.value}</td>
                    <td>${descripcionPago.value}</td>
                    <td>${fechaNacimiento.value}</td>
                    <td>${genero.value}</td>
                    <td>${(titular.value) ? 'Si' : 'No'}</td>
                    <td>${tipoCredito.value}</td>
                </tr>
            </table>
        `;
    const divTabla = document.createElement('div');
    divTabla.innerHTML = tablaHtml;
    body.append(divTabla);
}







