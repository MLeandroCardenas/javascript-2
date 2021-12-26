// console.log(document.f1);
// console.log(document.f1.campo1);

// const campoDos = document.querySelector('.campo2');

// console.log(campoDos);

function calcula(operacion) {
    let operando1 = document.calc.operando1.value;
    let operando2 = document.calc.operando2.value;
    let resultado = eval(operando1 + operacion + operando2);
    document.calc.resultado.value = resultado;
}

const x = document.calc.length;

console.log(x);

function validateSubmit() {
    if(document.calc.operando1.value == 0 || document.calc.operando2.value == 0 || document.calc.resultado.value == 0)  {
        alert('Debe hacer una operacion');
    } else {
        document.calc.submit();
        alert('Gracias');
    }
}

function validateReset() { document.calc.reset(); } 

function cambiaDefecto() {
    document.calc.operando1.defaultValue = "Por favor insertar algo";
}

function seleccionarFoco() {
    document.calc.operando1.focus();
    document.calc.operando1.select();
}
