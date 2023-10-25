
    let saldo =  1000;
    const PIN_CORRECTO = "1234"
    let intentosRestantes = 3;

    function mostrarSaldo(){
        console.log( `su saldo actual es ${saldo.toFixed(2)} €`)
        
    }
    function depositar(){
        const deposito = parseFloat(prompt("ingrese la cantidad a depositar"))
        if(isNaN(deposito) || deposito <= 0){
            console.log("Cantidad inválida")
        }else{
            saldo += deposito;
            console.log(`se han depositado ${ deposito.toFixed(2)}.`)
            mostrarSaldo()
        }
    }
    function retirar(){

    }
    function transferir(){
        
    }
    function iniciarSesion(){

    }
    function operacionesCajero(){

    }
