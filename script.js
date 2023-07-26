
function soma(val1,valor2){
    return val1+valor2;
}

function divisao(val1,valor2){
    return val1/valor2;
}

function subtracao(val1,valor2){
    return val1 - valor2;
}

function multiplicacao(val1,valor2){
    return val1*valor2;
}

function calculadora(operacao,val1,val2){
    if(operacao == '*' || operacao == 'x'){
        return multiplicacao(val1,val2);
    }
    else if(operacao == '-'){
        return subtracao(val1,val2);
    } 
    else if(operacao == '+'){
        return soma(val1,val2)
    } 
    else if(operacao == '/'){
        return divisao(val1,val2)
    }
    else{
        return 'Erro';
    }
}


function calcular(){
    var valor1 = parseInt(prompt("digite um valor"));
    var valor2 = parseInt(prompt("digite o segundo valor"));
    var operacaoUsuario = prompt("digite a operacao");
    alert(calculadora(operacaoUsuario,valor1,valor2))
}

