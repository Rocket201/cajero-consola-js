
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
        const monto = parseFloat(prompt("Ingrese la cantidad: "))
        if(isNaN(monto)|| monto <= 0 || monto > saldo){
            console.log("cantidad inválida o insuficiente")
        }else {
            const cuentaDestino = prompt("ingrese el numero de cuenta de destin")
                isValidStructureIBAN(cuentaDestino)
                console.log(`Ha transferido ${monto.toFixed(2)} € a la ${cuentaDestino}.`)
                saldo -= monto 
                mostrarSaldo()
        }
    }

    function iniciarSesion(){
        let pin = prompt("Ingrese su PIN: ")
        while (pin !== PIN_CORRECTO && intentosRestantes > 1){
            intentosRestantes--
            console.log(`PIN incorrecto. Le quedan ${intentosRestantes} intentos.`)
            pin = prompt("Ingrese su pin: ")
        } if(pin === PIN_CORRECTO){
            console.log("Inicio de sesion exitoso")
            mostrarSaldo()
            operacionesCajero()
        }else{
            console.log("pin incorrecto. El cajero se ha cerrado")
        }
    }

    function operacionesCajero(){

    }

    /**
     * Función que verifica si un valor posee una estructura valida de cuenta IBAN.
     * @param {String} strValue String que se desea revisar.
     * @returns {boolean} Indicando si cumple o no las restricciones
     */
    function isValidStructureIBAN(strValue){
        return /[a-zA-Z]{2}[0-9]{20}$/g.test(strValue);
    }// Fin de la función isValidStructureIBAN.