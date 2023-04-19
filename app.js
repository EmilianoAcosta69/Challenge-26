//La app pide números hasta que pida cancelar.
//Cuando se cancela se deben mostrar todos los números ingresados juntos.
//y si se ingresa algo que no sea válido se debe mostrar un alert y seguir
//pidiendo un número.

let numerosIngresados = [];
let continuar = true ;

while(continuar){
    numero = parseInt(prompt('Ingrese un numero: '));

    if(isNaN(numero) || numero == null){
        alert('Usted no ingreso un numero valido. Vuelva a intentarlo...');
    }else if(numero <= 0 || numero >= 0){
        numerosIngresados.push(numero);
        alert(`numero ingresado: ${numero}.`);
    }
    continuar = confirm('Desea ingresar otro numero?');
}

console.log(`Numeros Ingresados: ${numerosIngresados}`);

