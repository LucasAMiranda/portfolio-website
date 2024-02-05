function calcularValores(){
    let num1 = parseFloat(document.getElementById("txtValor1").value);
    let num2 = parseFloat(document.getElementById("txtValor2").value);
    let operacao =  document.getElementById("cbxOperacao").value;
    let resultado;

    if(operacao === "+"){
        resultado = num1 + num2;

    }else if(operacao === "-"){
        resultado = num1 - num2;

    }else if(operacao === "/"){
        resultado = num1 / num2;

    }else if(operacao === "*"){
        resultado = num1 * num2;
    }

    document.getElementById("txtResultado").innerHTML = resultado;
}