
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
        const retiro = parseFloat(prompt("Ingrese la cantidad: "))
        if(isNaN(retiro)|| retiro <= 0 || retiro > saldo){
            console.log("cantidad inválida o insuficiente")
        }else { saldo -= retiro 
                console.log(`Ha retirado ${retiro.toFixed(2)} €`)
                mostrarSaldo()
    }
    }
    function transferir(){
        
    }
    function iniciarSesion(){

    }
    function operacionesCajero(){

    }
